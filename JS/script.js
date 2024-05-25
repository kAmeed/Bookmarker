content=document.getElementById('content');
siteName=document.getElementById('siteName');
siteUrl=document.getElementById('siteUrl');
submitBtn=document.getElementById('submitBtn');


var container;
if (localStorage.getItem('saved')!=null){
    container=JSON.parse(localStorage.getItem('saved'));
    displayBookmark();
}else{
    container=[];
}

function addBookmark(){
var bookmark={
    name:siteName.value,
    web:siteUrl.value
}
if (siteName.classList.contains('is-valid')&& siteUrl.classList.contains('is-valid')) {
    container.push(bookmark);
localStorage.setItem('saved',JSON.stringify(container));
displayBookmark();
clearBookmark();
}else{
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), { 
        keyboard: false 
      }) 
      myModal.show() 
}
}
//trial


function clearBookmark(){
    siteName.value='';
    siteUrl.value='';
    siteName.classList.remove('is-valid');
    siteUrl.classList.remove('is-valid');
}

function displayBookmark(){
    var cartona='';
for (let i = 0; i < container.length; i++) {
    cartona+=`<tr>
    <th scope="row" class="align-middle">${i+1}</th>
    <td class="align-middle">${container[i].name}</td>
    <td><a href="https://${container[i].web}"><button class="btn btn-success"><i class="fa-solid fa-eye me-1"></i>Visit</button></a></td>
    <td><a href="#"><button class="btn btn-danger" onclick="deleteBookmark(${i})" ><i class="fa-solid fa-trash me-1"></i>Delete</button></a></td>
  </tr>`
  content.innerHTML= cartona;
}    
}

function deleteBookmark(index){
    container.splice(index,1);
    localStorage.setItem('saved',JSON.stringify(container));
    displayBookmark();
}

function validateInput(element){

    var regex = {
        siteUrl:/^(www\.)?[a-z]{4,30}\.\w{2,20}$/,
        siteName:/^.{4,200}$/
    }

if (regex[element.id].test(element.value)) {
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
    element.nextElementSibling.classList.add('d-none');

}else{
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
    element.nextElementSibling.classList.remove('d-none');
}
}





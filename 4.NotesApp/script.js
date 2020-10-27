let addNewNote = document.getElementById('add-new-note');

let noteView = document.getElementById('notes-view');
const id = 'noteId';

showSavedNotes();
function showSavedNotes(){
   let getArr = getfromLS();
   if(getArr!=null)
    getArr.forEach(element => {
         showNotes(element);
    });
}

function showNotes(str=''){
  const newNote = document.createElement('div');
  newNote.classList.add('notes');
  newNote.innerHTML = `
    <div class="tools">
    <div id='numbering'>
      <p class='num'></p>
    </div>
    <div id='buttons'>
    <button id='editBtn'><i class="fas fa-edit"></i></button>
    <button><i class="fas fa-trash-alt" id="fa-trash-alt"></i></button>
    </div>
    </div>
    <textarea class='textArea'></textarea>
    <div id='mdiv'>
    </div>
    `;
  const textArea = newNote.querySelector('.textArea');
  const mdiv = newNote.querySelector('#mdiv');
  mdiv.innerHTML = marked(str);
  textArea.classList.add('hidden');
  textArea.addEventListener('input', (e) => {
    const { value } = e.target;
    mdiv.innerHTML = marked(value);
    console.log(textArea.value);
  });
  noteView.appendChild(newNote);
  const deleteBtn = newNote.querySelector('#fa-trash-alt');
  let numarr = document.querySelectorAll('.num');
  addNumbering(numarr);
  deleteBtn.addEventListener('click', () => {
    noteView.removeChild(newNote);
    let numarr = document.querySelectorAll('.num');
    addNumbering(numarr);
    removeToLS()
  });
  const editBtn = newNote.querySelector('#editBtn');
  editBtn.addEventListener('click', () => {
    if (editBtn.firstElementChild.style.color == 'red'){
        saveThistoLS(JSON.stringify(textArea.value),newNote);
    }
    if (textArea.classList.contains('hidden')) {
      editBtn.firstElementChild.style.color = 'red';
    }
    else {
      editBtn.firstElementChild.style.color = 'white';
    }
    textArea.classList.toggle('hidden');
    mdiv.classList.toggle('hidden');
    console.log('t');
  })
}
addNewNote.addEventListener('click',()=>{
   showNotes();
});

function getfromLS(){
  let arr = JSON.parse(localStorage.getItem(id));
  return arr?arr:null;
}
function addNumbering(numarr){
   for(let i=0;i<numarr.length;++i){
     numarr[i].innerText = i+1;
   }
}
function addToLS(index,stri){
    let arr = getfromLS();
    if(arr == null)
       arr = [];
    arr[index] = stri;
    localStorage.setItem(id,JSON.stringify(arr));
}
function removeToLS(id){
   localStorage.removeItem(id);
}
function saveThistoLS(str,node){
  str = remove(str);
   let arr = noteView.childNodes;
   arr.forEach((element,index)=>{
     console.log(element);
     console.log(node);
        if(node == element){
            console.log('Got It'+(index-3));
            addToLS(index-3,str);
        }
   })
}
function remove(str){
  let newstr = '';
  for(let i=0;i<str.length;++i){
    if(str.charAt(i)!= "\\" && str.charAt(i) !="\"")
      newstr += str.charAt(i);
  }
  return newstr;
}
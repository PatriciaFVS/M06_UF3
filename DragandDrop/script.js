let fitxersArray=[];
let fileId=0;
let events=['dragover','dragleave','drop'];

const dropArea = document.querySelector('.drop-area');
const dragDropText = document.querySelector('.drop-area h2');
const button = document.querySelector('.drop-area button');
const input = document.getElementById('input-file');
const preview = document.getElementById('preview');

events.forEach(evt=>{
    dropArea.addEventListener(evt,function (e){
        e.preventDefault();
    })
})

dropArea.addEventListener("dragover",function(){
    dropArea.classList.add('active');
    dragDropText.textContent='Drop to upload files'
})
dropArea.addEventListener("dragleave", function(){
    dropArea.classList.remove('active');
    dragDropText.textContent='Drag & Drop files'
})

dropArea.addEventListener("drop", function(e){
    fitxersArray=fitxersArray.concat(Array.from(e.dataTransfer.files))
    dropArea.classList.remove('active');
    dragDropText.textContent='Drag & Drop files'
    console.log (fitxersArray)
    showFiles()
})

function showFiles(){
    if(fitxersArray.length>0){
        preview.innerHTML = ''; 
        fitxersArray.forEach((file,index)=>{
            processFile(file,index)
        })
    }
}
function processFile(file,index){
    const validExtensions = ["image/jpeg", "image/jpg", "image/png","image/gif"];
    const docType = file.type;

    if(!(validExtensions.includes(docType))){
        alert("Aquest fitxer no es vàlid ha de ser un arxiu jpeg, jpg, png")
        fitxersArray.splice(index)
        
    }else{
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.addEventListener("load",function(){
            let fileurl=reader.result;
            let prev = `<div class="previewImage">
                            <img src="${fileurl}"/>
                            <span>${file.name}</span>
                            <span onclick="remove(${index})" class="material-symbols-outlined removeBtn">x</span>
                        </div>`;
            
            preview.innerHTML +=prev;
        })
    }
}

function remove(i){
    fitxersArray.splice(i, 1); 
    showFiles(); 
}

button.addEventListener("click", function(e){
    e.preventDefault();
    input.click();
});

input.addEventListener("change", function(){
    fitxersArray = fitxersArray.concat(Array.from(input.files));
    showFiles();
});

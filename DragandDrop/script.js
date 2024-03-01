let fitxersArray=[];

const dropArea = document.querySelector('.drop-area');
const dragDropText = document.querySelector('.drop-area h2');
const button = document.querySelector('.drop-area button');
const input = document.getElementById('input-file');
const preview = document.getElementById('preview');

dropArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    dropArea.classList.add('active');
    dragDropText.textContent = 'Release to Drop';
});
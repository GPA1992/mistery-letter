const botao = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');



function textCheck () {
    var str = document.getElementById('carta-texto');
    if (str.value == '') {
        cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.'  
    };
    if (!str.value.trim()) {
        cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.'  
      }   
}


function spanCreate () {
    var str = document.getElementById('carta-texto').value;
    const fraseSplit = str.split(' ');
    const quantidade = parseInt(fraseSplit.length);
    for (let i = 0; i < quantidade; i += 1) {
    const span = document.createElement('span');
    span.id = 'word';
    span.classList.add(styleGroup(), sizeGroup(), rotationGroup(), climbGroup())
    span.innerText= fraseSplit[i];
    cartaGerada.appendChild(span);
    }
} 


function styleGroup () {
    var style = ['newspaper', 'magazine1', 'magazine2'];
    const span = document.querySelectorAll('span');
    for (let i = 0; i < style.length; i += 1) {
    let getStyle = style[Math.floor(Math.random() * style.length)];
    return getStyle;
    }
}
styleGroup ();

function sizeGroup () {
    var style = ['medium', 'big', 'reallybig'];
    for (let i = 0; i < style.length; i += 1) {
    let getStyle = style[Math.floor(Math.random() * style.length)];
    return getStyle;   
}
}
sizeGroup ();

function rotationGroup () {
    var style = ['rotateleft', 'rotateright'];
    for (let i = 0; i < style.length; i += 1) {
    let getStyle = style[Math.floor(Math.random() * style.length)];
    return getStyle; 
}
}
rotationGroup();

function climbGroup () {
    var style = ['skewleft', 'skewright'];
    for (let i = 0; i < style.length; i += 1) {
    let getStyle = style[Math.floor(Math.random() * style.length)];
    return getStyle;

}
}
climbGroup()

function wordCount () {
    var str = document.getElementById('carta-texto').value;
    const fraseSplit = str.split(' ');
    const quantidade = parseInt(fraseSplit.length);
    const contador = document.getElementById('carta-contador');
    contador.innerText = quantidade;
}





botao.addEventListener('click', function () {
    cartaGerada.innerHTML = '';
    spanCreate();  
    textCheck(); 
    wordCount(); 
})

function changeClass () {
    const word = document.querySelectorAll('#word');
    for (let i = 0; i < word.length; i += 1) {
        word[i].className = '';
        word[i].classList.add(styleGroup(), sizeGroup(), rotationGroup(), climbGroup())
    }
    
} 
 
 
 cartaGerada.addEventListener('click', function(){
     changeClass();
 });






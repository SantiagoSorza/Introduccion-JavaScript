//window.read(()=>{
//    console.log(document.getElementById('titulo'));
//});
//document.getElementById("titulo").innerText = "Hola  Pepe!!!";
document.getElementById("titulo").innerHTML = "Hola <strong> Pepe </strong> !!!";
//document.getElementById("titulo").textContent += "Hola Pepe !!!";

//const saludar = ()=>{
//    alert("Hola Pepe!!!");
//};

const saludar = ()=>{
    const saludarMsg = document.getElementById('saludoMsg');
   // const msg = '<p> Hola pepe!! </p>';
   // saludoMsg.innerHTML = msg;
    const p = document.createElement('p');
    p.textContent = 'Hola pepe!!!';
    saludarMsg.innerHTML = ' '; //que no repite
    saludarMsg.appendChild(p);
//boton de borrar
    const button = document.createElement('button');
    button.textContent = 'Borrar msg';
    button.addEventListener('click', ()=>{
        saludarMsg.classList.remove('mostrarMsg');
        saludarMsg.innerHTML = ' ';
    });
    button.style.backgroundColor = '#0000ff';
    button.style.backgroundColor = '#ffffff';
    button.classList.add('ejemplo');
    //button.classList.add('uno');
    //button.classList.remove('ejemplo');
    saludarMsg.appendChild(button);
    saludoMsg.classList.add('mostrarMsg');
};


document.getElementById('saludarBtn').addEventListener('click', ()=>{
    saludar();
    
});

const Bor = ()=>{
    const saludarBor = document.getElementById("saludarBtn").innerHTML = ' ';
}
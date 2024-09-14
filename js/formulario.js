/** Definición de variables */

//un formulario
//const contactosFor = document.getElementById('contactoFormulario');

//todos los formularios
const contactoForm = document.forms["contactoForm"];

//Error
const nombreErrormsg = document.getElementById('nombreErrormsg');

//valiables

const nombreInp = contactoForm['nombreInp'];

const listContactos = document.getElementById('listaContactos');


/** Definición de metodos */

//Error
const validarNombre = (nombre)=>{
    nombreErrormsg.textContent = " ";
    if(nombre.length > 10){
        nombreErrormsg.textContent =('El nombre debe tener un maximo de 10 caracteres');
        return false;
}
return true;
};

const cargarContacto = (contacto) =>{
    const row = document.createElement('tr');

    const nombreCeld = document.createElement('td');
    nombreCeld.textContent = contacto.nombre;

    const emailCeld = document.createElement('td');
    emailCeld.textContent = contacto.email;

    const telCeld = document.createElement('td');
    telCeld.textContent = contacto.telefono;


    //boton de borrar
    const btnCeld = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = 'Borrar';
    button.addEventListener('click', ()=>{
     //row.innerHTML = ' '; borra el contenido
     row.remove(); //borra la distancia del contenido
    });
    button.style.backgroundColor = '#0000ff';
    button.style.backgroundColor = '#ffffff';
    btnCeld.appendChild(button);


    row.appendChild(nombreCeld);
    row.appendChild(emailCeld);
    row.appendChild(telCeld);
    
    row.appendChild(btnCeld);


    const tbody = listContactos.getElementsByTagName('tbody')[0];
    tbody.appendChild(row);
}

/** Definición de eventos */
contactoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = nombreInp.value
    if(validarNombre(nombre)){

        const contacto ={
            nombre: nombreInp.value,
            email: contactoForm['emailInp'].value,
            telefono: contactoForm['telefonoInp'].value,

        };
        cargarContacto(contacto);
       // contactoForm.reset();
        /* console.log(contactoForm['nombreInp'].value);
        console.log(contactoForm['emailInp'].value);
        console.log(contactoForm['telefonoInp'].value);*/
    }
});

nombreInp.addEventListener("keyup", () => { validarNombre(nombreInp.value); });
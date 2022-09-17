const users = [
    {
        id: 1,
        name: 'Erik',
        lastname: 'Pérez',
        email: 'erik@academlo.com',
        age: 29,
        gender: 'male'
    },
    {
        id: 2,
        name: 'Oscar',
        lastname: 'Islas',
        email: 'oscar2@academlo.com',
        age: 29,
        gender: 'male'
   },
   {
        id: 3,
        name: 'Georg',
        lastname: 'Berger',
        email: 'georg@academlo.com',
        age: 53,
        gender: 'male'
    },
    {
        id: 4,
        name: 'Luis',
        lastname: 'Hernandez',
        email: 'luis@gmail.com',
        age: 26,
        gender: 'male'
   },
   {
        id: 5,
        name: 'Georg',
        lastname: 'Berger',
        email: 'georg2@academlo.com',
        age: 17,
        gender: 'male'
    },
    {
        id: 6,
        name: 'Oscar',
        lastname: 'Lozada',
        email: 'oscar@academlo.com',
        age: 29,
        gender: 'male'
   },
   {
        id: 7,
        name: 'Daniela',
        lastname: 'Andrade',
        email: 'daniela@gmail.com',
        age: 15,
        gender: 'female'
   }
]

// Genera las filas de la tabla para mostrar los usuarios
function htmlRowsUsers() {
    const html = users.map(function(user) {
        return `<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                    <td>${user.gender == 'female' ? 'femenimo' : 'masculino'}</td>
                    <td>
                        <button class="btn btn-danger" onclick= "borrar()" >Eliminar</button>
                    </td>
                </tr>`
    })
    return html.join("")
}
// devuelve el body 
function getTablebody() {
    return document.getElementById('table-body')
}
// Imprime los usuarios en el documento
function () {
    const htmlDataUsers = htmlRowsUsers()
    const tableBody = getTablebody()
    tableBody.innerHTML = htmlDataUsers
}
// Obtiene los datos del nuevo usuario
function getNewUser () {
    const inputName = document.getElementById('input-name')
    const inputEmail = document.getElementById('input-email')
    const inputAge = document.getElementById('input-age')
    const inputGender = document.getElementById('select-age')
    const newUser = {
        name: inputName.value,
        email: inputEmail.value,
        age: inputAge.value,
        gender: inputGender.value
    }
    return newUser
}
// Imprime los datos de un usuario nuevo en el documento
function addUser() {
    const newUser = getNewUser()
    users.unshift(newUser)
    orderIDs()
    printUsers()
    document.getElementsByName('form')
    document.querySelector('form').reset()
    
}

// Asigna el id correcto a cada elemento
function orderIDs() {
    users.forEach(function(user, index) {
        user.id = index + 1
    })
    console.log('ordeno IDs ---');
}


// Llamadas al cargar la página
printUsers()
// Volvemos la función addUser parte del objeto window
window.addUser = addUser
window.filter = filter


// Ejercicios:
// Asingar el id del nuevo usuario
// Agregar el nuevo usuario al inicio
// Hacer que funcione el botón eliminar


function printM(mujeres) {
    const htmlDataUsers = mujeres
    const tableBody = getTablebody()
    tableBody.innerHTML = htmlDataUsers
} // Funcion para imprimir

function capturaonchange() {
    const changehtml = document.getElementById('select-filter').value // capturar valor del onchange
    console.log(changehtml)
    return changehtml
}

function paso2(){
    const paraFiltrar = capturaonchange()

    if ('academlo' === paraFiltrar) {

        // El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

        const filtrados = users.filter(e => e.email.indexOf("@academlo") != -1) //Linea para filtrar los mails
        console.log('onChange = ' + filtrados)
        return filtrados
    }

    if (paraFiltrar == 'female') {
        const filtrados = users.filter(e => e.gender == paraFiltrar) //Linea para filtrar las mujeres
        console.log('onChange = ' + filtrados)
        return filtrados
    }
    if(paraFiltrar == 'sort'){
        console.log('Entradno a ordenar por nombre')
        const filtrados = users.sort(function (a, b) { //Linea para oredenar por nombre
            if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
        } ) //Linea para filtrar las mujeres
        console.log('onChange = ' + filtrados)
        return filtrados
    }
    else{
        const htmlDataUsers = htmlRowsUsers()
        const tableBody = getTablebody()
        tableBody.innerHTML = htmlDataUsers
    }

}

function paso3 (a){
    const filtrados = a
    const html = filtrados.map(function(user) {
        return `<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                    <td>${user.gender == 'female' ? 'femenimo' : 'masculino'}</td>
                    <td>
                        <button class="btn btn-danger" onclick="borrar()">Eliminar</button>
                    </td>
                </tr>`
    }) // pongo los datos en html
    // console.log(html.join("")) 
    return html.join("") // Aqui los ordeno

}


function filter() {
    // alert('Agregamos un filtro')

    const lafilaF = paso3(paso2())  
    printM(lafilaF) // pinto en el DOM
}

function userId(e){ //capturar ID
    const btnUser = event.target
    const userId = parseInt(btnUser.parentElement.parentElement.childNodes[1].textContent)

    console.log('priemra etapa capturar el ID');
    console.log(userId);    
    return userId
}
function borrar() { //segunda etapa eliminar

    //let cosa = Array.from(users)
    users.splice(userId() -1,1)
    
    
    console.log('eliminando');
    //cosa.forEach(e => console.log(e))
    const lafilaF = paso3(users)
    users.forEach(e => console.log(e))
    orderIDs()
    const htmlDataUsers = htmlRowsUsers()
    const tableBody = getTablebody()
    tableBody.innerHTML = htmlDataUsers
   
}
window.filter = filter
window.borrar = borrar


// Ejercicio - aplicar filtros
// Hacer que funcione el botón eliminar
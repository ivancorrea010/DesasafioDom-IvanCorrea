let precioMasaTradicional = 250;
let precioMasaZanahoria = 300;
let precioMasaCalabaza = 350;
let precioMasaPapa = 325;
let precioPuntadeAgua = 400;
let precioBarraza = 375;

class Productos {
    constructor (nombre,precio,img){
        this.nombre = nombre;
        this.precio = precio;
        this.img = img
        this.precioIva;

    }

    getIva(){
        return this.precioIva = this.precio*1.21;
        }
    
}


const users = ['JUAN','IVAN'];

const masaTradicional = new Productos ('"Masa tradicional"',precioMasaTradicional,'img/MasaNormal.jpg');
const masaZanahoria = new Productos ('"Masa de zanahoria"', precioMasaZanahoria,'img/masaZanahoria.jpg');
const masaCalabaza = new Productos ('"Masa de calabaza"', precioMasaCalabaza, 'img/MasaCalabaza.jpg');
const masaPapa = new Productos ('"Masa de papa"', precioMasaPapa,'img/MasaPapa.png');
const quesoPuntaDeAgua = new Productos ('"Queso Punta de agua"', precioPuntadeAgua, 'img/QuesoCremoso.jpg');
const quesoBarraza = new Productos ('"Muzzarella Barraza"',precioBarraza, 'img/QuesoMuzzarella.jpg');

const arrayProductos = [masaTradicional,masaZanahoria,masaCalabaza,masaPapa,quesoPuntaDeAgua,quesoBarraza];
const arrayCarrito = [];


function saludar() {
    let nombre = ''

        do { 
        
        if (nombre !== '') {
            alert('El nombre ya esta en uso, por favor ingresa un nombre diferente')
        };
        
        nombre = prompt('Hola! Estás en PIDDA!, Ingresa un nombre de usuario para poder registrarte: ').toUpperCase();
        
        
       
    } while (users.includes(nombre) === true);
    
    users.push(nombre);
    console.log(users);
    
    alert('Hola '+nombre+'!, Bienvenido a PIDDA!, vamos a crear la pizza a tu medida.\nPresioná aceptar para elegir tus productos');

    


}



function masas(){
    let eleccionMasa = Number(prompt('Que tipo de masa vas a elegir?\n1)Masa tradicional: $'+masaTradicional.precio+' + IVA = $'+masaTradicional.getIva()+'\n2)Masa de calabaza: $'+masaCalabaza.precio+' + IVA = $'+masaCalabaza.getIva()+'\n3)Masa de zanahoria: $'+masaZanahoria.precio+' + IVA = $'+masaZanahoria.getIva()+'\n4)Masa de papa: $'+masaPapa.precio+' + IVA = $'+masaPapa.getIva()));


    while (eleccionMasa !== 1 && eleccionMasa !== 2 && eleccionMasa !== 3 && eleccionMasa !== 4) {
        alert('Su opcion es incorrecta, marque un numero del 1 al 4')
        eleccionMasa = Number(prompt('Que tipo de masa vas a elegir?\n1)Masa tradicional: $'+masaTradicional.precio+' + IVA = $'+masaTradicional.getIva()+'\n2)Masa de calabaza: $'+masaCalabaza.precio+' + IVA = $'+masaCalabaza.getIva()+'\n3)Masa de zanahoria: $'+masaZanahoria.precio+' + IVA = $'+masaZanahoria.getIva()+'\n4)Masa de papa: $'+masaPapa.precio+' + IVA = $'+masaPapa.getIva()));
    };
    
    switch (eleccionMasa) {
        case 1:
            {
                alert('Seleccionaste "Masa Tradicional"');
                return masaTradicional;
            }
        case 2:
            {
                alert('Seleccionaste "Masa de calabaza"');
                return masaCalabaza;
            }
        case 3:
            {
                alert('Seleccionaste "Masa de zanahoria"');
                return masaZanahoria;
            }
        case 4:
            {
                alert('Seleccionaste "Masa de papa"');
                return masaPapa;
            }
        
        }

}

function quesos() {
    
    let eleccionQueso = Number(prompt('Que tipo de queso vas a elegir?\n1)Queso cremoso "Punta de agua": $'+quesoPuntaDeAgua.precio+'+ IVA = $'+quesoPuntaDeAgua.getIva()+'\n2)Queso muzzarella "Barraza": $'+quesoBarraza.precio+'+ IVA = $'+quesoBarraza.getIva()));

    while (eleccionQueso !== 1 && eleccionQueso !== 2) {
        alert('Su opcion es incorrecta, marque un numero del 1 al 2')
        eleccionQueso = Number(prompt('Que tipo de queso vas a elegir?\n1)Queso cremoso "Punta de agua": $'+quesoPuntaDeAgua.precio+'+ IVA = $'+quesoPuntaDeAgua.getIva()+'\n2)Queso muzzarella "Barraza": $'+quesoBarraza.precio+'+ IVA = $'+quesoBarraza.getIva()));
    }
    
    switch (eleccionQueso) {
        case 1:
            {
                alert('Seleccionaste "Queso cremoso "Punta del agua""');
                return quesoPuntaDeAgua;
            }
        case 2:
            {
                alert('Seleccionaste "Queso muzzarella "Barraza""');
                return quesoBarraza;
            }
        
        }
}

function salsaDeTomate() {
    alert('Recordá que junto con tus anteriores productos te llegará de regalo nuestra salsa de tomate cocinada por nuestros grandes cocineros');
}


function agregarAlCarrito(masa,queso) {
    
    arrayCarrito.push(masa,queso);
    seguirComprando();

}

function seguirComprando() {
   let seguirCompra = confirm('Desea Seguir comprando?');

   if (seguirCompra === true) {
    
    masaElegida = masas();
    quesoElegido = quesos();
    salsaDeTomate();
    agregarAlCarrito(masaElegida,quesoElegido); 
    }else{
        let total = arrayCarrito.reduce((acc,item)=> acc + item.precioIva, 0 );        
        resumenDePago(total);
        console.log(arrayCarrito);
        console.log(total);
        
        
    }
    
}


function resumenDePago(total) {
    let aux = arrayCarrito.map((producto,index)=>`${index+1})Nombre: ${producto.nombre}\n Precio(con IVA): $${producto.precioIva}\n\n`).join(' ');

    alert(`Sus productos seleccionados son: \n${aux}+Salsa de Tomate de regalo\n\nSu precio total con iva incluido es de: $${total}`);

    let pagoTotal = Number(prompt(`Tu monto total a abonar es de: $${total} ,con cuanto vas a abonar? `));

        while (pagoTotal < total) {
            alert('El pago debe ser mayor al precio a abonar')
            pagoTotal = Number(prompt(`Tu monto total a abonar es de: $${total} ,con cuanto vas a abonar? `));
        }
        
        alert(`Tu vuelto es de: $${pagoTotal-total}\nMuchas gracias por tu compra! ;)`);
        
    interactuandoConDom()
        
}

function interactuandoConDom() {
   const contenedor = document.getElementById('etiquetaContenedor')

    arrayCarrito.forEach(producto =>{
        const section = document.createElement('section')
        section.classList.add('imgPromos')

        section.innerHTML += `
            <div>
                <img class="imgProducto" src=${producto.img}>
                <div class="divTituloProducto">
                    <h2>${producto.nombre}</h2>
                    <p>$${producto.precio}</p>
                </div>
            </div>

            `
         
            contenedor.appendChild(section)

            
    })

    
    
        
}

saludar();
let masaElegida = masas();
let quesoElegido = quesos();
salsaDeTomate();
agregarAlCarrito(masaElegida,quesoElegido);



var productos = [

    "laptop",
    "teclado",
    "lolsito",
    "jorgeBasta"

]


var carrito = JSON.parse(localStorage.getItem('Jorge'))
    if (localStorage.getItem('Jorge') == null){
        
        carrito = []

    }

var listado = []


function construirListado(){

    var listaProductos = document.createElement("div")

    let titulo = document.createElement("h2")
    titulo.textContent = "productos"
    listaProductos.appendChild(titulo)


    for (var i = 0; i < productos.length; i++ ){

        var laptop = document.createElement("button")

        laptop.onclick = function (){
            agregarProducto(this.textContent)
            
        }

        laptop.textContent = productos[i]
        listaProductos.appendChild(laptop)

    }

document.body.appendChild(listaProductos)
}


function construirDOMCarrito(){

    let carroViejo = document.getElementById("carrito")

    
    if (carroViejo){
        carroViejo.remove()
    }

    var listaCarrito = document.createElement("div")

    let tituloC = document.createElement("h3")
    tituloC.textContent = "Carrito"
    listaCarrito.appendChild(tituloC)

    listaCarrito.id = "carrito"

    for (var i = 0; i < carrito.length; i++ ){

        var laptop = document.createElement("p")
        laptop.textContent = carrito[i]
        listaCarrito.appendChild(laptop)

    }

document.body.appendChild(listaCarrito)

}

construirListado();
construirDOMCarrito();


function agregarProducto(producto){
    carrito.push(producto);

    localStorage.setItem('Jorge', JSON.stringify(carrito))

    construirDOMCarrito()
    
}


//jQuery


$("main h2").css("color" , "white");
$("main h2").css("background-color" , "blue");


$(document).ready(inicio)
function inicio (){
    
    $("#esconde").click(esconder);
    $("#muestra").click(mostrar);

}

function esconder(){
    $("#texto").fadeOut("slow");
}
function mostrar (){
    $("#texto").fadeIn("fast");
}



//AJAX

let urlCLIMA = "api.openweathermap.org/data/2.5/weather?q=Chubut&appid=3fa3cfd7778e196676fbea877e64d79f"


$.ajax({


    url:'http://api.openweathermap.org/data/2.5/weather',
    type:"GET",
    data:{
        q:'Esquel',
        appid: '3fa3cfd7778e196676fbea877e64d79f',
        dataType:"jsonp",
        units: 'metric'
    },
    success:function(data){

        let icono = data.weather[0].icon;
        let iconoURL = "http://openweathermap.org/img/w/" + icono + ".png";
        $("#icono").attr("src" , iconoURL);
        let contenido = `<div>
                            <p>${data.name}</p>                            
                            <p>${data.weather[0].main}</p>
                            <p>TEMP MAX: ${data.main.temp_max}</p>
                            <p>TEMP MIN: ${data.main.temp_min}</p>

                        </div>`;


        $("#caja").append(contenido);

    }

})
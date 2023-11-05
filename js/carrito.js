// Arreglo de productos disponibles
const productosDisponibles = [
    {
        id: 1,
        nombre: "Zapatillas adidas Running Duramo",
        precio: 64900,
        talles: [40, 41, 42],
        imagen : "https://media.solodeportes.com.ar/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-running-adidas-duramo-10-sl-azul-100010gw4080001-1.jpg",
    },
    {
        id: 2,
        nombre: "Zapatillas Racer Tr21 adidas",
        precio: 55500,
        talles: [40, 41, 42],
        imagen: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-adidas-racer-tr21-ni-o-ni-a-azul-100010gw6603001-1.jpg",
    },
    {
        id: 3,
        nombre: "Pelota Basquet N7 Molten Bg4500",
        precio: 107400,
        imagen: "https://i.pinimg.com/1200x/e7/7c/eb/e77ceb84c1d3a7942deb3a7ec0d2d427.jpg",
    },
    {
        id: 4,
        nombre: "Pelota Helicoidal 78 Sport 78 Tienda Oficial",
        precio: 17800,
        imagen: "https://www.digitalsport.com.ar/files/products/64a3352c94acd-625010-500x500.jpg",
    },
    {
        id: 5,
        nombre: "Pelota Afa22 Pro adidas Sport 78 Tienda Oficial",
        precio: 84500,
        imagen: "https://www.digitalsport.com.ar/files/products/64638860062a7-573040-500x500.jpg",
    },
    {
        id: 6,
        nombre: "Pelota Helicoidal 78 Sport 78 Tienda Oficial",
        precio: 17800,
        imagen: "https://www.digitalsport.com.ar/files/products/64a3352c94acd-625010-500x500.jpg",
    },
    {
        id: 7,
        nombre: "PELOTA AL HILM FINAL QATAR 2022",
        precio: 84500,
        imagen: "https://www.digitalsport.com.ar/files/products/6419c8e08b74f-578521-500x500.jpg",
    },
    {
        id: 8,
        nombre: "Pelota oficial Mundial 2022",
        precio: 39400,
        imagen: "https://static.eldiario.es/clip/53508088-b292-417d-a8dd-b8f8f1dc8439_source-aspect-ratio_default_0.jpg",
    },
    {
        id: 9,
        nombre: "Remera  De Los Pumas Granadero ",
        precio: 12900,
        talles: ["S", "M", "XL"],
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsAFk1X7DdKc6ky4YMuZYBSWLfhteg-0N0oFQmQwJ-gP1g5GjFocWrunQADfFCSxjfqso&usqp=CAU",
    },
    {
        id: 10,
        nombre: "Camiseta De Rugby Los Pumas Para Niños",
        precio: 15500,
        talles: ["S", "M", "XL"],
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/473/866/products/d1-5858f69f9e92ca249f16905804481007-240-0.jpg",
    },
    {
        id: 11,
        nombre: "Remera Essentials adidas",
        precio: 16400,
        talles: ["S", "M", "XL"],
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6PzbLhhshIy_bW2Ol9M80e6joTuMjQY3ig&usqp=CAU",
    },
    {
        id: 12,
        nombre: "Remera Urbana Nike Futura ",
        precio: 19900,
        talles: ["S", "M", "XL"],
        imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa73e312e/products/NI86F939-695/NI86F939-695-1.JPG",
    },
    {
        id: 13,
        nombre: "Camiseta Fútbol Puma Individualcup",
        precio: 15500,
        talles: ["S", "M", "XL"],
        imagen: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-de-futbol-puma-individualcup-negra-640020658289050-1.jpg",
    },
    {
        id: 14,
        nombre: "Remera Topper  Hombre",
        precio: 16400,
        talles: ["S", "M", "XL"],
        imagen: "https://www.bompie.com.ar/media/catalog/product/cache/1e7c11b43132c034d445b386916b52f7/2/-/2-165599_5.jpg",
    },
    
];


// Arreglo para almacenar los productos en el carrito
const carrito = [];
// Función para mostrar tarjetas de productos
function mostrarProductos() {
    const productosContainer = document.getElementById("productos");
    productosContainer.innerHTML = "";

    productosDisponibles.forEach((producto) => {
        const productoCard = document.createElement("div");
        productoCard.classList.add("producto-card");
        

        const productoImagen = document.createElement("img");
        productoImagen.src = producto.imagen;
        productoImagen.alt = producto.nombre;
        
        

        const productoNombre = document.createElement("h3");
        productoNombre.innerText = producto.nombre;
        productoNombre.classList.add("nombre");

        const productoPrecio = document.createElement("p");
        productoPrecio.innerText = `$${producto.precio}`;
        productoPrecio.classList.add("precio");

        const productoTalle = document.createElement("div");
        if (producto.talles) {
            const productoTituloTalle = document.createElement("h4");

            productoTituloTalle.innerText = "Talles";
            productoTalle.appendChild(productoTituloTalle);
            producto.talles.forEach((talle) => {
                const botonTalle = document.createElement("button");
                botonTalle.classList.add("boton-talle");
                botonTalle.innerText = talle;
                productoTalle.appendChild(botonTalle);
                productoTituloTalle.classList.add("talle")
            });
        }

        const botonAgregar = document.createElement("button");
        botonAgregar.innerText = "Agregar al carrito";
        botonAgregar.classList.add("boton-compra");
        botonAgregar.addEventListener("click", () =>
            agregarAlCarrito(producto)
        );

        productoCard.appendChild(productoImagen);
        productoCard.appendChild(productoNombre);
        productoCard.appendChild(productoPrecio);
        productoCard.appendChild(productoTalle);
        productoCard.appendChild(botonAgregar);

        productosContainer.appendChild(productoCard);
    });
}
// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    let cantidad;
    if (!carrito.includes(producto)) {
        cantidad = 1;
        producto.cantidad = cantidad;
        carrito.push(producto);
    } else {
        producto.cantidad++;
    }

    actualizarCarrito();
}

// Función para calcular el total
function calcularTotal() {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.precio * producto.cantidad;
    });
    return total;
}

// Función para actualizar la lista del carrito y el total
function actualizarCarrito() {
    const carritoContainer = document.getElementById("carrito");
    const totalContainer = document.getElementById("total");
    carritoContainer.innerHTML = "";

    carrito.forEach((producto) => {
        const li = document.createElement("li");
        li.innerText = `${producto.nombre} - $${producto.precio} (${producto.cantidad})`;
        carritoContainer.appendChild(li);
    });

    const total = calcularTotal();
    totalContainer.innerText = total;
}
// Otras funciones y código para gestionar el carrito (como agregar productos, calcular el total, etc.)...

// Inicializar la página
mostrarProductos();

// Arreglo de productos disponibles
const productosDisponibles = [
    {
        id: 1,
        nombre: "Zapatillas adidas Running Duramo",
        precio: 64900,
        talles: [40, 41, 42],
        imagen: "multimedia/zapatilla.jpeg",
    },
    {
        id: 2,
        nombre: "Zapatillas Racer Tr21 adidas",
        precio: 55500,
        talles: [40, 41, 42],
        imagen: "../multimedia/zapatilla1.jpeg",
    },
    {
        id: 3,
        nombre: "Pelota Basquet N7 Molten Bg4500",
        precio: 107400,
        imagen: "../multimedia/pelota1.jpg",
    },
    {
        id: 4,
        nombre: "Pelota Helicoidal 78 Sport 78 Tienda Oficial",
        precio: 17800,
        imagen: "../multimedia/voley.jpg",
    },
    {
        id: 5,
        nombre: "Pelota Afa22 Pro adidas Sport 78 Tienda Oficial",
        precio: 84500,
        imagen: "../multimedia/futbol.jpeg",
    },
    {
        id: 6,
        nombre: "Pelota Rwc 2023 Gilbert Sport 78 Tienda Oficial",
        precio: 39400,
        imagen: "../multimedia/rugby.jpeg",
    },
    {
        id: 7,
        nombre: "Remera  De Los Pumas Granadero ",
        precio: 12900,
        talles: ["S", "M", "XL"],
        imagen: "../multimedia/754406-1-279.jpg",
    },
    {
        id: 8,
        nombre: "Camiseta De Rugby Los Pumas Para Niños",
        precio: 15500,
        talles: ["S", "M", "XL"],
        imagen: "../multimedia/remeraniño.jpeg",
    },
    {
        id: 9,
        nombre: "Remera Essentials adidas",
        precio: 16400,
        talles: ["S", "M", "XL"],
        imagen: "../multimedia/images.jpeg",
    },
    {
        id: 10,
        nombre: "Remera Urbana Nike Futura ",
        precio: 19900,
        talles: ["S", "M", "XL"],
        imagen: "../multimedia/nike.jpeg",
    },
    {
        id: 11,
        nombre: "Camiseta Fútbol Puma Individualcup",
        precio: 15500,
        talles: ["S", "M", "XL"],
        imagen: "../multimedia/puma.jpeg",
    },
    {
        id: 12,
        nombre: "Remera Topper  Hombre",
        precio: 16400,
        talles: ["S", "M", "XL"],
        imagen: "../multimedia/remera-topper.jpg",
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
        li.innerText = `${producto.nombre} - $${producto.precio} x${producto.cantidad}`;
        carritoContainer.appendChild(li);
    });

    const total = calcularTotal();
    totalContainer.innerText = total;
}
// Otras funciones y código para gestionar el carrito (como agregar productos, calcular el total, etc.)...

// Inicializar la página
mostrarProductos();

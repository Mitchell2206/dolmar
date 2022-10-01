

const tiendas = [
    {
        id: "1",
        category: "campera",
        title: "Campera Negra",
        marca: "Zara",
        talle: "M",
        price: "11500",
        stock: "1",
        description:
            "Bellísima campera ZARA, totalmente nueva",
        img: "../img/campera.jpg",
    }, {
        id: "2",
        category: "vestido",
        title: "Vestido Jasmin Chebar",
        marca: "Jasmin Chebar",
        talle: "M",
        price: "17500",
        stock: "1",
        description:
            "Una verdadera bomba este vestido JAZMÍN CHEBAR, la falda es 100% cuero ovino y la pechera es viscosa, es totalmente nueva.",
        img: "../img/Rojo.jpg",
    }, {
        id: "3",
        category: "vestido",
        title: "Vestido Negro",
        marca: "Rapsodia",
        talle: "M",
        price: "6900",
        stock: "1",
        description:
            "Vestido RAPSODIA largo color negro.",
        img: "../img/vnegro.jpg",
    }, {
        id: "4",
        category: "Campera",
        title: "Campera THE NORTH FACE",
        marca: "The North Face",
        talle: "s",
        price: "10900",
        stock: "1",
        description:
            "Preciosa Campera THE NORTH FACE.",
        img: "../img/celeste.jpg",
    }, {
        id: "5",
        category: "Campera",
        title: "Campera Tigre RAPSODIA",
        marca: "Rapsodia",
        talle: "xs",
        price: "10000",
        stock: "1",
        description:
            "Campera Tigre RAPSODIA calentito con peluchito por dentro.",
        img: "../img/cammperon.jpg",
    }, {
        id: "6",
        category: "Tapado",
        title: "Tapado Negro",
        marca: "Rapsodia",
        talle: "m",
        price: "14000",
        stock: "1",
        description:
            "Hermoso tapado negro con detalles rojos.",
        img: "../img/tapado.jpg",
    },{
        id: "7",
        category: "Tapado",
        title: "Tapado Negro",
        marca: "Rapsodia",
        talle: "m",
        price: "14000",
        stock: "1",
        description:
            "Hermoso tapado negro con detalles rojos.",
        img: "../img/tapado.jpg",
    },{
        id: "8",
        category: "vestido",
        title: "vestido marron",
        marca: "Rapsodia",
        talle: "m",
        price: "12000",
        stock: "1",
        description:
            "Hermoso tapado negro con detalles rojos.",
        img: "../img/vmarron.jpg",
    },
];


const productosJson = JSON.stringify(tiendas);
localStorage.setItem("tiendas", productosJson)




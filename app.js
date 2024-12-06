const products = [
  { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
  { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
  { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
  { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
  { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
  { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];

//parte 1
const productosConDescuento = products.filter(producto => producto.discount > 0);
console.log("Productos con descuento:");
console.log(productosConDescuento);

//parte 2 

const preciosConDescuento = productosConDescuento.map(producto => {
    return {
        ...producto,
        priceAfterDiscount: producto.price - (producto.price * producto.discount/100)
    };
});

console.log("Precios con descuento:");
console.log(preciosConDescuento);

//parte 3 
const productosConStrockBajo = [];
for(let producto of products){
    if(producto.stock < 5){
        productosConStrockBajo.push(producto);
    }
}

console.log("Producto con Stock bajo");
console.log(productosConStrockBajo);


//paso 4

function actualizarStock(nombreProducto, cantidad){
    try {
        const producto = products.find(p  => p.name ===nombreProducto);
        if(!producto){
            throw new Error(`El producto ${nombreProducto} no existe`);
        }
        producto.stock += cantidad;
        console.log(`Stock actualizado para ${nombreProducto}. nuevo stock: ${producto.stock}`);
        
    } catch (error) {
        console.log(error.message);
        
    }
}


actualizarStock("Televisor", 5);
actualizarStock("Celular",10);

//paso 5

function resumenPorCategoria(){
    const resumen = {};

    for (let producto of products){
        const categoria = producto.category;
        if(!resumen[categoria]){
            resumen[categoria] = 0;
        }
        resumen[categoria]++;
    }
    return resumen;
}

console.log("resumen por categoria: ");
console.log(resumenPorCategoria());

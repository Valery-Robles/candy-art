// Seleccionamos todos los cuadros de los productos
const postres = document.querySelectorAll('.producto');

// Le indicamos a la página qué hacer cuando hagan clic en ellos
postres.forEach(postre => {
    postre.addEventListener('click', () => {
        alert('¡Qué delicia! Pronto habilitaremos el carrito de compras en Candy Art.');
    });
});

// Función del Recomendador de Postres
function recomendarPostre() {
    const sabor = prompt("¿Qué sabor prefieres hoy? (escribe: chocolate, fruta o vainilla)").toLowerCase();
    
    if (sabor === "chocolate") {
        alert("✨ Te recomendamos: Pastel Húmedo de Chocolate con cobertura de cacao 🍫");
    } else if (sabor === "fruta") {
        alert("✨ Te recomendamos: Tartaleta de Frutos Rojos e ilustraciones hechas a mano 🍓");
    } else if (sabor === "vainilla") {
        alert("✨ Te recomendamos: Cupcake de Vainilla y crema suave 🧁");
    } else {
        alert("✨ Te recomendamos probar nuestro icónico Pastel Red Velvet con música personalizada 🎶");
    }
}
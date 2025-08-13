function filtrar(categoria) {
    const juguetes = document.querySelectorAll(".juguete");

    juguetes.forEach(juguete => {
        if (categoria === "todos" || juguete.dataset.categoria === categoria) {
            juguete.style.display = "block";
        } else {
            juguete.style.display = "none";
        }
    });
}
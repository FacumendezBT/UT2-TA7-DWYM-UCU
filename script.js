const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    },
    {
        title: 'Book3',
        author: 'Name3'
    },
    {
        title: 'Book4',
        author: 'Name4'
    },
    {
        title: 'Book5',
        author: 'Name5'
    },
]

window.onload = () => {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', function () {
        getTheTitles(books);
    });
}

/**
 * Función que devuele e imprime en consola un nuevo arreglo que contenga sólamente los títulos de los libros guardados en el parámetro books.
 * @param {Array} books - Arreglo de objetos que contiene los libros.
 */
function getTheTitles(books) {
    const titles = books.map(book => book.title);
    console.log(titles);
    return titles;
}
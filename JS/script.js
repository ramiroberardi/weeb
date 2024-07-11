// carrousel menu
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

// carrousel eventos
let currentIndexEvento = 0;

function showSlideEvento(index) {
    const slidesEvento = document.querySelectorAll('.carousel-item-eventos');
    if (index >= slidesEvento.length) {
        currentIndexEvento = 0;
    } else if (index < 0) {
        currentIndexEvento = slidesEvento.length - 1;
    } else {
        currentIndexEvento = index;
    }
    const offsetEvento = -currentIndexEvento * 100;
    document.querySelector('.carousel-inner-eventos').style.transform = `translateX(${offsetEvento}%)`;
}

function nextSlideEvento() {
    showSlideEvento(currentIndexEvento + 1);
}

function prevSlideEvento() {
    showSlideEvento(currentIndexEvento - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlideEvento(currentIndexEvento);
});

// formulario comentarios 
document.addEventListener('DOMContentLoaded', () => {
    const comentarioForm = document.getElementById('comentarioForm');
    const comentariosList = document.getElementById('comentariosList');

    comentarioForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const comentario = document.getElementById('comentario').value;

        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('comentario');
        nuevoComentario.innerHTML = `<h3>${nombre}</h3><p>"${comentario}"</p>`;

        comentariosList.appendChild(nuevoComentario);

        comentarioForm.reset();
    });
});
// formulario 
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formMessages = document.getElementById('form-messages');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'your-server-endpoint', true); // Reemplaza 'your-server-endpoint' con la URL de tu servidor
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            formMessages.textContent = '¡Mensaje enviado con éxito!';
            formMessages.style.color = 'green';
            document.getElementById('contact-form').reset();
        } else if (xhr.readyState === 4) {
            formMessages.textContent = 'Hubo un error. Por favor, inténtalo de nuevo.';
        }
    };
    xhr.send(JSON.stringify({
        name: name,
        email: email,
        message: message
    }));
});

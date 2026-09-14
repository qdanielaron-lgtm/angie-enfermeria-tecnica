// MENÚ HAMBURGUESA
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// PREGUNTAS FRECUENTES - ACORDEÓN
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');
    
    // Cerrar otros acordeones
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allQuestions = document.querySelectorAll('.faq-question');
    
    allAnswers.forEach(item => {
        if (item !== answer) {
            item.classList.remove('active');
        }
    });
    
    allQuestions.forEach(item => {
        if (item !== element) {
            item.classList.remove('active');
        }
    });
    
    // Toggle actual
    answer.classList.toggle('active');
    element.classList.toggle('active');
}

// FORMULARIO DE CONTACTO
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const nombre = contactForm.querySelector('input[type="text"]').value;
        const telefono = contactForm.querySelector('input[type="tel"]').value;
        const servicio = contactForm.querySelector('select').value;
        const mensaje = contactForm.querySelector('textarea').value;
        
        // Crear mensaje para WhatsApp
        const whatsappMessage = `Hola Angie, soy ${nombre}. Mi teléfono es ${telefono}. Necesito: ${servicio}. Detalles: ${mensaje}`;
        const whatsappLink = `https://wa.me/51977679888?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Abrir WhatsApp
        window.open(whatsappLink, '_blank');
        
        // Limpiar formulario
        contactForm.reset();
        
        // Mostrar mensaje de confirmación
        alert('¡Tu mensaje será enviado por WhatsApp! 📱');
    });
}

// ANIMACIÓN DE SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// EFECTO DE SCROLL EN NAVBAR
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});

// ANIMACIÓN DE ELEMENTOS AL HACER SCROLL
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar tarjetas de servicios
document.querySelectorAll('.service-card, .control-item, .benefit, .step').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// VALIDACIÓN DE FORMULARIO
function validateForm() {
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '#e0e0e0';
        }
    });
    
    return isValid;
}

// INICIALIZAR
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Página cargada correctamente');
});

// FUNCIÓN PARA ABRIR WHATSAPP CON MENSAJE PERSONALIZADO
function sendWhatsAppMessage(message) {
    const phoneNumber = '51977679888';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// EXPORTAR PARA USO EXTERNO
window.sendWhatsAppMessage = sendWhatsAppMessage;
window.toggleFAQ = toggleFAQ;

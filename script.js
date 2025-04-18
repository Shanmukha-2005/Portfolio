// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Navbar active link
document.querySelectorAll('.navbar nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.navbar nav a.active').classList.remove('active');
        this.classList.add('active');
    });
});

// Resume modal
function openResumeModal() {
    document.getElementById('resume-modal').style.display = 'block';
}

function closeResumeModal() {
    document.getElementById('resume-modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = cultivatingdocument.getElementById('resume-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Navbar shadow on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Back to top button
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
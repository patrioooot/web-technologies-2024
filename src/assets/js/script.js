document.querySelectorAll('.project-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.project-tab').forEach(t => {
            t.classList.remove('active');
        });
        
        this.classList.add('active');
        
        document.querySelectorAll('.project-content').forEach(content => {
            content.classList.remove('active');
        });
        
        const projectId = this.getAttribute('data-project');
        document.getElementById(`project-${projectId}`).classList.add('active');
    });
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
        
        faqItem.classList.toggle('active');
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            const navMenu = document.getElementById('nav-menu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});

const burgerMenu = document.getElementById('burger-menu');
const closeMenu = document.getElementById('close-menu');
const navMenu = document.getElementById('nav-menu');

if (burgerMenu && navMenu) {
    burgerMenu.addEventListener('click', function() {
        navMenu.classList.add('active');
    });
}

if (closeMenu && navMenu) {
    closeMenu.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
}

document.addEventListener('click', function(e) {
    if (navMenu && burgerMenu && !navMenu.contains(e.target) && !burgerMenu.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});
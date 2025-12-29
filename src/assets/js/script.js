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
        }
    });
});
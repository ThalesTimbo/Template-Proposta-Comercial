// Interações e animações suaves do orçamento — Instituto ARCA

document.addEventListener('DOMContentLoaded', function () {
    // Fade-in das seções ao rolar a página
    const sections = document.querySelectorAll('.section, .cta-section');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Microinteração: leve zoom nas linhas das tabelas
    const tableRows = document.querySelectorAll('.pricing-table tbody tr');
    tableRows.forEach(row => {
        row.style.transition = 'transform 0.18s ease';
        row.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.01)';
        });
        row.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Acessibilidade: permitir focar cards com Tab
    const focusableCards = document.querySelectorAll('.version-card, .info-card, .maintenance-card');
    focusableCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('focus', () => {
            card.style.outline = '2px solid rgba(59,130,246,0.7)';
            card.style.outlineOffset = '2px';
        });
        card.addEventListener('blur', () => {
            card.style.outline = 'none';
        });
    });
});



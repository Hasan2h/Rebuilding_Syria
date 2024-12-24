// Initialize AOS with enhanced settings
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Enhanced smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced navbar scroll effect with blur
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.8)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.2)';
        nav.style.backdropFilter = 'blur(10px)';
    }
});

// Enhanced form submission with animation
const joinForm = document.querySelector('.join-form');
if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const button = this.querySelector('button');
        const input = this.querySelector('input');
        
        // Disable form
        button.disabled = true;
        input.disabled = true;
        
        // Add loading state
        button.innerHTML = '<span class="loading">جاري الإرسال...</span>';
        
        // Simulate submission
        setTimeout(() => {
            alert('شكراً لاهتمامك! سنتواصل معك قريباً.');
            joinForm.reset();
            
            // Reset button
            button.disabled = false;
            input.disabled = false;
            button.innerHTML = 'اشترك الآن';
        }, 1500);
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Add hover effect to guest cards
document.querySelectorAll('.guest-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
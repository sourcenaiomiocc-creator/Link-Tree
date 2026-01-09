// Add smooth animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click tracking (optional - can be used for analytics)
    const linkCards = document.querySelectorAll('.link-card');

    linkCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Add a ripple effect on click
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.pointerEvents = 'none';

            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - 10;
            const y = e.clientY - rect.top - 10;

            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.animation = 'ripple 0.6s ease-out';

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add dynamic gradient background animation
    let angle = 135;
    setInterval(() => {
        angle = (angle + 0.5) % 360;
        document.body.style.background = `linear-gradient(${angle}deg, #667eea 0%, #764ba2 100%)`;
    }, 50);

    // Add intersection observer for scroll animations
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

    // Observe all link cards
    linkCards.forEach(card => {
        observer.observe(card);
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

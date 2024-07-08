document.addEventListener('DOMContentLoaded', function() {
    // Counter animation
    const counters = [
        { id: 'projects-count', count: 5000 },
        { id: 'companies-count', count: 1000 },
        { id: 'awards-count', count: 20 },
        { id: 'employees-count', count: 700 },
        { id: 'years-count', count: 17 }
    ];

    counters.forEach(counter => {
        const el = document.getElementById(counter.id);
        animateCount(el, counter.count);
    });

    function animateCount(element, count) {
        let current = 0;
        const increment = count / 100;
        const interval = setInterval(() => {
            current += increment;
            element.textContent = Math.floor(current) + '+';
            if (current >= count) {
                clearInterval(interval);
                element.textContent = count + '+';
            }
        }, 20);
    }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');
});
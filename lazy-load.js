let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const src = element.getAttribute('data-src');
            element.src = src;
            observer.unobserve(entry.target);
        }
    });
});

const element = document.querySelector('iframe');

observer.observe(element);
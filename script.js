// =========================================================
// WEBPRO — SCRIPT.JS
// =========================================================

// -------- MOBILE MENU --------

function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const button = document.querySelector('.menu-toggle');
    const isOpen = nav.classList.toggle('active');
    button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

document.addEventListener('DOMContentLoaded', function () {

    const nav = document.getElementById('mainNav');
    const button = document.querySelector('.menu-toggle');

    // Close mobile menu when a nav link is clicked
    if (nav) {
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('active');
                if (button) button.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // -------- HEADER SHADOW ON SCROLL --------

    const header = document.getElementById('siteHeader');
    function updateHeader() {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    // -------- SCROLL REVEAL --------

    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) { revealObserver.observe(el); });

    // -------- ANIMATED STAT COUNTERS --------

    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;

            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'), 10);
            const duration = 1200;
            const start = performance.now();

            function tick(now) {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(eased * target);
                if (progress < 1) {
                    requestAnimationFrame(tick);
                } else {
                    el.textContent = target;
                }
            }
            requestAnimationFrame(tick);

            counterObserver.unobserve(el);
        });
    }, { threshold: 0.4 });

    counters.forEach(function (el) { counterObserver.observe(el); });

});

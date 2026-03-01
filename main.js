/* ============================================
   HORSKY RAJ - Custom JavaScript
   Penzion a Turisticke Centrum vo Vysokych Tatrach
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* --- Mobile Hamburger Menu --- */
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        var links = navLinks.querySelectorAll('a');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function () {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        }

        // Close menu on outside click
        document.addEventListener('click', function (e) {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    /* --- Lightbox for Gallery --- */
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightboxImg');
    var lightboxCaption = document.getElementById('lightboxCaption');
    var lightboxClose = document.getElementById('lightboxClose');
    var lightboxPrev = document.getElementById('lightboxPrev');
    var lightboxNext = document.getElementById('lightboxNext');
    var galleryTriggers = document.querySelectorAll('.lightbox-trigger');
    var currentIndex = 0;
    var visibleTriggers = [];

    function getVisibleTriggers() {
        visibleTriggers = [];
        var items = document.querySelectorAll('.gallery-item');
        for (var i = 0; i < items.length; i++) {
            if (!items[i].classList.contains('hidden')) {
                var trigger = items[i].querySelector('.lightbox-trigger');
                if (trigger) {
                    visibleTriggers.push(trigger);
                }
            }
        }
        return visibleTriggers;
    }

    function openLightbox(index) {
        var triggers = getVisibleTriggers();
        if (index < 0 || index >= triggers.length) return;
        currentIndex = index;
        var trigger = triggers[index];
        lightboxImg.src = trigger.getAttribute('href');
        lightboxImg.alt = trigger.getAttribute('data-alt') || '';
        lightboxCaption.textContent = trigger.getAttribute('data-alt') || '';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lightboxImg.src = '';
    }

    function navigateLightbox(direction) {
        var triggers = getVisibleTriggers();
        currentIndex = currentIndex + direction;
        if (currentIndex < 0) currentIndex = triggers.length - 1;
        if (currentIndex >= triggers.length) currentIndex = 0;
        openLightbox(currentIndex);
    }

    if (lightbox) {
        for (var i = 0; i < galleryTriggers.length; i++) {
            (function (idx) {
                galleryTriggers[idx].addEventListener('click', function (e) {
                    e.preventDefault();
                    var triggers = getVisibleTriggers();
                    for (var j = 0; j < triggers.length; j++) {
                        if (triggers[j] === galleryTriggers[idx]) {
                            openLightbox(j);
                            break;
                        }
                    }
                });
            })(i);
        }

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', function () { navigateLightbox(-1); });
        lightboxNext.addEventListener('click', function () { navigateLightbox(1); });

        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
                closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function (e) {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        });
    }

    /* --- Gallery Filter (Vanilla JS with jQuery animation enhancement) --- */
    var filterBtns = document.querySelectorAll('.filter-btn');
    var galleryItems = document.querySelectorAll('.gallery-item');

    if (filterBtns.length > 0 && galleryItems.length > 0) {
        for (var fi = 0; fi < filterBtns.length; fi++) {
            filterBtns[fi].addEventListener('click', function (e) {
                e.preventDefault();
                var filter = this.getAttribute('data-filter');

                /* Update active button */
                for (var bi = 0; bi < filterBtns.length; bi++) {
                    filterBtns[bi].classList.remove('active');
                }
                this.classList.add('active');

                /* Filter items */
                for (var gi = 0; gi < galleryItems.length; gi++) {
                    var item = galleryItems[gi];
                    var category = item.getAttribute('data-category');

                    if (filter === 'all' || category === filter) {
                        item.classList.remove('hidden');
                        item.style.display = '';
                        /* jQuery fade-in enhancement if available */
                        if (typeof jQuery !== 'undefined') {
                            jQuery(item).stop(true, true).css('opacity', 0).animate({opacity: 1}, 250);
                        }
                    } else {
                        if (typeof jQuery !== 'undefined') {
                            (function (el) {
                                jQuery(el).stop(true, true).animate({opacity: 0}, 200, function () {
                                    el.classList.add('hidden');
                                    el.style.display = 'none';
                                });
                            })(item);
                        } else {
                            item.classList.add('hidden');
                            item.style.display = 'none';
                        }
                    }
                }
            });
        }
    }

    /* --- Smooth Scrolling for Anchor Links --- */
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    /* --- Contact Form Validation --- */
    var submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function () {
            var isValid = true;
            var nameField = document.getElementById('formName');
            var emailField = document.getElementById('formEmail');
            var messageField = document.getElementById('formMessage');
            var nameError = document.getElementById('nameError');
            var emailError = document.getElementById('emailError');
            var messageError = document.getElementById('messageError');
            var formSuccess = document.getElementById('formSuccess');

            // Reset errors
            nameField.classList.remove('error');
            emailField.classList.remove('error');
            messageField.classList.remove('error');
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            formSuccess.style.display = 'none';

            // Validate name
            if (nameField.value.trim().length < 2) {
                nameField.classList.add('error');
                nameError.textContent = 'Prosim, zadajte svoje meno (minimalne 2 znaky).';
                isValid = false;
            }

            // Validate email
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value.trim())) {
                emailField.classList.add('error');
                emailError.textContent = 'Prosim, zadajte platnu e-mailovu adresu.';
                isValid = false;
            }

            // Validate message
            if (messageField.value.trim().length < 10) {
                messageField.classList.add('error');
                messageError.textContent = 'Prosim, napiste spravu (minimalne 10 znakov).';
                isValid = false;
            }

            // If valid, show success
            if (isValid) {
                formSuccess.style.display = 'block';
                nameField.value = '';
                emailField.value = '';
                messageField.value = '';
                var phoneField = document.getElementById('formPhone');
                if (phoneField) phoneField.value = '';
            }
        });
    }

    /* --- Lazy Loading Fallback (IntersectionObserver) --- */
    if ('IntersectionObserver' in window) {
        var lazyImages = document.querySelectorAll('img[loading="lazy"]');
        var imageObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });

        lazyImages.forEach(function (img) {
            imageObserver.observe(img);
        });
    }

    /* --- Scroll-to-top visibility (optional enhancement) --- */
    var header = document.querySelector('.header');
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
        var currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.25)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        }
        lastScroll = currentScroll;
    });

});

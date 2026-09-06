document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Navigation & Mobile Menu Logic
    // ==========================================
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Sticky Header Effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.remove('py-4');
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('py-2');
                navbar.classList.add('py-4');
            }
        });
    }

    // Mobile Menu Toggle
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });
    }

    // ==========================================
    // 2. Activity Filtering Logic (Index Page)
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const activityCards = document.querySelectorAll('.activity-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('bg-ocean-teal', 'text-white');
                    b.classList.add('text-ocean-teal');
                });
                btn.classList.add('bg-ocean-teal', 'text-white');
                btn.classList.remove('text-ocean-teal');

                const filterValue = btn.getAttribute('data-filter');

                activityCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                        card.style.display = 'block';
                        card.classList.remove('animate-fade-in-up');
                        void card.offsetWidth; 
                        card.classList.add('animate-fade-in-up');
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('animate-fade-in-up');
                    }
                });
            });
        });
        filterBtns[0].click();
    }

    // ==========================================
    // 3. Booking Form Logic (Works on all pages)
    // ==========================================
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name') ? document.getElementById('name').value : '';
            const date = document.getElementById('date') ? document.getElementById('date').value : 'Not Specified';
            const guests = document.getElementById('guests') ? document.getElementById('guests').value : '';
            
            let activity = 'General Inquiry';
            const hiddenActivity = document.getElementById('hidden-activity-name');

            if (hiddenActivity && hiddenActivity.value) {
                activity = hiddenActivity.value;
            }

            const message = `*New Booking Inquiry* %0A%0A*Activity:* ${activity}%0A*Name:* ${name}%0A*Date:* ${date}%0A*Guests:* ${guests}%0A%0APlease confirm availability.`;
            
            window.open(`https://wa.me/919083938733?text=${message}`, '_blank');
        });
    }

    // ==========================================
    // 4. Contact Form Logic (Home Page)
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const phone = document.getElementById('contact-phone').value;
            const interest = document.getElementById('contact-interest').value;
            const messageText = document.getElementById('contact-message').value;

            const message = `*New Website Inquiry* %0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Interest:* ${interest}%0A*Message:* ${messageText}`;
            window.open(`https://wa.me/919083938733?text=${message}`, '_blank');
        });
    }

    // ==========================================
    // 5. Typing Animation Logic
    // ==========================================
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const phrases = ["Experience Luxury in", "Escape to Nature in", "Unveil the Magic of", "Create Your Story in"];
        let phraseIndex = 0, charIndex = 0, isDeleting = false;
        
        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, charIndex);
                charIndex--;

                if (charIndex < 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    setTimeout(typeEffect, 500); 
                } else {
                    setTimeout(typeEffect, 50); 
                }
            } else {
                typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentPhrase.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, 2000); 
                } else {
                    setTimeout(typeEffect, 100); 
                }
            }
        }
        typeEffect();
    }
});

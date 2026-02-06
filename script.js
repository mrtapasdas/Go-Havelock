document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Navigation & Mobile Menu Logic
    // ==========================================
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Sticky Header Effect
    // Adjusts padding when scrolling. Background is fixed in HTML (bg-ocean-teal).
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.remove('py-4');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('py-2');
            navbar.classList.add('py-4');
        }
    });

    // Mobile Menu Toggle
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        // FIX: Close Mobile Menu when any link inside it is clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });
    }

    // ==========================================
    // 2. Activity Filtering Logic
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const activityCards = document.querySelectorAll('.activity-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Reset all buttons to default style
                filterBtns.forEach(b => {
                    b.classList.remove('bg-ocean-teal', 'text-white');
                    b.classList.add('text-ocean-teal');
                });
                // Highlight clicked button
                btn.classList.add('bg-ocean-teal', 'text-white');
                btn.classList.remove('text-ocean-teal');

                const filterValue = btn.getAttribute('data-filter');

                // Show/Hide cards based on category
                activityCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                        card.style.display = 'block';
                        // Re-trigger animation
                        card.classList.remove('animate-fade-in-up');
                        void card.offsetWidth; // Force reflow
                        card.classList.add('animate-fade-in-up');
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('animate-fade-in-up');
                    }
                });
            });
        });
        
        // Initialize with "All" selected
        filterBtns[0].click();
    }

    // ==========================================
    // 3. Contact Form Logic (Home Page)
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value;
            const phone = document.getElementById('contact-phone').value;
            const interest = document.getElementById('contact-interest').value;
            const messageText = document.getElementById('contact-message').value;

            // Construct WhatsApp Message
            const message = `*New Website Inquiry* %0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Interest:* ${interest}%0A*Message:* ${messageText}`;
            
            // Open WhatsApp
            window.open(`https://wa.me/919531671758?text=${message}`, '_blank');
        });
    }

    // ==========================================
    // 4. Booking Form Logic (Activity Detail Page)
    // ==========================================
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const guests = document.getElementById('guests').value;
            const activity = document.getElementById('activity-title') ? document.getElementById('activity-title').innerText : 'General Inquiry';

            const message = `*New Booking Inquiry* %0A%0A*Activity:* ${activity}%0A*Name:* ${name}%0A*Date:* ${date}%0A*Guests:* ${guests}%0A%0APlease confirm availability.`;
            
            window.open(`https://wa.me/919531671758?text=${message}`, '_blank');
        });
    }

    // ==========================================
    // 5. Typing Animation Logic (Hero Section)
    // ==========================================
    const typingElement = document.getElementById('typing-text');
    
    if (typingElement) {
        const phrases = [
            "Unforgettable Adventures in", 
            "Discover Pure Paradise in", 
            "Experience Luxury in"
        ];
        
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                // Deleting text
                typingElement.textContent = currentPhrase.substring(0, charIndex);
                charIndex--;

                if (charIndex < 0) {
                    // Finished deleting, move to next phrase
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    setTimeout(typeEffect, 500); // Small pause before typing next
                } else {
                    setTimeout(typeEffect, 50); // Faster deleting speed
                }
            } else {
                // Typing text
                typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentPhrase.length) {
                    // Finished typing, wait before deleting
                    isDeleting = true;
                    setTimeout(typeEffect, 2000); // Wait 2 seconds
                } else {
                    setTimeout(typeEffect, 100); // Normal typing speed
                }
            }
        }
        
        // Start the animation loop
        typeEffect();
    }
});

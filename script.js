document.addEventListener('DOMContentLoaded', () => {

    // --- Contact Page Form Logic ---
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
            
            // Your WhatsApp Number
            const whatsappUrl = `https://wa.me/919531671758?text=${message}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }
    
    // --- Navigation Logic ---
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Sticky Header Effect (Modified: Background is now fixed in HTML)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Optional: Shrink padding on scroll
            navbar.classList.remove('py-4');
            navbar.classList.add('py-2');
        } else {
            // Optional: Expand padding at top
            navbar.classList.remove('py-2');
            navbar.classList.add('py-4');
        }
    });

    // Mobile Menu Toggle
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    // FIX: Close Mobile Menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });

    // --- Activity Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const activityCards = document.querySelectorAll('.activity-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                filterBtns.forEach(b => {
                    b.classList.remove('bg-ocean-teal', 'text-white');
                    b.classList.add('text-ocean-teal');
                });
                // Add active class to clicked
                btn.classList.add('bg-ocean-teal', 'text-white');
                btn.classList.remove('text-ocean-teal');

                const filterValue = btn.getAttribute('data-filter');

                activityCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                        card.style.display = 'block';
                        // Add animation for smooth reveal
                        card.classList.add('animate-fade-in-up');
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('animate-fade-in-up');
                    }
                });
            });
        });
        
        // Trigger "All" by default to set initial state styling
        filterBtns[0].click();
    }

    // --- Booking Form to WhatsApp ---
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const guests = document.getElementById('guests').value;
            const activity = document.getElementById('activity-title') ? document.getElementById('activity-title').innerText : 'General Inquiry';

            const message = `*New Booking Inquiry* %0A%0A*Activity:* ${activity}%0A*Name:* ${name}%0A*Date:* ${date}%0A*Guests:* ${guests}%0A%0APlease confirm availability.`;
            
            const whatsappUrl = `https://wa.me/919531671758?text=${message}`; // Replace with real number
            
            window.open(whatsappUrl, '_blank');
        });
    }
});

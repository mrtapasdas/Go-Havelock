document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navigation Logic ---
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Sticky Header Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-ocean-teal/90', 'backdrop-blur-md', 'shadow-lg', 'py-2');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('bg-ocean-teal/90', 'backdrop-blur-md', 'shadow-lg', 'py-2');
            navbar.classList.add('py-4');
        }
    });

    // Mobile Menu Toggle
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
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

    // --- Modal Logic ---
    window.openModal = function() {
        document.getElementById('info-modal').classList.remove('hidden');
    }

    window.closeModal = function() {
        document.getElementById('info-modal').classList.add('hidden');
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

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

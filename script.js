document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 0. ACTIVITIES DATABASE (The Content Source)
    // ==========================================
    const activitiesDB = {
        'scuba': {
            title: "Scuba Diving (Shore/Boat)",
            price: "3,500",
            unit: "/ person",
            duration: "3 Hours",
            location: "Nemo Reef / Tribe Gate",
            type: "Water Adventure",
            img: "https://images.unsplash.com/photo-1544551763-46a875657c37?q=80&w=2070",
            description: "Experience the thrill of breathing underwater in one of the world's most beautiful archipelagos. This program is specifically designed for beginners and non-swimmers. You will be accompanied by a dedicated PADI certified instructor who will guide you through the vibrant coral reefs.",
            itinerary: [
                "Hotel pickup and transfer to the dive center.",
                "20-minute training session on breathing techniques and hand signals.",
                "Gear up (Wetsuit, BCD, Fins, Mask).",
                "Assisted underwater dive for 30-45 minutes.",
                "Complimentary underwater photos and video session.",
                "Drop back to hotel."
            ],
            carry: ["Swimwear or t-shirt/shorts", "Towel", "Sunscreen", "Pendrive/Phone for photos"]
        },
        'snorkeling': {
            title: "Guided Snorkeling Trip",
            price: "1,000",
            unit: "/ person",
            duration: "2 Hours",
            location: "Elephant Beach",
            type: "Water Sport",
            img: "https://images.unsplash.com/photo-1544551763-46a875657c37?auto=format&fit=crop&w=1200",
            description: "Float effortlessly above the colorful reef gardens of Elephant Beach. Our guided snorkeling trips ensure you see the best marine life while staying safe on the surface. Perfect for families and children.",
            itinerary: ["Boat ride to snorkeling spot", "Briefing on using the snorkel mask", "Guided snorkeling session (30 mins)", "Refreshments"],
            carry: ["Swimwear", "Towel", "Water Bottle", "Sunglasses"]
        },
        'seawalk': {
            title: "Undersea Walking",
            price: "3,500",
            unit: "/ person",
            duration: "45 Mins",
            location: "Elephant Beach",
            type: "Unique Adventure",
            img: "https://images.unsplash.com/photo-1533577116850-9cc66dad8a95?auto=format&fit=crop&w=1200",
            description: "Walk on the ocean floor just like you walk on land! Wearing a specially designed helmet that supplies oxygen, you can witness the marine life up close without any swimming skills or heavy gear.",
            itinerary: ["Boat transfer to Sea Walk pontoon", "Helmet fitting and safety briefing", "Descent to ocean floor (6-7 meters)", "20 minutes of sea walking", "Photos included"],
            carry: ["Change of clothes", "Towel"]
        },
        'parasailing': {
            title: "Parasailing Adventure",
            price: "3,000",
            unit: "/ person",
            duration: "10-15 Mins",
            location: "Elephant Beach / Kalapathar",
            type: "Air Adventure",
            img: "https://images.unsplash.com/photo-1606036881269-79a4d852db2b?auto=format&fit=crop&w=1200",
            description: "Get a bird's eye view of the stunning Havelock coastline. You will be towed behind a speed boat while attached to a parachute, soaring high above the turquoise waters.",
            itinerary: ["Speed boat transfer to parasailing station", "Safety harness fitting", "Launch from boat deck", "Air time approx 3-5 minutes", "Safe landing on boat"],
            carry: ["Comfortable clothes", "Sunglasses", "Camera"]
        },
        'kayak': {
            title: "Night Kayaking (Bioluminescence)",
            price: "2,500",
            unit: "/ person",
            duration: "2 Hours",
            location: "Mangroves",
            type: "Night Activity",
            img: "https://images.unsplash.com/photo-1541829629-9e8c459d9d4a?auto=format&fit=crop&w=1200",
            description: "Paddle through the silent mangroves under a canopy of stars. As you disturb the water, watch it glow with magical blue bioluminescence—a natural phenomenon you have to see to believe.",
            itinerary: ["Training on paddling techniques", "Guided tour through mangrove channels", "Star gazing break", "Experience bioluminescence (subject to moon phase)"],
            carry: ["Mosquito repellent", "Water bottle", "Quick-dry clothes"]
        },
        'course': {
            title: "PADI Diving Courses",
            price: "15,000",
            unit: "/ course starts at",
            duration: "2-4 Days",
            location: "Dive Center",
            type: "Certification",
            img: "https://images.unsplash.com/photo-1582269222409-90696eb646f8?auto=format&fit=crop&w=1200",
            description: "Transform from a beginner to a certified diver. We offer PADI Open Water, Advanced Open Water, and Rescue Diver courses. Includes theory, confined water training, and open water dives.",
            itinerary: ["Day 1: Theory & Pool Session", "Day 2: 2 Open Water Dives (12m)", "Day 3 (for OWD): 2 Open Water Dives (18m) & Exam", "PADI Certification Card"],
            carry: ["Note pad", "Swimwear", "Medical declaration"]
        },
        'hopping': {
            title: "Private Island Hopping",
            price: "18,000",
            unit: "/ boat (max 6 pax)",
            duration: "Full Day",
            location: "Neil / Peel / Wilson",
            type: "Luxury Tour",
            img: "https://images.unsplash.com/photo-1596423985392-32b047514782?auto=format&fit=crop&w=1200",
            description: "Rent a private speed boat and explore the uninhabited islands around Havelock. Visit Neil Island, the lighthouse, or pristine sandbars that are inaccessible by regular ferries.",
            itinerary: ["Private boat charter", "Customized itinerary", "Snorkeling stops at untouched reefs", "Picnic lunch (on request)"],
            carry: ["Sunscreen", "Hats", "Sunglasses", "Snacks"]
        },
        'fishing': {
            title: "Game Fishing / Angling",
            price: "12,000",
            unit: "/ boat",
            duration: "4 Hours",
            location: "Deep Sea",
            type: "Adventure",
            img: "https://images.unsplash.com/photo-1544098939-2d174668db78?auto=format&fit=crop&w=1200",
            description: "Join our expert anglers for a deep sea fishing expedition. Trolling, popping, or jigging—we provide professional equipment and guidance to help you catch GT, Tuna, or Barracuda.",
            itinerary: ["Departure at 5 AM or 2 PM", "Travel to fishing grounds", "Fishing session with guidance", "Keep your catch (optional)"],
            carry: ["Hat", "Sunscreen", "Sea sickness pills"]
        },
        'dinner': {
            title: "Candle Light Dinner",
            price: "4,000",
            unit: "/ couple",
            duration: "3 Hours",
            location: "Beach No. 3 / 5",
            type: "Romantic",
            img: "https://images.unsplash.com/photo-1515443961218-a51367130e69?auto=format&fit=crop&w=1200",
            description: "Celebrate love with a private candle light dinner on the beach. Enjoy a 4-course meal, flower decoration, and the soothing sound of waves under the moonlight.",
            itinerary: ["Reserved beachside table", "Flower decoration & candles", "Welcome drink", "4-course meal (Veg/Non-Veg)", "Personal butler service"],
            carry: ["Smart casuals", "Camera"]
        },
        'cruise': {
            title: "Dinner Cruise Party",
            price: "3,000",
            unit: "/ person",
            duration: "3 Hours",
            location: "Port Blair / Havelock",
            type: "Luxury / Party",
            img: "https://images.unsplash.com/photo-1545167496-c0d5885ee067?auto=format&fit=crop&w=1200",
            description: "A luxury floating experience. Enjoy live music, a lavish buffet dinner, and an open deck party as you sail through the islands under the stars.",
            itinerary: ["Boarding at 6:30 PM", "Live music/DJ performance", "Sailing around the bay", "Buffet dinner served", "Return to jetty"],
            carry: ["Party wear", "Camera"]
        },
        'submarine': {
            title: "Coral Safari (Semi-Submarine)",
            price: "2,500",
            unit: "/ person",
            duration: "2 Hours",
            location: "Elephant Beach",
            type: "Family Friendly",
            img: "https://images.unsplash.com/photo-1585822765324-4235226c6d0d?auto=format&fit=crop&w=1200",
            description: "Perfect for kids and elders. Sit in an air-conditioned cabin with large glass windows that is submerged underwater, offering a diver's view of the reef without getting wet.",
            itinerary: ["Transfer to the submarine", "45-minute underwater viewing", "Fish feeding observation", "Return to shore"],
            carry: ["Comfortable clothes", "Camera"]
        },
        'speedboat': {
            title: "Speed Boat Ride",
            price: "1,000",
            unit: "/ person",
            duration: "15 Mins",
            location: "Water Sports Complex",
            type: "Thrill",
            img: "https://images.unsplash.com/photo-1564353597449-7e7745778a70?auto=format&fit=crop&w=1200",
            description: "Feel the wind in your hair with a high-speed boat ride. A quick adrenaline fix that cuts through the waves and offers sharp turns and splashes.",
            itinerary: ["Life jacket fitting", "High speed run", "Sharp turns and maneuvers", "Return to jetty"],
            carry: ["Waterproof pouch for phone", "Sunglasses"]
        },
        'stargazing': {
            title: "Guided Stargazing",
            price: "1,500",
            unit: "/ person",
            duration: "1 Hour",
            location: "Dark Sky Zone",
            type: "Educational",
            img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200",
            description: "The Andamans offer some of the darkest skies in India. Look through a powerful telescope to see Jupiter's rings, nebulas, and galaxies, guided by an astronomy expert.",
            itinerary: ["Travel to dark location", "Introduction to constellations", "Telescope viewing session", "Mythology and science stories"],
            carry: ["Light jacket (can be breezy)", "Mosquito repellent"]
        },
        'resort': {
            title: "Luxury Resort Booking",
            price: "5,000",
            unit: "/ night starts from",
            duration: "Per Night",
            location: "Island Wide",
            type: "Accommodation",
            img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200",
            description: "Get the best deals on premium properties like Taj Exotica, Barefoot, Havelock Island Beach Resort, and more. We offer corporate rates not available online.",
            itinerary: ["Consultation on budget", "Selection of property", "Booking confirmation voucher", "Special honeymoon inclusions (optional)"],
            carry: ["ID Proofs"]
        },
        'cabs': {
            title: "Car Rental & Cab Services",
            price: "800",
            unit: "/ trip starts from",
            duration: "Flexible",
            location: "Island Wide",
            type: "Transport",
            img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200",
            description: "Clean, air-conditioned private cabs for jetty pickups, beach drops, or full-day disposal. Reliable drivers who know the island inside out.",
            itinerary: ["Pick up from Jetty/Hotel", "Drop to Radhanagar/Kalapathar", "Waiting charges applicable for return trips"],
            carry: ["Details of pick-up location"]
        },
        'ferry': {
            title: "Ferry Ticket Booking",
            price: "200",
            unit: " service fee",
            duration: "Instant",
            location: "Inter-Island",
            type: "Transport",
            img: "https://images.unsplash.com/photo-1534959345938-23f26ac4352a?auto=format&fit=crop&w=1200",
            description: "Skip the queues and let us book your Makruzz, Nautika, or Green Ocean ferry tickets. We ensure you get the best seats and window views.",
            itinerary: ["Select Ferry (Makruzz/Nautika)", "Provide passenger details", "Receive PDF ticket on WhatsApp"],
            carry: ["ID Proofs", "Soft copy of ticket"]
        },
        'events': {
            title: "Event Hosting & Weddings",
            price: "Custom",
            unit: " Package",
            duration: "Custom",
            location: "Beach Resorts",
            type: "Service",
            img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200",
            description: "Planning a beach wedding or a corporate retreat? We handle logistics, decoration, catering, and permissions to ensure a flawless event in paradise.",
            itinerary: ["Initial Consultation", "Venue Selection", "Decor & Food tasting", "Event Management"],
            carry: ["Guest List"]
        },
        'food': {
            title: "Food Ordering & Delivery",
            price: "500",
            unit: " min order",
            duration: "45 Mins",
            location: "Island Wide",
            type: "Service",
            img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200",
            description: "Craving fresh seafood, pizza, or authentic Indian curry? We deliver from the best rated restaurants in Havelock directly to your hotel room.",
            itinerary: ["Send order via WhatsApp", "Confirmation & Payment", "Delivery to hotel reception"],
            carry: ["Cash/UPI"]
        }
    };

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
    // 2. Activity Filtering Logic (Only on Index Page)
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
    // 3. Dynamic Activity Detail Logic (Only on Details Page)
    // ==========================================
    const urlParams = new URLSearchParams(window.location.search);
    const activityId = urlParams.get('id');
    const detailTitle = document.getElementById('detail-title');

    if (activityId && detailTitle && activitiesDB[activityId]) {
        const data = activitiesDB[activityId];

        // Populate elements
        document.getElementById('detail-title').innerText = data.title;
        document.getElementById('detail-price').innerText = "₹" + data.price;
        document.getElementById('detail-price-unit').innerText = data.unit;
        document.getElementById('detail-duration').innerText = data.duration;
        document.getElementById('detail-location').innerText = data.location;
        document.getElementById('detail-type').innerText = data.type;
        document.getElementById('detail-desc').innerText = data.description;
        document.getElementById('detail-img').src = data.img;
        document.getElementById('breadcrumb-title').innerText = data.title;
        document.getElementById('hidden-activity-name').value = data.title;

        // Populate Itinerary List
        const itineraryList = document.getElementById('detail-itinerary');
        itineraryList.innerHTML = ''; // Clear loading text
        data.itinerary.forEach(item => {
            const li = document.createElement('li');
            li.className = "flex items-start gap-3";
            li.innerHTML = `<i class="fas fa-check-circle text-ocean-teal mt-1"></i> <span>${item}</span>`;
            itineraryList.appendChild(li);
        });

        // Populate What to Carry
        const carryList = document.getElementById('detail-carry');
        carryList.innerHTML = '';
        data.carry.forEach(item => {
            const li = document.createElement('li');
            li.className = "flex items-center gap-2";
            li.innerHTML = `<i class="fas fa-dot-circle text-xs text-sunset-orange"></i> ${item}`;
            carryList.appendChild(li);
        });
    } else if (detailTitle && !activityId) {
        // Fallback if no ID is provided
        window.location.href = 'index.html';
    }

    // ==========================================
    // 4. Booking Form Logic (Works on both pages)
    // ==========================================
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name') ? document.getElementById('name').value : '';
            const date = document.getElementById('date') ? document.getElementById('date').value : 'Not Specified';
            const guests = document.getElementById('guests') ? document.getElementById('guests').value : '';
            
            // Get activity name: either from the hidden field (details page) or text (home page)
            let activity = 'General Inquiry';
            const hiddenActivity = document.getElementById('hidden-activity-name');
            const homeActivityTitle = document.getElementById('activity-title');

            if (hiddenActivity && hiddenActivity.value) {
                activity = hiddenActivity.value;
            } else if (homeActivityTitle) {
                activity = homeActivityTitle.innerText;
            }

            const message = `*New Booking Inquiry* %0A%0A*Activity:* ${activity}%0A*Name:* ${name}%0A*Date:* ${date}%0A*Guests:* ${guests}%0A%0APlease confirm availability.`;
            
            window.open(`https://wa.me/919531671758?text=${message}`, '_blank');
        });
    }

    // ==========================================
    // 5. Contact Form Logic (Home Page)
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
            window.open(`https://wa.me/919531671758?text=${message}`, '_blank');
        });
    }

    // ==========================================
    // 6. Typing Animation Logic
    // ==========================================
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const phrases = ["Experience Luxury in", "Escape to Nature in", "Unveil the Magic of", "Create Your Story in"];
        let phraseIndex = 0, charIndex = 0, isDeleting = false;
        
        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];
            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, charIndex--);
                if (charIndex < 0) { isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; setTimeout(typeEffect, 500); }
                else setTimeout(typeEffect, 50);
            } else {
                typingElement.textContent = currentPhrase.substring(0, charIndex++);
                if (charIndex === currentPhrase.length) { isDeleting = true; setTimeout(typeEffect, 2000); }
                else setTimeout(typeEffect, 100);
            }
        }
        typeEffect();
    }
});

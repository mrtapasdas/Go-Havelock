document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 0. ACTIVITIES DATABASE (SEO Optimized)
    // ==========================================
    const activitiesDB = {
        'boat-scuba-diving': {
            title: "Boat Scuba Diving in Havelock Island",
            seo_title: "Scuba Diving Havelock Island",
            price: "3,000",
            unit: "/ person",
            duration: "2 Hours",
            location: "Tribe Gate",
            type: "Water Adventure",
            img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070",
            description: "Book the best Scuba Diving experience in Havelock Island. Explore the vibrant coral reefs of Nemo Reef with PADI certified instructors. Perfect for beginners and non-swimmers. Includes photos, video, and full safety gear.",
            itinerary: [
                "Hotel pickup and transfer to the dive center.",
                "30-minute training on breathing techniques and hand signals.",
                "Boat ride to the exclusive dive spot.",
                "Assisted underwater dive (up to 12m depth) for 30 minutes.",
                "Complimentary HD underwater photos and videos.",
                "Drop back to hotel."
            ],
            carry: ["Swimwear or t-shirt/shorts", "Towel", "Sunscreen", "Pendrive/Phone for photos"]
        },
        'snorkeling': {
            title: "Guided Snorkeling at Havelock Island",
            seo_title: "Snorkeling Trips Havelock Island",
            price: "2,000",
            unit: "/ person",
            duration: "2 Hours",
            location: "Tribe Gate",
            type: "Water Sport",
            img: "https://images.unsplash.com/photo-1664922114319-4700c0ef74b1?auto=format&fit=crop&w=1200",
            description: "Experience crystal clear waters with our guided Snorkeling trips at Elephant Beach. Swim with colorful schools of fish and witness live coral reefs. Safe for kids and families.",
            itinerary: ["Boat ride to snorkeling station", "Briefing on snorkel usage", "Guided snorkeling session (30 mins)", "Refreshments and return"],
            carry: ["Swimwear", "Towel", "Water Bottle", "Sunglasses"]
        },
        'undersea-walking': {
            title: "Undersea Walk on the Ocean Floor",
            seo_title: "UnderSea Walking Havelock Island",
            price: "3,500",
            unit: "/ person",
            duration: "45 Mins",
            location: "Elephant Beach",
            type: "Unique Adventure",
            img: "https://i.pinimg.com/1200x/ba/36/8b/ba368bb24cab5833ae6edbcd07c4ca50.jpg?auto=format&fit=crop&w=1200",
            description: "No swimming skills? No problem! Try the famous Sea Walk in Havelock. Wear a helmet and walk on the sea bed surrounded by marine life at Elephant Beach.",
            itinerary: ["Speed boat transfer to Sea Walk pontoon", "Helmet fitting and safety briefing", "Descent to 6 meters depth", "20 minutes of underwater walking", "Photos included"],
            carry: ["Change of clothes", "Towel"]
        },
        'parasailing': {
            title: "Parasailing in Havelock | Fly High Above the Sea",
            seo_title: "Parasailing Adventure in Havelock Island",
            price: "3,500",
            unit: "/ person",
            duration: "20 Mins",
            location: "Elephant Beach",
            type: "Air Adventure",
            img: "https://images.unsplash.com/photo-1632904074880-b77f02b6d01e?auto=format&fit=crop&w=1200",
            description: "Get a bird's eye view of the stunning Andaman coastline. Parasailing in Havelock offers a thrilling aerial experience towed behind a high-speed boat.",
            itinerary: ["Transfer to parasailing boat", "Safety harness setup", "Launch from boat deck", "Air time approx 3-5 minutes", "Safe landing on boat"],
            carry: ["Comfortable clothes", "Sunglasses", "Camera"]
        },
        'night-kayaking': {
            title: "Night Kayaking with Bioluminescence",
            seo_title: "Night Kayaking Havelock | Bioluminescence Tour",
            price: "2,500",
            unit: "/ person",
            duration: "2 Hours",
            location: "Mangroves",
            type: "Night Activity",
            img: "https://images.unsplash.com/photo-1588472235276-7638965471e2?auto=format&fit=crop&w=1200",
            description: "Witness the magical glow of the ocean. Our Night Kayaking tour takes you through the silent mangroves where the water sparkles with blue bioluminescence.",
            itinerary: ["Training on paddling", "Guided tour through mangrove channels", "Star gazing session", "Experience bioluminescence (best during no moon)"],
            carry: ["Mosquito repellent", "Water bottle", "Quick-dry clothes"]
        },
        'diving-courses': {
            title: "PADI Scuba Diving Courses",
            seo_title: "PADI Diving Courses in Havelock Island",
            price: "15,000",
            unit: "/ course starts at",
            duration: "2-4 Days",
            location: "Dive Center",
            type: "Certification",
            img: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?auto=format&fit=crop&w=1200",
            description: "Become a certified diver in the Andamans. We offer PADI Open Water, Advanced, and Rescue Diver courses with international certification valid worldwide.",
            itinerary: ["Day 1: Theory & Confined Water", "Day 2: 2 Open Water Dives", "Day 3 (OWD): 2 Open Water Dives & Exam", "Certification Card"],
            carry: ["Note pad", "Swimwear", "Medical declaration"]
        },
        'island-hopping': {
            title: "Private Island Hopping Boat Charter",
            seo_title: "Island Hopping in Havelock Island",
            price: "18,000",
            unit: "/ boat (max 6 pax)",
            duration: "Full Day",
            location: "Neil / Peel / Wilson",
            type: "Luxury Tour",
            img: "https://images.unsplash.com/photo-1521650559166-6b588715bc62?auto=format&fit=crop&w=1200",
            description: "Rent a private speed boat for a day. Explore uninhabited islands like Peel, Wilson, and John Lawrence. Includes snorkeling gear and a private captain.",
            itinerary: ["Private boat charter", "Visit to hidden beaches", "Snorkeling stops at untouched reefs", "Picnic lunch (on request)"],
            carry: ["Sunscreen", "Hats", "Sunglasses", "Snacks"]
        },
        'boat-fishing': {
            title: "Boat Fishing & Deep Sea Angling",
            seo_title: "Boat Fishing in Havelock Island",
            price: "12,000",
            unit: "/ boat",
            duration: "4-6 Hours",
            location: "Deep Sea",
            type: "Adventure",
            img: "https://images.unsplash.com/photo-1551942296-97384c850440?auto=format&fit=crop&w=1200",
            description: "Join expert anglers for a deep sea fishing adventure. Target GT, Tuna, and Barracuda with professional equipment. Trolling, popping, and jigging available.",
            itinerary: ["Departure at 5 AM or 2 PM", "Travel to fishing grounds", "Fishing session with guidance", "Keep your catch option"],
            carry: ["Hat", "Sunscreen", "Sea sickness pills"]
        },
        'candle-light-dinner': {
            title: "Romantic Candle Light Dinner on Beach",
            seo_title: "Candle Light Dinner in Havelock Island",
            price: "5,000",
            unit: "/ couple",
            duration: "2.5 Hours",
            location: "Beach No. 3 / 5",
            type: "Romantic",
            img: "https://images.unsplash.com/photo-1529516222410-a269d812f320?auto=format&fit=crop&w=1200",
            description: "The ultimate romantic experience. A private table on the white sands of Havelock, illuminated by candles and moonlight. 4-course meal and wine included.",
            itinerary: ["Reserved beachside spot", "Flower & Candle decor", "Welcome drink", "4-course meal (Veg/Non-Veg)", "Butler service"],
            carry: ["Smart casuals", "Camera"]
        },
        'dinner-cruise-party': {
            title: "Luxury Dinner Cruise Party",
            seo_title: "Dinner Cruise Party in Havelock Island",
            price: "3,500",
            unit: "/ person",
            duration: "3 Hours",
            location: "Port Blair / Havelock",
            type: "Luxury / Party",
            img: "https://images.unsplash.com/photo-1667412319085-144022cc8df6?auto=format&fit=crop&w=1200",
            description: "Sail under the stars on a luxury yacht. Enjoy live DJ music, dance on the open deck, and savor a lavish buffet dinner while cruising the archipelago.",
            itinerary: ["Boarding at 6:30 PM", "Live entertainment", "Sailing around the bay", "Buffet dinner", "Return to jetty"],
            carry: ["Party wear", "Camera"]
        },
        'semi-submarine': {
            title: "Coral Safari Semi-Submarine Ride",
            seo_title: "Submarine Ride in Havelock Island",
            price: "3,500",
            unit: "/ person",
            duration: "1 Hours",
            location: "Elephant Beach",
            type: "Family Friendly",
            img: "https://i.pinimg.com/736x/61/0a/7a/610a7a9d349e5140ec163af9bc0bd469.jpg?auto=format&fit=crop&w=1200",
            description: "Explore the reef without getting wet! The Coral Safari semi-submarine takes you underwater in an AC cabin with large glass windows. Great for kids and seniors.",
            itinerary: ["Transfer to submarine", "45-minute underwater viewing", "Fish feeding observation", "Return to shore"],
            carry: ["Comfortable clothes", "Camera"]
        },
        'speedboat-ride': {
            title: "Thrilling Speed Boat Ride",
            seo_title: "Speed Boat Ride in Havelock Island",
            price: "1,000",
            unit: "/ person",
            duration: "15 Mins",
            location: "Water Sports Complex",
            type: "Thrill",
            img: "https://images.unsplash.com/photo-1584212893031-410e387fbaf1?auto=format&fit=crop&w=1200",
            description: "Feel the rush of adrenaline as you cut through the waves. A high-speed boat ride full of sharp turns and splashes at Elephant Beach.",
            itinerary: ["Life jacket fitting", "High speed run", "Sharp turns", "Return to jetty"],
            carry: ["Waterproof pouch", "Sunglasses"]
        },
        'stargazing': {
            title: "Guided Stargazing Experience",
            seo_title: "Stargazing in Havelock Island",
            price: "2,500",
            unit: "/ person",
            duration: "1 Hour",
            location: "Dark Sky Zone",
            type: "Educational",
            img: "https://images.unsplash.com/photo-1527871899604-f1425bcce779?auto=format&fit=crop&w=1200",
            description: "Discover the cosmos from one of the darkest spots in India. View planets, nebulas, and the Milky Way through professional telescopes with an expert guide.",
            itinerary: ["Travel to dark location", "Introduction to constellations", "Telescope viewing", "Mythology and science stories"],
            carry: ["Light jacket", "Mosquito repellent"]
        },
        'resort-booking': {
            title: "Luxury Resort & Hotel Booking",
            seo_title: "Resort Booking in Havelock Island",
            price: "4,000",
            unit: "/ night starts from",
            duration: "Per Night",
            location: "Island Wide",
            type: "Accommodation",
            img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200",
            description: "Get exclusive deals on Taj Exotica, Barefoot, and other top Havelock resorts. We offer better rates than online portals for premium properties.",
            itinerary: ["Consultation", "Property selection", "Booking confirmation", "Honeymoon specials"],
            carry: ["ID Proofs"]
        },
        'cab-rentals': {
            title: "Car Rental & Taxi Services",
            seo_title: "Car Rental in Havelock Island",
            price: "500",
            unit: "/ trip starts from",
            duration: "Flexible",
            location: "Island Wide",
            type: "Transport",
            img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200",
            description: "Reliable AC cabs for jetty transfers, Radhanagar beach drops, and full-day sightseeing. Clean cars and polite local drivers.",
            itinerary: ["Pick up from Jetty/Hotel", "Drop to destination", "Waiting charges applicable for return"],
            carry: ["Pickup details"]
        },
        'ferry-ticket-booking': {
            title: "Govt./Private Ferry Ticket Booking",
            seo_title: "Ferry Booking in Havelock Island",
            price: "200",
            unit: " service fee",
            duration: "Instant",
            location: "Inter-Island",
            type: "Transport",
            img: "https://images.unsplash.com/photo-1567790405615-3a623ce0adb1?auto=format&fit=crop&w=1200",
            description: "Official booking partner for Makruzz, Nautika, and Green Ocean ferries. Skip the queue and get your confirmed tickets on WhatsApp.",
            itinerary: ["Select Ferry", "Provide passenger details", "Receive PDF ticket", "Boarding assistance"],
            carry: ["ID Proofs", "Soft copy of ticket"]
        },
        'event-hosting': {
            title: "Destination Weddings & Event Hosting",
            seo_title: "Beach Event Hosting in Havelock Island",
            price: "Custom",
            unit: " Package",
            duration: "Custom",
            location: "Beach Resorts",
            type: "Service",
            img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200",
            description: "Planning a dream beach wedding in Andaman? We manage venues, decor, catering, and permits for weddings, corporate retreats, and parties.",
            itinerary: ["Consultation", "Venue Selection", "Decor & Food tasting", "Event Execution"],
            carry: ["Guest List"]
        },
        'food-ordering': {
            title: "Food Order & Delivery in Havelock",
            seo_title: "Food Booking & Delivery in Havelock Island",
            price: "500",
            unit: " min order",
            duration: "45 Mins",
            location: "Island Wide",
            type: "Service",
            img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200",
            description: "Order fresh seafood, pizza, or Indian meals from top Havelock restaurants delivered to your hotel room or beach spot.",
            itinerary: ["Order via WhatsApp", "Confirmation & Payment", "Delivery to location"],
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
    // 3. Dynamic Activity Detail & SEO Logic
    // ==========================================
    const urlParams = new URLSearchParams(window.location.search);
    const activityId = urlParams.get('id');
    const detailTitle = document.getElementById('detail-title');

    if (activityId && detailTitle && activitiesDB[activityId]) {
        const data = activitiesDB[activityId];

        // 3a. Populate Visual Content
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

        // 3b. Populate Itinerary List
        const itineraryList = document.getElementById('detail-itinerary');
        itineraryList.innerHTML = ''; 
        data.itinerary.forEach(item => {
            const li = document.createElement('li');
            li.className = "flex items-start gap-3";
            li.innerHTML = `<i class="fas fa-check-circle text-ocean-teal mt-1"></i> <span>${item}</span>`;
            itineraryList.appendChild(li);
        });

        // 3c. Populate What to Carry
        const carryList = document.getElementById('detail-carry');
        carryList.innerHTML = '';
        data.carry.forEach(item => {
            const li = document.createElement('li');
            li.className = "flex items-center gap-2";
            li.innerHTML = `<i class="fas fa-dot-circle text-xs text-sunset-orange"></i> ${item}`;
            carryList.appendChild(li);
        });

        // 3d. Dynamic SEO Injection (Critical for Search Engines)
        updatePageSEO(data);
        injectSchema(data);

    } else if (detailTitle && !activityId) {
        // Fallback
        window.location.href = 'index.html';
    }

    // Function to Update Meta Tags dynamically
    function updatePageSEO(data) {
        // Update Title
        document.title = `${data.seo_title} | Go Havelock`;

        // Update Meta Description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', data.description);

        // Update Open Graph (Social Sharing)
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', data.seo_title);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', data.description);

        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.setAttribute('content', data.img);
        
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', window.location.href);
    }

    // Function to Inject Google Rich Snippet Schema
    function injectSchema(data) {
        const schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        
        // Clean price for schema (remove commas)
        const priceValue = data.price.replace(/,/g, '').replace('Custom', '0');
        
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": data.title,
            "description": data.description,
            "image": data.img,
            "priceRange": "₹" + data.price,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Havelock Island",
                "addressRegion": "Andaman",
                "addressCountry": "IN"
            },
            "offers": {
                "@type": "Offer",
                "price": priceValue,
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "url": window.location.href
            }
        };
        
        schemaScript.text = JSON.stringify(schemaData);
        document.head.appendChild(schemaScript);
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
                // Fixed: Added +1 so the last letter is visible before pausing
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

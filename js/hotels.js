// Hotels Data
const allHotels = [
    {
        id: 1,
        name: "Labadi Beach Hotel",
        location: "Accra",
        price: 180,
        originalPrice: 220,
        rating: 5,
        reviews: 324,
        amenities: ["Pool", "WiFi", "Restaurant", "Spa", "Beach Access"],
        images: [
            "https://images.unsplash.com/photo-1757839939579-d71ac270993b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
            "https://images.unsplash.com/photo-1658590842120-2a0b2a68c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
        ],
        description: "Luxury beachfront resort with world-class amenities and stunning ocean views."
    },
    {
        id: 2,
        name: "Kempinski Hotel Gold Coast",
        location: "Accra",
        price: 250,
        originalPrice: 0,
        rating: 5,
        reviews: 456,
        amenities: ["Pool", "WiFi", "Restaurant", "Spa", "Gym", "Beach Access"],
        images: [
            "https://images.unsplash.com/photo-1647643787408-0b3e85e091ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
            "https://images.unsplash.com/photo-1757839939579-d71ac270993b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
        ],
        description: "Five-star luxury hotel with elegant rooms and exceptional service."
    },
    {
        id: 3,
        name: "Movenpick Ambassador Hotel",
        location: "Accra",
        price: 200,
        originalPrice: 240,
        rating: 5,
        reviews: 289,
        amenities: ["Pool", "WiFi", "Restaurant", "Business Center", "Gym"],
        images: [
            "https://images.unsplash.com/photo-1658590842120-2a0b2a68c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
            "https://images.unsplash.com/photo-1647643787408-0b3e85e091ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
        ],
        description: "Modern hotel in the heart of Accra with premium facilities."
    },
    {
        id: 4,
        name: "Royal Senchi Hotel",
        location: "Akosombo",
        price: 120,
        originalPrice: 150,
        rating: 4,
        reviews: 198,
        amenities: ["Pool", "WiFi", "Restaurant", "River Views"],
        images: [
            "https://images.unsplash.com/photo-1757839939579-d71ac270993b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
        ],
        description: "Scenic riverside resort perfect for weekend getaways."
    },
    {
        id: 5,
        name: "Alisa Hotel",
        location: "Accra",
        price: 140,
        originalPrice: 0,
        rating: 4,
        reviews: 267,
        amenities: ["Pool", "WiFi", "Restaurant", "Spa"],
        images: [
            "https://images.unsplash.com/photo-1647643787408-0b3e85e091ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
        ],
        description: "Boutique hotel offering personalized service and comfort."
    },
    {
        id: 6,
        name: "Golden Tulip Kumasi City",
        location: "Kumasi",
        price: 110,
        originalPrice: 135,
        rating: 4,
        reviews: 201,
        amenities: ["Pool", "Restaurant", "Gym"],
        images: [
            "https://images.unsplash.com/photo-1658590842120-2a0b2a68c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
        ],
        description: "Modern hotel in Ghana's cultural capital with excellent amenities."
    },
    {
        id: 7,
        name: "Coconut Grove Beach Resort",
        location: "Cape Coast",
        price: 95,
        originalPrice: 120,
        rating: 4,
        reviews: 156,
        amenities: ["Beach Access", "WiFi", "Restaurant", "Pool"],
        images: [
            "https://images.unsplash.com/photo-1757839939579-d71ac270993b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
        ],
        description: "Charming beachfront resort near historical sites."
    },
    {
        id: 8,
        name: "Lancaster Hotel",
        location: "Kumasi",
        price: 85,
        originalPrice: 0,
        rating: 4,
        reviews: 134,
        amenities: ["WiFi", "Restaurant", "Gym"],
        images: [
            "https://images.unsplash.com/photo-1647643787408-0b3e85e091ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
        ],
        description: "Comfortable hotel with great value for money."
    },
    {
        id: 9,
        name: "Busua Beach Resort",
        location: "Takoradi",
        price: 75,
        originalPrice: 95,
        rating: 4,
        reviews: 178,
        amenities: ["Beach Access", "WiFi", "Restaurant"],
        images: [
            "https://images.unsplash.com/photo-1658590842120-2a0b2a68c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
        ],
        description: "Relaxed beach resort perfect for surfers and beach lovers."
    },
    {
        id: 10,
        name: "African Regent Hotel",
        location: "Accra",
        price: 160,
        originalPrice: 0,
        rating: 5,
        reviews: 223,
        amenities: ["Pool", "WiFi", "Restaurant", "Business Center"],
        images: [
            "https://images.unsplash.com/photo-1757839939579-d71ac270993b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
        ],
        description: "Upscale hotel perfect for business and leisure travelers."
    },
    {
        id: 11,
        name: "Aqua Safari Resort",
        location: "Ada",
        price: 130,
        originalPrice: 160,
        rating: 4,
        reviews: 145,
        amenities: ["Beach Access", "WiFi", "Restaurant", "Water Sports"],
        images: [
            "https://images.unsplash.com/photo-1647643787408-0b3e85e091ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
        ],
        description: "Adventure resort with water sports and beach activities."
    },
    {
        id: 12,
        name: "Chances Hotel & Residences",
        location: "Accra",
        price: 190,
        originalPrice: 220,
        rating: 5,
        reviews: 298,
        amenities: ["Pool", "WiFi", "Restaurant", "Spa", "Gym"],
        images: [
            "https://images.unsplash.com/photo-1658590842120-2a0b2a68c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
        ],
        description: "Luxury hotel with casino and premium entertainment facilities."
    }
];

let filteredHotels = [...allHotels];
let currentImageIndex = {};

// Star Rating
function createStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="${i <= rating ? 'text-[#fdbe19]' : 'text-gray-300'}">★</span>`;
    }
    return stars;
}

// Image Carousel
function createImageCarousel(hotel) {
    const images = hotel.images;
    if (images.length === 1) {
        return `<img src="${images[0]}" alt="${hotel.name}" class="w-full h-full object-cover">`;
    }

    currentImageIndex[hotel.id] = 0;

    return `
        <div class="relative w-full h-full">
            <img id="hotel-img-${hotel.id}" src="${images[0]}" alt="${hotel.name}" class="w-full h-full object-cover">
            ${images.length > 1 ? `
                <button onclick="prevImage(${hotel.id}, ${images.length})" class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button onclick="nextImage(${hotel.id}, ${images.length})" class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
                <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                    ${images.map((_, i) => `
                        <div class="w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}" id="dot-${hotel.id}-${i}"></div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

function nextImage(hotelId, imageCount) {
    const hotel = allHotels.find(h => h.id === hotelId);
    currentImageIndex[hotelId] = (currentImageIndex[hotelId] + 1) % imageCount;
    updateImage(hotelId, hotel.images);
}

function prevImage(hotelId, imageCount) {
    const hotel = allHotels.find(h => h.id === hotelId);
    currentImageIndex[hotelId] = (currentImageIndex[hotelId] - 1 + imageCount) % imageCount;
    updateImage(hotelId, hotel.images);
}

function updateImage(hotelId, images) {
    const img = document.getElementById(`hotel-img-${hotelId}`);
    if (img) {
        img.src = images[currentImageIndex[hotelId]];
    }

    // Update dots
    images.forEach((_, i) => {
        const dot = document.getElementById(`dot-${hotelId}-${i}`);
        if (dot) {
            if (i === currentImageIndex[hotelId]) {
                dot.className = 'w-2 h-2 rounded-full bg-white';
            } else {
                dot.className = 'w-2 h-2 rounded-full bg-white/50';
            }
        }
    });
}

// Render Hotels
function renderHotels() {
    const container = document.getElementById('hotelListings');

    container.innerHTML = filteredHotels.map(hotel => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
               <div class="relative w-full h-72 lg:h-96 group overflow-hidden">
                    ${createImageCarousel(hotel)}
                </div>
                
                <div class="p-6">
                    <div class="flex flex-col h-full">
                        <div class="flex justify-between items-start mb-3">
                            <div>
                                <h3 class="text-xl font-semibold text-[#0a2540] mb-1">${hotel.name}</h3>
                                <div class="flex items-center text-gray-600 text-sm mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-1">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    ${hotel.location}, Ghana
                                </div>
                                <div class="flex items-center space-x-2 mb-2">
                                    <div class="flex text-sm">${createStarRating(hotel.rating)}</div>
                                    <span class="text-sm text-gray-600 ml-1">(${hotel.reviews} reviews)</span>
                                </div>
                            </div>
                            
                            <div class="text-right">
                                ${hotel.originalPrice > 0 ? `
                                    <div class="text-sm text-gray-500 line-through">$${hotel.originalPrice}</div>
                                ` : ''}
                                <div class="text-2xl font-bold text-[#0a2540]">$${hotel.price}</div>
                                <div class="text-sm text-gray-600">per night</div>
                            </div>
                        </div>
                        
                        <p class="text-gray-600 text-sm mb-4">${hotel.description}</p>
                        
                        <div class="flex flex-wrap gap-1 mb-4">
                            ${hotel.amenities.slice(0, 4).map(amenity => `
                                <span class="text-xs bg-gray-100 rounded-full px-2 py-1">${amenity}</span>
                            `).join('')}
                            ${hotel.amenities.length > 4 ? `
                                <span class="text-xs text-gray-500 px-2 py-1">+${hotel.amenities.length - 4} more</span>
                            ` : ''}
                        </div>
                        
                        <div class="mt-auto flex justify-between items-center">
                            <span class="text-sm text-green-600 font-medium">Free Cancellation</span>
                            <div class="flex">
                                <button onclick="bookHotel(${hotel.id})" class="bg-[#fdbe19] text-[#0a2540] px-4 py-2 rounded-lg font-semibold hover:bg-[#fdbe19]/90 transition">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('resultsCount').textContent = filteredHotels.length;
}

// Filter Hotels
function filterHotels() {
    const location = document.getElementById('locationFilter')?.value || 'all';
    const destination = document.getElementById('destinationFilter')?.value?.toLowerCase() || '';
    const price = document.getElementById('priceFilter')?.value || 'all';
    const sortBy = document.getElementById('sortBy')?.value || 'recommended';

    // Get checked rating checkboxes
    const rating5Checked = document.getElementById('rating-5')?.checked;
    const rating4Checked = document.getElementById('rating-4')?.checked;
    const rating3Checked = document.getElementById('rating-3')?.checked;
    const hasRatingFilter = rating5Checked || rating4Checked || rating3Checked;
    
    // Get checked amenity checkboxes
    const amenityWifiChecked = document.getElementById('amenity-wifi')?.checked;
    const amenityPoolChecked = document.getElementById('amenity-pool')?.checked;
    const amenitySpaChecked = document.getElementById('amenity-spa')?.checked;
    const amenityRestaurantChecked = document.getElementById('amenity-restaurant')?.checked;
    const checkedAmenities = [];
    if (amenityWifiChecked) checkedAmenities.push('WiFi');
    if (amenityPoolChecked) checkedAmenities.push('Pool');
    if (amenitySpaChecked) checkedAmenities.push('Spa');
    if (amenityRestaurantChecked) checkedAmenities.push('Restaurant');

    filteredHotels = allHotels.filter(hotel => {
        // Destination filter (search by hotel name or location)
        if (destination) {
            const hotelName = hotel.name.toLowerCase();
            const hotelLocation = hotel.location.toLowerCase();
            if (!hotelName.includes(destination) && !hotelLocation.includes(destination)) {
                return false;
            }
        }

        // Location filter
        if (location !== 'all' && hotel.location.toLowerCase() !== location.toLowerCase()) return false;

        // Price filter
        if (price !== 'all') {
            const [min, max] = price.split('-').map(p => p.replace('+', ''));
            if (max) {
                if (hotel.price < parseInt(min) || hotel.price > parseInt(max)) return false;
            } else {
                if (hotel.price < parseInt(min)) return false;
            }
        }

        // Rating filter (check if hotel rating matches any checked rating)
        if (hasRatingFilter) {
            let ratingMatch = false;
            if (rating5Checked && hotel.rating >= 5) ratingMatch = true;
            if (rating4Checked && hotel.rating >= 4 && hotel.rating < 5) ratingMatch = true;
            if (rating3Checked && hotel.rating >= 3 && hotel.rating < 4) ratingMatch = true;
            if (!ratingMatch) return false;
        }

        // Amenity filter (hotel must have all checked amenities)
        if (checkedAmenities.length > 0) {
            const hasAllAmenities = checkedAmenities.every(amenity => hotel.amenities.includes(amenity));
            if (!hasAllAmenities) return false;
        }

        return true;
    });

    // Sort
    if (sortBy === 'price-low') {
        filteredHotels.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filteredHotels.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
        filteredHotels.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
    }

    renderHotels();
}

// Apply search filters (called from filter sidebar button)
function applySearchFilters() {
    // Store dates in localStorage for use in hotel-rooms.html
    const checkIn = document.getElementById('checkinFilter')?.value;
    const checkOut = document.getElementById('checkoutFilter')?.value;
    
    if (checkIn) localStorage.setItem('checkInDate', checkIn);
    if (checkOut) localStorage.setItem('checkOutDate', checkOut);
    
    filterHotels();
}

function viewHotelDetails(id) {
    bookHotel(id);
}

function bookHotel(id) {
    const hotel = allHotels.find(h => h.id === id);
    if (hotel) {
        localStorage.setItem('selectedHotel', JSON.stringify(hotel));
        
        // Get dates from filter inputs or use defaults
        const checkIn = document.getElementById('checkinFilter')?.value || '';
        const checkOut = document.getElementById('checkoutFilter')?.value || '';
        
        if (checkIn) localStorage.setItem('checkInDate', checkIn);
        if (checkOut) localStorage.setItem('checkOutDate', checkOut);
        
        window.location.href = 'hotel-rooms.html';
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.toggle('hidden');
}

// Read URL parameters and populate filters
function loadURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    
    const destination = urlParams.get('destination');
    const checkin = urlParams.get('checkin');
    const checkout = urlParams.get('checkout');
    const guests = urlParams.get('guests');
    
    if (destination) {
        const destinationFilter = document.getElementById('destinationFilter');
        if (destinationFilter) destinationFilter.value = destination;
    }
    
    if (checkin) {
        const checkinFilter = document.getElementById('checkinFilter');
        if (checkinFilter) {
            checkinFilter.value = checkin;
            localStorage.setItem('checkInDate', checkin);
        }
    }
    
    if (checkout) {
        const checkoutFilter = document.getElementById('checkoutFilter');
        if (checkoutFilter) {
            checkoutFilter.value = checkout;
            localStorage.setItem('checkOutDate', checkout);
        }
    }
    
    if (guests) {
        const guestsFilter = document.getElementById('guestsFilter');
        if (guestsFilter) guestsFilter.value = guests;
    }
    
    // Apply filters if any URL params exist
    if (destination || checkin || checkout || guests) {
        filterHotels();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadURLParameters();
    renderHotels();
});

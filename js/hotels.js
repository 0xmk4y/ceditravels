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
        amenities: ["Pool", "WiFi", "Restaurant", "Gym"],
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
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-0">
               <div class="relative w-full h-56 lg:h-64 group overflow-hidden">
                    ${createImageCarousel(hotel)}
                    <button class="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 
                                    5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 
                                    1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="lg:col-span-2 p-6">
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
                                <div class="flex items-center space-x-2">
                                    <div class="flex">${createStarRating(hotel.rating)}</div>
                                    <span class="text-sm text-gray-600">(${hotel.reviews} reviews)</span>
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
                                <button onclick="viewHotelDetails(${hotel.id})" class="border border-[#0a2540] text-[#0a2540] px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition">
                                    View Details
                                </button>
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
    const location = document.getElementById('locationFilter').value;
    const price = document.getElementById('priceFilter').value;
    const rating = document.getElementById('ratingFilter').value;
    const amenity = document.getElementById('amenityFilter').value;
    const sortBy = document.getElementById('sortBy').value;

    filteredHotels = allHotels.filter(hotel => {
        // Location filter
        if (location !== 'all' && hotel.location !== location) return false;

        // Price filter
        if (price !== 'all') {
            const [min, max] = price.split('-').map(p => p.replace('+', ''));
            if (max) {
                if (hotel.price < parseInt(min) || hotel.price > parseInt(max)) return false;
            } else {
                if (hotel.price < parseInt(min)) return false;
            }
        }

        // Rating filter
        if (rating !== 'all' && hotel.rating < parseInt(rating)) return false;

        // Amenity filter
        if (amenity !== 'all') {
            const amenityMap = {
                'pool': 'Pool',
                'wifi': 'WiFi',
                'spa': 'Spa',
                'restaurant': 'Restaurant'
            };
            if (!hotel.amenities.includes(amenityMap[amenity])) return false;
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

function viewHotelDetails(id) {
    bookHotel(id);
}

function bookHotel(id) {
    const hotel = allHotels.find(h => h.id === id);
    if (hotel) {
        localStorage.setItem('selectedHotel', JSON.stringify(hotel));
        window.location.href = 'hotel-booking.html';
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.toggle('hidden');
}

// Initialize
renderHotels();

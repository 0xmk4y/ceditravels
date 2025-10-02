const venues = [
    {
        id: 1,
        name: "Accra International Conference Centre",
        location: "Accra",
        price: 5000,
        rating: 5,
        reviews: 142,
        capacity: { min: 500, max: 2000 },
        amenities: ["Audio/Visual Equipment", "Catering Services", "Parking", "AC"],
        description: "Premier conference venue in the heart of Accra with state-of-the-art facilities.",
        image: "https://images.unsplash.com/photo-1677804451054-5b85a1d1d029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
        id: 2,
        name: "Kempinski Hotel Gold Coast City",
        location: "Accra",
        price: 8000,
        rating: 5,
        reviews: 98,
        capacity: { min: 100, max: 500 },
        amenities: ["Beachfront", "Luxury Catering", "Wedding Packages", "AC", "Parking"],
        description: "Luxurious beachfront venue perfect for weddings and high-end events.",
        image: "https://images.unsplash.com/photo-1658590842120-2a0b2a68c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
        id: 3,
        name: "Labadi Beach Hotel Grand Ballroom",
        location: "Accra",
        price: 6500,
        rating: 5,
        reviews: 156,
        capacity: { min: 200, max: 800 },
        amenities: ["Beachfront", "Catering", "Audio/Visual", "AC"],
        description: "Elegant ballroom with ocean views for memorable celebrations.",
        image: "https://images.unsplash.com/photo-1757839939579-d71ac270993b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
        id: 4,
        name: "Movenpick Ambassador Hotel Ballroom",
        location: "Accra",
        price: 5500,
        rating: 5,
        reviews: 134,
        capacity: { min: 150, max: 600 },
        amenities: ["Catering", "Audio/Visual", "AC", "Parking"],
        description: "Sophisticated venue for corporate events and weddings.",
        image: "https://images.unsplash.com/photo-1647643787408-0b3e85e091ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
        id: 5,
        name: "Alisa Hotel Garden Venue",
        location: "Accra",
        price: 3500,
        rating: 4,
        reviews: 87,
        capacity: { min: 50, max: 300 },
        amenities: ["Outdoor Garden", "Catering", "Parking"],
        description: "Beautiful garden setting for intimate ceremonies and receptions.",
        image: "https://images.unsplash.com/photo-1677804451054-5b85a1d1d029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
        id: 6,
        name: "Kumasi City Mall Convention Center",
        location: "Kumasi",
        price: 4000,
        rating: 4,
        reviews: 76,
        capacity: { min: 300, max: 1000 },
        amenities: ["Audio/Visual", "Catering", "AC", "Parking"],
        description: "Modern convention center in Ghana's cultural capital.",
        image: "https://images.unsplash.com/photo-1658590842120-2a0b2a68c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
];

function createStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="${i <= rating ? 'text-[#fdbe19]' : 'text-gray-300'}">★</span>`;
    }
    return stars;
}

function renderVenues() {
    const container = document.getElementById('venueListings');
    
    container.innerHTML = venues.map(venue => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div class="relative h-64 lg:h-auto">
                    <img src="${venue.image}" alt="${venue.name}" class="w-full h-full object-cover">
                </div>
                
                <div class="lg:col-span-2 p-6">
                    <div class="flex flex-col h-full">
                        <div class="flex justify-between items-start mb-3">
                            <div>
                                <h3 class="text-xl font-semibold text-[#0a2540] mb-1">${venue.name}</h3>
                                <div class="flex items-center text-gray-600 text-sm mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-1">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    ${venue.location}, Ghana
                                </div>
                                <div class="flex items-center space-x-2">
                                    <div class="flex">${createStarRating(venue.rating)}</div>
                                    <span class="text-sm text-gray-600">(${venue.reviews} reviews)</span>
                                </div>
                            </div>
                            
                            <div class="text-right">
                                <div class="text-2xl font-bold text-[#0a2540]">$${venue.price.toLocaleString()}</div>
                                <div class="text-sm text-gray-600">per event</div>
                            </div>
                        </div>
                        
                        <p class="text-gray-600 text-sm mb-4">${venue.description}</p>
                        
                        <div class="flex items-center space-x-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-500">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <span class="text-sm text-gray-600">
                                Capacity: ${venue.capacity.min}-${venue.capacity.max} guests
                            </span>
                        </div>
                        
                        <div class="flex flex-wrap gap-1 mb-4">
                            ${venue.amenities.slice(0, 3).map(amenity => `
                                <span class="text-xs bg-gray-100 rounded-full px-2 py-1">${amenity}</span>
                            `).join('')}
                            ${venue.amenities.length > 3 ? `
                                <span class="text-xs text-gray-500 px-2 py-1">+${venue.amenities.length - 3} more</span>
                            ` : ''}
                        </div>
                        
                        <div class="mt-auto flex justify-between items-center">
                            <span class="text-sm text-green-600 font-medium">Free Consultation</span>
                            <div class="space-x-2">
                                <button onclick="bookVenue(${venue.id})" class="bg-[#fdbe19] text-[#0a2540] px-4 py-2 rounded-lg font-semibold hover:bg-[#fdbe19]/90 transition">
                                    Book Tour
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function bookVenue(id) {
    const venue = venues.find(v => v.id === id);
    if (venue) {
        localStorage.setItem('selectedVenue', JSON.stringify(venue));
        window.location.href = 'event-booking.html';
    }
}

renderVenues();

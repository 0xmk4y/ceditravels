const venues = [
    {
        id: 1,
        name: "Accra International Conference Centre",
        location: "Accra",
        price: 5000,
        rating: 5,
        reviews: 142,
        capacity: { min: 500, max: 2000 },
        amenities: ["Audio/Visual Equipment", "Catering Services", "Parking", "AC", "WiFi", "Projector", "Microphone System"],
        description: "Premier conference venue in the heart of Accra with state-of-the-art facilities. Features multiple halls, breakout rooms, and modern AV equipment.",
        images: [
            "https://images.unsplash.com/photo-1677804451054-5b85a1d1d029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
            "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"
        ],
        roomLayouts: ["1", "2", "9", "13", "3", "10", "11", "12"],
        minRoomSize: 5000,
        maxRoomSize: 20000,
        sleepingRoomsAvailable: false,
        pricing: {
            base: 5000,
            perDay: true
        }
    },
    {
        id: 2,
        name: "Kempinski Hotel Gold Coast City",
        location: "Accra",
        price: 8000,
        rating: 5,
        reviews: 98,
        capacity: { min: 100, max: 500 },
        amenities: ["Beachfront", "Luxury Catering", "Wedding Packages", "AC", "Parking", "WiFi", "Sound System", "Lighting"],
        description: "Luxurious beachfront venue perfect for weddings and high-end events. Features elegant ballrooms with ocean views and premium catering services.",
        images: [
            "https://images.unsplash.com/photo-1658590842120-2a0b2a68c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800"
        ],
        roomLayouts: ["1", "2", "14", "9", "5"],
        minRoomSize: 2000,
        maxRoomSize: 8000,
        sleepingRoomsAvailable: true,
        sleepingRoomsCount: 150,
        pricing: {
            base: 8000,
            perDay: true
        }
    },
    {
        id: 3,
        name: "Labadi Beach Hotel Grand Ballroom",
        location: "Accra",
        price: 6500,
        rating: 5,
        reviews: 156,
        capacity: { min: 200, max: 800 },
        amenities: ["Beachfront", "Catering", "Audio/Visual", "AC", "Parking", "WiFi", "Dance Floor"],
        description: "Elegant ballroom with ocean views for memorable celebrations. Perfect for weddings, corporate galas, and special events.",
        images: [
            "https://images.unsplash.com/photo-1757839939579-d71ac270993b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
            "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
            "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800"
        ],
        roomLayouts: ["1", "2", "14", "9", "5"],
        minRoomSize: 3000,
        maxRoomSize: 10000,
        sleepingRoomsAvailable: true,
        sleepingRoomsCount: 120,
        pricing: {
            base: 6500,
            perDay: true
        }
    },
    {
        id: 4,
        name: "Movenpick Ambassador Hotel Ballroom",
        location: "Accra",
        price: 5500,
        rating: 5,
        reviews: 134,
        capacity: { min: 150, max: 600 },
        amenities: ["Catering", "Audio/Visual", "AC", "Parking", "WiFi", "Projector", "Stage"],
        description: "Sophisticated venue for corporate events and weddings. Features modern facilities and professional event management services.",
        images: [
            "https://images.unsplash.com/photo-1647643787408-0b3e85e091ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
            "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800"
        ],
        roomLayouts: ["1", "2", "13", "9", "3", "4"],
        minRoomSize: 2500,
        maxRoomSize: 7500,
        sleepingRoomsAvailable: true,
        sleepingRoomsCount: 200,
        pricing: {
            base: 5500,
            perDay: true
        }
    },
    {
        id: 5,
        name: "Alisa Hotel Garden Venue",
        location: "Accra",
        price: 3500,
        rating: 4,
        reviews: 87,
        capacity: { min: 50, max: 300 },
        amenities: ["Outdoor Garden", "Catering", "Parking", "WiFi", "Tent Setup", "Outdoor Sound System"],
        description: "Beautiful garden setting for intimate ceremonies and receptions. Perfect for outdoor weddings and garden parties.",
        images: [
            "https://images.unsplash.com/photo-1677804451054-5b85a1d1d029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
            "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
            "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800"
        ],
        roomLayouts: ["1", "2", "14", "5"],
        minRoomSize: 1000,
        maxRoomSize: 5000,
        sleepingRoomsAvailable: true,
        sleepingRoomsCount: 80,
        pricing: {
            base: 3500,
            perDay: true
        }
    },
    {
        id: 6,
        name: "Kumasi City Mall Convention Center",
        location: "Kumasi",
        price: 4000,
        rating: 4,
        reviews: 76,
        capacity: { min: 300, max: 1000 },
        amenities: ["Audio/Visual", "Catering", "AC", "Parking", "WiFi", "Exhibition Space"],
        description: "Modern convention center in Ghana's cultural capital. Ideal for conferences, trade shows, and large gatherings.",
        images: [
            "https://images.unsplash.com/photo-1658590842120-2a0b2a68c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
            "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"
        ],
        roomLayouts: ["1", "2", "9", "13", "10", "11"],
        minRoomSize: 4000,
        maxRoomSize: 15000,
        sleepingRoomsAvailable: false,
        pricing: {
            base: 4000,
            perDay: true
        }
    }
];

let filteredVenues = [...venues];
let selectedVenues = [];

function createStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="${i <= rating ? 'text-[#fdbe19]' : 'text-gray-300'}">★</span>`;
    }
    return stars;
}

function renderVenues() {
    const container = document.getElementById('venueListings');
    if (!container) return;
    
    container.innerHTML = filteredVenues.map(venue => {
        const isSelected = selectedVenues.some(v => v.id === venue.id);
        const mainImage = venue.images ? venue.images[0] : venue.image;
        
        return `
        <div data-venue-id="${venue.id}" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition ${isSelected ? 'ring-2 ring-green-500' : ''}">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div class="relative h-72 lg:h-96 group overflow-hidden">
                    <img src="${mainImage}" alt="${venue.name}" class="w-full h-full object-cover">
                    ${isSelected ? `
                        <div class="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Selected
                        </div>
                    ` : ''}
                </div>
                
                <div class="p-6 flex flex-col justify-between">
                    <div>
                        <div class="flex items-start justify-between mb-3">
                            <div class="flex-1">
                                <h3 class="text-xl font-semibold text-[#0a2540] mb-1">${venue.name}</h3>
                                <div class="flex items-center text-gray-600 text-sm mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-1">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    ${venue.location}, Ghana
                                </div>
                                <div class="flex items-center space-x-2 mb-2">
                                    <div class="flex text-sm">${createStarRating(venue.rating)}</div>
                                    <span class="text-sm text-gray-600">(${venue.reviews} reviews)</span>
                                </div>
                            </div>
                            
                            <div class="text-right ml-4">
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
                            ${venue.amenities.slice(0, 4).map(amenity => `
                                <span class="text-xs bg-gray-100 rounded-full px-2 py-1">${amenity}</span>
                            `).join('')}
                            ${venue.amenities.length > 4 ? `
                                <span class="text-xs text-gray-500 px-2 py-1">+${venue.amenities.length - 4} more</span>
                            ` : ''}
                        </div>
                    </div>
                    
                    <div class="mt-auto flex flex-wrap gap-2">
                        <button onclick="toggleVenueSelection(${venue.id})" 
                            class="flex-1 ${isSelected ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} text-white px-4 py-1 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                            ${isSelected ? `
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                                Remove
                            ` : `
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Add
                            `}
                        </button>
                        <button onclick="showVenueInfo(${venue.id})" 
                            class="flex-1 border-2 border-[#0a2540] text-[#0a2540] px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join('');
    
    // Update results count
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `${filteredVenues.length} venue${filteredVenues.length !== 1 ? 's' : ''} found`;
    }
}

// Filter Venues
function filterVenues() {
    const destination = document.getElementById('eventDestination')?.value?.toLowerCase() || '';
    const startDate = document.getElementById('eventStartDate')?.value || '';
    const endDate = document.getElementById('eventEndDate')?.value || '';
    const roomLayout = document.getElementById('roomLayout')?.value || '';
    const numberOfPeople = parseInt(document.getElementById('numberOfPeople')?.value) || 0;
    const sleepingRooms = parseInt(document.getElementById('sleepingRooms')?.value) || 0;
    const minRoomSize = parseInt(document.getElementById('minRoomSize')?.value) || 0;
    const roomSizeUnit = document.getElementById('roomSizeUnit')?.value || 'sqft';
    
    // Convert room size to sqft if needed
    let minRoomSizeSqft = minRoomSize;
    if (roomSizeUnit === 'sqm' && minRoomSize > 0) {
        minRoomSizeSqft = minRoomSize * 10.764; // Convert sqm to sqft
    }
    
    filteredVenues = venues.filter(venue => {
        // Destination filter
        if (destination) {
            const venueLocation = venue.location.toLowerCase();
            const venueName = venue.name.toLowerCase();
            if (!venueLocation.includes(destination) && !venueName.includes(destination)) {
                return false;
            }
        }
        
        // Room Layout filter
        if (roomLayout && venue.roomLayouts && !venue.roomLayouts.includes(roomLayout)) {
            return false;
        }
        
        // Number of People filter
        if (numberOfPeople > 0) {
            if (numberOfPeople < venue.capacity.min || numberOfPeople > venue.capacity.max) {
                return false;
            }
        }
        
        // Min Room Size filter
        if (minRoomSizeSqft > 0 && venue.minRoomSize && venue.minRoomSize < minRoomSizeSqft) {
            return false;
        }
        
        // Sleeping Rooms filter
        if (sleepingRooms > 0) {
            if (!venue.sleepingRoomsAvailable || (venue.sleepingRoomsCount && venue.sleepingRoomsCount < sleepingRooms)) {
                return false;
            }
        }
        
        return true;
    });
    
    renderVenues();
}

// Toggle venue selection
function toggleVenueSelection(venueId) {
    const venue = filteredVenues.find(v => v.id === venueId);
    if (!venue) return;
    
    const index = selectedVenues.findIndex(v => v.id === venueId);
    
    if (index >= 0) {
        // Remove from selection
        selectedVenues.splice(index, 1);
    } else {
        // Add to selection
        selectedVenues.push({
            id: venue.id,
            name: venue.name,
            location: venue.location,
            price: venue.price,
            capacity: venue.capacity,
            image: venue.images ? venue.images[0] : venue.image
        });
    }
    
    updateSelectionSummary();
    renderVenues(); // Re-render to update selection indicators
}

// Remove selected venue
function removeSelectedVenue(venueId) {
    selectedVenues = selectedVenues.filter(v => v.id !== venueId);
    updateSelectionSummary();
    renderVenues();
}

// Update selection summary panel
function updateSelectionSummary() {
    const container = document.getElementById('selectedVenuesList');
    const countElement = document.getElementById('venueSelectionCount');
    const totalElement = document.getElementById('totalVenueAmount');
    const proceedBtn = document.getElementById('proceedToBookingBtn');
    
    // Mobile cart drawer elements
    const cartDrawerContainer = document.getElementById('venueCartDrawerList');
    const cartDrawerTotal = document.getElementById('venueCartDrawerTotal');
    const cartDrawerProceedBtn = document.getElementById('venueCartDrawerProceedBtn');
    const cartBadge = document.getElementById('venueCartBadge');
    
    const count = selectedVenues.length;
    
    // Update count badges
    if (countElement) countElement.textContent = count;
    if (cartBadge) {
        cartBadge.textContent = count;
        if (count > 0) {
            cartBadge.classList.remove('hidden');
        } else {
            cartBadge.classList.add('hidden');
        }
    }
    
    let venuesListHtml = '';
    let totalAmount = 0;
    
    if (selectedVenues.length === 0) {
        venuesListHtml = '<p class="text-gray-500 text-sm text-center py-4">No venues selected yet</p>';
        totalAmount = 0;
        if (proceedBtn) proceedBtn.disabled = true;
        if (cartDrawerProceedBtn) cartDrawerProceedBtn.disabled = true;
    } else {
        if (proceedBtn) proceedBtn.disabled = false;
        if (cartDrawerProceedBtn) cartDrawerProceedBtn.disabled = false;
        
        venuesListHtml = selectedVenues.map(venue => {
            totalAmount += venue.price;
            return `
                <div class="border rounded-lg p-4 relative bg-gray-50">
                    <button onclick="removeSelectedVenue(${venue.id})" 
                        class="absolute top-2 right-2 text-red-600 hover:text-red-800 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <h4 class="font-semibold text-[#0a2540] mb-2 pr-6">${venue.name}</h4>
                    <div class="text-sm text-gray-600 space-y-1 mb-2">
                        <div>${venue.location}, Ghana</div>
                        <div>Capacity: ${venue.capacity.min}-${venue.capacity.max} guests</div>
                    </div>
                    <div class="text-lg font-bold text-[#0a2540] mt-2">$${venue.price.toLocaleString()}</div>
                </div>
            `;
        }).join('');
    }
    
    // Update desktop summary panel
    if (container) container.innerHTML = venuesListHtml;
    if (totalElement) totalElement.textContent = `$${totalAmount.toLocaleString()}`;
    
    // Update mobile cart drawer
    if (cartDrawerContainer) cartDrawerContainer.innerHTML = venuesListHtml;
    if (cartDrawerTotal) cartDrawerTotal.textContent = `$${totalAmount.toLocaleString()}`;
}

// Show venue info modal
function showVenueInfo(venueId) {
    const venue = venues.find(v => v.id === venueId);
    if (!venue) return;
    
    const modal = document.getElementById('venueInfoModal');
    const content = document.getElementById('venueInfoContent');
    
    if (!modal || !content) return;
    
    const roomLayoutNames = {
        "1": "Banquet - 5' Tables (8 per)",
        "2": "Banquet - 6' Tables (10 per)",
        "14": "Crescent Rounds (5-7 per)",
        "13": "Classroom",
        "9": "Theater",
        "3": "Boardroom",
        "4": "Hollow Square",
        "5": "Reception (no seating)",
        "10": "Convention - 8x10",
        "11": "Convention - 10x10",
        "12": "U-Shape",
        "6": "Registration Desk"
    };
    
    const availableLayouts = venue.roomLayouts ? venue.roomLayouts.map(layout => roomLayoutNames[layout] || layout).join(', ') : 'Various layouts available';
    
    content.innerHTML = `
        <div class="mb-6">
            <h2 class="text-2xl font-bold text-[#0a2540] mb-2">${venue.name}</h2>
            <div class="flex items-center text-gray-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-1">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ${venue.location}, Ghana
            </div>
            <div class="flex items-center space-x-2 mb-4">
                <div class="flex">${createStarRating(venue.rating)}</div>
                <span class="text-sm text-gray-600">(${venue.reviews} reviews)</span>
            </div>
        </div>
        
        ${venue.images && venue.images.length > 0 ? `
            <div class="mb-6">
                <div class="grid grid-cols-2 gap-2">
                    ${venue.images.slice(0, 4).map(img => `
                        <img src="${img}" alt="${venue.name}" class="w-full h-32 object-cover rounded-lg">
                    `).join('')}
                </div>
            </div>
        ` : ''}
        
        <div class="mb-6">
            <h3 class="text-lg font-semibold text-[#0a2540] mb-2">Description</h3>
            <p class="text-gray-700">${venue.description}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
                <h3 class="text-lg font-semibold text-[#0a2540] mb-2">Capacity</h3>
                <p class="text-gray-700">${venue.capacity.min}-${venue.capacity.max} guests</p>
            </div>
            <div>
                <h3 class="text-lg font-semibold text-[#0a2540] mb-2">Room Size</h3>
                <p class="text-gray-700">${venue.minRoomSize ? `${venue.minRoomSize.toLocaleString()} - ${venue.maxRoomSize ? venue.maxRoomSize.toLocaleString() : 'N/A'}` : 'N/A'} sq ft</p>
            </div>
            <div>
                <h3 class="text-lg font-semibold text-[#0a2540] mb-2">Room Layouts</h3>
                <p class="text-gray-700 text-sm">${availableLayouts}</p>
            </div>
            <div>
                <h3 class="text-lg font-semibold text-[#0a2540] mb-2">Sleeping Rooms</h3>
                <p class="text-gray-700">${venue.sleepingRoomsAvailable ? (venue.sleepingRoomsCount ? `${venue.sleepingRoomsCount} rooms available` : 'Available') : 'Not available'}</p>
            </div>
        </div>
        
        <div class="mb-6">
            <h3 class="text-lg font-semibold text-[#0a2540] mb-3">Amenities</h3>
            <div class="grid grid-cols-2 gap-2">
                ${venue.amenities.map(amenity => `
                    <div class="flex items-center gap-2 text-sm text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-600">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>${amenity}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="border-t pt-4">
            <div class="flex justify-between items-center mb-4">
                <span class="text-xl font-semibold text-[#0a2540]">Price</span>
                <span class="text-3xl font-bold text-green-600">$${venue.price.toLocaleString()}</span>
            </div>
            <button onclick="toggleVenueSelection(${venue.id}); closeVenueInfo();" 
                class="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                ${selectedVenues.some(v => v.id === venue.id) ? 'Remove from Selection' : 'Add to Selection'}
            </button>
        </div>
    `;
    
    modal.classList.remove('hidden');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// Close venue info modal
function closeVenueInfo() {
    const modal = document.getElementById('venueInfoModal');
    if (!modal) return;
    
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.style.opacity = '';
    }, 300);
}

// Proceed to booking
function proceedToBooking() {
    if (selectedVenues.length === 0) return;
    
    // Store search criteria
    const searchCriteria = {
        destination: document.getElementById('eventDestination')?.value || '',
        startDate: document.getElementById('eventStartDate')?.value || '',
        endDate: document.getElementById('eventEndDate')?.value || '',
        roomLayout: document.getElementById('roomLayout')?.value || '',
        numberOfPeople: parseInt(document.getElementById('numberOfPeople')?.value) || 0,
        sleepingRooms: parseInt(document.getElementById('sleepingRooms')?.value) || 0,
        minRoomSize: parseInt(document.getElementById('minRoomSize')?.value) || 0,
        roomSizeUnit: document.getElementById('roomSizeUnit')?.value || 'sqft'
    };
    
    localStorage.setItem('selectedVenues', JSON.stringify(selectedVenues));
    localStorage.setItem('eventSearchCriteria', JSON.stringify(searchCriteria));
    
    window.location.href = 'event-venues-booking.html';
}

// Mobile cart drawer functions
function toggleVenueCartDrawer() {
    const drawer = document.getElementById('venueCartDrawer');
    if (!drawer) return;
    
    if (drawer.classList.contains('hidden')) {
        openVenueCartDrawer();
    } else {
        closeVenueCartDrawer();
    }
}

function openVenueCartDrawer() {
    const drawer = document.getElementById('venueCartDrawer');
    const drawerContent = document.getElementById('venueCartDrawerContent');
    
    if (!drawer || !drawerContent) return;
    
    drawer.classList.remove('hidden');
    void drawer.offsetWidth;
    drawer.style.opacity = '0';
    drawerContent.classList.remove('translate-y-full');
    drawerContent.classList.add('translate-y-0');
    
    setTimeout(() => {
        drawer.style.opacity = '1';
    }, 10);
}

function closeVenueCartDrawer() {
    const drawer = document.getElementById('venueCartDrawer');
    const drawerContent = document.getElementById('venueCartDrawerContent');
    
    if (!drawer || !drawerContent) return;
    
    drawer.style.opacity = '0';
    drawerContent.classList.remove('translate-y-0');
    drawerContent.classList.add('translate-y-full');
    
    setTimeout(() => {
        drawer.classList.add('hidden');
        drawer.style.opacity = '';
    }, 300);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load URL parameters if any
    const urlParams = new URLSearchParams(window.location.search);
    const destination = urlParams.get('location');
    const eventDate = urlParams.get('eventDate');
    const guestCount = urlParams.get('guestCount');
    const eventType = urlParams.get('eventType');
    
    if (destination) {
        const destInput = document.getElementById('eventDestination');
        if (destInput) destInput.value = destination;
    }
    
    if (eventDate) {
        const dateInput = document.getElementById('eventStartDate');
        if (dateInput) dateInput.value = eventDate;
    }
    
    if (guestCount || eventDate || destination || eventType) {
        filterVenues();
    } else {
        renderVenues();
    }
    
    updateSelectionSummary();
});

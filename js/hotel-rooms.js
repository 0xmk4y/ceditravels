// Hotel data from localStorage
let hotel = null;
let selectedRooms = [];
let nights = 8; // Default, will be calculated from dates
let carouselStates = {};

// Sample room types data - in production this would come from API
const roomTypesData = {
    default: [
        {
            id: 1,
            name: "One Bedroom Superior Suite",
            capacity: { adults: 2, children: 0 },
            images: [
                "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
                "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"
            ],
            pricing: {
                single: 190,
                double: 250
            },
            breakfastPrice: 20,
            size: "26 m² / 280 ft²",
            description: "Spacious and elegant suite featuring a separate bedroom, modern amenities, and comfortable living space. Perfect for extended stays with all the comforts of home.",
            amenities: [
                "Free WiFi",
                "Air conditioning",
                "Mini refrigerator",
                "Tea/Coffee maker",
                "Flat-screen TV",
                "Private bathroom",
                "Room service",
                "Safe deposit box",
                "Work desk",
                "Hair dryer"
            ]
        },
        {
            id: 2,
            name: "Executive Suite",
            capacity: { adults: 2, children: 0 },
            images: [
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
                "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800"
            ],
            pricing: {
                single: 220,
                double: 280
            },
            breakfastPrice: 25,
            size: "35 m² / 377 ft²",
            description: "Luxurious executive suite with premium furnishings, large windows, and panoramic views. Ideal for business travelers and those seeking enhanced comfort.",
            amenities: [
                "Free WiFi",
                "Air conditioning",
                "Mini refrigerator",
                "Tea/Coffee maker",
                "Flat-screen TV",
                "Private bathroom",
                "Room service",
                "Safe deposit box",
                "Executive work desk",
                "Hair dryer",
                "Separate living area",
                "Premium linens"
            ]
        },
        {
            id: 3,
            name: "Deluxe Double Room",
            capacity: { adults: 2, children: 1 },
            images: [
                "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
                "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800"
            ],
            pricing: {
                single: 150,
                double: 200
            },
            breakfastPrice: 15,
            size: "24 m² / 258 ft²",
            description: "Comfortable and well-appointed room featuring double bed, modern amenities, and family-friendly design. Great value for families and couples.",
            amenities: [
                "Free WiFi",
                "Air conditioning",
                "Mini refrigerator",
                "Tea/Coffee maker",
                "Flat-screen TV",
                "Private bathroom",
                "Room service",
                "Safe deposit box",
                "Work desk",
                "Hair dryer"
            ]
        }
    ]
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    loadHotelData();
    loadRoomTypes();
    initImageCarousels();
});

// Load hotel data from localStorage
function loadHotelData() {
    hotel = JSON.parse(localStorage.getItem('selectedHotel'));
    
    if (!hotel) {
        // Redirect if no hotel selected
        window.location.href = 'hotels.html';
        return;
    }

    // Display hotel info
    document.getElementById('hotelName').textContent = hotel.name || 'Hotel Name';
    displayRating(hotel.rating || 4);
    document.getElementById('hotelRatingText').textContent = `(${hotel.rating || 4}/5)`;

    // Get dates from localStorage or use defaults
    const checkIn = localStorage.getItem('checkInDate') || '2025-10-15';
    const checkOut = localStorage.getItem('checkOutDate') || '2025-10-23';
    
    // Calculate nights
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const diffTime = Math.abs(checkOutDate - checkInDate);
    nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Format dates for display
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    document.getElementById('checkInDate').textContent = `Check In: ${formatDate(checkIn)}`;
    document.getElementById('checkOutDate').textContent = `Check Out: ${formatDate(checkOut)}`;
    document.getElementById('nightsCount').textContent = `Nights: ${nights}`;
}

// Display star rating
function displayRating(rating) {
    const container = document.getElementById('hotelRating');
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="${i <= rating ? 'text-[#fdbe19]' : 'text-gray-300'}">★</span>`;
    }
    container.innerHTML = stars;
}

// Load and render room types
function loadRoomTypes() {
    const container = document.getElementById('roomListings');
    const roomTypes = roomTypesData.default;

    container.innerHTML = roomTypes.map(room => createRoomCard(room)).join('');
    
    // Initialize carousel states and default selections
    roomTypes.forEach(room => {
        carouselStates[`room-${room.id}`] = { currentIndex: 0 };
        // Set default occupancy to single
        const roomCard = document.querySelector(`[data-room-id="${room.id}"]`);
        if (roomCard) {
            const singleOption = roomCard.querySelector('[data-occupancy="single"]');
            if (singleOption) {
                singleOption.classList.add('border-blue-600', 'bg-blue-50');
                const label = singleOption.querySelector('.selected-label');
                if (label) label.classList.remove('hidden');
            }
            // Set default breakfast to "No"
            const noBreakfastBtn = roomCard.querySelector('[data-breakfast="false"]');
            if (noBreakfastBtn) {
                noBreakfastBtn.classList.add('bg-red-500', 'text-white', 'border-red-600');
                const svg = noBreakfastBtn.querySelector('svg');
                if (svg) svg.classList.remove('hidden');
            }
        }
    });
}

// Create room card HTML
function createRoomCard(room) {
    const carouselId = `room-${room.id}`;
    const imagesHtml = room.images.map((img, idx) => `
        <img src="${img}" alt="${room.name}" 
            class="room-carousel-img w-full h-full object-cover transition-opacity duration-500 ease-in-out ${idx === 0 ? 'opacity-100' : 'opacity-0 absolute inset-0'}"
            data-carousel-img="${idx}">
    `).join('');

    const dotsHtml = room.images.map((_, idx) => `
        <div class="room-carousel-dot w-2 h-2 rounded-full cursor-pointer ${idx === 0 ? 'bg-white' : 'bg-white/50'}" 
            data-dot="${idx}" onclick="goToCarouselImage('${carouselId}', ${idx}, ${room.images.length})"></div>
    `).join('');

    return `
        <div class="bg-white rounded-lg border shadow-md overflow-hidden hover:shadow-lg transition-shadow" data-room-id="${room.id}">
            <!-- Image Carousel -->
            <div class="relative w-full h-[420px] overflow-hidden group" data-carousel-id="${carouselId}">
                <div class="relative w-full h-full">
                    ${imagesHtml}
                </div>
                ${room.images.length > 1 ? `
                    <button onclick="prevCarouselImage('${carouselId}', ${room.images.length})" 
                        class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button onclick="nextCarouselImage('${carouselId}', ${room.images.length})" 
                        class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        ${dotsHtml}
                    </div>
                ` : ''}
            </div>

            <!-- Room Details -->
            <div class="p-3 md:p-6">
                <!-- Room Header -->
                <div class="mb-4">
                    <h3 class="text-2xl font-bold text-[#0a2540] mb-2">${room.name}</h3>
                    <div class="flex items-center gap-4 text-sm text-gray-600">
                        <div class="flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            </svg>
                            <span>${room.size}</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                            <span>${room.capacity.adults} Adult${room.capacity.adults > 1 ? 's' : ''}</span>
                            ${room.capacity.children > 0 ? `<span class="text-gray-400">•</span><span>${room.capacity.children} Child${room.capacity.children > 1 ? 'ren' : ''}</span>` : ''}
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <p class="text-gray-600 text-sm leading-relaxed mb-5">${room.description}</p>
                
                <!-- Rates Info Badge -->
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-5">
                    <p class="text-sm text-blue-800 font-medium">✓ Rates Inclusive of Taxes & Daily Shuttles</p>
                </div>

                <!-- Occupancy Pricing Options -->
                <div class="mb-5">
                    <label class="block text-sm font-semibold text-gray-700 mb-3">Select Occupancy</label>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="occupancy-option border-2 rounded-lg p-4 cursor-pointer hover:border-blue-400 transition-all duration-200" 
                            data-room-id="${room.id}" 
                            data-occupancy="single"
                            onclick="selectOccupancy(${room.id}, 'single', ${room.pricing.single})">
                            <div class="flex items-center justify-between mb-1">
                                <span class="font-semibold text-gray-800 text-sm">Single</span>
                                <span class="text-xs bg-blue-600 text-white px-2 py-1 rounded hidden selected-label">Selected</span>
                            </div>
                            <div class="text-2xl font-bold text-[#0a2540]">$${room.pricing.single.toFixed(2)}</div>
                            <div class="text-xs text-gray-500 mt-1">per night</div>
                        </div>
                        <div class="occupancy-option border-2 rounded-lg p-4 cursor-pointer hover:border-blue-400 transition-all duration-200" 
                            data-room-id="${room.id}" 
                            data-occupancy="double"
                            onclick="selectOccupancy(${room.id}, 'double', ${room.pricing.double})">
                            <div class="flex items-center justify-between mb-1">
                                <span class="font-semibold text-gray-800 text-sm">Double</span>
                                <span class="text-xs bg-blue-600 text-white px-2 py-1 rounded hidden selected-label">Selected</span>
                            </div>
                            <div class="text-2xl font-bold text-[#0a2540]">$${room.pricing.double.toFixed(2)}</div>
                            <div class="text-xs text-gray-500 mt-1">per night</div>
                        </div>
                    </div>
                </div>

                <!-- Breakfast Selector -->
                <div class="mb-5">
                    <label class="block text-sm font-semibold text-gray-700 mb-3">Breakfast Included? (+$${room.breakfastPrice}/night per room)</label>
                    <div class="grid grid-cols-2 gap-3">
                        <button onclick="toggleBreakfast(${room.id}, true)" 
                            class="breakfast-btn px-4 py-2 rounded-lg border-2 border-gray-300 hover:border-green-500 transition-all duration-200 font-medium"
                            data-room-id="${room.id}" 
                            data-breakfast="true">
                            <div class="flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="hidden">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>Yes</span>
                            </div>
                        </button>
                        <button onclick="toggleBreakfast(${room.id}, false)" 
                            class="breakfast-btn px-4 py-2 rounded-lg border-2 border-gray-300 hover:border-red-500 transition-all duration-200 font-medium"
                            data-room-id="${room.id}" 
                            data-breakfast="false">
                            <div class="flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="hidden">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                                <span>No</span>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Room Quantity Selector -->
                <div class="mb-5">
                    <label class="block text-sm font-semibold text-gray-700 mb-3">Number of Rooms</label>
                    <div class="flex items-center gap-3">
                        <button onclick="updateRoomQuantity(${room.id}, -1)" 
                            class="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <input type="number" 
                            id="quantity-${room.id}" 
                            value="1" 
                            min="1" 
                            max="10"
                            onchange="updateRoomQuantityFromInput(${room.id})"
                            class="w-20 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500">
                        <button onclick="updateRoomQuantity(${room.id}, 1)" 
                            class="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Divider -->
                <div class="border-t border-gray-200 my-5"></div>

                <!-- Total Price Display -->
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 mb-5 border border-green-200">
                    <div class="flex items-baseline justify-between mb-1">
                        <span class="text-sm text-gray-600">Total Price</span>
                        <span class="text-xs text-gray-500">${nights} night${nights > 1 ? 's' : ''}</span>
                    </div>
                    <div id="room-total-${room.id}" class="text-xl font-bold text-green-700">
                        $${calculateRoomTotal(room.id, room.pricing.single, false, 1).toFixed(2)}
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-3">
                    <button onclick="selectRoom(${room.id})" 
                        class="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Select Room
                    </button>
                    <button onclick="showRoomInfo(${room.id})" 
                        class="px-5 text-[#0a2540] border-2 border-[#0a2540] py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        Details
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Carousel functions
function initImageCarousels() {
    // Auto-advance carousels
    Object.keys(carouselStates).forEach(carouselId => {
        const roomId = carouselId.replace('room-', '');
        const room = roomTypesData.default.find(r => r.id == roomId);
        if (room && room.images.length > 1) {
            setInterval(() => {
                const currentIndex = carouselStates[carouselId].currentIndex || 0;
                const nextIndex = (currentIndex + 1) % room.images.length;
                goToCarouselImage(carouselId, nextIndex, room.images.length);
            }, 5000);
        }
    });
}

function goToCarouselImage(carouselId, imageIndex, totalImages) {
    const carousel = document.querySelector(`[data-carousel-id="${carouselId}"]`);
    if (!carousel) return;

    const images = carousel.querySelectorAll('.room-carousel-img');
    const dots = carousel.querySelectorAll('.room-carousel-dot');

    images.forEach((img, idx) => {
        if (idx === imageIndex) {
            img.classList.remove('opacity-0');
            img.classList.add('opacity-100');
        } else {
            img.classList.remove('opacity-100');
            img.classList.add('opacity-0');
        }
    });

    dots.forEach((dot, idx) => {
        if (idx === imageIndex) {
            dot.classList.remove('bg-white/50');
            dot.classList.add('bg-white');
        } else {
            dot.classList.remove('bg-white');
            dot.classList.add('bg-white/50');
        }
    });

    carouselStates[carouselId].currentIndex = imageIndex;
}

function prevCarouselImage(carouselId, totalImages) {
    const currentIndex = carouselStates[carouselId]?.currentIndex || 0;
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    goToCarouselImage(carouselId, prevIndex, totalImages);
}

function nextCarouselImage(carouselId, totalImages) {
    const currentIndex = carouselStates[carouselId]?.currentIndex || 0;
    const nextIndex = (currentIndex + 1) % totalImages;
    goToCarouselImage(carouselId, nextIndex, totalImages);
}

// Occupancy selection
function selectOccupancy(roomId, occupancy, pricePerNight) {
    // Update UI
    const roomCard = document.querySelector(`[data-room-id="${roomId}"]`);
    const options = roomCard.querySelectorAll('.occupancy-option');
    options.forEach(opt => {
        opt.classList.remove('border-blue-600', 'bg-blue-50');
        opt.querySelector('.selected-label').classList.add('hidden');
    });

    const selectedOption = roomCard.querySelector(`[data-occupancy="${occupancy}"]`);
    selectedOption.classList.add('border-blue-600', 'bg-blue-50');
    selectedOption.querySelector('.selected-label').classList.remove('hidden');

    // Update stored occupancy if room is already selected
    const selectedRoom = selectedRooms.find(r => r.roomId === roomId);
    if (selectedRoom) {
        selectedRoom.occupancy = occupancy;
        selectedRoom.pricePerNight = pricePerNight;
        updateRoomTotal(roomId);
        updateSummaryPanel();
    } else {
        // Update total display
        const room = roomTypesData.default.find(r => r.id === roomId);
        const quantity = parseInt(document.getElementById(`quantity-${roomId}`).value) || 1;
        const breakfast = roomCard.querySelector('.breakfast-btn[data-breakfast="true"]')?.classList.contains('bg-green-500') || false;
        const total = calculateRoomTotal(roomId, pricePerNight, breakfast, quantity);
        document.getElementById(`room-total-${roomId}`).textContent = `Total $${total.toFixed(2)} (${nights} nights)`;
    }
}

// Breakfast toggle
function toggleBreakfast(roomId, include) {
    const roomCard = document.querySelector(`[data-room-id="${roomId}"]`);
    const breakfastBtns = roomCard.querySelectorAll('.breakfast-btn');
    
    breakfastBtns.forEach(btn => {
        btn.classList.remove('bg-green-500', 'text-white', 'border-green-600', 'bg-red-500', 'border-red-600');
        const svg = btn.querySelector('svg');
        if (svg) svg.classList.add('hidden');
    });

    const selectedBtn = roomCard.querySelector(`[data-breakfast="${include}"]`);
    if (include) {
        selectedBtn.classList.add('bg-green-500', 'text-white', 'border-green-600');
    } else {
        selectedBtn.classList.add('bg-red-500', 'text-white', 'border-red-600');
    }
    const svg = selectedBtn.querySelector('svg');
    if (svg) svg.classList.remove('hidden');

    // Update if room is already selected
    const selectedRoom = selectedRooms.find(r => r.roomId === roomId);
    if (selectedRoom) {
        selectedRoom.breakfast = include;
        updateRoomTotal(roomId);
        updateSummaryPanel();
    } else {
        // Update total display
        const room = roomTypesData.default.find(r => r.id === roomId);
        const occupancyOpt = roomCard.querySelector('.occupancy-option.border-blue-600') || roomCard.querySelector('[data-occupancy="single"]');
        const occupancy = occupancyOpt.getAttribute('data-occupancy');
        const pricePerNight = room.pricing[occupancy];
        const quantity = parseInt(document.getElementById(`quantity-${roomId}`).value) || 1;
        const total = calculateRoomTotal(roomId, pricePerNight, include, quantity);
        document.getElementById(`room-total-${roomId}`).textContent = `Total $${total.toFixed(2)} (${nights} nights)`;
    }
}

// Room quantity update
function updateRoomQuantity(roomId, change) {
    const input = document.getElementById(`quantity-${roomId}`);
    let value = parseInt(input.value) || 1;
    value = Math.max(1, Math.min(10, value + change));
    input.value = value;
    updateRoomQuantityFromInput(roomId);
}

function updateRoomQuantityFromInput(roomId) {
    const input = document.getElementById(`quantity-${roomId}`);
    const quantity = parseInt(input.value) || 1;
    
    // Update if room is already selected
    const selectedRoom = selectedRooms.find(r => r.roomId === roomId);
    if (selectedRoom) {
        selectedRoom.quantity = quantity;
        updateRoomTotal(roomId);
        updateSummaryPanel();
    } else {
        // Update total display
        const roomCard = document.querySelector(`[data-room-id="${roomId}"]`);
        const room = roomTypesData.default.find(r => r.id === roomId);
        const occupancyOpt = roomCard.querySelector('.occupancy-option.border-blue-600') || roomCard.querySelector('[data-occupancy="single"]');
        const occupancy = occupancyOpt.getAttribute('data-occupancy');
        const pricePerNight = room.pricing[occupancy];
        const breakfastBtn = roomCard.querySelector('.breakfast-btn.bg-green-500');
        const breakfast = breakfastBtn !== null;
        const total = calculateRoomTotal(roomId, pricePerNight, breakfast, quantity);
        document.getElementById(`room-total-${roomId}`).textContent = `Total $${total.toFixed(2)} (${nights} nights)`;
    }
}

// Calculate room total
function calculateRoomTotal(roomId, pricePerNight, breakfast, quantity) {
    const room = roomTypesData.default.find(r => r.id === roomId);
    let basePrice = pricePerNight * nights * quantity;
    if (breakfast && room) {
        basePrice += room.breakfastPrice * nights * quantity;
    }
    return basePrice;
}

// Update room total display
function updateRoomTotal(roomId) {
    const selectedRoom = selectedRooms.find(r => r.roomId === roomId);
    if (!selectedRoom) return;

    const total = calculateRoomTotal(roomId, selectedRoom.pricePerNight, selectedRoom.breakfast, selectedRoom.quantity);
    document.getElementById(`room-total-${roomId}`).textContent = `Total $${total.toFixed(2)} (${nights} nights)`;
    selectedRoom.total = total;
}

// Select room
function selectRoom(roomId) {
    const roomCard = document.querySelector(`[data-room-id="${roomId}"]`);
    const room = roomTypesData.default.find(r => r.id === roomId);
    
    // Get selected values
    const occupancyOpt = roomCard.querySelector('.occupancy-option.border-blue-600') || roomCard.querySelector('[data-occupancy="single"]');
    const occupancy = occupancyOpt.getAttribute('data-occupancy');
    const pricePerNight = room.pricing[occupancy];
    
    const breakfastBtn = roomCard.querySelector('.breakfast-btn.bg-green-500');
    const breakfast = breakfastBtn !== null;
    
    const quantity = parseInt(document.getElementById(`quantity-${roomId}`).value) || 1;
    const total = calculateRoomTotal(roomId, pricePerNight, breakfast, quantity);

    // Check if room already selected
    const existingIndex = selectedRooms.findIndex(r => r.roomId === roomId);
    
    const roomSelection = {
        roomId: roomId,
        roomName: room.name,
        occupancy: occupancy,
        breakfast: breakfast,
        quantity: quantity,
        pricePerNight: pricePerNight,
        total: total
    };

    if (existingIndex >= 0) {
        selectedRooms[existingIndex] = roomSelection;
    } else {
        selectedRooms.push(roomSelection);
    }

    updateSummaryPanel();
}

// Remove selected room
function removeSelectedRoom(roomId) {
    selectedRooms = selectedRooms.filter(r => r.roomId !== roomId);
    updateSummaryPanel();
}

// Update summary panel and cart drawer
function updateSummaryPanel() {
    const container = document.getElementById('selectedRoomsList');
    const countElement = document.getElementById('selectionCount');
    const totalElement = document.getElementById('totalAmount');
    const reserveBtn = document.getElementById('reserveNowBtn');
    
    // Cart drawer elements
    const cartDrawerContainer = document.getElementById('cartDrawerRoomsList');
    const cartDrawerTotal = document.getElementById('cartDrawerTotal');
    const cartDrawerReserveBtn = document.getElementById('cartDrawerReserveBtn');
    const cartBadge = document.getElementById('cartBadge');

    // Update count badge
    const count = selectedRooms.length;
    if (countElement) countElement.textContent = count;
    if (cartBadge) {
        cartBadge.textContent = count;
        if (count > 0) {
            cartBadge.classList.remove('hidden');
        } else {
            cartBadge.classList.add('hidden');
        }
    }

    // Room list HTML (shared between summary panel and cart drawer)
    let roomsListHtml = '';
    let totalAmount = 0;

    if (selectedRooms.length === 0) {
        roomsListHtml = '<p class="text-gray-500 text-sm text-center py-4">No rooms selected yet</p>';
        totalAmount = 0;
        if (reserveBtn) reserveBtn.disabled = true;
        if (cartDrawerReserveBtn) cartDrawerReserveBtn.disabled = true;
    } else {
        if (reserveBtn) reserveBtn.disabled = false;
        if (cartDrawerReserveBtn) cartDrawerReserveBtn.disabled = false;

        roomsListHtml = selectedRooms.map(room => {
            totalAmount += room.total;
            const occupancyText = room.occupancy === 'single' ? 'Single Occupancy' : 'Double Occupancy';
            const breakfastText = room.breakfast ? 'Breakfast inclusive' : 'Breakfast not included';
            
            return `
                <div class="border rounded-lg p-4 relative bg-gray-50">
                    <button onclick="removeSelectedRoom(${room.roomId})" 
                        class="absolute top-2 right-2 text-red-600 hover:text-red-800 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <h4 class="font-semibold text-[#0a2540] mb-2 pr-6">${room.roomName}</h4>
                    <div class="text-sm text-gray-600 space-y-1 mb-2">
                        <div>${occupancyText}</div>
                        <div>${breakfastText}</div>
                        <div>${room.quantity} Room${room.quantity > 1 ? 's' : ''}</div>
                    </div>
                    <div class="text-lg font-bold text-[#0a2540] mt-2">$${room.total.toFixed(2)}</div>
                </div>
            `;
        }).join('');
    }

    // Update summary panel (desktop)
    if (container) container.innerHTML = roomsListHtml;
    if (totalElement) totalElement.textContent = `$${totalAmount.toFixed(2)}`;

    // Update cart drawer (mobile)
    if (cartDrawerContainer) cartDrawerContainer.innerHTML = roomsListHtml;
    if (cartDrawerTotal) cartDrawerTotal.textContent = `$${totalAmount.toFixed(2)}`;
}

// Reserve Now - navigate to booking page
function reserveNow() {
    if (selectedRooms.length === 0) return;
    
    // Store selected rooms in localStorage
    localStorage.setItem('selectedRooms', JSON.stringify(selectedRooms));
    localStorage.setItem('totalAmount', document.getElementById('totalAmount').textContent);
    
    window.location.href = 'hotel-booking.html';
}

// Show room info modal
function showRoomInfo(roomId) {
    const room = roomTypesData.default.find(r => r.id === roomId);
    if (!room) return;

    const modal = document.getElementById('roomInfoModal');
    const modalContent = document.getElementById('roomInfoContent');

    // Create amenities list HTML
    const amenitiesHtml = room.amenities.map(amenity => `
        <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-gray-700">${amenity}</span>
        </li>
    `).join('');

    modalContent.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-[#0a2540]">${room.name}</h2>
            <button onclick="closeRoomInfo()" class="text-gray-500 hover:text-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>

        <div class="mb-6">
            <img src="${room.images[0]}" alt="${room.name}" class="w-full h-64 object-cover rounded-lg">
        </div>

        <div class="space-y-6">
            <div>
                <h3 class="text-lg font-semibold text-[#0a2540] mb-2">Room Description</h3>
                <p class="text-gray-700 leading-relaxed">${room.description}</p>
            </div>

            <div>
                <h3 class="text-lg font-semibold text-[#0a2540] mb-3">Room Details</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <span class="text-sm text-gray-600">Room Size</span>
                        <p class="font-semibold text-[#0a2540]">${room.size}</p>
                    </div>
                    <div>
                        <span class="text-sm text-gray-600">Capacity</span>
                        <p class="font-semibold text-[#0a2540]">${room.capacity.adults} Adult${room.capacity.adults > 1 ? 's' : ''}${room.capacity.children > 0 ? `, ${room.capacity.children} Child${room.capacity.children > 1 ? 'ren' : ''}` : ''}</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 class="text-lg font-semibold text-[#0a2540] mb-3">Amenities</h3>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${amenitiesHtml}
                </ul>
            </div>
        </div>
    `;

    // Show modal with animation
    modal.classList.remove('hidden');
    // Trigger reflow to ensure the class removal is processed
    void modal.offsetWidth;
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// Close room info modal
function closeRoomInfo() {
    const modal = document.getElementById('roomInfoModal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.style.opacity = '';
    }, 300);
}

// Cart Drawer Functions
function toggleCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    
    if (!drawer) return;
    
    if (drawer.classList.contains('hidden')) {
        openCartDrawer();
    } else {
        closeCartDrawer();
    }
}

function openCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const drawerContent = document.getElementById('cartDrawerContent');
    
    if (!drawer || !drawerContent) return;
    
    drawer.classList.remove('hidden');
    // Trigger reflow
    void drawer.offsetWidth;
    drawer.style.opacity = '0';
    drawerContent.classList.remove('translate-y-full');
    drawerContent.classList.add('translate-y-0');
    
    setTimeout(() => {
        drawer.style.opacity = '1';
    }, 10);
}

function closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const drawerContent = document.getElementById('cartDrawerContent');
    
    if (!drawer || !drawerContent) return;
    
    drawer.style.opacity = '0';
    drawerContent.classList.remove('translate-y-0');
    drawerContent.classList.add('translate-y-full');
    
    setTimeout(() => {
        drawer.classList.add('hidden');
        drawer.style.opacity = '';
    }, 300);
}

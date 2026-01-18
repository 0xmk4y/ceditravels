// Load hotel and selected rooms from localStorage
const hotel = JSON.parse(localStorage.getItem('selectedHotel'));
const selectedRooms = JSON.parse(localStorage.getItem('selectedRooms')) || [];
const totalAmount = localStorage.getItem('totalAmount') || '$0.00';

// Redirect if no hotel or rooms selected
if (!hotel || selectedRooms.length === 0) {
    window.location.href = 'hotel-rooms.html';
}

// Get initial check-in/check-out dates from localStorage (used as defaults)
const initialCheckIn = localStorage.getItem('checkInDate') || '';
const initialCheckOut = localStorage.getItem('checkOutDate') || '';

// Generate guest information sections (one per room)
function generateGuestSections() {
    const container = document.getElementById('guestsContainer');
    
    if (!container) return;
    
    if (selectedRooms.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center py-4">No rooms selected. Please go back and select rooms.</p>';
        return;
    }
    
    container.innerHTML = selectedRooms.map((room, index) => {
        const guestNumber = index + 1;
        const occupancyText = room.occupancy === 'single' ? 'Single' : 'Double';
        const breakfastText = room.breakfast ? 'Breakfast Inclusive' : 'Breakfast not included';
        
        // Format date for input field (YYYY-MM-DD)
        const formatDateForInput = (dateStr) => {
            if (!dateStr) return '';
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) return '';
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        };
        
        // Use initial dates as defaults for the first guest, or calculate based on index
        let checkInDate = initialCheckIn;
        let checkOutDate = initialCheckOut;
        
        // If multiple guests, offset dates by index (optional - could keep same dates)
        // For now, all guests use the same initial dates
        checkInDate = formatDateForInput(checkInDate);
        checkOutDate = formatDateForInput(checkOutDate);
        
        return `
            <div class="guest-section border-b pb-6 last:border-b-0" data-guest-number="${guestNumber}">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">${guestNumber}</span>
                    <h3 class="text-xl font-bold text-[#0a2540]">Guest ${guestNumber} Information</h3>
                </div>
                
                <!-- Room Type Tag -->
                <div class="mb-4">
                    <span class="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        ${room.roomName} - ${occupancyText} - ${breakfastText}
                    </span>
                </div>
                
                <!-- Date Selection (Per Guest) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-gray-700 font-medium mb-2">
                            Check-in Date <span class="text-red-600">*</span>
                        </label>
                        <div class="relative">
                            <input type="date" 
                                name="guest-${guestNumber}-checkin" 
                                required
                                value="${checkInDate}"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdbe19]">
                        </div>
                    </div>
                    <div>
                        <label class="block text-gray-700 font-medium mb-2">
                            Check-out Date <span class="text-red-600">*</span>
                        </label>
                        <div class="relative">
                            <input type="date" 
                                name="guest-${guestNumber}-checkout" 
                                required
                                value="${checkOutDate}"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdbe19]">
                        </div>
                    </div>
                </div>
                
                <!-- Guest Details -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label class="block text-gray-700 font-medium mb-2">Title</label>
                        <select name="guest-${guestNumber}-title"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdbe19]">
                            <option value="">Select...</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Ms">Ms</option>
                            <option value="Dr">Dr</option>
                            <option value="Prof">Prof</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-gray-700 font-medium mb-2">
                            First Name <span class="text-red-600">*</span>
                        </label>
                        <input type="text" 
                            name="guest-${guestNumber}-firstName" 
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdbe19]">
                    </div>
                    <div>
                        <label class="block text-gray-700 font-medium mb-2">
                            Surname <span class="text-red-600">*</span>
                        </label>
                        <input type="text" 
                            name="guest-${guestNumber}-surname" 
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdbe19]">
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const guests = [];
    
    // Collect guest information
    selectedRooms.forEach((room, index) => {
        const guestNumber = index + 1;
        const guest = {
            guestNumber: guestNumber,
            room: room,
            title: formData.get(`guest-${guestNumber}-title`) || '',
            firstName: formData.get(`guest-${guestNumber}-firstName`),
            surname: formData.get(`guest-${guestNumber}-surname`),
            checkIn: formData.get(`guest-${guestNumber}-checkin`),
            checkOut: formData.get(`guest-${guestNumber}-checkout`)
        };
        guests.push(guest);
    });
    
    // Collect contact information
    const contactInfo = {
        mobile: formData.get('mobile'),
        email: formData.get('email'),
        address: formData.get('address'),
        nationality: formData.get('nationality') || 'Ghana'
    };
    
    // Collect booking preferences
    const preferences = {
        paymentMethod: formData.get('paymentMethod'),
        airportPickup: formData.get('airportPickup') || 'no',
        specialRequests: formData.get('specialRequests') || ''
    };
    
    // Create booking data object
    const bookingData = {
        type: 'hotel',
        hotel: hotel,
        guests: guests,
        contactInfo: contactInfo,
        preferences: preferences,
        totalAmount: totalAmount,
        timestamp: new Date().toISOString()
    };
    
    // Store booking data in localStorage
    localStorage.setItem('currentBooking', JSON.stringify(bookingData));
    
    // Navigate to payment page
    window.location.href = 'payment.html';
}

// Create star rating HTML
function createStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="${i <= rating ? 'text-[#fdbe19]' : 'text-gray-300'}">★</span>`;
    }
    return stars;
}

// Load booking summary
function loadBookingSummary() {
    const container = document.getElementById('bookingSummary');
    
    if (!container || !hotel || selectedRooms.length === 0) return;
    
    // Calculate total amount
    let totalAmountCalc = 0;
    selectedRooms.forEach(room => {
        totalAmountCalc += room.total || 0;
    });
    
    // Format hotel image
    const hotelImage = hotel.images ? (Array.isArray(hotel.images) ? hotel.images[0] : hotel.images) : (hotel.image || '');
    
    // Build rooms summary HTML
    const roomsSummaryHTML = selectedRooms.map((room, index) => {
        const occupancyText = room.occupancy === 'single' ? 'Single' : 'Double';
        const breakfastText = room.breakfast ? 'With Breakfast' : 'No Breakfast';
        
        return `
            <div class="mb-3 pb-3 border-b last:border-b-0">
                <div class="text-sm font-semibold text-[#0a2540]">${room.roomName}</div>
                <div class="text-xs text-gray-600 mt-1">${occupancyText} • ${breakfastText}</div>
                <div class="text-xs text-gray-600">Quantity: ${room.quantity || 1} Room${(room.quantity || 1) > 1 ? 's' : ''}</div>
                <div class="text-sm font-semibold text-green-600 mt-2">$${(room.total || 0).toFixed(2)}</div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = `
        <h3 class="text-xl font-bold text-[#0a2540] mb-4">Booking Summary</h3>
        
        ${hotelImage ? `<img src="${hotelImage}" alt="${hotel.name}" class="w-full rounded-lg mb-4 h-48 object-cover">` : ''}
        
        <h4 class="font-semibold text-[#0a2540] mb-2">${hotel.name || 'Hotel'}</h4>
        
        ${hotel.rating ? `
        <div class="flex items-center mb-4">
            <div class="flex">${createStarRating(hotel.rating)}</div>
            ${hotel.reviews ? `<span class="text-sm text-gray-600 ml-2">(${hotel.reviews})</span>` : ''}
        </div>
        ` : ''}
        
        <div class="border-t pt-4 mb-4">
            <h5 class="font-semibold text-[#0a2540] mb-3 text-sm">Selected Rooms</h5>
            <div class="space-y-2">
                ${roomsSummaryHTML}
            </div>
        </div>
        
        <div class="border-t pt-4 mt-4">
            <div class="flex justify-between items-center">
                <span class="font-bold text-lg text-[#0a2540]">Total</span>
                <span class="font-bold text-2xl text-green-600">$${totalAmountCalc.toFixed(2)}</span>
            </div>
        </div>
    `;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Generate guest sections
    generateGuestSections();
    
    // Load booking summary
    loadBookingSummary();
    
    // Attach form submit handler
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleFormSubmit);
    }
});

// Load selected venues and search criteria from localStorage
let selectedVenues = [];
let searchCriteria = {};

// Room layout names mapping
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

function loadBookingData() {
    const venuesData = localStorage.getItem('selectedVenues');
    const criteriaData = localStorage.getItem('eventSearchCriteria');
    
    if (!venuesData || venuesData === '[]') {
        // No venues selected, redirect back
        alert('No venues selected. Please select venues first.');
        window.location.href = 'events.html';
        return;
    }
    
    selectedVenues = JSON.parse(venuesData);
    if (criteriaData) {
        searchCriteria = JSON.parse(criteriaData);
    }
    
    generateVenueSections();
    loadBookingSummary();
}

function generateVenueSections() {
    const container = document.getElementById('venuesContainer');
    if (!container) return;
    
    container.innerHTML = selectedVenues.map((venue, index) => {
        const defaultStartDate = searchCriteria.startDate || '';
        const defaultEndDate = searchCriteria.endDate || '';
        const defaultPeople = searchCriteria.numberOfPeople || '';
        const defaultLayout = searchCriteria.roomLayout || '';
        
        return `
            <div class="border rounded-lg p-6 bg-gray-50">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-bold text-[#0a2540]">Venue ${index + 1}: ${venue.name}</h3>
                    <span class="text-sm text-gray-600">${venue.location}, Ghana</span>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-gray-700 font-medium mb-2">
                            Event Start Date <span class="text-red-600">*</span>
                        </label>
                        <input type="date" name="venue_${venue.id}_startDate" required 
                            value="${defaultStartDate}"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdbe19]">
                    </div>
                    <div>
                        <label class="block text-gray-700 font-medium mb-2">
                            Event End Date <span class="text-red-600">*</span>
                        </label>
                        <input type="date" name="venue_${venue.id}_endDate" required 
                            value="${defaultEndDate}"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdbe19]">
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-gray-700 font-medium mb-2">
                            Number of Attendees <span class="text-red-600">*</span>
                        </label>
                        <input type="number" name="venue_${venue.id}_attendees" required 
                            min="1" value="${defaultPeople}"
                            placeholder="Expected number of attendees"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdbe19]">
                    </div>
                    <div>
                        <label class="block text-gray-700 font-medium mb-2">
                            Room Layout <span class="text-red-600">*</span>
                        </label>
                        <select name="venue_${venue.id}_layout" required
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdbe19]">
                            <option value="">Select Room Layout</option>
                            <option value="1" ${defaultLayout === '1' ? 'selected' : ''}>Banquet - 5' Tables (8 per)</option>
                            <option value="2" ${defaultLayout === '2' ? 'selected' : ''}>Banquet - 6' Tables (10 per)</option>
                            <option value="14" ${defaultLayout === '14' ? 'selected' : ''}>Crescent Rounds (5-7 per)</option>
                            <option value="13" ${defaultLayout === '13' ? 'selected' : ''}>Classroom</option>
                            <option value="9" ${defaultLayout === '9' ? 'selected' : ''}>Theater</option>
                            <option value="3" ${defaultLayout === '3' ? 'selected' : ''}>Boardroom</option>
                            <option value="4" ${defaultLayout === '4' ? 'selected' : ''}>Hollow Square</option>
                            <option value="5" ${defaultLayout === '5' ? 'selected' : ''}>Reception (no seating)</option>
                            <option value="10" ${defaultLayout === '10' ? 'selected' : ''}>Convention - 8x10</option>
                            <option value="11" ${defaultLayout === '11' ? 'selected' : ''}>Convention - 10x10</option>
                            <option value="12" ${defaultLayout === '12' ? 'selected' : ''}>U-Shape</option>
                            <option value="6" ${defaultLayout === '6' ? 'selected' : ''}>Registration Desk</option>
                        </select>
                    </div>
                </div>
                
                ${searchCriteria.sleepingRooms > 0 ? `
                    <div class="mb-4">
                        <label class="block text-gray-700 font-medium mb-2">
                            Number of Sleeping Rooms Required
                        </label>
                        <input type="number" name="venue_${venue.id}_sleepingRooms" 
                            min="0" value="${searchCriteria.sleepingRooms || ''}"
                            placeholder="Number of sleeping rooms"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdbe19]">
                    </div>
                ` : ''}
                
                <div class="mb-4">
                    <label class="block text-gray-700 font-medium mb-2">
                        Special Requirements for this Venue
                    </label>
                    <textarea name="venue_${venue.id}_requirements" rows="3" 
                        placeholder="Any specific requirements for this venue (catering, AV equipment, setup, etc.)"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdbe19]"></textarea>
                </div>
                
                <div class="border-t pt-4">
                    <div class="flex justify-between items-center">
                        <span class="text-gray-700 font-medium">Venue Price</span>
                        <span class="text-xl font-bold text-[#0a2540]">$${venue.price.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function loadBookingSummary() {
    const summaryContainer = document.getElementById('bookingSummary');
    const subtotalElement = document.getElementById('subtotalAmount');
    const taxesElement = document.getElementById('taxesAmount');
    const totalElement = document.getElementById('totalAmount');
    
    if (!summaryContainer) return;
    
    let subtotal = 0;
    
    summaryContainer.innerHTML = selectedVenues.map((venue, index) => {
        subtotal += venue.price;
        return `
            <div class="border-b pb-4">
                <div class="flex items-start gap-4">
                    <img src="${venue.image}" alt="${venue.name}" 
                        class="w-20 h-20 object-cover rounded-lg">
                    <div class="flex-1">
                        <h4 class="font-semibold text-[#0a2540] mb-1">${venue.name}</h4>
                        <p class="text-sm text-gray-600 mb-2">${venue.location}, Ghana</p>
                        <p class="text-sm text-gray-600">Capacity: ${venue.capacity.min}-${venue.capacity.max} guests</p>
                    </div>
                    <div class="text-right">
                        <p class="text-lg font-bold text-[#0a2540]">$${venue.price.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    const taxes = subtotal * 0.15; // 15% tax
    const total = subtotal + taxes;
    
    if (subtotalElement) subtotalElement.textContent = `$${subtotal.toLocaleString()}`;
    if (taxesElement) taxesElement.textContent = `$${taxes.toLocaleString()}`;
    if (totalElement) totalElement.textContent = `$${total.toLocaleString()}`;
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const bookingData = {
        venues: selectedVenues.map(venue => {
            const venueData = {
                venue: venue,
                startDate: formData.get(`venue_${venue.id}_startDate`),
                endDate: formData.get(`venue_${venue.id}_endDate`),
                attendees: parseInt(formData.get(`venue_${venue.id}_attendees`)),
                layout: formData.get(`venue_${venue.id}_layout`),
                layoutName: roomLayoutNames[formData.get(`venue_${venue.id}_layout`)] || '',
                sleepingRooms: formData.get(`venue_${venue.id}_sleepingRooms`) ? parseInt(formData.get(`venue_${venue.id}_sleepingRooms`)) : null,
                requirements: formData.get(`venue_${venue.id}_requirements`) || ''
            };
            return venueData;
        }),
        contact: {
            name: formData.get('contactName'),
            company: formData.get('company'),
            mobile: formData.get('mobile'),
            email: formData.get('email'),
            address: formData.get('address')
        },
        preferences: {
            paymentMethod: formData.get('paymentMethod'),
            eventType: formData.get('eventType'),
            specialRequests: formData.get('specialRequests')
        },
        terms: {
            accepted: formData.get('terms') === 'on',
            cancellationPolicy: formData.get('cancellation') === 'on'
        },
        totalAmount: calculateTotal()
    };
    
    // Store booking data
    localStorage.setItem('currentEventBooking', JSON.stringify(bookingData));
    
    // Redirect to payment page
    window.location.href = 'payment.html';
}

function calculateTotal() {
    let subtotal = selectedVenues.reduce((sum, venue) => sum + venue.price, 0);
    const taxes = subtotal * 0.15;
    return subtotal + taxes;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadBookingData();
    
    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});

const hotel = JSON.parse(localStorage.getItem('selectedHotel'));

if (!hotel) {
    window.location.href = 'hotels.html';
}

function createStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="${i <= rating ? 'text-[#fdbe19]' : 'text-gray-300'}">★</span>`;
    }
    return stars;
}

function loadSummary() {
    const container = document.getElementById('bookingSummary');
    
    container.innerHTML = `
        <img src="${hotel.images ? hotel.images[0] : hotel.image}" alt="${hotel.name}" class="w-full rounded-lg mb-4">
        <h4 class="font-semibold text-[#0a2540] mb-2">${hotel.name}</h4>
        <div class="flex items-center mb-4">
            <div class="flex">${createStarRating(hotel.rating)}</div>
            <span class="text-sm text-gray-600 ml-2">(${hotel.reviews})</span>
        </div>
        
        <div class="border-t pt-4 mb-4">
            <div class="flex justify-between mb-2">
                <span class="text-gray-600">Price per night</span>
                <span class="font-semibold">$${hotel.price}</span>
            </div>
            <div class="flex justify-between mb-2">
                <span class="text-gray-600">Number of nights</span>
                <span class="font-semibold">3</span>
            </div>
            <div class="flex justify-between mb-2">
                <span class="text-gray-600">Taxes & Fees</span>
                <span class="font-semibold">$${(hotel.price * 3 * 0.15).toFixed(2)}</span>
            </div>
        </div>
        
        <div class="border-t pt-4">
            <div class="flex justify-between items-center">
                <span class="font-bold text-lg">Total</span>
                <span class="font-bold text-2xl text-[#0a2540]">$${(hotel.price * 3 * 1.15).toFixed(2)}</span>
            </div>
        </div>
    `;
}

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const bookingData = {
        type: 'hotel',
        hotel: hotel,
        guestName: e.target[0].value + ' ' + e.target[1].value,
        email: e.target[2].value,
        phone: e.target[3].value,
        checkIn: e.target[4].value,
        checkOut: e.target[5].value,
        total: (hotel.price * 3 * 1.15).toFixed(2)
    };
    
    localStorage.setItem('currentBooking', JSON.stringify(bookingData));
    window.location.href = 'payment.html';
});

loadSummary();

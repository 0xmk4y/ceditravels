const flights = [
    {
        id: 1,
        airline: "Africa World Airlines",
        from: "Accra (ACC)",
        to: "Kumasi (KMS)",
        departure: "08:00",
        arrival: "09:00",
        duration: "1h",
        price: 85,
        class: "Economy"
    },
    {
        id: 2,
        airline: "Africa World Airlines",
        from: "Accra (ACC)",
        to: "Kumasi (KMS)",
        departure: "14:30",
        arrival: "15:30",
        duration: "1h",
        price: 90,
        class: "Economy"
    },
    {
        id: 3,
        airline: "Passion Air",
        from: "Accra (ACC)",
        to: "Kumasi (KMS)",
        departure: "10:15",
        arrival: "11:15",
        duration: "1h",
        price: 95,
        class: "Economy"
    },
    {
        id: 4,
        airline: "Africa World Airlines",
        from: "Accra (ACC)",
        to: "Tamale (TML)",
        departure: "07:00",
        arrival: "08:30",
        duration: "1h 30m",
        price: 110,
        class: "Economy"
    },
    {
        id: 5,
        airline: "Passion Air",
        from: "Accra (ACC)",
        to: "Tamale (TML)",
        departure: "16:00",
        arrival: "17:30",
        duration: "1h 30m",
        price: 115,
        class: "Economy"
    },
    {
        id: 6,
        airline: "Africa World Airlines",
        from: "Kumasi (KMS)",
        to: "Accra (ACC)",
        departure: "12:00",
        arrival: "13:00",
        duration: "1h",
        price: 85,
        class: "Economy"
    },
    {
        id: 7,
        airline: "Passion Air",
        from: "Kumasi (KMS)",
        to: "Accra (ACC)",
        departure: "17:00",
        arrival: "18:00",
        duration: "1h",
        price: 90,
        class: "Economy"
    },
    {
        id: 8,
        airline: "Africa World Airlines",
        from: "Tamale (TML)",
        to: "Accra (ACC)",
        departure: "09:30",
        arrival: "11:00",
        duration: "1h 30m",
        price: 110,
        class: "Economy"
    }
];

function renderFlights() {
    const container = document.getElementById('flightListings');
    
    container.innerHTML = flights.map(flight => `
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div>
                    <div class="font-semibold text-[#0a2540] mb-1">${flight.airline}</div>
                    <div class="text-sm text-gray-600">${flight.class}</div>
                </div>
                
                <div class="flex items-center space-x-4">
                    <div class="text-center">
                        <div class="text-xl font-bold text-[#0a2540]">${flight.departure}</div>
                        <div class="text-sm text-gray-600">${flight.from}</div>
                    </div>
                    <div class="flex-1">
                        <div class="text-center text-xs text-gray-500 mb-1">${flight.duration}</div>
                        <div class="h-px bg-gray-300 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400">
                                <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="text-xl font-bold text-[#0a2540]">${flight.arrival}</div>
                        <div class="text-sm text-gray-600">${flight.to}</div>
                    </div>
                </div>
                
                <div class="text-center">
                    <div class="text-2xl font-bold text-[#0a2540]">$${flight.price}</div>
                    <div class="text-sm text-gray-600">per person</div>
                </div>
                
                <div class="text-right">
                    <button onclick="bookFlight(${flight.id})" class="bg-[#fdbe19] text-[#0a2540] px-6 py-2 rounded-lg font-semibold hover:bg-[#fdbe19]/90 transition w-full md:w-auto">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function searchFlights() {
    renderFlights();
}

function bookFlight(id) {
    const flight = flights.find(f => f.id === id);
    if (flight) {
        localStorage.setItem('selectedFlight', JSON.stringify(flight));
        window.location.href = 'flight-booking.html';
    }
}

renderFlights();

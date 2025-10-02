const cars = [
    {
        id: 1,
        name: "Toyota Corolla",
        category: "Economy",
        passengers: 5,
        transmission: "Automatic",
        price: 45,
        location: "Accra",
        rating: 4.5,
        reviews: 156,
        features: ["AC", "Bluetooth", "GPS"],
        image: "https://images.unsplash.com/photo-1647643787408-0b3e85e091ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
        id: 2,
        name: "Toyota RAV4",
        category: "SUV",
        passengers: 7,
        transmission: "Automatic",
        price: 75,
        location: "Accra",
        rating: 5,
        reviews: 203,
        features: ["AC", "4WD", "GPS", "Bluetooth"],
        image: "https://images.unsplash.com/photo-1658590842120-2a0b2a68c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
        id: 3,
        name: "Mercedes-Benz E-Class",
        category: "Luxury",
        passengers: 5,
        transmission: "Automatic",
        price: 120,
        location: "Accra",
        rating: 5,
        reviews: 98,
        features: ["AC", "Leather Seats", "GPS", "Premium Audio"],
        image: "https://images.unsplash.com/photo-1757839939579-d71ac270993b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
        id: 4,
        name: "Honda Accord",
        category: "Economy",
        passengers: 5,
        transmission: "Automatic",
        price: 50,
        location: "Kumasi",
        rating: 4,
        reviews: 134,
        features: ["AC", "Bluetooth", "GPS"],
        image: "https://images.unsplash.com/photo-1647643787408-0b3e85e091ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
        id: 5,
        name: "Land Cruiser Prado",
        category: "SUV",
        passengers: 7,
        transmission: "Automatic",
        price: 95,
        location: "Accra",
        rating: 5,
        reviews: 187,
        features: ["AC", "4WD", "GPS", "Roof Rack"],
        image: "https://images.unsplash.com/photo-1658590842120-2a0b2a68c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
        id: 6,
        name: "BMW 5 Series",
        category: "Luxury",
        passengers: 5,
        transmission: "Automatic",
        price: 135,
        location: "Accra",
        rating: 5,
        reviews: 76,
        features: ["AC", "Leather Seats", "GPS", "Premium Audio", "Sunroof"],
        image: "https://images.unsplash.com/photo-1757839939579-d71ac270993b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    }
];

function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<span class="text-[#fdbe19]">★</span>';
        } else if (i === fullStars + 1 && halfStar) {
            stars += '<span class="text-[#fdbe19]">★</span>';
        } else {
            stars += '<span class="text-gray-300">★</span>';
        }
    }
    return stars;
}

function renderCars() {
    const container = document.getElementById('carListings');
    
    container.innerHTML = cars.map(car => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div class="relative h-48">
                <img src="${car.image}" alt="${car.name}" class="w-full h-full object-cover">
                <span class="absolute top-3 left-3 bg-[#fdbe19] text-[#0a2540] px-3 py-1 rounded-full text-sm font-semibold">
                    ${car.category}
                </span>
            </div>
            <div class="p-4">
                <h3 class="text-lg font-semibold text-[#0a2540] mb-2">${car.name}</h3>
                
                <div class="flex items-center mb-3">
                    <div class="flex">${createStarRating(car.rating)}</div>
                    <span class="text-sm text-gray-600 ml-2">(${car.reviews})</span>
                </div>
                
                <div class="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-1">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        ${car.passengers} Passengers
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-1">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        ${car.transmission}
                    </div>
                </div>
                
                <div class="flex flex-wrap gap-1 mb-4">
                    ${car.features.slice(0, 3).map(feature => `
                        <span class="text-xs bg-gray-100 rounded-full px-2 py-1">${feature}</span>
                    `).join('')}
                </div>
                
                <div class="flex justify-between items-center pt-4 border-t">
                    <div>
                        <span class="text-2xl font-bold text-[#0a2540]">$${car.price}</span>
                        <span class="text-sm text-gray-600">/day</span>
                    </div>
                    <button onclick="bookCar(${car.id})" class="bg-[#fdbe19] text-[#0a2540] px-4 py-2 rounded-lg font-semibold hover:bg-[#fdbe19]/90 transition">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function bookCar(id) {
    const car = cars.find(c => c.id === id);
    if (car) {
        localStorage.setItem('selectedCar', JSON.stringify(car));
        window.location.href = 'car-booking.html';
    }
}

renderCars();

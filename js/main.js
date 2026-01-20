// Hero Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('bg-white');
        dots[i].classList.add('bg-white/50');
    });
    
    slides[index].classList.add('active');
    dots[index].classList.remove('bg-white/50');
    dots[index].classList.add('bg-white');
    currentSlide = index;
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
}

function goToSlide(index) {
    showSlide(index);
}

// Auto-advance carousel
setInterval(nextSlide, 5000);

// Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Tab Switching
function switchTab(tab) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // Remove active state from all tabs
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('border-[#fdbe19]', 'text-[#0a2540]');
        button.classList.add('border-transparent', 'text-gray-600');
    });
    
    // Show selected tab content
    document.getElementById(`form-${tab}`).classList.remove('hidden');
    
    // Add active state to selected tab
    const activeTab = document.getElementById(`tab-${tab}`);
    activeTab.classList.add('border-[#fdbe19]', 'text-[#0a2540]');
    activeTab.classList.remove('border-transparent', 'text-gray-600');
}

// Form Submissions
function searchHotels(e) {
    e.preventDefault();

  // Get values from the form
  const form = e.target;
  const destination = form.querySelector('input[type="text"]').value;
  const checkin = form.querySelector('input[type="date"]').value;
  const checkout = form.querySelectorAll('input[type="date"]')[1].value;
  const guests = form.querySelector('select').value;

  // Build URL params
  const params = new URLSearchParams({
    destination,
    checkin,
    checkout,
    guests
  });

  // Redirect with params
  window.location.href = `hotels.html?${params.toString()}`;
}

// Flights
function searchFlights(e) {
    e.preventDefault();
    const form = e.target;
    const from = form.querySelectorAll('input[type="text"]')[0].value;
    const to = form.querySelectorAll('input[type="text"]')[1].value;
    const departure = form.querySelector('input[type="date"]').value;
    const passengers = form.querySelector('select').value;
  
    const params = new URLSearchParams({
      from,
      to,
      departure,
      passengers
    });
  
    window.location.href = `flights.html?${params.toString()}`;
  }
  
  // Cars
  function searchCars(e) {
    e.preventDefault();
    const form = e.target;
    const pickup = form.querySelector('input[placeholder="Accra"]').value;
    const pickupDate = form.querySelectorAll('input[type="date"]')[0].value;
    const returnDate = form.querySelectorAll('input[type="date"]')[1].value;
    const carType = form.querySelector('select').value;
  
    const params = new URLSearchParams({
      pickup,
      pickupDate,
      returnDate,
      carType
    });
  
    window.location.href = `cars.html?${params.toString()}`;
  }
  
  // Events
  function searchEvents(e) {
    e.preventDefault();
    const form = e.target;
    const location = form.querySelector('input[type="text"]').value;
    const eventDate = form.querySelector('input[type="date"]').value;
    const guestCount = form.querySelectorAll('select')[0].value;
    const eventType = form.querySelectorAll('select')[1].value;
  
    const params = new URLSearchParams({
      location,
      eventDate,
      guestCount,
      eventType
    });
  
    window.location.href = `events.html?${params.toString()}`;
  }
  

// Star Rating Component
function createStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="${i <= rating ? 'text-[#fdbe19]' : 'text-gray-300'}">★</span>`;
    }
    return stars;
}

// Popular Hotels Data
const popularHotels = [
    {
        id: 1,
        name: "Labadi Beach Hotel",
        location: "Accra, Ghana",
        price: 180,
        rating: 5,
        reviews: 324,
        image: "https://images.unsplash.com/photo-1757839939579-d71ac270993b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
        id: 2,
        name: "Kempinski Hotel Gold Coast",
        location: "Accra, Ghana",
        price: 250,
        rating: 5,
        reviews: 456,
        image: "https://images.unsplash.com/photo-1658590842120-2a0b2a68c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
        id: 3,
        name: "Movenpick Ambassador Hotel",
        location: "Accra, Ghana",
        price: 200,
        rating: 5,
        reviews: 289,
        image: "https://images.unsplash.com/photo-1647643787408-0b3e85e091ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
        id: 3,
        name: "Movenpick Ambassador Hotel",
        location: "Accra, Ghana",
        price: 200,
        rating: 5,
        reviews: 289,
        image: "https://images.unsplash.com/photo-1647643787408-0b3e85e091ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    }
];

// Load Popular Hotels
function loadPopularHotels() {
    const container = document.getElementById('popularHotels');
    if (!container) return;
    
    container.innerHTML = popularHotels.map(hotel => `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer" onclick="viewHotel(${hotel.id})">
            <div class="relative h-48">
                <img src="${hotel.image}" alt="${hotel.name}" class="w-full h-full object-cover">
                <button class="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
            <div class="p-4">
                <h3 class="text-lg font-semibold text-[#0a2540] mb-1">${hotel.name}</h3>
                <p class="text-sm text-gray-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${hotel.location}
                </p>
                <div class="flex items-center mb-3">
                    <div class="flex">${createStarRating(hotel.rating)}</div>
                    <span class="text-sm text-gray-600 ml-2">(${hotel.reviews} reviews)</span>
                </div>
                <div class="flex justify-between items-center">
                    <div>
                        <span class="text-2xl font-bold text-[#0a2540]">$${hotel.price}</span>
                        <span class="text-sm text-gray-600">/night</span>
                    </div>
                    <button onclick="event.stopPropagation(); viewHotel(${hotel.id})" class="bg-[#fdbe19] text-[#0a2540] px-4 py-2 rounded-lg font-semibold hover:bg-[#fdbe19]/90 transition">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function viewHotel(id) {
    const hotel = popularHotels.find(h => h.id === id);
    if (hotel) {
        localStorage.setItem('selectedHotel', JSON.stringify(hotel));
        window.location.href = 'hotel-rooms.html';
    }
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPopularHotels);
} else {
    loadPopularHotels();
}

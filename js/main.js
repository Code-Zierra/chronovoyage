// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize destinations
    loadDestinations();
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const destinationsSection = document.querySelector('#destinations');
            if (destinationsSection) {
                window.scrollTo({
                    top: destinationsSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Destinations data
const destinations = [
    {
        id: 1,
        title: "Machu Picchu",
        period: "15th Century Inca",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "The Lost City of the Incas, built around 1450 AD and abandoned a century later during the Spanish Conquest.",
        history: "Machu Picchu was constructed as an estate for the Inca emperor Pachacuti. It remained unknown to the outside world until American historian Hiram Bingham brought it to international attention in 1911.",
        location: "Peruvian Andes",
        civilization: "Inca Empire"
    },
    {
        id: 2,
        title: "The Colosseum",
        period: "72-80 AD Roman",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "The largest ancient amphitheater ever built, capable of holding 50,000-80,000 spectators.",
        history: "Commissioned by Emperor Vespasian and completed by his son Titus, the Colosseum hosted gladiatorial contests, animal hunts, and mock naval battles for nearly 500 years.",
        location: "Rome, Italy",
        civilization: "Roman Empire"
    },
    {
        id: 3,
        title: "The Great Pyramid",
        period: "2580-2560 BC Egyptian",
        image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "The oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.",
        history: "Built as a tomb for Pharaoh Khufu over a 20-year period, it was the tallest man-made structure in the world for over 3,800 years.",
        location: "Giza, Egypt",
        civilization: "Ancient Egypt"
    },
    {
        id: 4,
        title: "Angkor Wat",
        period: "12th Century Khmer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCIdvXCq9sd7h9AQWSTEx1sULT-YfUK8dGA&s",
        description: "The largest religious monument in the world, originally constructed as a Hindu temple dedicated to Vishnu.",
        history: "Built by King Suryavarman II, it gradually transformed into a Buddhist temple towards the end of the 12th century. It combines temple mountain and galleried temple architectural styles.",
        location: "Siem Reap, Cambodia",
        civilization: "Khmer Empire"
    },
    {
        id: 5,
        title: "Petra",
        period: "4th Century BC Nabatean",
        image: "https://www.traveltalktours.com/wp-content/smush-webp/2022/09/sylvain-gllm-GAm_W6UlEZc-unsplash-1024x819.jpg.webp",
        description: "The Rose-Red City half as old as time, famous for its rock-cut architecture and water conduit system.",
        history: "Established as the capital city of the Nabatean Kingdom around 312 BC. Its sophisticated water management system allowed it to flourish in the desert until earthquakes and trade route changes led to its decline.",
        location: "Jordan",
        civilization: "Nabatean Kingdom"
    },
    {
        id: 6,
        title: "Chichen Itza",
        period: "5th-13th Century Maya",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A large pre-Columbian city built by the Maya people of the Terminal Classic period.",
        history: "The city was a major focal point in the Northern Maya Lowlands from the Late Classic through the Terminal Classic and into the early portion of the Postclassic period. The site exhibits a multitude of architectural styles.",
        location: "Yucatán, Mexico",
        civilization: "Maya Civilization"
    }
];

function loadDestinations() {
    const container = document.getElementById('destinations-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    destinations.forEach(destination => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        
        col.innerHTML = `
            <div class="destination-card">
                <img src="${destination.image}" alt="${destination.title}" class="destination-img" onerror="this.src='images/default-historical.jpg'">
                <div class="destination-content">
                    <h3 class="destination-title">${destination.title}</h3>
                    <span class="destination-period">${destination.period}</span>
                    <p class="destination-description">${destination.description}</p>
                    <button class="btn btn-outline-gold w-100" onclick="showDestinationDetails(${destination.id})">
                        Learn More
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

function showDestinationDetails(id) {
    const destination = destinations.find(d => d.id === id);
    if (!destination) return;
    
    const modalHTML = `
        <div class="modal fade" id="destinationModal" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title gold-text">${destination.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${destination.image}" alt="${destination.title}" class="img-fluid rounded mb-3">
                            </div>
                            <div class="col-md-6">
                                <p><strong>Period:</strong> ${destination.period}</p>
                                <p><strong>Location:</strong> ${destination.location}</p>
                                <p><strong>Civilization:</strong> ${destination.civilization}</p>
                            </div>
                        </div>
                        <div class="mt-3">
                            <h6 class="gold-text">Historical Significance</h6>
                            <p>${destination.history}</p>
                        </div>
                        <div class="mt-3">
                            <h6 class="gold-text">Travel Tips</h6>
                            <ul>
                                <li>Best visited during shoulder seasons</li>
                                <li>Hire local guides for authentic experience</li>
                                <li>Respect archaeological site rules</li>
                                <li>Carry sufficient water and sun protection</li>
                            </ul>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-gold" onclick="bookTour(${destination.id})">
                            <i class="fas fa-calendar-check me-2"></i>Book This Tour
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('destinationModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('destinationModal'));
    modal.show();
}

function bookTour(destinationId) {
    const destination = destinations.find(d => d.id === destinationId);
    if (destination) {
        localStorage.setItem('selectedTour', destination.title);
        window.location.href = 'services.php#booking';
    }
}

// Form validation for contact page
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all required fields');
        return false;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


// Projects
const portfolioItems = [
    { id: 1, 
        title: 'The Gamers Club', 
        category: 'design', 
        detail: "Revamped The Gamers Club website to create a modern platform for gamers worldwide to connect and engage.", 
        image: 'img/the-gamers-club.jpg' 
    },
    { id: 2, 
        title: 'Kiara', 
        category: 'design', 
        detail: "Kiara Bridal Boutique, where design meets your dreams in Kochi, Kerala. Kiara is not just a place for brides, it's a tribute to elegance and uniqueness.", 
        image: 'img/kiara.jpg' 
    },
    { id: 3, 
        title: 'Good Karma Foundation', 
        category: 'design', 
        detail: "Elevating Positive Change: Good Karma Foundation's New Website", 
        image: 'img/good-karma-foundation.jpg' 
    },
    { id: 4, 
        title: 'Pacca', 
        category: 'web', 
        detail: "PACCA: Pureliving for Art, Craft, Culture, and Architecture - Explore a world of creativity and cultural richness.", 
        image: 'img/pacca.jpg' 
    },
    { id: 5, 
        title: 'Inspire Seating Systems', 
        category: 'web', 
        detail: "The website embodies simplicity and functionality, offering an intuitive user experience that captivates visitors.", 
        image: 'img/inspire-seating-systems.png' 
    },
    { id: 6, 
        title: 'Toiless', 
        category: 'design', 
        detail: "Find quality toilets for travelers with Toiless, a Laravel website project. Discover reliable restroom facilities now.", 
        image: 'img/toiless.jpg' 
    },
];


function createPortfolioItems(items) {
    const portfolioContainer = document.getElementById('portfolio-items');
    portfolioContainer.innerHTML = '';

    items.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `col-md-4 portfolio-item ${item.category}`;
        portfolioItem.innerHTML = `
            <div class="card">
                <img src="${item.image}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-description">${item.detail}</p>
                    <p class="card-text">Category: ${item.category}</p>
                </div>
            </div>
        `;
        portfolioContainer.appendChild(portfolioItem);
    });
}

// Filter projects
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);
        createPortfolioItems(filteredItems);

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

createPortfolioItems(portfolioItems);

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        formStatus.innerHTML = '<div class="alert alert-danger">Please fill out all fields.</div>';
        return;
    }

    if (!isValidEmail(email)) {
        formStatus.innerHTML = '<div class="alert alert-danger">Please enter a valid email address.</div>';
        return;
    }

    formStatus.innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
    contactForm.reset();
});

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
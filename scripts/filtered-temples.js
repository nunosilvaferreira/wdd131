// Temple data array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/800x500/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/800x500/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/800x500/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/800x500/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/800x500/washington_dc_temple-exterior-4.jpeg"
    },
    {
        templeName: "Lima Peru",
        location: "Lima, Peru",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/800x500/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/800x500/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Additional temples (3 more as required)
    {
        templeName: "Lisbon Portugal",
        location: "Lisbon, Portugal",
        dedicated: "2019, September, 15",
        area: 35000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/800x500/03-045a97e8471a9f581e927698521a1d184f4b3753.jpeg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/2-Rome-Temple-2190090.jpg"
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/slctemple5.jpg"
    }
];

// Function to create temple cards
function createTempleCards(templesArray) {
    const templeCardsContainer = document.getElementById('temple-cards');
    templeCardsContainer.innerHTML = '';
    
    templesArray.forEach(temple => {
        const card = document.createElement('div');
        card.className = 'temple-card';
        
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <div class="temple-info">
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </div>
        `;
        
        templeCardsContainer.appendChild(card);
    });
}

// Filter functions
function filterOldTemples() {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year < 1900;
    });
    createTempleCards(oldTemples);
}

function filterNewTemples() {
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year > 2000;
    });
    createTempleCards(newTemples);
}

function filterLargeTemples() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCards(largeTemples);
}

function filterSmallTemples() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCards(smallTemples);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Display all temples initially
    createTempleCards(temples);
    
    // Footer content
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
    
    // Navigation event listeners
    document.getElementById('home').addEventListener('click', (e) => {
        e.preventDefault();
        createTempleCards(temples);
    });
    
    document.getElementById('old').addEventListener('click', (e) => {
        e.preventDefault();
        filterOldTemples();
    });
    
    document.getElementById('new').addEventListener('click', (e) => {
        e.preventDefault();
        filterNewTemples();
    });
    
    document.getElementById('large').addEventListener('click', (e) => {
        e.preventDefault();
        filterLargeTemples();
    });
    
    document.getElementById('small').addEventListener('click', (e) => {
        e.preventDefault();
        filterSmallTemples();
    });
});
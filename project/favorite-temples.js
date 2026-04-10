document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

const temples = [
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6-24",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Lindon Utah",
        location: "Lindon, Utah, United States",
        dedicated: "2026, May, 3",
        area: 83140,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lindon-utah-temple/lindon-utah-temple-69021.jpg"
    },
    {
        templeName: "Mount Timpanogos Utah",
        location: "American Fork, Utah",
        dedicated: "1996, October, 13-19",
        area: 41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-1724.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10-12",
        area: 41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3545.jpg"
    }
];

function getYear(dedicatedStr) {
    return parseInt(dedicatedStr.split(',')[0]);
}

const gallery = document.querySelector('#gallery');

function displayTemples(templeList) {
    gallery.innerHTML = '';

    templeList.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                </div>
                <div class="card-back">
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </div>
            </div>
        `;

        gallery.appendChild(card);
    });
}

document.querySelector('#home').addEventListener('click', () => {
    displayTemples(temples);
});

document.querySelector('#old').addEventListener('click', () => {
    displayTemples(temples.filter(t => getYear(t.dedicated) < 1900));
});

document.querySelector('#new').addEventListener('click', () => {
    displayTemples(temples.filter(t => getYear(t.dedicated) > 2000));
});

document.querySelector('#large').addEventListener('click', () => {
    displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector('#small').addEventListener('click', () => {
    displayTemples(temples.filter(t => t.area < 10000));
});

displayTemples(temples);

let suggestions = JSON.parse(localStorage.getItem('templeSuggestions')) || [];

function saveSuggestion(suggestion) {
    suggestions.push(suggestion);
    localStorage.setItem('templeSuggestions', JSON.stringify(suggestions));
}

function showConfirmation(suggestion) {
    document.getElementById('confirmation-msg').textContent =
        `Thanks ${suggestion.name}! The ${suggestion.temple} temple has been submitted.`;
    displaySuggestions();
    document.getElementById('suggestion-confirmation').hidden = false;
}

function handleSuggestion(suggestion, callback) {
    saveSuggestion(suggestion);
    callback(suggestion);
}

function displaySuggestions() {
    const list = document.getElementById('past-suggestions');
    const items = suggestions.map(s =>
        `<li><strong>${s.temple}</strong> (${s.location}) — suggested by ${s.name} on ${s.date}</li>`
    );
    list.innerHTML = items.join('');
}

document.getElementById('suggestion-form').addEventListener('submit', e => {
    e.preventDefault();

    const suggestion = {
        name: document.getElementById('suggestion-name').value,
        temple: document.getElementById('suggestion-temple').value,
        location: document.getElementById('suggestion-location').value,
        reason: document.getElementById('suggestion-reason').value,
        date: new Date().toLocaleDateString()
    };

    handleSuggestion(suggestion, showConfirmation);
    e.target.reset();
});

if (suggestions.length > 0) {
    displaySuggestions();
    document.getElementById('suggestion-confirmation').hidden = false;
    document.getElementById('confirmation-msg').textContent =
        `${suggestions.length} suggestion${suggestions.length > 1 ? 's' : ''} submitted so far:`;
}
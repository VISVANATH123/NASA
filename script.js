const apiKey = "hZ8H3q7tj0nU0MvR1Extsqw2gcqqU1726LUa7j10";
const currentImageContainer = document.getElementById("current-image-container");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchHistory = document.getElementById("search-history");

function getCurrentImageOfTheDay() {
    const currentDate = new Date().toISOString().split("T")[0];
    fetchImage(currentDate);
}

function getImageOfTheDay(date) {
    fetchImage(date);
    saveSearch(date);
    addSearchToHistory();
}

function fetchImage(date) {
    const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.code) {
                currentImageContainer.innerHTML = `<p>Error: ${data.msg}</p>`;
            } else {
                currentImageContainer.innerHTML = `
                    <h3>${data.title}</h3>
                    <p>${data.date}</p>
                    <img src="${data.url}" alt="${data.title}">
                    <p>${data.explanation}</p>
                `;
            }
        })
        .catch(error => {
            currentImageContainer.innerHTML = `<p>Error fetching data: ${error}</p>`;
        });
}

function saveSearch(date) {
    let searches = JSON.parse(localStorage.getItem("searches")) || [];
    if (!searches.includes(date)) {
        searches.push(date);
        localStorage.setItem("searches", JSON.stringify(searches));
    }
}

function addSearchToHistory() {
    let searches = JSON.parse(localStorage.getItem("searches")) || [];
    searchHistory.innerHTML = "";
    searches.forEach(date => {
        const li = document.createElement("li");
        li.textContent = date;
        li.addEventListener("click", () => getImageOfTheDay(date));
        searchHistory.appendChild(li);
    });
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = searchInput.value;
    if (date) getImageOfTheDay(date);
});

getCurrentImageOfTheDay();
addSearchToHistory();

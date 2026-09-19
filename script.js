const landingPage = document.getElementById("landing-page");
const startBtn = document.getElementById("start-btn");

const homeView = document.getElementById("home-view");
const popularSection = document.getElementById("popular-section");
const statesView = document.getElementById("states-view");
const detailView = document.getElementById("detail-view");

const countryGrid = document.getElementById("destination-grid");
const statesGrid = document.getElementById("states-grid");
const statesSectionTitle = document.getElementById("states-section-title");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const backBtn = document.getElementById("back-btn");
const logoLink = document.getElementById("logo-link");
const backToCountriesBtn = document.getElementById("back-to-countries-btn");

let currentCountry = null;

// Handle landing page dismissal
if (startBtn) {
  startBtn.addEventListener("click", () => {
    landingPage.classList.add("hidden");
    setTimeout(() => {
      landingPage.style.display = 'none';
    }, 800); 
  });
}

// Render top-level Country cards
function renderCountryCards(countries) {
  countryGrid.innerHTML = countries
    .map(
      (country) => `
      <button class="destination-card" type="button" data-country-id="${country.id}" aria-label="Explore ${country.name}">
        <div class="destination-card__image" style="background-image: url('${country.image}')"></div>
        <div class="destination-card__overlay"></div>
        <div class="destination-card__content">
          <p class="destination-card__country">Country</p>
          <h3 class="destination-card__name">${country.name}</h3>
        </div>
      </button>
    `
    )
    .join("");
}

// Show states/regions belonging to the selected country
function showStates(countryId) {
  currentCountry = COUNTRIES_DATA.find((c) => c.id === countryId);
  if (!currentCountry) return;

  statesSectionTitle.textContent = `States & Regions in ${currentCountry.name}`;
  statesGrid.innerHTML = currentCountry.states
    .map(
      (state) => `
      <button class="destination-card" type="button" data-state-id="${state.id}" aria-label="Explore ${state.name}">
        <div class="destination-card__image" style="background-image: url('${state.image}')"></div>
        <div class="destination-card__overlay"></div>
        <div class="destination-card__content">
          <p class="destination-card__country">${currentCountry.name}</p>
          <h3 class="destination-card__name">${state.name}</h3>
        </div>
      </button>
    `
    )
    .join("");

  homeView.hidden = true;
  popularSection.hidden = true;
  statesView.hidden = false;
  detailView.hidden = true;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show detail view for the selected state/region
function showDetail(stateId) {
  if (!currentCountry) return;
  const state = currentCountry.states.find((s) => s.id === stateId);
  if (!state) return;

  document.getElementById("detail-hero").style.backgroundImage = `url('${state.image}')`;
  document.getElementById("detail-country").textContent = currentCountry.name;
  document.getElementById("detail-title").textContent = state.name;
  document.getElementById("detail-tagline").textContent = state.tagline;
  document.getElementById("detail-intro").textContent = state.intro;

  // Render Locations using precise img tags 
  const locContainer = document.getElementById("locations-list");
  locContainer.innerHTML = state.locations
    .map(
      (loc, index) => `
      <li class="item-card item-card--location" role="button" tabindex="0"
          data-location-name="${loc.name}"
          data-destination="${state.name}"
          data-country="${currentCountry.name}"
          data-index="${index}">
        <img class="item-card__image" src="${loc.image}" alt="${loc.name}">
        <div class="item-card__body">
          <p class="item-list__name">${loc.name}</p>
          <p class="item-list__desc">${loc.description}</p>
          <p class="item-list__desc" style="color:var(--gold); margin-top:4px;">🍽 Food: ${loc.food}</p>
          <p class="item-list__desc" style="color:var(--accent);">🏨 Hotel: ${loc.hotel} | 🍴 Rest: ${loc.restaurant}</p>
        </div>
        <span class="item-card__map-icon" aria-hidden="true">🗺</span>
      </li>
    `
    )
    .join("");

  // Render Items / Food using precise img tags 
  const itemsContainer = document.getElementById("items-list");
  itemsContainer.innerHTML = state.items
    .map(
      (item) => `
      <li class="item-card">
        <img class="item-card__image" src="${item.image}" alt="${item.name}">
        <div class="item-card__body">
          <p class="item-list__name">${item.name}</p>
          <p class="item-list__desc">${item.description}</p>
        </div>
      </li>
    `
    )
    .join("");

  // FIX: Properly hide the home view and popular section so the details show at the top!
  homeView.hidden = true;
  popularSection.hidden = true;
  statesView.hidden = true;
  detailView.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Return to home (countries view)
function showHome() {
  detailView.hidden = true;
  statesView.hidden = true;
  homeView.hidden = false;
  popularSection.hidden = false;
  if (searchInput) searchInput.value = "";
  hideSearchResults();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- DEEP SEARCH LOGIC ---
function filterDestinations(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const matches = [];

  COUNTRIES_DATA.forEach(country => {
    const countryMatch = country.name.toLowerCase().includes(q);

    country.states.forEach(state => {
      const stateMatch = state.name.toLowerCase().includes(q);
      
      // Search inside locations and food items
      const locMatch = state.locations.some(l => l.name.toLowerCase().includes(q) || (l.food && l.food.toLowerCase().includes(q)));
      const itemMatch = state.items.some(i => i.name.toLowerCase().includes(q) || (i.description && i.description.toLowerCase().includes(q)));

      if (countryMatch || stateMatch || locMatch || itemMatch) {
        let hint = "Region Match";
        if (locMatch) hint = "Place/Food Match";
        if (itemMatch) hint = "Food Item Match";

        matches.push({
          stateId: state.id,
          countryId: country.id,
          name: state.name,
          country: country.name,
          hint: hint
        });
      }
    });
  });

  return matches;
}

function showSearchResults(matches) {
  if (matches.length === 0) {
    searchResults.innerHTML = `<li><p class="empty-state">No places or food found</p></li>`;
    searchResults.hidden = false;
    return;
  }

  searchResults.innerHTML = matches
    .slice(0, 8)
    .map(
      (match) => `
      <li>
        <button type="button" data-state-id="${match.stateId}" data-country-id="${match.countryId}">
          <span>${match.name} <small style="color: var(--accent); font-size: 0.75rem;">(${match.hint})</small></span>
          <span class="result-country">${match.country}</span>
        </button>
      </li>
    `
    )
    .join("");

  searchResults.hidden = false;
}

function hideSearchResults() {
  searchResults.hidden = true;
  searchResults.innerHTML = "";
}

// Search input typing listener
searchInput.addEventListener("input", () => {
  const matches = filterDestinations(searchInput.value);
  if (searchInput.value.trim()) {
    showSearchResults(matches);
  } else {
    hideSearchResults();
  }
});

// Search input "Enter" key listener
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const matches = filterDestinations(searchInput.value);
    if (matches.length > 0) {
      const bestMatch = matches[0];
      currentCountry = COUNTRIES_DATA.find(c => c.id === bestMatch.countryId);
      showDetail(bestMatch.stateId);
      hideSearchResults();
      searchInput.value = "";
      searchInput.blur();
    }
  }
});

// Clicking on a search result
searchResults.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-state-id]");
  if (button) {
    currentCountry = COUNTRIES_DATA.find(c => c.id === button.dataset.countryId);
    showDetail(button.dataset.stateId);
    hideSearchResults();
    searchInput.value = "";
  }
});

// Clicking outside search closes the menu
document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-box")) hideSearchResults();
});
// --- END SEARCH LOGIC ---

// Open Google Maps query in a new tab
function openLocationInMaps(locationName, destinationName, countryName) {
  const query = [locationName, destinationName, countryName].filter(Boolean).join(", ");
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

// Event Listeners for Country Grid
countryGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-country-id]");
  if (card) {
    showStates(card.dataset.countryId);
  }
});

// Event Listeners for States Grid
statesGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-state-id]");
  if (card) {
    showDetail(card.dataset.stateId);
  }
});

// Navigation / Back Buttons
if (backToCountriesBtn) {
  backToCountriesBtn.addEventListener("click", showHome);
}

backBtn.addEventListener("click", () => {
  detailView.hidden = true;
  statesView.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
});

logoLink.addEventListener("click", (event) => {
  event.preventDefault();
  showHome();
});

// Location map click handler
document.getElementById("locations-list").addEventListener("click", (event) => {
  const item = event.target.closest(".item-card--location");
  if (!item) return;
  openLocationInMaps(item.dataset.locationName, item.dataset.destination, item.dataset.country);
});

// Initialize app on DOM Load
window.addEventListener("DOMContentLoaded", () => {
  if (typeof COUNTRIES_DATA !== "undefined") {
    renderCountryCards(COUNTRIES_DATA);
  }
});
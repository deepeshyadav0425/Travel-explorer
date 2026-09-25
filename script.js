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
          <span class="destination-card__country">Country</span>
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
          <span class="destination-card__country">${currentCountry.name}</span>
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
function normalizeText(value) {
  return String(value ?? "").trim().toLowerCase();
}

function looksLikeMatch(text, query) {
  return normalizeText(text).includes(query);
}

function filterDestinations(query) {
  const q = normalizeText(query);
  if (!q) return [];

  const matches = [];
  const seen = new Set();

  COUNTRIES_DATA.forEach((country) => {
    const countryMatch = looksLikeMatch(country.name, q);

    country.states.forEach((state) => {
      const stateMatch = looksLikeMatch(state.name, q);
      const locationMatch = state.locations.some((location) => {
        return (
          looksLikeMatch(location.name, q) ||
          looksLikeMatch(location.food, q) ||
          looksLikeMatch(location.description, q) ||
          looksLikeMatch(location.hotel, q) ||
          looksLikeMatch(location.restaurant, q)
        );
      });
      const itemMatch = state.items.some((item) => {
        return (
          looksLikeMatch(item.name, q) ||
          looksLikeMatch(item.description, q)
        );
      });

      if (!countryMatch && !stateMatch && !locationMatch && !itemMatch) return;

      const key = `${country.id}:${state.id}`;
      if (seen.has(key)) return;
      seen.add(key);

      let hint = "Region Match";
      if (countryMatch && !stateMatch && !locationMatch && !itemMatch) hint = "Country Match";
      if (locationMatch) hint = "Place/Food Match";
      if (itemMatch && !locationMatch) hint = "Food Item Match";

      matches.push({
        stateId: state.id,
        countryId: country.id,
        name: state.name,
        country: country.name,
        hint: hint
      });
    });
  });

  return matches;
}

function showSearchResults(matches) {
  if (!searchResults) return;

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
  if (!searchResults) return;
  searchResults.hidden = true;
  searchResults.innerHTML = "";
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const matches = filterDestinations(searchInput.value);
    if (searchInput.value.trim()) {
      showSearchResults(matches);
    } else {
      hideSearchResults();
    }
  });

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
}

if (searchResults) {
  searchResults.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-state-id]");
    if (button) {
      currentCountry = COUNTRIES_DATA.find(c => c.id === button.dataset.countryId);
      showDetail(button.dataset.stateId);
      hideSearchResults();
      if (searchInput) searchInput.value = "";
    }
  });
}

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

if (backBtn) {
  backBtn.addEventListener("click", () => {
    if (currentCountry) {
      showStates(currentCountry.id);
    } else {
      showHome();
    }
  });
}

if (logoLink) {
  logoLink.addEventListener("click", (event) => {
    event.preventDefault();
    showHome();
  });
}

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
  
  // Header scroll effect
  const header = document.querySelector('.header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }
});
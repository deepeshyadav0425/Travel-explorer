# Travel Explorer 🌍

Travel Explorer is an interactive, frontend web application built with HTML, CSS, and Vanilla JavaScript. It allows users to discover iconic monuments, rich cultures, and the finest local cuisines across the globe through a beautiful, card-based interface.

## 🚀 Features

* **Interactive Landing Page:** A beautiful full-screen introductory page.
* **Dynamic Search:** Deep search functionality that filters countries, states, locations, and even specific food items.

* **Grid Navigation:** Intuitive card-based navigation to drill down from Countries -> States -> Detailed Locations.

* **Maps Integration:** Click on any specific landmark card to view its location instantly on Google Maps.

* **No Build Step Required:** Built entirely with plain web technologies. No Node.js backend, npm installs, or build pipelines required to run the app.

## 🛠️ Tech Stack

* **HTML5** for structure

* **CSS3** (Custom properties, CSS Grid, Flexbox) for responsive design and animations

* **Vanilla JavaScript (ES6+)** for DOM manipulation and search logic

## 📦 Setup & Installation

Because this is a static frontend application, setup is incredibly simple.

1. **Download the Code:**
   Ensure `index.html`, `styles.css`, `script.js`, and `data.js` are all saved in the same root folder.

2. **Create the Images Folder (Required):**
   The application relies on local images referenced in the `data.js` file.

   * Create a new folder named `images` in the exact same directory as your `index.html` file.

   * Add the necessary images (e.g., `france.jpg`, `japan.jpg`, `taj..jpg`) to this folder so the destination cards render correctly.

3. **Run the Application:**

   * **Option A:** Simply double-click `index.html` to open it in your default web browser.

   * **Option B (Recommended):** Use a local development server like the "Live Server" extension in Visual Studio Code for the best experience.

## 💡 Usage

1. Click **Start Exploring** on the landing page.

2. Use the **search bar** to find specific destinations (e.g., "Paris", "Tokyo") or local foods.

3. Click on a **country card** to reveal its regions and states.

4. Click on a **region/state card** to see a detailed page featuring landmarks, hotels, restaurants, and famous food items.

5. Click the **map icon** on any location card to open its coordinates in Google Maps.
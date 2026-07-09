# Dynamic Weather Application
An interactive web application that allows users to search weather by city and also loads weather automatically based on location on page load. The application displays current weather, forecast data, and key weather details dynamically.

🔗 **Live Demo:** [Weather App](https://def-imran.github.io/weather-app/)

**🎯 Project Purpose** This project serves as a major milestone in my portfolio. After building several smaller mini-projects to master isolated coding skills, this application was developed as a larger, comprehensive project to connect all those pieces together. It marks my transition into building fully functional, API-driven web applications with a solid, foundational grip on Vanilla JavaScript.

**🤖 AI Collaboration** This project was written and architected by me, utilizing an AI assistant as a dedicated tutor and code-reviewer rather than a code generator.

Instead of blind copy-pasting, I deliberately used AI to:

- **Optimize Data Manipulation:** Learning how to effectively combine array methods like `.filter()` and `.map()` to isolate and render specific forecast data sequences (e.g., extracting the 15:00 timestamp).
- **Master Function Parameters & Scope:** Overcoming a major conceptual hurdle regarding how data blocks pass between functions. I learned how parameters act as dynamic, temporary labels (e.g., how `location` safely morphs into `city`).
- **Refine implementation**: Improving layout behavior with flexbox, responsive breakpoints, and cleaner weather icon rendering.


**🚀 JavaScript Features & Concepts Applied** Through this project, I practiced and applied the following JavaScript techniques:

- **Async API Requests**: Fetching current weather and forecast data using `fetch()` with `async/await`.
- **Error Handling**: Managing failed responses and API issues with `try/catch` and `response.ok` checks.
- **Dynamic DOM Rendering**: Updating temperatures, weather descriptions, icons, humidity, sea level, and wind speed in real-time.
- **Location-Based Initialization**: Detecting city on page load through IP geolocation and using it as the default weather source.
- **Conditional UI Updates**: Switching background images based on live weather conditions (`Clear`, `Clouds`, `Rain`).
- **Date/Time Formatting**: Converting sunrise and sunset UNIX timestamps into readable local times.
- **Array Filtering & Template Literals**: Filtering forecast entries and rendering forecast cards dynamically into the UI.

**🛠️ Tech Stack**

- **JavaScript (ES6+)** — API integration, async logic, DOM manipulation, and dynamic rendering.
- **HTML5** — Semantic markup, app structure, and accessible content blocks.
- **CSS3** — Card-based layout, responsive behavior, and visual styling.
- **OpenWeather API** — Current weather and 5-day forecast data.
- **IP-API** — Initial location-based city detection.

📄 License This project is open-source and free to use for educational purposes.

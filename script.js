import { jsonData } from "./api.js";
document.addEventListener("DOMContentLoaded", () => {

    let inpValues = {
        countryDropdown: document.getElementById("country"),
        stateDropdown: document.getElementById("state"),
        cityDropdown: document.getElementById("city")
    };

    // Destructuring the object
    let { countryDropdown, stateDropdown, cityDropdown } = inpValues;

    // Function to populate a dropdown with options
    const populateFunction = (dropdown, items) => {
        items.forEach(item => {
            const option = new Option(item, item);
            dropdown.add(option);
        });
    };


    // Event listener for country selection
    countryDropdown.addEventListener("change", () => {
        const selectedCountry = countryDropdown.value;
        const states = Object.keys(jsonData[0][selectedCountry]);
        populateFunction(stateDropdown, states);
    });

    
    // Event listener for state selection
    stateDropdown.addEventListener("change", () => {
        const selectedCountry = countryDropdown.value;
        const selectedState = stateDropdown.value;
        const cities = jsonData[0][selectedCountry][selectedState];
        populateFunction(cityDropdown, cities);
    });

    // Initialize the country dropdown
    populateDropdown(countryDropdown, Object.keys(jsonData[0]));

});


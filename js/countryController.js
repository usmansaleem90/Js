// import { main } from "./script";
 
 // Event listener for country selection
 countryDropdown.addEventListener("change", () => {
    const selectedCountry = countryDropdown.value;
    const states = Object.keys(jsonData[0][selectedCountry] );
    populateDropdown(stateDropdown, states);
    populateDropdown(cityDropdown, []);
    Object.keys
});

// Event listener for state selection
stateDropdown.addEventListener("change", () => {
    const selectedCountry = countryDropdown.value;
    const selectedState = stateDropdown.value;
    const cities = jsonData[0][selectedCountry][selectedState];
    populateDropdown(cityDropdown, cities);
});

// Initialize the country dropdown
populateDropdown(countryDropdown, Object.keys(jsonData[0]));
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  function handleSubmit(e) {
  e.preventDefault();

  console.log("Submit intercepted");

  if (!city.trim() || !country.trim()) {
    return;
  }

  onSearch(city, country);
}

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        <option value="CO">Colombia</option>
        <option value="US">USA</option>
        <option value="ES">Spain</option>
      </select>

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
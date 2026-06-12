import { useState } from "react";
import Select from "react-select";

import { countries } from "../data/countries";

import { searchBarStyles } from "../styles/searchBarStyles";
import { reactSelectStyles } from "../styles/reactSelectStyles";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const countryOptions = countries.map(
    (country) => ({
      value: country.code,
      label: country.name,
    })
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !city.trim() ||
      !country.trim()
    ) {
      return;
    }

    onSearch(city, country);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={searchBarStyles.container}
    >
      <div className={searchBarStyles.formLayout}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) =>
            setCity(e.target.value)
          }
          className={searchBarStyles.input}
        />

        <div className="w-full md:min-w-[250px] md:max-w-[300px]">
          <Select
            options={countryOptions}
            placeholder="Search country..."
            styles={reactSelectStyles}
            isSearchable
            isClearable
            onChange={(
              selectedOption
            ) =>
              setCountry(
                selectedOption?.value ||
                  ""
              )
            }
          />
        </div>

        <button
          type="submit"
          className={searchBarStyles.button}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
import React, { useState } from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";

const CitySearch = ({ cities, onCitySelect }) => {
  const [inputValue, setInputValue] = useState("");

  const filterOptions = (options, { inputValue }) => {
    const searchTerm = inputValue.toLowerCase().trim();

    if (!searchTerm) {
      return options.slice(0, 100);
    }

    const startsWithMatches = options.filter((option) =>
      option.name.toLowerCase().startsWith(searchTerm)
    );

    const includesMatches = options.filter(
      (option) =>
        !option.name.toLowerCase().startsWith(searchTerm) &&
        option.name.toLowerCase().includes(searchTerm)
    );

    return [...startsWithMatches, ...includesMatches].slice(0, 100);
  };

  return (
    <Autocomplete
      options={cities}
      getOptionLabel={(option) => `${option.name}, ${option.country}`}
      onChange={(event, newValue) =>
        onCitySelect(newValue ? newValue.name : "")
      }
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      filterOptions={filterOptions}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for a city"
          variant="outlined"
          fullWidth
        />
      )}
      renderOption={(props, option) => (
        <li {...props}>
          <Typography variant="body1">
            {option.name},{" "}
            <Typography component="span" variant="body2" color="text.secondary">
              {option.country}
            </Typography>
          </Typography>
        </li>
      )}
      style={{ marginBottom: "16px" }}
      ListboxProps={{
        style: { maxHeight: "300px" },
      }}
    />
  );
};

export default CitySearch;

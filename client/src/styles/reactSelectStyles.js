export const reactSelectStyles = {
  control: (provided, state) => ({
    ...provided,

    width: "100%",
    minWidth: "250px",
    backgroundColor: "#1e293b",
    borderColor: state.isFocused
      ? "#3b82f6"
      : "#334155",

    boxShadow: "none",

    minHeight: "50px",

    borderRadius: "12px",

    "&:hover": {
      borderColor: "#3b82f6",
    },
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "#ffffff",
  }),

  input: (provided) => ({
    ...provided,
    color: "#ffffff",
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "#94a3b8",
  }),

  menu: (provided) => ({
    ...provided,
    backgroundColor: "#1e293b",
    border: "1px solid #334155",
  }),

  option: (provided, state) => ({
    ...provided,

    backgroundColor: state.isFocused
      ? "#334155"
      : "#1e293b",

    color: "#ffffff",

    cursor: "pointer",
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#94a3b8",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),
};
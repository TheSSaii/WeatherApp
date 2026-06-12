import { getData } from "country-list";

export const countries = getData()
  .sort((a, b) =>
    a.name.localeCompare(b.name)
  );
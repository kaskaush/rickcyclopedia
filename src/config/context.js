const context = {
  labels: {
    lblLogo: "Rickcyclopedia.",
    lblFiltersTitle: "Filters",
    lblSelectedFiltersTitle: "Selected filters",
    lblSearchLabel: "Search by name",
    lblSearchCtaLabel: "Search",
    lblStatus: "status",
    lblSpecies: "species",
    lblGender: "gender",
    lblOrigin: "origin",
    lblLastLocation: "last location",
  },
  sortOptions: [
    { value: "id", name: "Sort by ID", isSelected: false, order: "asc" },
    { value: "name", name: "Sort by Name", isSelected: false, order: "asc" },
  ],
  filterCategories: [
    {
      type: "status",
      options: [
        { type: "alive", isSelected: false },
        { type: "dead", isSelected: false },
        { type: "unknown", isSelected: false },
      ],
    },
    {
      type: "species",
      options: [
        { type: "human", isSelected: false },
        { type: "alien", isSelected: false },
        { type: "mytholog", isSelected: false },
        { type: "other species", isSelected: false },
      ],
    },
    {
      type: "gender",
      options: [
        { type: "male", isSelected: false },
        { type: "female", isSelected: false },
      ],
    },
    {
      type: "origin",
      options: [
        { type: "unknown", isSelected: false },
        { type: "post-apocalyptic earth", isSelected: false },
        { type: "nuptia 4", isSelected: false },
        { type: "other origins", isSelected: false },
      ],
    },
  ],
  results: [],
};

export default context;

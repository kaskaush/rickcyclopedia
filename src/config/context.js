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
    { value: "id", name: "Sort by ID" },
    { value: "name", name: "Sort by Name" },
  ],
  filterCategories: [
    {
      type: "status",
      options: [
        { type: "Alive", isSelected: false },
        { type: "Dead", isSelected: false },
        { type: "unknown", isSelected: false },
      ],
    },
    {
      type: "species",
      options: [
        { type: "Human", isSelected: false },
        { type: "Alien", isSelected: false },
        { type: "Mytholog", isSelected: false },
      ],
    },
    {
      type: "gender",
      options: [
        { type: "Male", isSelected: false },
        { type: "Female", isSelected: false },
      ],
    },
    {
      type: "origin",
      options: [
        { type: "unknown", isSelected: false },
        { type: "Post-Apocalyptic Earth", isSelected: false },
        { type: "Nuptia 4", isSelected: false },
      ],
    },
  ],
  results: [],
};

export default context;

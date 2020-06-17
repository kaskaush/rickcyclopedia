const context = {
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
};

export default context;

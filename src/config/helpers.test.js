import { getFilteredData, getSearchData, getSortedData } from "./helpers";

describe("helper functions", () => {
  const baseData = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",

      url: "https://rickandmortyapi.com/api/character/2",
      created: "2017-11-04T18:50:21.651Z",
    },
    {
      id: 3,
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",

      url: "https://rickandmortyapi.com/api/character/3",
      created: "2017-11-04T19:09:56.428Z",
    },
    {
      id: 4,
      name: "Beth Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",

      url: "https://rickandmortyapi.com/api/character/4",
      created: "2017-11-04T19:22:43.665Z",
    },
    {
      id: 5,
      name: "Jerry Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",

      url: "https://rickandmortyapi.com/api/character/5",
      created: "2017-11-04T19:26:56.301Z",
    },
    {
      id: 6,
      name: "Abadango Cluster Princess",
      status: "Alive",
      species: "Alien",
      type: "",
      gender: "Female",
      origin: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2",
      },
      location: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
      url: "https://rickandmortyapi.com/api/character/6",
      created: "2017-11-04T19:50:28.250Z",
    },
    {
      id: 7,
      name: "Abradolf Lincler",
      status: "unknown",
      species: "Human",
      type: "Genetic experiment",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Testicle Monster Dimension",
        url: "https://rickandmortyapi.com/api/location/21",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",

      url: "https://rickandmortyapi.com/api/character/7",
      created: "2017-11-04T19:59:20.523Z",
    },
    {
      id: 8,
      name: "Adjudicator Rick",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
      url: "https://rickandmortyapi.com/api/character/8",
      created: "2017-11-04T20:03:34.737Z",
    },
    {
      id: 9,
      name: "Agency Director",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
      url: "https://rickandmortyapi.com/api/character/9",
      created: "2017-11-04T20:06:54.976Z",
    },
  ];
  it("should return filtered data", () => {
    const filters = [
      {
        type: "status",
        options: [
          { type: "Alive", isSelected: true },
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
    ];

    expect(getFilteredData(baseData, filters)).toHaveLength(6);
  });

  it("should return search data", () => {
    const searchTerm = "Rick";
    expect(getSearchData(baseData, searchTerm)).toHaveLength(2);
  });

  it("should return sorted data", () => {
    expect(
      getSortedData(baseData, { sortParam: "id", sortOrder: "desc" })[0].id
    ).toEqual(9);
  });
});

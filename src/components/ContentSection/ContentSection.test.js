import React from "react";
import { mount } from "enzyme";
import ContentSection from "./index";
import { StateProvider } from "../../config/store";
import SelectedFilters from "../SelectedFilters";
import SearchAndSort from "../SearchAndSort";

describe("<ContentSection/>", () => {
  const props = {
    fetchData: jest.fn(),
  };
  const wrapper = mount(
    <StateProvider
      value={{ state: { selectedFilters: ["Alive"], data: { results: [] } } }}
    >
      <ContentSection {...props} />
    </StateProvider>
  );

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have the selected filters component", () => {
    expect(wrapper.find(SelectedFilters)).toHaveLength(1);
  });

  it("should have the search and sort component", () => {
    expect(wrapper.find(SearchAndSort)).toHaveLength(1);
  });
});

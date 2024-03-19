import React from "react";
import { render } from "@testing-library/react-native";
import ExplorerVegetables from "./ExplorerVegetables";
import ProductList from "../../../../../components/ProductList/ProductList";

// Mock the ProductList component
jest.mock("../../../../../components/ProductList/ProductList", () => {
  return jest.fn(() => <></>);
});

describe("ExplorerVegetables", () => {
  it("renders correctly", () => {
    const { getByText } = render(<ExplorerVegetables />);
    expect(getByText("Some content before ProductList")).toBeDefined();
    expect(ProductList).toHaveBeenCalledWith({ category: "vegetables" }, {});
  });
});

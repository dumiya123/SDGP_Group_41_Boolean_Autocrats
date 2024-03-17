import React from "react";
import { render } from "@testing-library/react-native";
import About from "./about";

describe("About", () => {
  it("renders correctly", () => {
    const { getByText, getAllByText } = render(<About />);

    // Assert that the section title is rendered
    expect(
      getByText("Welcome to the about us page of the SaveNest application.")
    ).toBeDefined();

    // Assert that the subtitles are rendered
    expect(getByText("Developed by")).toBeDefined();
    expect(getByText("Team SE-41")).toBeDefined();
    expect(getByText("Boolean Autocrats")).toBeDefined();

    // Assert that the copyright text is rendered
    expect(getByText("SaveNest")).toBeDefined();
  });
});

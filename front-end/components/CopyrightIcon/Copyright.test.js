import React from "react";
import { render } from "@testing-library/react-native";
import Copyright from "./Copyright";

// Mock the Icon component to prevent it from being called
jest.mock("react-native-vector-icons/FontAwesome", () => "IconMock");

describe("Copyright", () => {
  it("renders correctly", () => {
    const text = "© 2024";
    const { getByText, queryByTestId } = render(<Copyright text={text} />);

    // Ensure that the text is rendered
    expect(getByText(text)).toBeTruthy();

    // Ensure that the Icon component is not rendered
    expect(queryByTestId("icon")).toBeNull();
  });
});

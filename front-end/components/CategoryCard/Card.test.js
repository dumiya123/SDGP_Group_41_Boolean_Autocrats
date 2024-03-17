import React from "react";
import { render } from "@testing-library/react-native";
import CardComponent from "./Card";

describe("CardComponent", () => {
  it("renders correctly", () => {
    const props = {
      image: require("../../pages/Profile/Add/AddImages/fish.jpg"),
      date: "2024-03-17",
      off: "50% OFF",
      offText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      onClicked: jest.fn(),
    };
    const { getByText } = render(<CardComponent {...props} />);

    expect(getByText(props.date)).toBeTruthy();
    expect(getByText(props.off)).toBeTruthy();
    expect(getByText("EXPLORE")).toBeTruthy();
  });

  // Add more test cases as needed
});

import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ImageUploader from "./ImageUploader";

jest.mock("expo-image-picker", () => ({
  requestMediaLibraryPermissionsAsync: jest.fn(),
  launchImageLibraryAsync: jest.fn(),
  requestCameraPermissionsAsync: jest.fn(),
  launchCameraAsync: jest.fn(),
}));

jest.mock("@expo/vector-icons", () => ({
  Ionicons: "IconMock",
}));

describe("ImageUploader", () => {
  it("renders without crashing", () => {
    render(<ImageUploader showModal={true} />);
  });
});

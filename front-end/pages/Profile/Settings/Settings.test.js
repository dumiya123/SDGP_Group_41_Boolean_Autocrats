import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Settings from "./Settings";
import useSettingsFunctions from "./SettingsFunctions";

// Mock the useSettingsFunctions hook
jest.mock("./SettingsFunctions", () => {
  const handleEditProfile = jest.fn();
  const handlePushNotifications = jest.fn();
  const handleInviteFriends = jest.fn();
  const handleAbout = jest.fn();
  const handleHelpAndSupport = jest.fn();
  const handleLogout = jest.fn();

  return {
    __esModule: true,
    default: () => ({
      handleEditProfile,
      handlePushNotifications,
      handleInviteFriends,
      handleAbout,
      handleHelpAndSupport,
      handleLogout,
    }),
    handleEditProfile,
    handlePushNotifications,
    handleInviteFriends,
    handleAbout,
    handleHelpAndSupport,
    handleLogout,
  };
});

describe("Settings", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Settings />);
    expect(getByText("Settings and privacy")).toBeTruthy();
    expect(getByText("Other")).toBeTruthy();
    expect(getByText("Support & About")).toBeTruthy();
    expect(getByText("SaveNest")).toBeTruthy();
  });

  it("handles button presses correctly", () => {
    const { getByText, getByTestId } = render(<Settings />);
    fireEvent.press(getByText("Profile"));
    expect(useSettingsFunctions().handleEditProfile).toHaveBeenCalled();

    fireEvent.press(getByText("Push Notifications"));
    expect(useSettingsFunctions().handlePushNotifications).toHaveBeenCalled();

    fireEvent.press(getByText("Invite Friends"));
    expect(useSettingsFunctions().handleInviteFriends).toHaveBeenCalled();

    fireEvent.press(getByText("About"));
    expect(useSettingsFunctions().handleAbout).toHaveBeenCalled();

    fireEvent.press(getByText("Help & Support"));
    expect(useSettingsFunctions().handleHelpAndSupport).toHaveBeenCalled();
  });
});

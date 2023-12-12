import { config } from "@gluestack-ui/config";
import UserCard from "./UserCard";
import { GluestackUIStyledProvider } from "@gluestack-ui/themed";
import { Provider } from "react-redux";
import { store } from "../../Redux/store";
import { render, fireEvent } from "@testing-library/react-native";

describe("UserCard", function () {
  const userInfo = {
    name: "Test User",
    profilePic: "test.jpg",
    status: "online",
    statusColor: "green",
  };

  const { getByTestId } = render(
    <Provider store={store}>
      <GluestackUIStyledProvider config={config}>
        <UserCard key={1} userInfo={userInfo} />
      </GluestackUIStyledProvider>
    </Provider>
  );
  beforeAll(() => {
    fireEvent.press(getByTestId("pressable"));
  });

  it("should set viewContact to true", function () {
    expect(store.getState().appSlice.viewContactInfo).toBe(true);
  });
  it("should set previousPage to true", function () {
    expect(store.getState().appSlice.previousPage).toBe(true);
  });
  it("should set contactInfo", function () {
    expect(store.getState().appSlice.contactInfo).toEqual(userInfo);
  });
});

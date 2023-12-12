import LandingPage from "./LandingPage";
import renderer, { act } from "react-test-renderer";
import { Provider } from "react-redux";
import { GluestackUIStyledProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { setupUserInfoStore } from "../../Redux/store";

function MockBarCodeScanner() {
  return <></>;
}

MockBarCodeScanner.requestPermissionsAsync = async function () {
  return { status: "granted" };
};

jest.mock("expo-barcode-scanner", () => ({
  __esModule: true,
  BarCodeScanner: MockBarCodeScanner,
}));

jest.mock("expo-sqlite", () => ({
  openDatabase: jest.fn(() => ({
    transaction: jest.fn(),
  })),
}));

describe("LandingPage", function () {
  let landingPage;
  const initialState = {
    appSlice: {
    viewContactInfo: false,
      contactInfo: {},
    },
  };

  beforeAll(async () => {
    const store = setupUserInfoStore(initialState);
    await act(async () => {
      landingPage = renderer.create(
        <Provider store={store}>
          <GluestackUIStyledProvider config={config}>
            <LandingPage />
          </GluestackUIStyledProvider>
        </Provider>
      );
    });
  });

  it("should render LandingPage component correctly", () => {
    act(() => {
      expect(landingPage).toMatchSnapshot();
    });
  });

  it("should have a single child", function () {
    expect(landingPage.toJSON().children.length).toBe(1);
  });
});

import ScannerContainer from "./ScannerContainer";
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

describe("ScannerContainer", function () {
  let scannerContainer;
  const initialState = {
    appSlice: {
      scanViewVisible: true,
      contactInfo: {},
    },
  };

  beforeAll(async () => {
    const store = setupUserInfoStore(initialState);
    await act(async () => {
      scannerContainer = renderer.create(
        <Provider store={store}>
          <GluestackUIStyledProvider config={config}>
            <ScannerContainer />
          </GluestackUIStyledProvider>
        </Provider>
      );
    });
  });

  it("should render scanner component correctly", () => {
    act(() => {
      expect(scannerContainer).toMatchSnapshot();
    });
  });

  it("should display a barcodeScanner", function () {
    expect(scannerContainer.toJSON().children.length).toBe(2);
  });
});

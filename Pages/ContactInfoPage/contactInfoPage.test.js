import ContactInfoPage from "./ContactInfoPage";
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

const info = {
  name: "john",
  email: "john@gmail.com",
  profilePic: "image",
  github: "github.com",
  companyName: "Umuzi",
  position: "Clerk",
  site: "",
  status: "ready",
  statusColor: "purple",
};

describe("ContactInfoPage", function () {
  let contactInfoPage;
  const initialState = {
    appSlice: {
      alertInfo: {
        visibility: false,
        theme: "",
      },
    },
  };

  beforeAll(async () => {
    const store = setupUserInfoStore(initialState);
    await act(async () => {
      contactInfoPage = renderer.create(
        <Provider store={store}>
          <GluestackUIStyledProvider config={config}>
            <ContactInfoPage info={info} />
          </GluestackUIStyledProvider>
        </Provider>
      );
    });
  });

  it("should render ContactInfoPage component correctly", () => {
    act(() => {
      expect(contactInfoPage).toMatchSnapshot();
    });
  });

  it("should have 2 buttons", function () {
    const buttonCount = contactInfoPage
      .toJSON()
      .children.filter((child) => child.props.onClick).length;
    expect(buttonCount).toBe(2);
  });
  it("should have 4 children in total", function () {
    const childrenCount = contactInfoPage.toJSON().children.length;
    expect(childrenCount).toBe(4);
  });
});

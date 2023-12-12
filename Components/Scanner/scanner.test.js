import Scanner from "./Scanner";
import { renderWithProviders } from "../../Utils/testStore";

describe("Scanner", function () {
  let scanner;
  beforeEach(() => {
    scanner = renderWithProviders(
      <Scanner scanCheck={false} handleScanned={"handleBarCodeScanned"} />
    );
  });

  it("should display a heading of 'Scan QR'", function () {
    const scanQRCount = scanner.getAllByText("Scan QR").length;
    expect(scanQRCount).toBe(1);
  });
  it("should render the Scanner component correctly", () => {
    expect(scanner).toMatchSnapshot();
  });
});

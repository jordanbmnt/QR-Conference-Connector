import { config } from "@gluestack-ui/config";
import renderer from "react-test-renderer";
import CustomAlert from "./CustomAlert";
import { GluestackUIStyledProvider } from "@gluestack-ui/themed";

jest.useFakeTimers();
describe("CustomAlert", function () {
  const alert = renderer
    .create(
      <GluestackUIStyledProvider config={config}>
        <CustomAlert theme='error' />
      </GluestackUIStyledProvider>
    )
    .toJSON();
  it("should have one child", function () {
    expect(alert.children.length).toBe(2);
  });
  it("should render the alert component correctly", () => {
    expect(alert).toMatchSnapshot();
  });
});

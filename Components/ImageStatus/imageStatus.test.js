import renderer from "react-test-renderer";
import ImageStatus from "./ImageStatus";

describe("ImageStatus", function () {
  const image = renderer.create(<ImageStatus theme='noContact' />).toJSON();
  it("should render the image component correctly", () => {
    expect(image).toMatchSnapshot();
  });
  it("should be transparent", function () {
    expect(image.props.style.opacity).toBe(0.5);
  });
  it("should render the imageStatus component correctly", () => {
    expect(image).toMatchSnapshot();
  });
});

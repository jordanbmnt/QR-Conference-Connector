import PermissionLoader from "./PermissionLoader";
import renderer from "react-test-renderer";

describe("PermissionLoader", function () {
  const loader = renderer.create(<PermissionLoader />).toJSON();
  it("should contain a view element", function () {
    expect(loader.type).toBe("View");
  });
  it("should contain a View with one child", function () {
    expect(loader.children.length).toBe(1);
  });
  it("should contain a loader of size 42", function () {
    expect(loader.children[0].props.size).toBe(42);
  });
  it("should render the PermissionLoader component correctly", () => {
    expect(loader).toMatchSnapshot();
  });
});

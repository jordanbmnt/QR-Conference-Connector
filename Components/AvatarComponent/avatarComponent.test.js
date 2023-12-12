import { config } from "@gluestack-ui/config";
import renderer from "react-test-renderer";
import AvatarComponent from "./AvatarComponent";
import { GluestackUIStyledProvider } from "@gluestack-ui/themed";

jest.useFakeTimers();
describe("AvatarComponent", function () {
  const avatar = renderer
    .create(
      <GluestackUIStyledProvider config={config}>
        <AvatarComponent
          name={"John"}
          profilePic={"profilePic"}
          status={"Alive"}
          statusColor={"orange"}
        />
      </GluestackUIStyledProvider>
    )
    .toJSON();
  const vStack = avatar.children;
  const avatarImage = vStack[0].children[0];
  const avatarInfo = vStack[0].children[1];
  it("should have one child", function () {
    expect(vStack.length).toBe(1);
  });
  it("should have the avatar fallback text of 'J'", function () {
    expect(avatarImage.children[0].children[0]).toBe("J");
  });
  it("should have an image of 'profilePic'", function () {
    const avatarImageInfo = avatarImage.children[1];
    expect(avatarImageInfo.type).toBe("Image");
    expect(avatarImageInfo.props.source).toEqual({ uri: "profilePic" });
  });
  it("should display the name of the parsed content", function () {
    const avatarHeading = avatarInfo.children[0];
    expect(avatarHeading.type).toBe("Text");
    expect(avatarHeading.children[0]).toBe("John");
  });
  it("should have a status of 'Alive'", function () {
    const avatarStatus = avatarInfo.children[1].children[0].children[0];
    expect(avatarStatus).toBe("Alive");
  });
  it("should render avatar component correctly", () => {
    expect(avatar).toMatchSnapshot();
  });
});

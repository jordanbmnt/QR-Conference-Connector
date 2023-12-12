import { config } from "@gluestack-ui/config";
import UserDetail from "./UserDetail";
import { GluestackUIStyledProvider } from "@gluestack-ui/themed";
import { render } from "@testing-library/react-native";
import { MailSearch } from "lucide-react-native";

describe("UserDetail", function () {
  it("should display a link to the users email when a theme of 'clicked is parsed as an argument'", function () {
    const emailUserDetail = render(
      <GluestackUIStyledProvider config={config}>
        <UserDetail
          icon={MailSearch}
          destination={"email@gmail.com"}
          theme={"click"}
          text={"My Email"}
        />
      </GluestackUIStyledProvider>
    );
    expect(emailUserDetail).toMatchSnapshot();
    expect(typeof emailUserDetail.getByTestId("emailLink")).toBe("object");
  });
  it("should not display a link to the users email when a theme of 'clicked is not parsed as an argument'", function () {
    const userDetail = render(
      <GluestackUIStyledProvider config={config}>
        <UserDetail icon={MailSearch} text={"John"} />
      </GluestackUIStyledProvider>
    );
    expect(userDetail).toMatchSnapshot();
    expect(() => {
      userDetail.getByTestId("emailLink");
    }).toThrowError("Unable to find an element with testID: emailLink");
  });
});

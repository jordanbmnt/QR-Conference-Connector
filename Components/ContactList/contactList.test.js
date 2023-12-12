import ContactList from "./ContactList";
import { renderWithProviders } from "../../Utils/testStore";

const contactList = [
  {
    companyName: "",
    email: "jackie@gmail.com",
    github: "https://github.com/jackie",
    id: 1,
    name: "Jake",
    position: "CEO of Marketing",
    profilePic: "Image",
    site: "https://www.spotify.com",
    status: "unavailable",
    statusColor: "grey",
  },
  {
    companyName: "CN",
    email: "jake@adventuretime.com",
    github: "github.com/jake",
    id: 5,
    name: "Jake",
    position: "Full-Stack Web Developer",
    profilePic: "Image",
    site: "cartoon.com",
    status: "alien",
    statusColor: "purple",
  },
];

describe("ContactList", function () {
  let emailContactList;
  beforeEach(() => {
    emailContactList = renderWithProviders(
      <ContactList contacts={contactList} />
    );
  });
  it("should render the emailContactList component correctly", () => {
    expect(emailContactList).toMatchSnapshot();
  });
  it("should display a list of two contacts", function () {
    const contactListLength = emailContactList.getAllByText("Jake").length;
    expect(contactListLength).toBe(2);
  });
});

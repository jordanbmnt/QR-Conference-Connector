import { infoParser } from "./infoParser";

describe("infoParser", function () {
  it("should take in an array and return an object of key-value pairs", function () {
    const unParsedData = [
      "name: Jane",
      "email: jane@gmail.com",
      "profile pic: https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "github: https://github.com/jordanbmnt",
      "company name: Spotify",
      "site: https://www.spotify.com",
      "status: available",
      "status color: green",
      "position: Web Developer",
    ];
    const parsedDataObj = {
      companyName: "Spotify",
      email: "jane@gmail.com",
      github: "https://github.com/jordanbmnt",
      name: "Jane",
      position: "Web Developer",
      profilePic:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      site: "https://www.spotify.com",
      status: "available",
      statusColor: "green",
    };
    const parsedData = infoParser(unParsedData);
    expect(parsedData).toEqual(parsedDataObj);
  });
});

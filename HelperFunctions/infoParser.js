export const infoParser = (ar) => {
  const userObj = {
    name: "",
    email: "",
    profilePic: "",
    github: "",
    companyName: "",
    position: "",
    site: "",
    status: "",
    statusColor: "",
  };
  for (const data of ar) {
    const dataAr = data.split(": ");
    if (dataAr[0] === "profile pic") {
      userObj["profilePic"] = dataAr[1];
    } else if (dataAr[0] === "company name") {
      userObj["companyName"] = dataAr[1];
    } else if (dataAr[0] === "status color") {
      userObj["statusColor"] = dataAr[1];
    } else {
      userObj[dataAr[0]] = dataAr[1];
    }
  }
  return userObj;
};
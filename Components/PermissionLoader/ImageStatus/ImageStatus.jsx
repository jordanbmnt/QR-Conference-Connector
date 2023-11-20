import { Image, StyleSheet, View } from "react-native";

export default ImageStatus = ({ theme }) => {
  return (
    <View style={styles.noContactsBackground}>
      {theme === "noContacts" ? (
        <Image
          style={styles.img}
          source={require("../assets/images/noContacts.png")}
          alt='noContact'
        />
      ) : theme === "invalidQR" ? (
        <Image
          source={require("../assets/images/invalidQR.png")}
          alt='invalidQR'
        />
      ) : theme === "permission" ? (
        <Image
          source={require("../assets/images/permission.png")}
          alt='permission'
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  noContactsBackground: {
    justifyContent: "center",
    alignContent: "center",
    opacity: 0.5,
    height: "80%",
  },
  img: {
    width: 400,
    height: 400,
  },
});

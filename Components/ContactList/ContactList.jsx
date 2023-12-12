import { StyleSheet } from "react-native";
import { ScrollView } from "@gluestack-ui/themed";
import UserCard from "../UserCard/UserCard";

export default ContactList = ({ contacts }) => {
  return (
    <ScrollView height='100%' sx={styles.scrollView}>
      {contacts.map((user, id) => (
        <UserCard key={id} userInfo={user} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    alignContent: "center",
  },
});

import { StyleSheet } from "react-native";
import {
  Alert,
  AlertIcon,
  AlertText,
  CheckCircleIcon,
  VStack,
} from "@gluestack-ui/themed";
import { Ghost, XCircleIcon } from "lucide-react-native";

const AlertCreator = ({ action, icon, heading, msg }) => {
  return (
    <Alert sx={styles.alert} variant='solid' action={action}>
      <AlertIcon as={icon} size='xl' mr='$3' />
      <VStack space='xs'>
        <AlertText fontWeight='$bold'>{heading}</AlertText>
        <AlertText>{msg}</AlertText>
      </VStack>
    </Alert>
  );
};

export default CustomAlert = ({ theme }) => {
  if (theme === "error") {
    return (
      <AlertCreator
        action={"error"}
        icon={XCircleIcon}
        heading={"Oh No! [Download Error]"}
        msg={"There was an issue getting your contacts 😬"}
      />
    );
  } else if (theme === "success") {
    return (
      <AlertCreator
        action={"success"}
        icon={CheckCircleIcon}
        heading={"Congratulations!"}
        msg={"You have created a new connection 🎉"}
      />
    );
  } else if (theme === "errorUpload") {
    return (
      <AlertCreator
        action={"error"}
        icon={XCircleIcon}
        heading={"Oh No! [Upload Error]"}
        msg={"There was an issue uploading your contact 🤔"}
      />
    );
  } else if (theme === "duplicate") {
    return (
      <AlertCreator
        action={"info"}
        icon={Ghost}
        heading={"We meet again!"}
        msg={"This contact already exists 😎"}
      />
    );
  }
};

const styles = StyleSheet.create({
  alert: {
    position: "absolute",
    zIndex: 10,
    top: 40,
  },
});

import { Button, ButtonText, HStack } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setPreviousPage,
  setScanViewVisible,
  setViewContact,
} from "../../Redux/appSlice";

export default NavButtons = ({ validity }) => {
  const dispatch = useDispatch();
  const scanViewVisible = useSelector(
    (state) => state.appSlice.scanViewVisible
  );
  const previousPage = useSelector((state) => state.appSlice.previousPage);
  return (
    <HStack>
      <Button
        sx={styles.button}
        onPress={() => {
          if (scanViewVisible) {
            dispatch(setScanViewVisible(false));
          } else {
            dispatch(setScanViewVisible(true));
            dispatch(setPreviousPage(false));
          }
        }}
        isDisabled={!validity}
      >
        <ButtonText>
          {scanViewVisible ? "Contacts" : "Tap to Scan Again"}
        </ButtonText>
      </Button>
      {previousPage && scanViewVisible && (
        <Button
          sx={styles.button}
          onPress={() => {
            if (previousPage) {
              dispatch(setScanViewVisible(false));
              dispatch(setViewContact(true));
            }
          }}
          isDisabled={!validity}
        >
          <ButtonText>Back</ButtonText>
        </Button>
      )}
    </HStack>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 0,
    margin: 30,
    marginBottom: 40,
  },
});

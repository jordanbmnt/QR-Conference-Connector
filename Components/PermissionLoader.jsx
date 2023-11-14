import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Spinner } from "@gluestack-ui/themed";

export default PermissionsLoader = () => {
  return (
    <View style={styles.permissionLoader}>
      <Spinner size={42} />
    </View>
  );
};

const styles = StyleSheet.create({
  permissionLoader: { flex: 1, alignItems: "center", justifyContent: "center" },
});

import { useDispatch } from "react-redux";
import { Pressable } from "react-native";
import { Box } from "@gluestack-ui/themed";
import AvatarComponent from "./AvatarComponent";
import {
  setContactInfo,
  setPreviousPage,
  setViewContact,
} from "../Redux/appSlice";

export default UserCard = ({ userInfo }) => {
  const dispatch = useDispatch();
  const name = userInfo.name;
  const profilePic = userInfo.profilePic;
  const status = userInfo.status;
  const statusColor = userInfo.statusColor;
  return (
    <Pressable
      onPress={() => {
        dispatch(setViewContact(true));
        dispatch(setPreviousPage(true));
        dispatch(setContactInfo(userInfo));
      }}
    >
      <Box
        py='$9'
        px='$9'
        m='$5'
        rounded='$lg'
        borderColor='$backgroundLight300'
        borderWidth='$1'
        sx={{
          _dark: {
            borderColor: "$backgroundDark700",
          },
        }}
      >
        <AvatarComponent
          name={name}
          profilePic={profilePic}
          status={status}
          statusColor={statusColor}
        />
      </Box>
    </Pressable>
  );
};

import { Box, Divider } from "@gluestack-ui/themed";
import AvatarComponent from "./AvatarComponent";
import UserInformationComponent from "./UserInformationComponent";

export default function UserCard({ userInfo }) {
  const { name, email, profilePic, github, companyName, position, site } =
    userInfo;
  return (
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
        position={position}
      />

      <Divider mt='$4' mb='$4' />

      <UserInformationComponent
        github={github}
        email={email}
        site={site}
        companyName={companyName}
      />
    </Box>
  );
}

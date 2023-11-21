import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Box,
  HStack,
  Heading,
  Icon,
} from "@gluestack-ui/themed";
import { Dot } from "lucide-react-native";

export default ContactInfoHead = ({
  profilePic,
  name,
  status,
  statusColor,
}) => {
  return (
    <Box sx={{ alignItems: "center" }}>
      <Avatar size='xl' mb={20}>
        <AvatarFallbackText>{name[0]}</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: profilePic,
          }}
        />
      </Avatar>
      <Heading color='white' size='2xl'>
        {name}
      </Heading>
      {status && (
        <HStack sx={{ right: 10 }}>
          <Icon color={statusColor} as={Dot} size='sm' />
          <Heading color='grey' size='xs'>
            {status}
          </Heading>
        </HStack>
      )}
    </Box>
  );
};

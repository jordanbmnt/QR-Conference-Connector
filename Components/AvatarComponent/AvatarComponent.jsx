import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  HStack,
  Heading,
  Icon,
  VStack,
} from "@gluestack-ui/themed";
import { Dot } from "lucide-react-native";

export default AvatarComponent = ({
  name,
  profilePic,
  status,
  statusColor,
}) => {
  return (
    <VStack space='2xl'>
      <HStack space='md'>
        <Avatar>
          <AvatarFallbackText>{name[0]}</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: profilePic,
            }}
          />
        </Avatar>
        <VStack>
          <Heading color='white' size='md'>
            {name}
          </Heading>
          {status && status.length > 0 && (
            <HStack sx={{ textJustify: "center" }}>
              <Heading color='grey' size='xs'>
                {status}
              </Heading>
              <Icon color={statusColor} as={Dot} size='sm' />
            </HStack>
          )}
        </VStack>
      </HStack>
    </VStack>
  );
};

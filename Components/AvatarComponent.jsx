import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  HStack,
  Heading,
  Text,
  VStack,
} from "@gluestack-ui/themed";

export default function AvatarComponent({ name, profilePic, position }) {
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
          <Heading color='white' size='sm'>
            {name}
          </Heading>
          {position.length > 0 && (
            <Text size='sm'>{`Position: ${position}`}</Text>
          )}
        </VStack>
      </HStack>
    </VStack>
  );
}

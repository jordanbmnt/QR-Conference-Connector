import { Box, Divider, HStack, Text } from "@gluestack-ui/themed";
import LinkButton from "./LinkButton";

export default function UserInformationComponent({
  github,
  email,
  site,
  companyName,
}) {
  return (
    <Box>
      <HStack
        px='$3'
        h='$8'
        rounded='$sm'
        borderWidth='$1'
        borderColor='$backgroundLight300'
        alignItems='center'
        justifyContent='center'
        sx={{
          _dark: {
            borderColor: "$backgroundDark700",
          },
        }}
      >
        <LinkButton label={"Github"} link={github} />

        <Divider orientation='vertical' h='50%' mx='$2.5' />

        <LinkButton theme={"email"} label={"Email"} link={email} />

        <Divider orientation='vertical' h='50%' mx='$2.5' />

        <LinkButton label={"Company"} link={site} />
      </HStack>

      {companyName && (
        <HStack space='sm' mt='$3' alignItems='center'>
          <Divider bg='$amber700' w={18} />
          <Text size='xs' color='$amber700'>
            from {companyName}
          </Text>
        </HStack>
      )}
    </Box>
  );
}

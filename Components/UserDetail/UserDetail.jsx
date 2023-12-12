import { ExternalLinkIcon } from "lucide-react-native";
import { HStack, Icon, Link, LinkText, Text } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

export default UserDetail = ({ icon, text, theme, destination }) => {
  if (theme === "click")
    return (
      <HStack>
        <Link
          href={text === "My Email" ? `mailto:${destination}` : destination}
          isExternal
          testID='emailLink'
        >
          <HStack alignItems='center'>
            <Icon
              as={icon}
              size={20}
              color='$info600'
              mr='$3'
              ml='$2'
              sx={{
                _dark: styles.dark,
              }}
            />
            <LinkText sx={styles.text} size='lg'>
              {text}
            </LinkText>
            <Icon
              as={ExternalLinkIcon}
              size={10}
              color='$info600'
              mr='$3'
              ml='$2'
              sx={{
                _dark: styles.dark,
              }}
            />
          </HStack>
        </Link>
      </HStack>
    );

  return (
    <HStack alignItems='center'>
      <Icon
        size={20}
        color='$info600'
        mr='$3'
        sx={{
          _dark: styles.dark,
        }}
        as={icon}
        m='$2'
      />
      <Text sx={styles.text}>{text}</Text>
    </HStack>
  );
};

const styles = StyleSheet.create({
  dark: {
    color: "$info300",
  },
  text: {
    fontSize: 18,
    textDecorationLine: "none",
    color: "$info600",
  },
});

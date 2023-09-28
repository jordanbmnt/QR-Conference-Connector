import { Button, ButtonText, Link, LinkText } from "@gluestack-ui/themed";

export default function LinkButton({ label, link, theme }) {
  if (theme === "email") {
    return (
      <Button variant='link' size='xs'>
        <ButtonText>
          <Link href={`mailto:${link}`}>
            <LinkText>{label}</LinkText>
          </Link>
        </ButtonText>
      </Button>
    );
  } else {
    return (
      <Button variant='link' size='xs'>
        <ButtonText>
          <Link href={link}>
            <LinkText>{label}</LinkText>
          </Link>
        </ButtonText>
      </Button>
    );
  }
}

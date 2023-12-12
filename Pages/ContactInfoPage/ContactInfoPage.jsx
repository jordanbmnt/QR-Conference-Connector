import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  Building2,
  PersonStanding,
  Github,
  MailSearch,
  Briefcase,
  ScanLine,
  Contact,
} from "lucide-react-native";
import { Box, Icon, Pressable, VStack } from "@gluestack-ui/themed";
import { setScanViewVisible, setViewContact } from "../../Redux/appSlice";
import UserDetail from "../../Components/UserDetail/UserDetail";
import ContactInfoHead from "../../Components/ContactInfoHead/ContactInfoHead";
import CustomAlert from "../../Components/CustomAlert/CustomAlert";

export default function ContactInfoPage({ info }) {
  const alertInfo = useSelector((state) => state.appSlice.alertInfo);
  const name = info.name;
  const email = info.email;
  const profilePic = info.profilePic;
  const github = info.github;
  const companyName = info.companyName;
  const position = info.position;
  const site = info.site;
  const status = info.status;
  const statusColor = info.statusColor;
  const dispatch = useDispatch();

  return (
    <Box
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      backgroundColor='#0b0e14'
    >
      {alertInfo.visibility && <CustomAlert theme={alertInfo.theme} />}
      <Pressable
        onPress={() => {
          dispatch(setViewContact(false));
        }}
        sx={styles.contactButton}
      >
        <Icon color='white' as={Contact} size='lg' />
      </Pressable>
      <Pressable
        onPress={() => {
          dispatch(setViewContact(false));
          dispatch(setScanViewVisible(true));
        }}
        sx={styles.scannerButton}
      >
        <Icon color='white' as={ScanLine} size='lg' />
      </Pressable>
      <ContactInfoHead
        profilePic={profilePic}
        name={name}
        status={status}
        statusColor={statusColor}
      />
      <VStack
        p='$9'
        m='$5'
        rounded='$lg'
        borderColor='$backgroundLight300'
        borderWidth='$1'
        width={280}
        height={400}
        sx={{
          _dark: {
            borderColor: "$backgroundDark700",
          },
          justifyContent: "space-around",
        }}
      >
        {email && (
          <UserDetail
            icon={MailSearch}
            destination={email}
            theme={"click"}
            text={"My Email"}
          />
        )}
        {github.length > 0 && (
          <UserDetail
            icon={Github}
            destination={github}
            theme={"click"}
            text={"My Github"}
          />
        )}
        {site.length > 0 && (
          <UserDetail
            icon={Briefcase}
            destination={site}
            theme={"click"}
            text={"Company Site"}
          />
        )}
        {position.length > 0 && (
          <UserDetail icon={PersonStanding} text={position} />
        )}
        {companyName.length > 0 && (
          <UserDetail icon={Building2} text={companyName} />
        )}
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  contactButton: {
    position: "absolute",
    top: 50,
    left: 20,
    borderWidth: 1,
    borderColor: "white",
    padding: 5,
    borderRadius: 10,
  },
  scannerButton: {
    position: "absolute",
    top: 47,
    right: 25,
    borderWidth: 3,
    borderColor: "lightgrey",
    padding: 5,
    borderRadius: 10,
  },
  container: { height: "100%", alignItems: "center", justifyContent: "center" },
});

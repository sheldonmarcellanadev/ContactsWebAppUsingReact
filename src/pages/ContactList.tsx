import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import ContactInfo from "../components/ContactInfo";

const ContactList = () => {
  const contactList = useAppSelector((state) => state.contact.contactList);

  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box width="50%">
        <Box
          d="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="20px"
        >
          <Heading>Contact List</Heading>
          <Link to="/add-or-edit-contact">
            <Button paddingX="3rem">Add</Button>
          </Link>
        </Box>
        {contactList?.length === 0 && (
          <Text fontSize="3xl" marginTop="100px" textAlign="center">
            No contacts yet
          </Text>
        )}
        <Stack spacing={8}>
          {contactList.map((contact) => (
            <ContactInfo
              key={contact.id}
              name={contact.name}
              address={contact.address}
              id={contact.id}
              email={contact.email}
            />
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

export default ContactList;

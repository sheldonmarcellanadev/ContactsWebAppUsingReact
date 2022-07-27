import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";

import { SetStateAction, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addNewContact, updateContact } from "../redux/contactSlice";
import { v4 as uuidv4 } from "uuid";
import { useParams, useHistory } from "react-router-dom";

const AddOrEditContact = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const contact = useAppSelector((state) =>
    state.contact.contactList.find((contact) => contact.id === id)
  );

  const [name, setName] = useState<string | undefined>(contact?.name || "");
  const [address, setAddress] = useState<string | undefined>(
    contact?.address || ""
  );
  const [email, setEmail] = useState<string | undefined>(contact?.email || "");

  const toast = useToast();

  const handleOnSubmit = () => {
    if (name === "" || address === "" || email === "") {
      toast({
        title: "All fields are required to create a contact",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    } else if (id) {
      editContact();
      return;
    }

    dispatch(addNewContact({ address, name, id: uuidv4(), email }));
    clearInputs();
    history.push("/");
  };

  const editContact = () => {
    dispatch(updateContact({ address, name, id, email }));
    clearInputs();
    history.push("/");
  };

  const clearInputs = () => {
    setName("");
    setAddress("");
    setEmail("");
  };

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
          <Heading>Add Contact</Heading>
        </Box>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            value={name}
            placeholder="John Doe"
            onChange={(e: {
              currentTarget: { value: SetStateAction<string | undefined> };
            }) => setName(e.currentTarget.value)}
          />
          <FormLabel marginTop={4}>Address</FormLabel>
          <Input
            value={address}
            placeholder="Philippines"
            onChange={(e: {
              currentTarget: { value: SetStateAction<string | undefined> };
            }) => setAddress(e.currentTarget.value)}
          />
          <FormLabel marginTop={4}>Email</FormLabel>
          <Input
            value={email}
            placeholder="johndoe@email.com"
            onChange={(e: {
              currentTarget: { value: SetStateAction<string | undefined> };
            }) => setEmail(e.currentTarget.value)}
          />
        </FormControl>
        <Button
          marginTop={4}
          colorScheme="teal"
          type="submit"
          onClick={handleOnSubmit}
        >
          Submit
        </Button>
      </Box>
    </Flex>
  );
};

export default AddOrEditContact;

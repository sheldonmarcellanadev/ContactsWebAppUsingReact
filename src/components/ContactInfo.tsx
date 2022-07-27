import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Heading, IconButton, Text } from "@chakra-ui/react";

import { useAppDispatch } from "../hooks";
import { deleteContact } from "../redux/contactSlice";
import { useHistory } from "react-router-dom";

const ContactInfo = ({
  name,
  address,
  id,
  email,
  ...rest
}: {
  name: string | undefined;
  address: string | undefined;
  id: string;
  email: string | undefined;
}) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const redirect = (id: string) => {
    history.push(`/update-contact/${id}`);
  };

  return (
    <Box
      p={5}
      justifyContent="space-between"
      d="flex"
      shadow="md"
      borderWidth="1px"
      {...rest}
    >
      <Box d="flex" flexDirection="column">
        <Heading fontSize="xl">{name}</Heading>
        <Text mt={1}>{address}</Text>
        <Text mt={1}>{email}</Text>
      </Box>
      <Box>
        <IconButton
          color="#1a202c"
          aria-label=""
          icon={<DeleteIcon />}
          marginRight="1rem"
          onClick={() => dispatch(deleteContact({ id }))}
        />
        <IconButton
          color="#1a202c"
          aria-label=""
          icon={<EditIcon />}
          onClick={() => redirect(id)}
        />
      </Box>
    </Box>
  );
};

export default ContactInfo;

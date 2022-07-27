import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ContactState } from "../types";

type initialStateType = {
  contactList: ContactState[];
};

const contactList: ContactState[] = [];

const initialState: initialStateType = {
  contactList,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addNewContact: (
      state: { contactList: ContactState[] },
      action: PayloadAction<ContactState>
    ) => {
      state.contactList.push(action.payload);
    },
    updateContact: (
      state: { contactList: any[] },
      action: PayloadAction<ContactState>
    ) => {
      const {
        payload: { name, id, address, email },
      } = action;

      state.contactList = state.contactList.map((contact: { id: string }) =>
        contact.id === id ? { ...contact, address, name, email } : contact
      );
    },
    deleteContact: (
      state: { contactList: any[] },
      action: PayloadAction<{ id: string }>
    ) => {
      state.contactList = state.contactList.filter(
        (contact: { id: string }) => contact.id !== action.payload.id
      );
    },
  },
});

export const { addNewContact, updateContact, deleteContact } =
  contactSlice.actions;

export const selectContactList = (state: RootState) =>
  state.contact.contactList;

export default contactSlice.reducer;

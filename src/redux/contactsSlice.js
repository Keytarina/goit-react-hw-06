import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "contacts",
	initialState: {
		items: [
			{ id: 0, name: "Kate", number: "+380645968562" },
			{ id: 1, name: "Lana", number: "+380645968563" },
			{ id: 2, name: "James", number: "+380645968578" },
			{ id: 3, name: "Ira", number: "+380645968555" },
			{ id: 4, name: "Maks", number: "+380645968599" },
		],
	},
	reducers: {
		addContact(state, action) {
			state.items.push(action.payload);
		},
		deleteContact(state, action) {
			state.items = state.items.filter((item) => item.id != action.payload);
		},
	},
});

// функція-селектор selectContacts
export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;

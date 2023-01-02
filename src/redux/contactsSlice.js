import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      // console.log(action.payload, 'action.payload');
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contactItem => contactItem.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// reducers: {
//   addContact: {
//     reducer(state, action) {
//       // console.log(action.payload, '<-- addContact in ContactSlice');
//       state.push(action.payload);
//     },
//     prepare(name, number) {
//       console.log(
//         name,
//         number,
//         shortid(),
//         '<-- addContact in prepare ContactSlice'
//       );
//       return {
//         payload: {
//           name,
//           number,
//           id: shortid(),
//         },
//       };
//     },
//   },
//   deleteContact(state, action) {
//     // console.log(action.payload, '<-- Delete in ContactSlice');
//     const index = state.findIndex(
//       contactItem => contactItem.id === action.payload
//     );
//     state.splice(index, 1);
//   },
// },

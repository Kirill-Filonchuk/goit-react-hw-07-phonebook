import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectRenderContacts = createSelector(
  [selectContacts, selectFilter],
  (contactsFromState, filterState) => {
    const normalizeFilterState = filterState.toLowerCase();
    const contactsToRender = contactsFromState.filter(({ name }) => {
      return name.toLowerCase().includes(normalizeFilterState);
    });

    return contactsToRender;
  }
);

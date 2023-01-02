export const getRenderContacts = (contactsFromState, filterState) => {
  const normalizeFilterState = filterState.toLowerCase();
  const contactsToRender = contactsFromState.filter(({ name }) => {
    // console.log(name, 'contact.name');
    return name.toLowerCase().includes(normalizeFilterState);
  });

  return contactsToRender;
};

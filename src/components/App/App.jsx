import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { getError, getIsLoading } from 'redux/selectors';
import './App.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const contacts = useSelector((state) => { console.log(state.contacts.items,'useSelector'); return state.contacts.items });
  // console.log(contacts,'APP_JS')

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && (
        <b className="info_message">Request in progress...</b>
      )}
      {error && <b className="info_message">Error message --- {error}</b>}
      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { selectError, selectIsLoading } from 'redux/selectors';
import './App.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { getRenderContacts } from './helpersFunction';

import s from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterStateData = useSelector(selectFilter);
  // console.log(contacts);
  const contactsToRender = getRenderContacts(contacts, filterStateData);

  const dispatch = useDispatch();

  const onDeleteCont = id => {
    console.log(id, '<---- id delete');
    dispatch(deleteContact(id));
  };

  return (
    <ul className={s.list}>
      {contactsToRender.map(({ name, phone, id }) => (
        <li key={id} className={s.item}>
          {name}:<span>{phone}</span>
          <button
            type="button"
            onClick={() => onDeleteCont(id)}
            className={s.btnForm}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

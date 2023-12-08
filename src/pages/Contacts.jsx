import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm.jsx';
import { ContactList } from '../components/ContactList/ContactList.jsx';
import { fetchContacts } from '../redux/contacts/operations.js';
import { selectLoading } from '../redux/contacts/selectors.js';
import { Loader } from '../components/Loader/Loader';


export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Your contacts</h2>
      <ContactForm /> 
      <div>{isLoading && <Loader />}</div>
      <ContactList />
    </>
  );
}
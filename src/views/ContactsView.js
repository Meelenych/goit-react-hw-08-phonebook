import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import { fetchContacts } from "../redux/contacts/contacts-operations";
import { getLoading } from "../redux/contacts/contacts-selectors";
import Loading from "../components/Loader/Loading";
import s from "./Views.module.css";

export default function ContactView() {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.contactsView}>
      <ContactForm />
      <Filter />
      <ContactList />
      {loading && <Loading />}
    </div>
  );
}

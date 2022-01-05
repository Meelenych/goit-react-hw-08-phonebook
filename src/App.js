import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "./redux/contacts/slice";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [filter, setFilter] = useState("");
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  console.log(useFetchContactsQuery());

  const getFilteredElems = (contacts) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className="container">
      <RegistrationForm />
      <ContactForm />
      <Filter onChange={(e) => setFilter(e.target.value)} />
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <ContactList
          data={getFilteredElems(data)}
          onDelete={deleteContact}
          deleting={isDeleting}
        />
      )}
    </div>
  );
}

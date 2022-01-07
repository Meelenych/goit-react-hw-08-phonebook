import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginForm from "./components/LoginForm/LoginForm";
// import RegLogMenu from "./components/RegLogMenu/RegLogMenu";
// import UserMenu from "./components/UserMenu/UserMenu";
import { Route, Routes } from "react-router-dom";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "./redux/contacts/slice";
import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import { authOperations } from "./redux/auth/auth-operations";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const [filter, setFilter] = useState("");
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  // console.log(useFetchContactsQuery());

  const getFilteredElems = (contacts) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className="container">
      <header>
        <AppBar />
      </header>
      {/* <UserMenu />
			<RegLogMenu /> */}

      <Routes>
        <Route path="/" element={<RegistrationForm />} />

        <Route path="/login" element={<LoginForm />} />

        <Route
          path="/phonebook"
          element={
            <>
              <ContactForm />,
              <Filter onChange={(e) => setFilter(e.target.value)} />,
              {isFetching ? (
                <h1>Loading...</h1>
              ) : (
                <ContactList
                  data={getFilteredElems(data)}
                  onDelete={deleteContact}
                  deleting={isDeleting}
                />
              )}
            </>
          }
        />
      </Routes>
    </div>
  );
}

import { useState } from "react";
import styles from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/contacts-operations";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacts/contacts-selectors";
// import { Form } from "react-bootstrap";
// import { Button } from "react-bootstrap";

export default function FormEditor() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    contacts.map((contact) => contact.name).includes(name)
      ? alert(
          `${name}? No, thank you! We don’t want any more visitors, well-wishers, or distant relations!`
        )
      : dispatch(addContact({ name, number }));
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <div>
      <h1>The Lord of the Contacts</h1>
      <h2>And what about very old friends?</h2>
      <form onSubmit={handleSubmit} className={styles.input}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            value={name}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
            value={number}
          />
        </label>
        <div className={styles.buttonWrapper}>
          <button type="submit" className={styles.contactsButton}>
            +
          </button>
        </div>
      </form>
    </div>
  );
}

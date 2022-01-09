import React from "react";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-operations";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <ul className={styles.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.contactItem}>
            <p className={styles.text}>{name}:</p>
            <p className={styles.text}>{number}</p>

            <div className={styles.buttonWrapper}>
              <button
                type="button"
                className={styles.contactsButton}
                onClick={() => dispatch(deleteContact(id))}
              >
                -{/* Death is just another path, one that we all must take. */}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

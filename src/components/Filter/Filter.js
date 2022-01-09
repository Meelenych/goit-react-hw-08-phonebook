import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/contact-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import styles from "./Filter.module.css";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.filterArea}>
      <label>
        Find your contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
}

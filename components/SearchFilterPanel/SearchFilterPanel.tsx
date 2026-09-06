"use client";

import { useId } from "react";
import { Formik, Form, Field } from "formik";
import css from "./SearchFilterPanel.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";

export default function SearchFilterPanel() {
  const categoryFieldId = useId();
  const nameFieldId = useId();

  return (
    <Formik
      initialValues={{
        category: "",
        name: "",
      }}
      onSubmit={(values) => {
        console.log("Filter submitted:", values);
      }}
    >
      <Form className={css.form}>
        <div className={`${css.inputsWrapper} ${css.categoryWrapper}`}>
          <label className={css.hidden} htmlFor={categoryFieldId}>
            Product category
          </label>
          <Field
            className={css.field}
            type="text"
            name="category"
            id={categoryFieldId}
            placeholder="Product category"
          />
          <IoIosArrowDown className={css.icon} size={16} />
        </div>

        <div className={`${css.inputsWrapper} ${css.searchWrapper}`}>
          <label className={css.hidden} htmlFor={nameFieldId}>
            Search medicine
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="Search medicine"
          />
          <LuSearch className={css.icon} size={16} />
        </div>

        <button className={css.btn} type="submit">
          <LuFilter className={css.btnIcon} size={14} /> Filter
        </button>
      </Form>
    </Formik>
  );
}

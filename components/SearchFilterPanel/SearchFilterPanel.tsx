"use client";

import { useId } from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import css from "./SearchFilterPanel.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";
import { useProductsStore } from "@/store/productsStore";

export default function SearchFilterPanel() {
  const categoryFieldId = useId();
  const nameFieldId = useId();

  const { setFilters, fetchProducts } = useProductsStore();

  return (
    <Formik
      initialValues={{
        category: "",
        name: "",
      }}
      onSubmit={async (values) => {
        setFilters(values.category, values.name);
        await fetchProducts();
      }}
    >
      <Form className={css.form}>
        <div className={`${css.inputsWrapper} ${css.categoryWrapper}`}>
          <label className={css.hidden} htmlFor={categoryFieldId}>
            Product category
          </label>
          <Field name="category">
            {({ field }: FieldProps) => (
              <select
                {...field}
                id={categoryFieldId}
                className={`${css.field} ${!field.value ? css.isPlaceholder : ""}`}
              >
                <option value="" disabled hidden>
                  Product category
                </option>
                <option value="all">All categories</option>
                <option value="Medicine">Medicine</option>
                <option value="Heart">Heart</option>
                <option value="Head">Head</option>
                <option value="Hand">Hand</option>
                <option value="Leg">Leg</option>
                <option value="Dental Care">Dental Care</option>
                <option value="Skin Care">Skin Care</option>
              </select>
            )}
          </Field>
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
          <LuFilter className={css.buttonIcon} size={14} /> Filter
        </button>
      </Form>
    </Formik>
  );
}

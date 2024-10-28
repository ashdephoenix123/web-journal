import React from "react";
import { Formik, Form } from "formik";
import { MyTextInput } from "./CustomInput";
import { contactSchema } from "@/form-validation/contactSchema";
import toast from "react-hot-toast";

const defaultInputCSS =
  "block px-4 py-4 text-sm tracking-wide rounded outline-none  bg-opacity-15 bg-white";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const onSubmit = async (values, { resetForm }) => {
    try {
      console.log(values);
      toast.success("Successfully toasted!");
      resetForm();
    } catch (error) {
      toast.error("This didn't work.");
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-screen-sm mx-auto mb-24">
            <div className="md:flex gap-6 mb-6">
              <MyTextInput
                label="Name *"
                name="name"
                type="text"
                className={defaultInputCSS}
              />
              <MyTextInput
                label="Email *"
                name="email"
                type="email"
                className={defaultInputCSS}
              />
            </div>

            <MyTextInput
              as="textarea"
              label="Message"
              name="message"
              className={defaultInputCSS}
              rows="5"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black rounded-lg block max-w-fit px-6 mx-auto py-2 font-extrabold text-lg tracking-tight mt-6 outline-none disabled:bg-opacity-30 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;

import React from "react";
import { Formik, Form } from "formik";
import { MyTextInput } from "./CustomInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactSchema } from "@/form-validation/contactSchema";

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
      toast.success("Form submitted successfully!");
    } catch (error) {
      toast.error(`Error submitting form: ${error.message}`);
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
              rows="3"
            />

            <button
              type="submit"
              className="bg-white text-black rounded-lg block max-w-fit px-6 mx-auto py-2 font-extrabold text-lg tracking-tight mt-6 outline-none"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;

import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required."),
  email: Yup.string()
    .email("Invalid email addresss`")
    .required("Email is required."),
});

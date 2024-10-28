import { useField } from "formik";

export const MyTextInput = ({ label, as: Element = "input", ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col flex-1 mb-6 md:mb-auto">
      <label
        htmlFor={props.id || props.name}
        className="text-grey-light inline-flex text-sm mb-2"
      >
        {label}
      </label>
      <Element className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-red-500 text-xs inline-flex mt-2">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col flex-1 mb-6 md:mb-auto">
      <label
        htmlFor={props.id || props.name}
        className="text-grey-light inline-flex text-sm mb-2"
      >
        {label}
      </label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-red-500 text-xs inline-flex mt-2">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

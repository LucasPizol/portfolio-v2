import { FormEvent, useState } from "react";

export const useForm = (defaultFields: any) => {
  const [fields, setFields] = useState<any>(defaultFields);

  const handleChangeField = (
    e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>
  ) => {
    setFields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const clearFields = () => {
    setFields(defaultFields);
  };

  return {
    fields,
    handleChangeField,
    clearFields,
  };
};

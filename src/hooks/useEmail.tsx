import emailjs from "@emailjs/browser";
import { useState } from "react";

export const useEmail = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = async (fields: any) => {
    setLoading(true);
    console.log(fields);
    try {
      const data = await emailjs.send(
        "service_q6h52l7",
        "template_6fl1acd",
        fields,
        "y_vtfNUHr0zTyYBsy"
      );

      console.log(data);
      setLoading(false);
      return { error: null, message: "Enviado com sucesso." };
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        return { error: error.message, message: null };
      }
    }
  };

  return {
    loading,
    sendEmail,
  };
};

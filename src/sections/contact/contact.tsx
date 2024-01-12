import { Container } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import styles from "./styles.module.css";
import { useEmail } from "../../hooks/useEmail";
import Swal from "sweetalert2";
import { Spinner } from "react-activity";
import { FormEvent } from "react";
import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { Button } from "./components/button";
import { IconType } from "react-icons";

const defaultParams = {
  name: "",
  email: "",
  message: "",
};

export type ButtonType = {
  title: string;
  Icon: IconType;
  link: string;
  label: string;
};

const buttons: ButtonType[] = [
  {
    title: "Linkedin",
    Icon: AiOutlineLinkedin,
    link: "https://www.linkedin.com/in/lucaspizol/",
    label:"Acesse"
  },
  {
    title: "GitHub",
    Icon: AiFillGithub,
    link: "https://github.com/LucasPizol",
    label:"Acesse"
  },
  {
    title: "WhatsApp",
    Icon: AiOutlineWhatsApp,
    link: "https://api.whatsapp.com/send?phone=5535997506550",
    label:"(35) 9 9750-6550"
  },
  {
    title: "Gmail",
    Icon: BiLogoGmail,
    link: "https://mail.google.com/mail/u/?authuser=lucaspizolfe@gmail.com",
    label: "lucaspizolfe@gmail.com",

  },
];

export const Contact = () => {
  const { fields, handleChangeField, clearFields } = useForm(defaultParams);
  const { loading, sendEmail } = useEmail();

  const checkFields = (): boolean => {
    const { name, email, message } = fields;
    return name === "" || email === "" || message === "";
  };

  const handleSendEmail = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { isConfirmed } = await Swal.fire({
      title: "Atenção!",
      text: "Deseja enviar este email?",
      icon: "question",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      showCancelButton: true,
      cancelButtonColor: "#f55",
    });

    if (isConfirmed) {
      const emailResponse = await sendEmail(fields);
      console.log(emailResponse);
      if (!emailResponse) return;

      if (emailResponse.error) {
        Swal.fire({
          title: "Erro!",
          icon: "error",
          text: emailResponse.error,
        });
        return;
      }

      if (!emailResponse.message) return;

      Swal.fire({
        title: "Sucesso!",
        icon: "success",
        text: emailResponse.message,
      });
      clearFields();
    }
  };

  return (
    <main className={styles.main} id="contact">
      <Container className={styles.container}>
        <form className={styles.form}>
          <h2>Envie uma mensagem!</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input
              className={
                fields.name !== "" ? styles.formInputFilled : styles.formInput
              }
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              onChange={handleChangeField}
              value={fields.name}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              className={
                fields.email !== "" ? styles.formInputFilled : styles.formInput
              }
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              onChange={handleChangeField}
              value={fields.email}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea
              className={
                fields.message !== ""
                  ? styles.formInputFilled
                  : styles.formInput
              }
              name="message"
              id="message"
              placeholder="Mensagem"
              onChange={handleChangeField}
              value={fields.message}
              required
            />
          </div>
          <button
            disabled={checkFields()}
            className={
              checkFields() ? styles.formButtonDisabled : styles.formButton
            }
            onClick={handleSendEmail}
            type="submit"
          >
            {loading ? <Spinner color="#36bf3c" /> : "Enviar"}
          </button>
        </form>
        <div className={styles.contact}>
          <h2>Redes</h2>
          {buttons.map((button) => (
            <Button button={button} />
          ))}
        </div>
      </Container>
    </main>
  );
};

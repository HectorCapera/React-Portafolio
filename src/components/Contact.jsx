import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // mQzQw09aFesm8uCvL
    // template_dhg72i1
    // service_s399lch

    emailjs
      .send(
        "service_s399lch",
        "template_dhg72i1",
        {
          from_name: form.name,
          to_name: "Hector",
          from_email: form.email,
          to_email: "hectorcapera415@gmail.com",
          message: form.message,
        },
        "mQzQw09aFesm8uCvL"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween, 0.2, 1")}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}></p>
        <h3 className={styles.sectionHeadText}>Contacto </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="nt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cual es tu nombre?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-hite rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cual es tu email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-hite rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu mensaje</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="¿Tienes un mensaje para mi?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-hite rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween, 0.2, 1")}
        className="xl:flex-1 xl:h-autor md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

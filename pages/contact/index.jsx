import Circles from "../../components/Circles";

// icons:
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

//variants:
import { fadeIn } from "../../variants";
import { useState } from "react";

//emailJS
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_wli051r",
        "template_vij2qgv",
        {
          from_name: form.name,
          to_name: "Hoang",
          from_email: form.email,
          to_email: "kunpham2603@gmail.com",
          message: form.message,
        },
        "gwv04vgjkrfNu2HOH"
      )
      .then(
        () => {
          setLoading(false),
            // alert("Thank you, I will get back to you as soon as possible");
            toast.success(
              "Thank you, I will get back to you as soon as possible",
              { autoClose: 1000 }
            );
          setForm({ name: "", email: "", message: "" });
        },
        (err) => {
          setLoading(false);

          console.log(err);

          toast.error("uh-oh what have you done!", { autoClose: 1000 });
        }
      );
  };
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] bg-primary-500/10">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Lets' <span className="text-accent/80">connect</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                name="name"
                type="text"
                placeholder="What's your name"
                className="input"
                value={form.name}
                onChange={handleChange}
              />
              <input
                name="email"
                type="email"
                placeholder="What's your email"
                className="input"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <textarea
              value={form.message}
              name="message"
              placeholder="message"
              rows="10"
              className="textarea"
              onChange={handleChange}
            ></textarea>
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              type="submit"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

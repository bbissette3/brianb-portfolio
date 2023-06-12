import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICEID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATEID,
        formData,
        import.meta.env.VITE_REACT_APP_EMAILJS_USERID
      )
      .then(() => {
        alert("Message sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => console.error("Failed to send message. Error: ", err));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full px-10">
        <hr className="flex-grow border-t-[0.5] border-gray-300 dark:border-gray-600" />
        <h1 className="text-white text-center my-10 font-bold sm:text-3xl md:text-4xl lg:text-5xl px-4">
          CONTACT ME
        </h1>
        <hr className="flex-grow border-t-[0.5] border-gray-300 dark:border-gray-600" />
      </div>
      <p className="text-center justify-center text-white text-sm sm:text-md md:text-lg my-10 max-w-screen-md mx-5">
        Reach out if you want to collaborate on a project or need more
        information about me. I am always happy to collaborate with other
        developers. I will respond to your message as soon as I can!
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-xl mx-5 space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="w-full py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mx-5"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          className="w-full py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mx-5"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          required
          className="w-full py-2 h-32 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mx-5"
        />
        <button
          type="submit"
          className="w-full py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md mx-5"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default Contact;
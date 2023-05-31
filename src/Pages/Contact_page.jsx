import React from "react";
import Contact from "../component/contact_contact_page/Contact";
import { motion } from "framer-motion";
const Contact_page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Contact />
    </motion.div>
  );
};

export default Contact_page;

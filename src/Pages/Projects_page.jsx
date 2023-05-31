import React from "react";
import { motion } from "framer-motion";
import Completed_apss from "../component/Completed-Apps/Completed_apss";
import Small_projcets from "../component/Small-Projects/Small_projects";
const Projects_page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Completed_apss />
      <Small_projcets />
    </motion.div>
  );
};

export default Projects_page;

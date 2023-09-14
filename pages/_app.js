import "../styles/globals.css";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

//router
import { useRouter } from "next/router";
//framer motion
import { motion, AnimatePresence } from "framer-motion";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <ToastContainer />

          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;

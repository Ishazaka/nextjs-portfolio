import { useRouter } from 'next/router';
import '../styles/globals.css';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;

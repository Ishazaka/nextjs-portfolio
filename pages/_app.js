import { useRouter } from 'next/router';
import '../styles/globals.css';

// framer motion imports
import { AnimatePresence, motion } from 'framer-motion';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div
          key={router.route}
          className='h-full'
          initial='initialState'
          animate='animateState'
          exit='exitState'
          variants={{
            initialState: {
              opacity: 0,
              clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)',
            },
            animateState: {
              opacity: 1,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            },
            exitState: {
              clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)',
            },
          }}
          transition={{ duration: 0.75 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;

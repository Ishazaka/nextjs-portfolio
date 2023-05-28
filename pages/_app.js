import { useRouter } from 'next/router';
import '../styles/globals.css';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

// components
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div
          key={router.route}
          className='h-full'
          initial='initial'
          animate='animate'
          exit='exit'
          variants={{
            initial: {
              opacity: 0,
              clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)',
            },
            animate: {
              opacity: 1,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            },
            exit: {
              clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)',
            },
          }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;

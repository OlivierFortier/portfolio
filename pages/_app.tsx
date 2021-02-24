import '../styles/fonts.css';

// import 'tailwindcss/tailwind.css';

import '../styles/tailwind.css';
import '../styles/utilities.css';

// import "tailwindcss/base.css";
// import "tailwindcss/components.css";
// import "tailwindcss/utilities.css";

import '../styles/detailsFix.css';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

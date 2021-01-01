import Layout from '../components/layout';
import { useRouter } from 'next/router';

export async function getStaticProps({ locale }) {
  let greeting =
    locale === 'en-US'
      ? 'Hello World'
      : locale === 'de'
      ? 'Hallo Welt'
      : locale === 'fr'
      ? 'Bonjour le monde'
      : '';

  return {
    props: {
      greeting,
    },
  };
}

export default function Home(props) {
  let router = useRouter();

  return (
    <Layout>
      <h1>{props.greeting}</h1>
    </Layout>
  );
}

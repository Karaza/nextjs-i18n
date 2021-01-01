import { useRouter } from 'next/router';
import Layout from '../components/layout';

export default function Home() {
  let router = useRouter();

  let greeting =
    router.locale === 'en-US'
      ? 'Hello World'
      : router.locale === 'de'
      ? 'Hallo Welt'
      : router.locale === 'fr'
      ? 'Bonjour le monde'
      : '';

  return (
    <Layout>
      <h1>{greeting}</h1>
    </Layout>
  );
}

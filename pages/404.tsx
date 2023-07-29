import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Title from '@/components/Title';
import Head from 'next/head';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push('/'), 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>404</title>
        <meta name='description' content='Poge not found' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Title tag={'h2'} text={'404'} />

      <main>Page not found</main>
    </>
  );
};

export default Error;

// placeholder='blur'

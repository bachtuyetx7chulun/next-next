import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import useTrans from 'hooks/useTrans';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ButtonGroup from 'antd/lib/button/button-group';
import { Button, Row, Space } from 'antd';

const Home: NextPage = () => {
  const TRANS = useTrans();
  const router = useRouter();
  const changeLang = (lang: string) => {
    router.push('/', '/', { locale: lang });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{TRANS.HOMEPAGE.TITLE}</h1>

        <div className={styles.description}>
          Back to home{' '}
          <code className={styles.code}>
            <Link href="/home" passHref>
              <a>pages/index.tsx</a>
            </Link>
          </code>
          <Row justify="center" style={{ marginTop: '10px' }}>
            <Space direction="vertical" size={'large'}>
              <ButtonGroup>
                <Button onClick={() => changeLang('vi')}>VIETNAMESE</Button>
                <Button onClick={() => changeLang('en')}>ENGLISH</Button>
                <Button onClick={() => changeLang('jp')}>JAPANESE</Button>
              </ButtonGroup>
            </Space>
          </Row>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

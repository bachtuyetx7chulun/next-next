import useTrans from 'hooks/useTrans';

const Home = () => {
  const TRANS = useTrans();
  return <div>{TRANS.HOMEPAGE.TITLE}</div>;
};

export const getStaticProps = async (context: any) => {
  console.log(context);

  return {
    props: {},
  };
};

export default Home;

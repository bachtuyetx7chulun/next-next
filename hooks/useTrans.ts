import { useRouter } from 'next/router';
import en from 'public/languages/en';
import vi from 'public/languages/vi';
import jp from 'public/languages/jp';

const useTrans = () => {
  const { locale } = useRouter();
  const trans = locale === 'vi' ? vi : locale === 'jp' ? jp : en;
  return trans;
};

export default useTrans;

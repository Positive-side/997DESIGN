import Portfolio from './Portfolio';
import Identity from './Identity';
import Review from './Review';
import Content from '@/layouts/Content';
import Banner from './Banner';
import Contact from './Contact';

const MainPage = () => {
  return (
    <div>
      <Banner />
      <Content>
        <Portfolio />
        <Identity />
        <Review />
        <Contact />
      </Content>
    </div>
  );
};

export default MainPage;

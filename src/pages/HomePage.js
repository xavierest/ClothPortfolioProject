import { Container } from 'reactstrap';
import Products from '../components/Products';
import Videos from '../components/Videos';
import ImageSlider from '../components/ImageSlider';
import { sliderData } from '../utils/sliderData';
import AboutUs from '../components/AboutUs';
import EmailList from '../components/EmailList';

const HomePage = () => {
    return (
        <div>
            <Videos />
            <Products />
            <ImageSlider slides={sliderData} />
            <AboutUs />
            <EmailList />
            
           
        </div>
    )
};

export default HomePage;
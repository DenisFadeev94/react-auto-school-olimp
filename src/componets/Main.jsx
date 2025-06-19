import Banner from './Banner/Banner';
import Ready from './Ready/Ready';
import CarsSlider from './CarsSlider/CarsSlider';
import AboutUs from './AboutUs/AboutUs';

export default function Main() {
  return (
    <section className="wrapper">
      <Banner />
      <Ready />
      <CarsSlider />
      <AboutUs />
    </section>
  );
}

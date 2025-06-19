import './AboutUs.scss';
import { AboutUsFeature } from '../../data';
import bannerImg from '../../../public/img/about/about.png';

export function AboutUs() {
  return (
    <>
      <div className="about-us mt-5">
        <div className="container">
          <div className="about-us-wrapper">
            <div className="about-left">
              <div className="title">
                <h3>Ми маємо досвід</h3>
                <img src="img/after-text.png" alt="" />
              </div>

              <div className="title-second">
                <h3>
                  Бажаєте дізнатися щось? <br /> Отримайте відповіді зараз
                </h3>
              </div>

              <p>
                Наша теоретичниа та практична підготовка розроблена з метою{' '}
                <br />
                надати Вам основні навички та знання, необхідні для <br />
                безпечного водіння на дорогах.
              </p>

              <p className="bolt mt-4">Для Вас пропонуємо:</p>

              <ul className="hyphen">
                <li>якісну теоретичну та практичну підготовку</li>
                <li>короткі терміни навчання: теорія - 4 тижні </li>
                <li>практичне навчання - 5 тижнів</li>
                <li>
                  професійний педагогічний склад викладачів та інструкторів з
                  навчання водінню автомобіля з багаторічним досвідом роботи
                </li>
                <li>повноцінне методичне та навчальне забезпечення</li>
                <li>
                  укомплектовані навчальні аудиторії та зручне їх
                  місцерозташування (центр міста)
                </li>
                <li>денні та вечірні навчальні групи</li>
                <li>
                  сучасні учбові транспортні засоби з механічною та автоматичною
                  коробкою передач
                </li>
                <li>додаткові уроки з водіння автомобіля</li>
                <li>оплату частинами за навчання в період підготовки</li>
              </ul>
            </div>

            <div className="about-right image-box">
              <img src={bannerImg} alt="" />
            </div>
          </div>

          <div className="horizontal-accordian">
            <div className="inner-container">
              <div className="horizontal-accordian-content">
                {AboutUsFeature.map((item) => (
                  <div className="fifth" key={item.id}>
                    <div className="horizontal-section one">
                      <div className="horizontal-section-image">
                        <div className="horizontal-section-userInfo">
                          <div className="userInfo-container">
                            <div className="title">{item.description}</div>
                          </div>
                        </div>
                      </div>
                      <div className="panel-dropdown">
                        <img
                          src={item.image}
                          alt=""
                          className="img-responsive"
                        />
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;

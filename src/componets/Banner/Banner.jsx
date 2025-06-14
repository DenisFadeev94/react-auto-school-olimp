import './Banner.scss';
import TitleText from '../TitleText/TitleText';
import bannerImg from '../../../public/img/banner/banner.png';

export default function Banner() {
  const showDescription = false;
  return (
    <div className="banner">
      <img src={bannerImg} alt="" />

      <div className="all-cars">
        <TitleText
          title="Автошкола ''Олімп''"
          description="Допоможемо Вам стати
            досвідченим водієм."
        />
        <div className="text-second mt-5">
          <p>
            Автошкола "Олімп" проводить набір <br />
            слухачів та запрошує на теоретичну <br />
            і практичну підготовку водіїв транспортних <br />
            засобів категорії "В" (легковий автомобіль)
          </p>
        </div>
      </div>
    </div>
  );
}

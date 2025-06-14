import './TitleText.scss';
import TitleTextBeforeImg from '../../../public/img/before-text.png';
import TitleTextAfterImg from '../../../public/img/after-text.png';

export default function TitleText({ title, description }) {
  return (
    <>
      <div className="text-img mb-5">
        <img src={TitleTextBeforeImg} alt="" />
        <h2>{title}</h2>

        <img src={TitleTextAfterImg} alt="" />
      </div>

      <h3 className="mb-5">{description}</h3>
    </>
  );
}

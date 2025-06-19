import './Ready.scss';
import TitleText from '../TitleText/TitleText';
import bannerImg from '../../../public/img/counter/counter.png';
import { ready } from '../../data';

export default function Ready() {
  return (
    <div className="ready mt-5">
      <TitleText
        title="Ви готові?"
        description="Гарантуємо високий рівень теоретичних знань та практичних навичок
          при складанні іспитів в територіальних сервісних центрах МВС."
      />

      <div className="counter">
        {ready[0] &&
          ready.map((item) => (
            <div className="counter-item" key={item.id}>
              <div className="counter-item-text">{item.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

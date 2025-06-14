import './Header.scss';
import { headerNav } from '../../data';
import logoHeader from '../../../public/img/logo/logo-header.png';
import iconInstagram from '../../../public/img/social/instagram.svg';
import iconFacebook from '../../../public/img/social/facebook.svg';

export default function Header() {
  return (
    <header className="header">
      <nav className="header-top">
        <p>
          Зателефонуйте нам за номером телефону{' '}
          <a href="tel::066 561 33 63">Номер</a> або напишіть у соц.мережі
        </p>

        <div className="links">
          <div className="facebook">
            <a
              href="https://www.instagram.com/drivingschoololimp/"
              target="_blank"
            >
              <img src={iconInstagram} alt="" />
            </a>
          </div>

          <div className="instagram">
            <a href="#!">
              <img src={iconFacebook} alt="" />
            </a>
          </div>
        </div>
      </nav>

      <nav className="header-nav navbar navbar-expand-md navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logoHeader} alt="Логотип" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {headerNav[0] && (
              <ul className="navbar-nav ms-auto">
                {headerNav.map((item) => (
                  <li className="nav-item" key={item.id}>
                    <a
                      className="nav-link"
                      href={item.link}
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

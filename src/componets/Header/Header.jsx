import './Header.scss';
import { headerNav } from '../../data';

import logoHeader from '../../assets/logo-header.png';

export default function Header() {
  return (
    <header className="header">
      <nav>
        {headerNav[0] && (
          <ul>
            {headerNav.map((item) => (
              <li key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer" />
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

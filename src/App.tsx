import { ChevronDown, SearchIcon, Settings, SunSnow } from 'lucide-react';
import './styles/main.scss';

function App() {
  return (
    <div className="page">
      <div className="page__root">
        <header className="page-header">
          <div className="page-header__item page-header__item--logo">
            <div className="page-header__item-icon">
              <SunSnow size={36} />
            </div>
            <div className="page-header__item-text">Weather now</div>
          </div>

          <div className="page-header__item page-header__item--dropdown hoverable">
            <div className="page-header__item-icon">
              <Settings size={16} />
            </div>

            <div className="page-header__item-text">Units</div>

            <div className="page-header__item-icon">
              <ChevronDown size={16} />
            </div>
          </div>
        </header>

        <section className="welcome">
          <h1 className="welcome__title">How's the sky looking today?</h1>

          <form action="#" method="GET" className="welcome__search">
            <div className="welcome__search-wrapper">
              <SearchIcon size={20} className="welcome__search-icon" />

              <input
                type="text"
                name="place"
                className="welcome__search-input"
                placeholder="Search for a place..."
              />
            </div>

            <button className="welcome__search-submit">Search</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;

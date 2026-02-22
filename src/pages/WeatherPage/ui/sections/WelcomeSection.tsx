import { SearchIcon } from 'lucide-react';
import { Input } from '../components/Input/Input';

export const WelcomeSection = () => {
  return (
    <section className="welcome">
      <h1 className="welcome__title">How's the sky looking today?</h1>

      <div className="input-wrapper">
        <form action="#" method="GET" className="welcome__search">
          <div className="welcome__search-wrapper">
            <SearchIcon size={20} className="welcome__search-icon" />

            <Input
              name="city"
              placeholder="Search for a place..."
              onClick={() => {
                alert('focus');
              }}
              onChange={(v) => alert(v)}
            />
          </div>

          <button className="welcome__search-submit">Search</button>
        </form>

        <div className="input__dropdown">
          {/* больше 5 - scrollable, нет - убираем */}
          <ul className={'scrollable'}>
            {/* <ul className={''}> */}
            {/* в случае если больше 0 */}
            {Array.from({ length: 6 }).map((_, i) => (
              <li className="dropdown__location" key={i}>
                <div className="dropdown__location--flag"></div>
                <div className="dropdown__location--name">Moscow, Russia</div>
              </li>
            ))}
            {/* в случае если 0 */}
            {/* <li className="dropdown__location--empty">
              Ничего нет :/
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

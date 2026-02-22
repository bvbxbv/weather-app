import { SearchIcon } from 'lucide-react';
import { Input } from '../components/Input/Input';

export const WelcomeSection = () => {
  return (
    <section className="welcome">
      <h1 className="welcome__title">How's the sky looking today?</h1>

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
    </section>
  );
};

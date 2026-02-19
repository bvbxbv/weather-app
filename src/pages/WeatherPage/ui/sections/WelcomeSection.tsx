import { SearchIcon } from 'lucide-react';

export const WelcomeSection = () => {
  return (
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
  );
};

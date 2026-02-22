import { CircleX, SearchIcon } from 'lucide-react';
import { SearchInput } from './SearchInput';

interface LocationSearchProps {
  query: string;
  onInputClick: () => void;
  onInputChange: (v: string) => void;
}

export const LocationSearch = ({ query, onInputClick, onInputChange }: LocationSearchProps) => {
  return (
    <form action="#" method="GET" className="welcome__search">
      <div className="welcome__search-wrapper">
        <SearchIcon size={20} className="welcome__search-icon" />

        <SearchInput
          name="city"
          placeholder="Search for a place..."
          onChange={(v) => {
            onInputChange(v);
          }}
          onClick={onInputClick}
          value={query}
        />

        <div
          className="welcome__close-icon"
          onClick={() => {
            onInputChange('');
          }}
        >
          <CircleX size={20} />
        </div>
      </div>
    </form>
  );
};

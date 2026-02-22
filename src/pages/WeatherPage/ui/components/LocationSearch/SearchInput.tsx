interface SearchInput {
  type?: string;
  name: string;
  className?: string;
  placeholder?: string;
  value: string;
  onClick?: () => void;
  onChange?: (val: string) => void;
}

export const SearchInput = ({
  type = '',
  name,
  value,
  className = '',
  placeholder = '',
  onClick = () => {},
  onChange = () => {},
}: SearchInput) => {
  return (
    <input
      type={type}
      name={name}
      // FIXME: заменить welcome__search-input на что-то типа input
      className={'welcome__search-input ' + className}
      placeholder={placeholder}
      onClick={onClick}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};

interface InputProps {
  type?: string;
  name: string;
  className?: string;
  placeholder?: string;
  onClick?: () => void;
  onChange?: (val: string) => void;
}

export const Input = ({
  type = '',
  name,
  className = '',
  placeholder = '',
  onClick = () => {},
  onChange = () => {},
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      // FIXME: заменить welcome__search-input на что-то типа input
      className={'welcome__search-input ' + className}
      placeholder={placeholder}
      onClick={onClick}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

import { ChevronDown, type LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { SelectContext, useSelect } from '../context/SelectContext';

interface SelectProps {
  icon?: LucideIcon;
  text: string;
  needChevron?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Root = ({ icon: Icon, text, needChevron = true, children, className = '' }: SelectProps) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [value, setValue] = useState<string>(text);

  return (
    <SelectContext.Provider value={{ opened, setOpened, value, setValue }}>
      <div className={'dropdown ' + className}>
        <div className="dropdown__root" onClick={() => setOpened((prev) => !prev)}>
          {Icon && (
            <div className="dropdown__icon">
              <Icon size={16} />
            </div>
          )}

          <div className="dropdown__text">{value}</div>

          {needChevron && (
            <div className="dropdown__chevron">
              <ChevronDown size={16} />
            </div>
          )}
        </div>

        <div className={'dropdown__options ' + (opened ? 'visible' : 'hidden')}>{children}</div>
      </div>
    </SelectContext.Provider>
  );
};

interface OptionProps {
  title: string;
  onClick?: (title: string) => void;
}

const Option = ({ title, onClick = () => {} }: OptionProps) => {
  const { setOpened, setValue } = useSelect();

  return (
    <div
      className="dropdown__options--item"
      onClick={() => {
        setValue?.(title);
        setOpened?.(false);
        onClick(title);
      }}
    >
      {title}
    </div>
  );
};

const Select = {
  Root,
  Option,
};

export default Select;

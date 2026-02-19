import { ChevronDown, type LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface SelectProps {
  icon?: LucideIcon;
  text: string;
  needChevron?: boolean;
  children?: React.ReactNode;
}

const Root = ({ icon: Icon, text, needChevron = true, children }: SelectProps) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className="dropdown">
      <div className="dropdown__root" onClick={() => setOpened((prev) => !prev)}>
        {Icon && (
          <div className="dropdown__icon">
            <Icon size={16} />
          </div>
        )}

        <div className="dropdown__text">{text}</div>

        {needChevron && (
          <div className="dropdown__chevron">
            <ChevronDown size={16} />
          </div>
        )}
      </div>

      <div className={'dropdown__options ' + (opened ? 'visible' : 'hidden')}>{children}</div>
    </div>
  );
};

interface OptionProps {
  title: string;
}

const Option = ({ title }: OptionProps) => {
  return (
    <div className="dropdown__options--item" onClick={() => {}}>
      {title}
    </div>
  );
};

const Select = {
  Root,
  Option,
};

export default Select;

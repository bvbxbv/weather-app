import { ChevronDown, type LucideIcon } from 'lucide-react';

interface SelectProps {
  icon?: LucideIcon;
  text: string;
  needChevron?: boolean;
}

export const Select = ({ icon: Icon, text, needChevron = true }: SelectProps) => {
  return (
    <div className="dropdown">
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
  );
};

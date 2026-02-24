type SpinnerVariant = 'default' | 'big';

interface SpinnerProps {
  enabled: boolean;
  variant?: SpinnerVariant;
}

export const Spinner = ({ enabled, variant = 'default' }: SpinnerProps) => {
  return (
    <>
      {/* spinner taken from https://cssloaders.github.io/ */}
      {/* FIXME: добавить ссылку на спиннер в readme */}
      {enabled && (
        <li className={'spinner spinner--' + variant}>
          <div className="spinner__loader"></div>
        </li>
      )}
    </>
  );
};

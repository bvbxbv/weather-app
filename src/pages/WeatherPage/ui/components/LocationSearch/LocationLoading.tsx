interface LocationLoadingProps {
  enabled: boolean;
}

export const LocationLoading = ({ enabled }: LocationLoadingProps) => {
  return (
    <>
      {/* spinner taken from https://cssloaders.github.io/ */}
      {/* FIXME: добавить ссылку на спиннер в readme */}
      {enabled && (
        <li className="dropdown__location--spinner">
          <div className="loader"></div>
        </li>
      )}
    </>
  );
};

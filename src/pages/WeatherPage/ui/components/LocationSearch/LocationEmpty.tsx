interface LocationEmptyProps {
  enabled: boolean;
}

export const LocationEmpty = ({ enabled }: LocationEmptyProps) => {
  return <>{enabled && <li className="dropdown__location--empty">Ничего нет :/</li>}</>;
};

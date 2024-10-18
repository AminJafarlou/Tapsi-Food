import "./listItem.css";

interface ListItemProps {
  id: string;
  title: string;
  isSelected: boolean;
  handleOnChange: (id: string) => void
}

function ListItem({ id, title, isSelected, handleOnChange }: ListItemProps) {
  return (
    <div className="product-item">
      <div className="product-img"></div>
      <div className="product-name">{title}</div>
      <div className="product-checkbox">
        <input
          type="checkbox"
          className="checkbox"
          id={id}
          name={title}
          checked={isSelected}
          onChange={() => handleOnChange(id)}
        />
      </div>
    </div>
  );
}

export { ListItem };

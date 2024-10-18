import { LazyLoadImage } from "react-lazy-load-image-component";
import Fallback from "../../assets/fallback.png";
import "./listItem.css";

interface ListItemProps {
  id: string;
  title: string;
  imageSrc: string;
  isSelected: boolean;
  handleOnChange: (id: string) => void;
}

function ListItem({
  id,
  title,
  imageSrc,
  isSelected,
  handleOnChange,
}: ListItemProps) {
  return (
    <div className="product-item">
      <div className="product-img">
        <LazyLoadImage
          alt={title}
          width={42}
          height={42}
          src={imageSrc}
          effect="blur"
          placeholderSrc={Fallback}
          useIntersectionObserver
        />
      </div>
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

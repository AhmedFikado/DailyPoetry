import { Link } from "react-router";
import "./PoemCard.css";

function PoemCard({
  linkTo,
  title,
  image,
  name,
}: PoemCardProps & { linkTo: string }) {
  return (
    <figure className="poem-card-figure">
      <Link to={linkTo}>
        <img src={`http://localhost:3310/${image}`} alt="illustration" />
      </Link>
      <figcaption>
        <span>{title}</span>
        <span>{name}</span>
      </figcaption>
    </figure>
  );
}

export default PoemCard;

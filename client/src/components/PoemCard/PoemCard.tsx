import { Link } from "react-router";
import "./PoemCard.css";

function PoemCard({ id, title, image }: PoemCardProps) {
  return (
    <figure className="poem-card-figure">
      <Link to={`poem/${id}`}>
        <img src={`http://localhost:3310/${image}`} alt="illustration" />
      </Link>
      <figcaption>
        <span>{title}</span>
        <span>de artiste mystère</span>
      </figcaption>
    </figure>
  );
}

export default PoemCard;

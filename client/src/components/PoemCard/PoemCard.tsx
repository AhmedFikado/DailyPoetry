import "./PoemCard.css";
interface PoemCardProps {
  title: string;
  image: string;
}
function PoemCard({ title, image }: PoemCardProps) {
  return (
    <figure className="poem-card-figure">
      <img src={`http://localhost:3310/${image}`} alt="illustration" />

      <figcaption>
        <span>{title}</span>
        <span>de artiste mystère</span>
      </figcaption>
    </figure>
  );
}

export default PoemCard;

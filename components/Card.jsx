import Image from "next/image";
import "./Card.css";

export default function Card({ person }) {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        {/* Image Section */}
        <div className="speaker-image">
          <Image
            src={person.image}
            alt={person.name}
            width={300}
            height={300}
            className="person_image"
            priority={false}
          />
        </div>

        {/* Info Section */}
        <div className="person_info">
          <div className="person_name">{person.name}</div>
          <div className="person_description">{person.description}</div>
        </div>
      </div>
    </div>
  );
}

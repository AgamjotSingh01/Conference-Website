import Link from "next/link";
import Image from 'next/image';
import "./Card.css"

export default function Card({ person }) {
    return (
        <div className="container">
            <div className="card-container">
                <div className="speaker-image">
                    <Image
                        className="person_image"
                        src={person.image}
                        alt="person image"
                        width={1000}
                        height={1500}
                    />
                </div>

                <div className="person_info">
                    <div className="person_name">{person.name}</div>
                    <div className="person_info">{person.description}</div>
                    <div className="person_link">
                        <Link className="profile" href={person.link}>Check Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
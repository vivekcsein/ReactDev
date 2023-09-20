import "../Styles/Components/Card.scss";

interface propObj {
  id: number;
  src: string;
  alt: string;
  label: string;
  role: string;
  details?: any;
  discription?: string;
  redirect?: string;
  abilities?: abilties;
}

interface abilties {
  first: power;
  Second: power;
  main: power;
  ultimate: power;
}

interface power {
  value: number;
  quantity: number;
  type: string;
  power: string;
  icon: string;
  discription: string;
}

const Card = ({ cardData }: propObj) => {
  const onImageCick = () => {
    window.open(cardData?.redirect, "_blank");
  };

  return (
    <div className="Card">
      <img
        src={cardData.src}
        alt={cardData.alt}
        key={cardData.id}
        onClick={onImageCick}
      />
      <h1>
        {cardData.label} - <span>{cardData.role}</span>
      </h1>
    </div>
  );
};

export default Card;

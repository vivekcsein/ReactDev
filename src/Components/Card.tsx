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

type prop = {
  cardData: propObj;
};

const Card = ({ cardData }: prop) => {
  const onImageCick = () => {
    window.open(cardData?.redirect, "_blank");
  };

  return (
    <div className="Card">
      <div className="lazyLoading_cardImages">
        <img
          src={cardData.src}
          alt={cardData.alt}
          key={cardData.id}
          loading="lazy"
          onClick={onImageCick}
        />
      </div>
      <h1>
        <span>
          {cardData.label.charAt(0).toUpperCase() +
            cardData.label.substring(1).toLowerCase()}{" "}
          -{" "}
          {cardData.role.charAt(0).toUpperCase() +
            cardData.role.substring(1).toLowerCase()}
        </span>
      </h1>
    </div>
  );
};

export default Card;

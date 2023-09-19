import "../Styles/Components/Card.scss";

interface propObj {
  value: number;
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
  console.log(cardData);

  const onImageCick = () => {
    window.open(cardData?.redirect, "_blank");
  };

  return (
    <div className="Card">
      <div>
        <img
          src={cardData.src}
          alt={cardData.alt}
          key={cardData.value}
          onClick={onImageCick}
        />
      </div>
      <h1>
        {cardData.label} - <span>{cardData.role}</span>
        {/* {cardData.role} */}
      </h1>
      <p>{cardData.details.toLowerCase()}</p>
    </div>
  );
};

export default Card;

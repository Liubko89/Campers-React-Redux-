const CampersItem = ({
  camper: {
    name,
    _id,
    price,
    rating,
    location,
    reviews,
    gallery,
    description,
    details,
    engine,
    transmission,
    adults,
  },
}) => {
  return (
    <div>
      <div>
        <img src={gallery[0]} alt="camper image" width={290} />
      </div>
      <h2>{name}</h2>
      <span>€{price}</span>
      <button>heart</button>
      <span>
        {rating}({reviews.length} reviews)
      </span>
      <span>{location}</span>
      <p>{description}</p>
      <ul>
        <li>
          <span>{adults} adults</span>
        </li>
        <li>
          <span>{transmission}</span>
        </li>
        <li>
          <span>{engine}</span>
        </li>
        {details.kitchen > 0 && (
          <li>
            <span>kitchen</span>
          </li>
        )}
        {details.beds > 0 && (
          <li>
            {details.beds > 1 ? (
              <span>{details.beds} beds</span>
            ) : (
              <span>{details.beds} bed</span>
            )}
          </li>
        )}
        {details.airConditioner > 0 && (
          <li>
            <span>AC</span>
          </li>
        )}
      </ul>
      <button type="button">Show more</button>
    </div>
  );
};

export default CampersItem;

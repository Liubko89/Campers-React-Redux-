const Features = ({
  adults,
  transmission,
  airConditioner,
  engine,
  kitchen,
  beds,
  freezer,
  CD,
  radio,
  hob,
}) => {
  return (
    <div>
      <ul>
        <li>
          <span>{adults}</span>
        </li>
        <li>
          <span>{transmission}</span>
        </li>
        <li>
          <span>{airConditioner} </span>
        </li>
        <li>
          <span>{engine} </span>
        </li>
        <li>
          <span>{kitchen} </span>
        </li>
        <li>
          <span>{beds} </span>
        </li>
        <li>
          <span>{freezer} </span>
        </li>
        <li>
          <span>{CD} </span>
        </li>
        <li>
          <span>{radio} </span>
        </li>
        <li>
          <span>{hob} </span>
        </li>
      </ul>
    </div>
  );
};

export default Features;

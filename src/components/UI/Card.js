import "./Card.css";

const Card = (props) => {
  //children is a reserved name.
  //all props have a children property, built into react.
  //all elements which reside within the Card tag will be props.children.
  //combining components is called composition.
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;

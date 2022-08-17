import Home from "./greetClass";

const Greet = (props) => {
  var na = "njksn";
  return (
    <>
      <p>Good morning!</p>
      <p>
        {props.name} {props.id}
      </p>
    </>
  );
};

export default Greet;

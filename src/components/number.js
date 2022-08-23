const Number = (props) => {
  return (
    <div>
      <h1>Hello {props.num}</h1>
      {props.data.map((val) => {
        return <li>{val}</li>;
      })}
    </div>
  );
};
export default Number;

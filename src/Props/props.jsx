const PropsExample = (props) => {
  return (
    <>
      <h2>Props Componenet</h2>
      <h3>{props.data.user.fName}</h3>
      <h4>{props.data.user.lName}</h4>
      <h4>{props.data.user.gender}</h4>
    </>
  );
};

export default PropsExample;


// This is how we pass data from one component to another using PropsExample
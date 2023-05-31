import { useContext } from "react";
import UserContext from "./ContextApi";

// Old methode
// const ContextConsumer = () => {
//   return (
//     <UserContext.Consumer>
//         {(carouselImages) => (
//           <>
//             <h2>Hello</h2>
//             <div>{carouselImages.image3}</div>
//           </>
//         )}
//     </UserContext.Consumer>
//   );
// };

// export default ContextConsumer;

/// This is latest methode; use context
const ContextConsumer = () => {
  const UserData = useContext(UserContext);
  return (
    <>
      <h2>User Data :</h2>
      <h4>Name: {UserData.fName}</h4>
      <h4>Last Name: {UserData.lName}</h4>
      <h4>Gender: {UserData.gender}</h4>
      <h4>🛑</h4>
    </>
  );
};

export default ContextConsumer;

import "./App.css";
import image1 from "../src/hero-01.jpg";
import image2 from "../src/memorial-day-banner-template_23-2148945351.avif";
import image3 from "../src/flat-quote-box-frame-collection_23-2148955212.avif";
import image4 from "../src/slide1-1.jpg";
import { Header } from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserContext from "./Context/ContextApi";
import ContextConsumer from "../src/Context/ContextConsumer.jsx";
import user from "./Data/contextData";
import PropsExample from "./Props/props";

function App(props) {
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Router>
          <Routes>
            {/* <Route exact path="/" element={<Header />} /> */}
            {/* <Route exact path="/" element={<ContextConsumer />} /> */}
            <Route exact path="/" element={<PropsExample data={{ user }} />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

{
  /* <Welcome /> */
}

{
  /* <TestComponent /> */
}
{
  /* <Header /> */
}
{
  /* <Carousel images={carouselImages} /> */
}

{
  /* {isLoading ? (
        <div>Load ho raha hu 😒</div>
      ) : error ? (
        <div>Nhi chla raha🚫</div>
      ) : (
        data?.data
          .filter((x) => x.id === 5)
          .map((item) => (
            <Card
              firstName={item.first_name}
              lastName={item.last_name}
              email={item.email}
              image={item.avatar}
              // fun={apiCall}
              key={item.id}
            />
          ))
      )} */
}

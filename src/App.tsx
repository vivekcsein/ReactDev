import "./Styles/Style.scss";
import { Pages_layout } from "./Constants/Sections";
// import Hero from "./Sections/Hero";

function App() {
  const [Hero, Header, Products, Footer] = Pages_layout;
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Footer />
    </>
  );
}

export default App;

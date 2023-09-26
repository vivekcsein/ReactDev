import "./Styles/Style.scss";
import { Pages_layout } from "./Constants/Sections";

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

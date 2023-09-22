import "./Styles/Style.scss";
import { Pages_layout } from "./Constants/Pages";

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

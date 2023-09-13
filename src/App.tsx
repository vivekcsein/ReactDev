import { Pages_layout } from "./Contant/Pages";
import "./Styles/Style.scss";
function App() {
  const [Hero, Header, Products, Footer] = Pages_layout;
  return (
    <>
      <Header />
      <Hero />
      <Products />
      {/* <Footer /> */}
    </>
  );
}

export default App;

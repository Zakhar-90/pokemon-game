import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import ReactBg from "./assets/bg1.jpg";

const App = () => {
  return (
    <>
      <Header 
        title="This is Pokemon Card Game"
        descr="Simple Triple Triad Card Game"
      />
      <Layout 
        title="First layout"
        descr="First description"
        urlBg={ReactBg}
      />
      <Layout 
        title="Second layout"
        descr="Second description"
        colorBg="e2e2e2"
      />
      <Layout 
        title="Third layout"
        descr="Third description"
        urlBg={ReactBg}
      />
      <Footer />
    </>
  );
}

export default App;

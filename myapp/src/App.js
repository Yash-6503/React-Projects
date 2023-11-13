import About from "./components/About";
import Navbar from "./components/Navbar";

import TextForm from "./components/TextForm";



function App() {
  return (
    <>
      <Navbar title="Textutils" about="About Us" signup="SignUp" />
      <div className="container">
        <TextForm heading="Enter the Text to analysize" />
        {/* <About title="About Us" href="../About.js" /> */}

      </div>
    </>
  );
}

export default App;
{

}
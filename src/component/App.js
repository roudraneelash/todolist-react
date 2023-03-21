import Addtask from "./AddTask";
import ShowList from "./ShowList";
import FooterBox from "./Footerbox";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <div className="container">
        <Addtask />
        <FooterBox />
        <ShowList />
        <Footer />
      </div>
    </div>
  );
}

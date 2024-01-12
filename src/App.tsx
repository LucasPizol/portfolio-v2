import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-activity/dist/library.css";

import "./App.css";
import { Header } from "./components/header/header";
import {
  Greetings,
  Specialties,
  Technologies,
  Projects,
  AboutMe,
  Contact,
} from "./sections";

function App() {
  return (
    <main>
      <Header />
      <Greetings />
      <Specialties />
      <Technologies />
      <Projects />
      <AboutMe />
      <Contact />
    </main>
  );
}

export default App;

import { useEffect } from "react";
import InformationArea from "./components/information-area";
import Style from "./Styles/global.module.css"
import "./Styles/reset.css"


function App() {

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={API-KEY}&units=metric`)
  })
  
  return (
    <div className={Style.App}>

      <InformationArea/>
    </div>
  );
}

export default App;

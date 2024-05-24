import { initPopup, BrowserNavigator } from "@tma.js/sdk";
import { Button } from "@nextui-org/react";
import './App.css'

const popup = initPopup();
const navigator = new BrowserNavigator(["/"], 0,
  {
    hashMode: "slash"
  }
);
navigator.attach();

function App() {
  return (
    <>
      <Button onClick={() => {
        popup.open({
          title: "Hi",
          message: "Hello world!",
          buttons: [{ id: "ok", type: "close" }]
        }).then(res => console.log(res));
        navigator.push("frontend");
      }}>Home</Button>
    </>
  )
}

export default App

import { initPopup, BrowserNavigator } from "@tma.js/sdk";
import { Button } from "@nextui-org/react";

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
      }}>Home</Button>
      <Button onClick={() => {
        navigator.push("frontend");
      }}>Home</Button>
      <Button onClick={() => {
        navigator.push("backend");
      }}>Home</Button>
    </>
  )
}

export default App

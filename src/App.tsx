import { initPopup, } from "@tma.js/sdk";
import { Button } from "@nextui-org/react";
import './App.css'

const popup = initPopup();

function App() {

  return (
    <>
      <Button onClick={() => {
        popup.open({
          title: "Hi",
          message: "Hello world!",
          buttons: [{ id: "ok", type: "close" }]
        }).then(res => console.log(res));
      }}></Button>
    </>
  )
}

export default App

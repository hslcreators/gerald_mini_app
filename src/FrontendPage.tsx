import { Button } from "@nextui-org/react"
import { initPopup } from "@tma.js/sdk"

const popup = initPopup();

export default function FrontendPage() {
	return (
		<>
			<Button onClick={() => {
				popup.open({
					title: "Hi",
					message: "Hello world!",
					buttons: [{ id: "ok", type: "close" }]
				}).then(res => console.log(res));
			}}>Home</Button>
		</>
	)
}
import { useState } from "react";

import Card from "./components/TypingComponentProps-1";
import Children from "./components/TypingChildrenProp-2";
import SetterFunctions from "./components/SetterFunctions-3";

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				{/* As we said you can choose to pass the count or not */}
				<Card text="Hello" />
			</div>

			<div>
				{/* You can call the function (Children component) without passing anything and it'll still work cause the children props gonna be undifined */}
				<Children>Hola - it can be any component/expression</Children>
			</div>

			<div>
				<SetterFunctions setCount={setCount} /> {count}
			</div>
		</>
	);
}

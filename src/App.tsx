import { useState } from "react";

import Card from "./components/TypingComponentProps-1";
import Children from "./components/TypingChildrenProp-2";
import SetterFunctions from "./components/SetterFunctions-3";
import TypingFunctions from "./components/TypingFunctions-4";
import ObjectAsProps from "./components/ObjectsAsProps-5";
import UnionsForTailwind from "./components/UnionsForTailwind-6";
import EventHandlers from "./components/EventHandlers-7";
import { useFetch } from "./hooks/useFetch-8";

type User = {
	name: string;
	age: number;
};

type BlogPost = {
	title: string;
	description: string;
	posted: Date;
};

export default function App() {
	const [count, setCount] = useState(0);

	const users = [
		{ name: "Austin", age: 26 },
		{ name: "arter", age: 24 },
		{ name: "Julia", age: 23 },
	] as const; // Adding this making it read only and you can't mutate it

	function alertMessage(message: string) {
		alert(message);
	}

	const user = useFetch<User>("Whatever");
	const blogPost = useFetch<BlogPost>("Whatever");

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

			<div>
				<TypingFunctions alertMessage={alertMessage} />
			</div>

			<div>
				{/* Using map function doesn't require you to specify the type explicity, cause ts is smart enough to know that you're refereing to a singular instance  */}
				{users.map((user) => {
					return <ObjectAsProps user={user} />;
				})}
			</div>

			<div>
				{/* You can't use different values rather than the ones we specifed before */}
				<UnionsForTailwind color="red" size="lg" />
				<UnionsForTailwind color="purple" size="md" />
			</div>

			<div>
				<EventHandlers />
			</div>
		</>
	);
}

import Card from "./components/TypingComponentProps-1";
import Children from "./components/TypingChildrenProp-2";

export default function App() {
	return (
		<>
			{/* As we said you can choose to pass the count or not */}
			<Card text="Hello" />
			{/* You can call the function (Children component) without passing anything and it'll still work cause the children props gonna be undifined */}
			<Children>Hola - it can be any component/expression</Children>
		</>
	);
}

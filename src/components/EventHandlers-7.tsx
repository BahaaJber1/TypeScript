export default function EventHandlers() {
	// Just hover over the event "e" to get the type of it
	function handleclick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		alert("Hey");
	}

	return (
		<>
			<button onClick={(e) => handleclick(e)}>Click Me!</button>
		</>
	);
}

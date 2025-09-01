/*
    For function you need to write the paramters and the return type
*/

type TypingFunctionsProps = {
	alertMessage: (message: string) => void;
};

export default function TypingFunctions({
	alertMessage,
}: TypingFunctionsProps) {
	return (
		<button onClick={() => alertMessage("Hello, World!")}>Click here :$</button>
	);
}

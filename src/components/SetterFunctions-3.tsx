type SetterProps = {
	/* 
        You can get this type for the setter function if you hover over the setter function in useState then copy and paste it
        just be sure to match the type inside <> in this case its number 
    */
	setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function SetterFunctions({ setCount }: SetterProps) {
	return (
		<>
			<button onClick={() => setCount((count: number) => count + 1)}>
				Click Me!
			</button>
		</>
	);
}

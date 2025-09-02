type ObjectAsPropsProps = {
	user: User;
};

/*
    In larger application you might not have all the types for particular object like the user in this file.
    What many people do is just make a folder in the src called types and define types whitin a file there and export them and export wherever they want
*/
type User = {
	name: string;
	age: number;
};

export default function ObjectAsProps({ user }: ObjectAsPropsProps) {
	return <div>{JSON.stringify(user)}</div>;
}

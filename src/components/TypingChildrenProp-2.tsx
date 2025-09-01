/*
    children is reserved word in react but without adding any type it will cause a problem! But what's the type of children prop? 
    the type is <strong>React.ReactNode</strong>, you can hover it to see what's that type made of
*/

type ChildrenProps = {
	children: React.ReactNode;
};

export default function Children({ children }: ChildrenProps) {
	return (
		<div>
			<span>{children}</span>
		</div>
	);
}

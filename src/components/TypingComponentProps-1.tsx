/* 
	The compiler doesn't know what's the type of text, so we should keep it implicit to avoid error in development.
	1. The approch 1 below is fine but it can be annoying cause you always have to type props.varibaleName each time you use it.
	2. Another approch is to use the <strong>type</strong> as we talked about in the README file
*/

// Approach 1 with props
// export default function Card(props: { text: string }) {
// 	return (
// 		<div>
// 			<span>{props.text}</span>
// 		</div>
// 	);
// }

// Aprroach 2
import type { JSX } from "react";

// 1. Create the type for the props
type CardProps = {
	text: string;
	count?: number; // Adding the "?" will make this prop as optional so if you don't pass it down to the card component it'll return undifined
};

// 2. Pass it down to the props like {propName}: theType
// 3. [optional] you can explicity say that this function returns an JSX.Element or just leave it without cause TypeScript can determine what kind of data its returning
export default function Card({ text, count }: CardProps): JSX.Element {
	return (
		<div>
			<span>{text.toUpperCase()}</span>
			<span>{count}</span>
		</div>
	);
}

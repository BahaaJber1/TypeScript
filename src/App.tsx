import { useState } from "react";

type User = {
	age: number;
	name: string;
};

export default function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [input, setInput] = useState<User>({ name: "", age: 0 });

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setUsers([...users, input]);
		setInput({ name: "", age: 0 });
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h3>name: {input.name}</h3>
				<input
					type="text"
					value={input.name}
					onChange={(e) => setInput({ ...input, name: e.target.value })}
				/>
				<h3>age: {input.age}</h3>
				<input
					type="text"
					value={input.age}
					onChange={(e) => setInput({ ...input, age: Number(e.target.value) })}
				/>
				<button type="submit">Add User</button>
			</form>
			<ul>
				{users.map((user, idx) => (
					<li key={idx}>
						{user.name} ({user.age})
					</li>
				))}
			</ul>
		</>
	);
}

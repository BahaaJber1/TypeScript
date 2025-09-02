import { useEffect, useState } from "react";

/*
    Adding the generic type when you don't know the type of the data you'll get from the api, to ensure maximum type safety.
    T is the standard shortcut for Type
*/

export function useFetch<T>(url: string): T | null {
	const [data, setData] = useState<T | null>(null);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(url);
			const jsonData: T = await response.json();
			setData(jsonData);
		}
		fetchData();
	}, [url]);

	return data;
}

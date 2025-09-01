# TypeScript

---

TypeScript is a superset of JavaScript so it does include all JS features + new features. Its value shines when we deal with larger projects where type saftey matters, so basicly it allow us to **add data types** to js code.

## 1. Static Typing

```ts
const x = 0; // === const x:number = 0;
x = "Bahaa"; // <- ❌
```

**Don't rely on implicit typing, keep it declared that you want the variable as a number**

It can be a number, string, array, object, any, null, undifined, etc..., meaning that if you want to re-assign a value you'll get an error.

## 2. Function Paramaters

```ts
function doSomething(x: number, y: string, z: boolean) {
	// You won't be able to access this line cause y is assigned to string and toFixed method is for number!
	y.toFixed();
}
```

## 3. Object Types

But what if I want the parameter to be an **object** and not just a simple value? We need to use type/interface for this. It's like declaring our own datatype.

```ts
// Or interface User {same values}
type User = {
	name: string;
	age: number;
	isAdmin?: boolean; // You can make some properties optional by adding "?" after the variable
};

function doSomething(userObject: User) {
	// ...
}
```

## 4. Array Typing

Allow us to create an array of any datatype we want by **using the [] after the datatype** like down below.

```ts
function doSomething(x: string[]) {
	x[0] = 1; // <- ❌
	x[0] = "Bahaa"; // ✅
}
```

## 5. Unions & Intersections

You might want to get a value but not sure about the input you get, in that case you can use the **Union operator "|"**.

```ts
type User = {
	age: number | string;
	// or even going further with multible data types
	age: number | string | boolean | User;
};
```

For **Intersection** you can use the **& operator** in _types_ or **extends** for _interface_. It allows you to combine multiple datatypes and extends their features.

```ts
type User = {
	age: number;
	name: string;
};

type UserAdmin = user & {
	adminId: string;
};
```

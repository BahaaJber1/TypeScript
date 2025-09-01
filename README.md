# TypeScript

---

TypeScript is a superset of JavaScript so it does include all JS features + new features. Its value shines when we deal with larger project where type saftey matters, so basicly it allow us to **add data types** to js code.

## 1. Static Typing

```ts
  const x = 0; === const x:number = 0;
  x = "Bahaa"; <- ❌
```

**Don't rely on implicit typing, keep it declared that you want the variable as a number**

It can be a number, string, array, object, any, null, undifined, etc..., meaning that if you want to re-assign a value you'll get an error.

## 2. Function Paramaters

```ts
function doSomething(x: number, y: string, z: boolean) {
	y.toFixed(); // You won't be able to access this line cause y is assigned to string and toFixed method is for number!
}
```

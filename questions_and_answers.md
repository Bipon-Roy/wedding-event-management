<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

-   A: `{}`
-   B: `ReferenceError: greetign is not defined`
-   C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The code returns an empty object. When a variable is declared with let, the value of that variable can be reassigned and here the value is reassigned as an empty object this is why correct answer is 'A'</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
    return a + b;
}

sum(1, "2");
```

-   A: `NaN`
-   B: `TypeError`
-   C: `"12"`
-   D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The Correct answer is 'C' because the sum function is getting one numeric and one string variable.In this type of situation JavaScript performs type coercion, it converts the variable into string and performs string concatenation.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

-   A: `['🍕', '🍫', '🥑', '🍔']`
-   B: `['🍝', '🍫', '🥑', '🍔']`
-   C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
-   D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The Correct answer is 'A' because, in this code food is an array and info.favoriteFood initially references as the first element of the food array.When info.favoriteFood's value is reassigned it only changes the value of the favoriteFood, It does not modify the original food array so food array remains unchanged.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
    return `Hi there, ${name}`;
}

console.log(sayHi());
```

-   A: `Hi there,`
-   B: `Hi there, undefined`
-   C: `Hi there, null`
-   D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The Correct answer is 'B' because, sayHi function is called without passing any value.But sayHI function have a parameter 'name' when name parameter doesn't get any value it returns undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
    if (num) count += 1;
});

console.log(count);
```

-   A: 1
-   B: 2
-   C: 3
-   D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The Correct answer is 'C' because, inside the foreach loop it checks if num is truthy.In JavaScript, a number other than 0 is considered truthy. This is why for the values of (1, 2, and 3), the condition is satisfied because they are truthy, so count is incremented by 1 for each of these values.</i>

</p>
</details>

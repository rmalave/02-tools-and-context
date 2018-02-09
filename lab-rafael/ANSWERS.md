Explain how hoisting allows the printGreeting function to be called before where it's actually written in the file.

In the "compiling phase", Javascript hoists the function and adds the functions to memory,
allowing us to call functions before they are defined.

```javascript
printGreeting();

function printGreeting() {
  console.log("isn't JavaScript wonderful?");
}
```

Explain why this function called printGoodbye can't be executed until after it's actually written in the file.

Because when variables get hoisted, they get assigned a value of undefined and it's not until execution phase and that the variable gets assigned the value.

```javascript
printGoodbye(); // this one won't execute!

const printGreeting = () => {
  console.log("That's all, folks!");
}

printGoodbye();
```

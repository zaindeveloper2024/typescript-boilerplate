export function hello() {
  return "Hello World";
}

(() => {
  const message = hello();
  console.log(message);
})();

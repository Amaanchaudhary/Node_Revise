// function add(a, b) {
//   return a + b
// }

// function sub(a, b) {
//   return a - b
// }

// export {add , sub}  // multiple named export

export function add(a, b) {
  return a + b
}

export function sub(a, b) {
  return a - b
}

// module.exports = add
// module.exports = sub  // cant do like this it'll override add

// module.exports = {add , sub}

// export { sub }
// export default { add, sub }
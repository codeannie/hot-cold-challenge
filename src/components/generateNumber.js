
// export default function getTargetNum() {
//   let min = Math.ceil(min);
//   let max = Math.floor(max);
//   const targetNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
// }

export default function targetNum() { 
  return Math.floor((Math.random() * 100) + 1);
}
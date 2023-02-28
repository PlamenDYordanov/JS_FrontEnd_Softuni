function solve(...parms) {
  let result = parms.reduce((a,v) => a * v);
  if(result < 0) {
 console.log('Negative');
  }else {
    console.log('Positive');
  }
}
solve(5, 12, -15);
solve(-6, -12, 14);
solve(-1, -2, -3);

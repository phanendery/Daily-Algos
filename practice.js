function test(n) {
  //use pointers
 if(n===1){
   return 0;
 }
 else if (n===2){
   return 1;
 }
 else{
   return test(n-1) + test(n-2);
 }
}
//sum of n-1 and n-2

let n = 6
;

console.log(test(n));

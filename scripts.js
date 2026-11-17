var im = ['John', 'Jane', 'Bob', , 'Mike'];
console.log("--- 1. Ispis svih elemenata ---");
for (var i = 0; i < im.length; i++) {
  console.log(im[i]);
}
im.push('Filip');
console.log("--- 2. Filip ---");
console.log(im);
console.log("--- 3. Petlja do Jane ---");
for (var i = 0; i < im.length; i++) {
  console.log(im[i]);
  
  if (im[i] === 'Jane') {
    break; 
  }
}
im.splice(3, 1); 

console.log("--- 4. Nakon uklanjanja undefined ---");
console.log(im);

const libs = ["React", "Vue", "Angular"];

console.log(`This course is about ${libs[0]}`); // Tiene que ser si o si con las comillas dobladas ``

const l = libs.length;
console.log(`
    ${l > 1 ? `These ${l} libraries` : "This library"}: 
    ${libs.join(", ")}...
`)
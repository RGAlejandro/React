const user = {
    name: "Alejandro",
    surname: "Gemes",
    courses: ["Introduction to React", "React  Intermediate", "React Advance"]
};

const getFullName = ({ name, surname}) => `${name} ${surname}`;

const {name, surname} = user;

console.log(name);

console.log("GetFullName: ",getFullName(user));

//Destructure object into another
const newUser = {
    ...user,
    name: "Marta"
};

console.log("new user",newUser);

//Extract and rename object attribute
const { name: newName} = newUser;
console.log("newName: ",newName);

//Extract array items
const [firstCourse,...otherCourse] = newUser.courses;
console.log("firstCourse",firstCourse);
console.log("otherCourse",otherCourse);

//Shorten object key assignment
const newObject = {newName, firstCourse};
console.log("newObject:", newObject);

//Destructure params of a function
const sum = (...nums) => nums.reduce((total, num) => total + num);
console.log("sum:", sum(1,2,3,4,5,6,7,8,9));
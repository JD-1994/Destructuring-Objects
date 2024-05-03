// Take the following object and store the name and youtube properties in their own variable.

const person = {
    name: "Harry Mack",
    age: 30,
    expertise: "jaw-dropping visual freestyle rapping",
    youtube: "www.youtube.com/harrymack",
  };
  
  // Destructuring the object
  const { name, youtube } = person;
  
  console.log(name); // Output: Harry Mack
  console.log(youtube); // Output: www.youtube.com/harrymack
  
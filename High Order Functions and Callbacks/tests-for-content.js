const votes = ["A", "B", "A", "C", "B", "A"];

const voteCount = votes.reduce((acc, vote) => {
  acc[vote] = (acc[vote] || 0) + 1;
  return acc;
}, {});

console.log(voteCount); // Output: { A: 3, B: 2, C: 1 }

const students = [
  { name: "Ana", passed: true },
  { name: "Leo", passed: false },
  { name: "Mina", passed: true },
];

const passedStudents = students
  .filter((student) => student.passed)
  .map((student) => student.name);
console.log(passedStudents); // Output: ["Ana", "Mina"]

const users = [
  { id: 1, firstName: "jean", lastName: "lago" },
  { id: 2, firstName: "sara", lastName: "kim" },
];

const fullNames = users.map((user) => {
  return {
    id: user.id,
    fullName: `${user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)} ${user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}`,
  };
});

console.log(fullNames); // Output: ["Jean Lago", "Sara Kim"]

const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Monitor", price: 300, inStock: false },
  { name: "Keyboard", price: 80, inStock: true },
];

const featuredProducts = products.filter(
  (product) => product.inStock && product.price > 50,
);
console.log(featuredProducts).map((product) => product.name); // Output: ["Laptop", "Keyboard"]

const people = [
  { name: "Ana", country: "PT" },
  { name: "Leo", country: "BR" },
  { name: "Mina", country: "PT" },
  { name: "Noah", country: "BR" },
  { name: "Iris", country: "ES" },
];

const grouped = people.reduce((acc, person) => {
  if (!acc[person.country]) {
    acc[person.country] = [];
  }
  acc[person.country].push(person.name);
  return acc;
}, {});

console.log(grouped); // Output: { PT: ["Ana", "Mina"], BR: ["Leo", "Noah"], ES: ["Iris"] }

const scores = [
  { player: "A", score: 18 },
  { player: "B", score: 27 },
  { player: "C", score: 24 },
];

const highestScore = scores.reduce((max, current) => {
  return current.score > max.score ? current : max;
}, scores[0]);

console.log(highestScore); // Output: { player: "B", score: 27 }

const orders = [
  { id: 1, customer: "Ana", total: 120, status: "paid" },
  { id: 2, customer: "Leo", total: 80, status: "pending" },
  { id: 3, customer: "Ana", total: 50, status: "paid" },
  { id: 4, customer: "Mina", total: 200, status: "paid" },
];

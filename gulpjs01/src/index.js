

function add(a, b) {
  console.log(a+b);
  return a+b;
};


let person = { name: 'iiimix', rich: '8900000' };
let {name, rich} = person;

let fn = (p, s) => {
  console.log(p, s);
};

fn('myName', `name: ${name}, rich: ${rich}`);
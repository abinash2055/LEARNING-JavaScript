//...1. Prototypes.....................

// object
const student = {
  fullName: "John Doe",
  marks: 87.5,
  printMarks: function () {
    console.log(" marks = ", this.marks); // student object -->marks
  },
};
console.log(student);

const employee = {
  calcTax() {
    console.log("Tax is 10%");
  },
};
console.log(employee);

const person1 = {
  salary: 23000,
};

const person2 = {
  salary: 27000,
};

const person3 = {
  salary: 28000,
};

const person4 = {
  salary: 21000,
};

const karanArjun = {
  salary: 50000,
  calcTax() {
    console.log("tac is 15%");
  },
};

// to set prototype
karanArjun.__proto__ = employee;
console.log(karanArjun);
person1.__proto__ = employee;
console.log(person1);
person2.__proto__ = employee;
console.log(person1);
person3.__proto__ = employee;
console.log(person1);
person4.__proto__ = employee;
console.log(person1);

//  2. Classes...............................
// A program code template for creating objects
// object has some states(variable) & some behavior (function) inside it.

class ToyotaCar {
  constructor(brand, milage) {
    console.log("Creating a new Constructor");
    this.brand = brand;
    this.milage = milage;
  }
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }

  // setBrand(brand) {
  //     this.brandName = brand;
  // }
}
console.log(ToyotaCar);

let BMW = new ToyotaCar("BMW", 23); // uses constructor
console.log(BMW);
let Lexus = new ToyotaCar("Lexus", 56); // uses constructor
console.log(Lexus);


// Child accessing Parent Property
class Parent {
  hello() {
    console.log("Hello Coders");
  }
}

class Child extends Parent {} // Child inheritance parent data
let obj = new Child();
console.log(obj);
console.log(obj.hello);

class Human {
  constructor() {
    this.species = "Homo Sapiens";
  }

  eat() {
    console.log("Eat");
  }

  sleep() {
    console.log("Sleep");
  }

  work() {
    console.log("Doing nothing");
  }
}

class Engineer extends Human {
constructor(branch) {
    super();    // to invoke parent class constructor
    this.branch = branch;
    console.log("exit child constructor");
}

  work() {
    console.log("solve Problems, also build somethings");
  }
}
let obj1 = new Engineer();

class Doctor extends Human {
  work() {
    console.log("Treats Patient also save lives"); // work overriding
  }
}
let obj2 = new Doctor();

console.log(obj1);
console.log(obj1.eat);
console.log(obj1.sleep);

console.log(obj2);
console.log(obj2.eat);
console.log(obj2.sleep);



// Parent accessing Child Property
// we use super KeyWord

class HumanPerson {
  constructor(name) {
    this.species = "Homo Sapiens";
    this.name = name;
  }

  eat() {
    console.log("Eat");
  }
}

class Engineer1 extends HumanPerson {
    constructor(name) {
        super(name);
    } 

    work() {
        super.eat();
        console.log("solving Problem")
    }
}

let engObj1 = new Engineer("Chemical Engineer");
let engObj2 = new Engineer("Computer Engineer");
let engObj3 = new Engineer("Civil Engineer");

let engObj4 = new Engineer1("Doe");
let engObj5 = new Engineer1("Smith");
let engObj6 = new Engineer1("Ben");

console.log(engObj1);
console.log(engObj2);
console.log(engObj3);

console.log(engObj4);
console.log(engObj5);
console.log(engObj6);

console.log(engObj4.work);
console.log(engObj5.work);
console.log(engObj6.work);


// Practice Question --- 1
// create website for college. create class User with 2 properties, name and email. It also has method called ViewData() that allow user to view website data

let Data = "secret information";

class User1 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Data = ", Data);
    }
}

let student1 = new User1("John Doe", "acb@cam.com");
let student2 = new User1("Rocky Smith", "roc@cam.com");
let teacher1 = new User1("Dean", "dean@cam.com");
    
console.log(Data)
console.log(student1);
console.log(student2);
console.log(teacher1);

console.log(student1.viewData());
console.log(student2.viewData());
console.log(teacher1.viewData());


// Practice Question --- 2
// Create new class Admin which inherits fro=m User. Add a new Method called editData to Admin that allow it to edit website

let data = "secret information";

class User2 {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("Data = ", data);
  }
}

class Admin extends User2 {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        data = "edit some data here";
    }
}

let Student1 = new User2("John Doe", "acb@cam.com");
let Student2 = new User2("Rocky Smith", "roc@cam.com");
let Teacher1 = new User2("Dean", "dean@cam.com");
let Admin1 = new Admin("Admin", "admin@cam.com");

console.log(data);
console.log(Student1);
console.log(Student2);
console.log(Teacher1);

console.log(Admin1);
console.log(Admin1.viewData());
console.log(Admin1.editData());

console.log(Student1.viewData());
console.log(Student2.viewData());
console.log(Teacher1.viewData());
console.log(Admin1.viewData());


// Error Handling
// use try and catch method

let a = 5;
let b = 10;

console.log("a = ", a);
console.log("b = ", b);

console.log("a + b = ", a + b);
console.log("a + b = ", a + b);

try {
    console.log("a + b = ", a + c);
} catch (error) {
    console.log("Error arises here", error);
}

console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);

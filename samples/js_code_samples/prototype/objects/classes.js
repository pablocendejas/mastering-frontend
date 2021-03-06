const Logger = require('../../utils/logger')
/**
 * CASE 0: Object creation thru classes example.
 * This function demonstrates the way to use classes to build objects
*/
function classesDemo () {
  class Animal {
    constructor () {
      this.color = 'A generic color that applies to all animals, if that exists'
    }
    eat () {
      return `Look, ma! I'm an animal, built using a class, that eats!`
    }
  }

  const rabbit = new Animal()
  const rabbitColor = rabbit.color
  const rabbitEating = rabbit.eat()

  // log result
  const logger = new Logger()
  logger.statements = [
    `Rabbit's color: ${rabbitColor}`,
    `Rabbit eating: ${rabbitEating}`
  ]
  logger.log('classes', 0)
}

/**
 * CASE 1: Classes syntax and its equivalent as function constructor
*/
function classAndFunctionConstructor () {
  // START: The 'classy' way.
  class AnimalAsClass {
    constructor () {
      this.color = 'A generic color'
    }

    eat () {
      return `I'm an animal and I'm eating.`
    }
  }

  // Add a method to the class via its prototype, demonstrating that it's actually just a function
  AnimalAsClass.prototype.sayBye = function () {
    return `Bye, human.`
  }
  // END: The 'classy' way.

  // START: The 'function as constructor' way.
  function AnimalAsFunc () {
    this.color = 'A generic color'
  }
  AnimalAsFunc.prototype.eat = function () {
    return `I'm an animal and I'm eating.`
  }
  AnimalAsFunc.prototype.sayBye = function () {
    return `Bye, human.`
  }
  // END: The 'function as constructor' way.

  // objects creation
  const rabbit1 = new AnimalAsClass()
  const rabbit2 = new AnimalAsFunc()

  // Now, the tricky and exciting parts!
  const typeofAnimalAsClass = typeof AnimalAsClass
  const rabbit1HasPropertyColor = rabbit1.hasOwnProperty('color')
  const rabbit2HasPropertyColor = rabbit2.hasOwnProperty('color')
  const rabbit1HasEatMethod = rabbit1.hasOwnProperty('eat')
  const rabbit2HasEatMethod = rabbit2.hasOwnProperty('eat')
  const rabbit1SaysBye = rabbit1.sayBye()
  const rabbit2SaysBye = rabbit2.sayBye()

  // log results
  const logger = new Logger()
  logger.statements = [
    `What type is a class actually? ${typeofAnimalAsClass}`,
    `Rabbit 1 has property color: ${rabbit1HasPropertyColor}`,
    `Rabbit 2 has property color: ${rabbit2HasPropertyColor}`,
    `Rabbit 1 has eat method: ${rabbit1HasEatMethod}`,
    `Rabbit 2 has eat method: ${rabbit2HasEatMethod}`,
    `Rabbit 1 says bye: ${rabbit1SaysBye}`,
    `Rabbit 2 says bye: ${rabbit2SaysBye}`
  ]
  logger.log('classes', 1)
}

/**
 * CASE 2: Static methods
 * This function shows how static methods work in classes and
 * their equivalent on functions.
*/
function classStaticMethods () {
  class AnimalClass {
    static drinkWater () {
      return `Yay! Fresh water!`
    }
  }

  function AnimalFunction () {
    // nothing here
  }

  AnimalFunction.drinkWater = function () {
    return `Yay! Fresh water!`
  }

  const classDrinkingWater = AnimalClass.drinkWater()
  const functionDrinkingWater = AnimalFunction.drinkWater()

  // log results
  const logger = new Logger()
  logger.statements = [
    `Result from static method: ${classDrinkingWater}`,
    `Result from function prop: ${functionDrinkingWater}`
  ]
  logger.log('classes', 2)
}

/**
 * CASE 3: Class extending other class
 * What happens here is that the underlying function's
 * prototype object's [[Prototype]] is pointing to
 * some other function's prototype object.
*/
function classExtendingClass () {
  class Animal {
    constructor () {
      this.name = 'Generic Animal'
    }

    eat () {
      return `I'm ${this.name} and I'm eating. Yummy!`
    }
  }

  class Rabbit extends Animal {
    constructor (name) {
      super()
      this.name = name
    }

    jump () {
      return `I'm ${this.name} and I'm jumping!`
    }
  }

  const bugs = new Rabbit('Bugs Bunny')

  const bugsEating = bugs.eat()
  const bugsJumping = bugs.jump()

  // log results
  const logger = new Logger()
  logger.statements = [
    `Bugs Bunny eating says: ${bugsEating}`,
    `Bugs Bunny jumping says: ${bugsJumping}`
  ]
  logger.log('classes', 3)
}

module.exports = [
  classesDemo,
  classAndFunctionConstructor,
  classStaticMethods,
  classExtendingClass
]

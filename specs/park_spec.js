const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('Veloceraptor', 'carnivore', 30);
    dinosaur2 = new Dinosaur('Oviraptor', 'omnivore', 10);
    dinosaur3 = new Dinosaur('Stegosaurus', 'herbivore', 40);
    dinosaur4 = new Dinosaur('Triceratops', 'herbivore', 60);
    dinosaur5 = new Dinosaur('Triceratops', 'herbivore', 45);
    park = new Park('Jurassic Lark', 2.50)
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Lark'); 
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 2.50);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 2);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur2);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  // it('should be able to find the dinosaur that attracts the most visitors', function(){
  //   park.addDinosaur(dinosaur1);
  //   park.addDinosaur(dinosaur2);
  //   park.addDinosaur(dinosaur3);
  //   park.addDinosaur(dinosaur4);
  //   const actual = park.topAttraction;
  //   assert.deepEqual(actual, ['Triceratops', 'herbivore', 60])    
  // });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);   
    const actual = park.dinosaurBySpecies('Triceratops');
    assert.strictEqual(actual, 2)
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});

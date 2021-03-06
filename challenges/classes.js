// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
  constructor(dimensions){
  //properties
  this.length = dimensions.length;
  this.width = dimensions.width;
  this.height = dimensions.height;
  }
  //Volume Method
  volume (){
  return this.length*this.width*this.height;
  }
  //Surface Area Method
  surfaceArea (){
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }  
}

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

const cuboid = new CuboidMaker({
  'length': 4,
  'width': 5,
  'height': 5,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker{
  constructor(cubeDimensions){
    super(dimensions); //something is not working here.
  }
  cubeVolume (){
    return this.length*this.width*this.height;
  }
  cubeSurfaceArea(){
    return 6*this.length;
  }
}

//create a new cube
const cube = new CubeMaker({
  'length': 10,
  'width': 10,
  'height': 10,
})


console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());



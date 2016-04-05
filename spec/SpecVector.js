describe("Vector", function() {
  var x;
  var y;

  beforeEach(function(){
    x = 10;
    y = 20;
    vector = new Vector(x, y);
    addedVector = new Vector(30, 30);
  });

  describe("Constructor", function(){

    it("Stores the x and y values of the vector", function(){
      expect(vector.x).toEqual(10);
      expect(vector.y).toEqual(20);
    });
  });

  describe("#plus", function(){
    it("returns a new vector from adding the vector it receives as an argument", function(){
      expect(vector.plus(addedVector)).toEqual(jasmine.objectContaining({x: 40, y:50}));
    });
  });

  describe("#times", function(){
    it("returns a new vector by multiplying the vector it is called on by the factor argument", function(){
      expect(vector.times(3)).toEqual(jasmine.objectContaining({x: 30, y:60}));
    });
  });

});

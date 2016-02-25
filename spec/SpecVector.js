describe("Vector", function() {
  var x;
  var y;

  beforeEach(function(){
    x = 10;
    y = 20;
    vector = new Vector(x, y);
  });

  describe("Constructor", function(){

    it("Stores the x and y values of the vector", function(){
      expect(vector.x).toEqual(10);
      expect(vector.y).toEqual(20);
    });

  });

});

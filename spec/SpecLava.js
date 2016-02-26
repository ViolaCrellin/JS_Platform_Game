describe("Lava", function(){
var droppingLavaCh;
var drippingLavaCh;
var xAxisMovingLavaCh;

  beforeEach(function(){
    xAxisMovingLavaCh = "=";
    droppingLavaCh = "v";
    drippingLavaCh = "|";
    vector = new Vector(2, 2);
    droppingLava = new Lava(vector, droppingLavaCh);
    drippingLava = new Lava(vector, drippingLavaCh);
    xAxisMovingLava = new Lava(vector, xAxisMovingLavaCh);
  });

  describe("#Constructor", function(){});
    it("converts 'v' characters to dropping Lava with a vector object of x:2, y:0", function(){
      expect(droppingLava.speed).toEqual(jasmine.objectContaining({x: 0, y:3}));
    });

    it("converts '|' characters to dripping Lava with a vector object of x:2, y:0", function(){
      expect(drippingLava.speed).toEqual(jasmine.objectContaining({x: 0, y:2}));
    });

    it("converts '=' characters to dropping Lava with a vector object of x:2, y:0", function(){
      expect(xAxisMovingLava.speed).toEqual(jasmine.objectContaining({x: 2, y:0}));
    });

    it("converts all lava characters to objects of size x:1, y:1", function(){
      expect(xAxisMovingLava.size).toEqual(jasmine.objectContaining({x: 1, y:1}));
      expect(drippingLava.size).toEqual(jasmine.objectContaining({x: 1, y:1}));
      expect(droppingLava.size).toEqual(jasmine.objectContaining({x: 1, y:1}));
    });
});

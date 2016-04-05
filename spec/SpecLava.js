describe("Lava", function(){
var droppingLavaCh;
var drippingLavaCh;
var xAxisMovingLavaCh;

  beforeEach(function(){
    xAxisMovingLavaCh = "=";
    droppingLavaCh = "v";
    drippingLavaCh = "|";
    vector1 = new Vector(2, 2);
    vector2 = new Vector(3, 3);
    vector3 = new Vector(4, 4);
    droppingLava = new Lava(vector1, droppingLavaCh);
    drippingLava = new Lava(vector2, drippingLavaCh);
    xAxisMovingLava = new Lava(vector3, xAxisMovingLavaCh);
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

    it("finds all the positions of the lava pieces in the level plan", function(){
      expect(xAxisMovingLava.pos).toEqual(jasmine.objectContaining({x: 4, y:4}));
      expect(drippingLava.pos).toEqual(jasmine.objectContaining({x: 3, y:3}));
      expect(droppingLava.pos).toEqual(jasmine.objectContaining({x: 2, y:2}));
    });


  describe("#type", function(){
    it("defines all the different types of Lava object as 'lava'", function(){
      expect(drippingLava.type).toEqual("lava");
      expect(droppingLava.type).toEqual("lava");
      expect(xAxisMovingLava.type).toEqual("lava");
    });
  });

  xdescribe("#act", function(){

    beforeEach(function(){
      plan = ["x                 =x",
              "x          o       x",
              "x          o       x",
              "x    o xxxxx    xxxx",
              "x   xx             x",
              "x         o      o x",
              "xxx o     x   xxxxxx",
              "x    xx           =x",
              "x                  x",
              "xxxx     xx       @x",
              "x              xxxxx",
              "x   o              x",
              "x o       xx       x",
              "xxx     xx         x",
              "x o        o  o  o x",
              "xxxx      xxxxxxxxxx",
              "x                   ",
              "x!!!!!!!!!!x        ",
              "xxxxxxxxxxxx        ",
              "                    "];
    level = new Level(plan);
    spyOn('level', 'obstacleAt');

    });

    it("calculcates the new position of the lava based on step", function(){
      drippingLava.act(3);
      expect(level).toHaveBeenCalled();
    });
  });
});

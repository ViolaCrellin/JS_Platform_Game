describe("Level", function() {
  var plan;
  var actorChars;
  var x;
  var y;
  var vector;

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
    x = 10;
    y = 20;
    vector = new Vector(x, y);
    level = new Level(plan);
    player = new Player();
    coin = new Coin();
    lava = new Lava();
    actorChars = {
      "@": player,
      "o": coin,
      "=": lava, "|": lava, "v": lava
    };
  });

  describe("constructor", function(){
    it("Has a level plan as default and calculates width of it", function(){
      expect(level.width).toEqual(20);
    });
    it("Has a level plan as default and calculates width of it", function(){
      expect(level.height).toEqual(20);
    });

    it("Has an empty grid array", function(){
      expect(level.grid).toEqual([]);
    });

    it("Has an empty actors array", function(){
      expect(level.actors).toEqual([]);
    });

    it("Has a level plan array of strings", function(){
      expect(level.plan).toEqual(plan);
    });

    it("Has a level over/in progress status that is null by default", function(){
      expect(level.status).toEqual(null);
    });
  });

  describe("#buildLevel", function(){

    beforeEach(function(){
      level.buildLevel();
    });

    it("moves the whole plan into the grid", function(){
      expect(level.grid.length).toEqual(plan.length * plan.length);
    });

    it("finds any matches to actor characters in the level plan", function(){
      expect(level.actors[0]).toEqual(lava);
    });

    it("converts ! values in plan to 'lava' and puts them in the grid", function(){
      expect(level.actors).toContain("lava");
    });
  });

  describe("#isFinished", function(){
    it("checks whether the level is over by checking the status != null", function(){
      expect(level.isFinished).toBeTruthy();
      // needs the falsy equivalent
    });
  });

});

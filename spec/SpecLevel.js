describe("Level", function() {
  var plan;
  var level;
  // var superSimplePlan;
  // var simpleLevel;

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
  });

  describe("constructor", function(){
    it("Has a level plan as default and calculates width of it", function(){
      expect(level.width).toEqual(20);
    });
    it("Has a level plan as default and calculates width of it", function(){
      expect(level.height).toEqual(20);
    });

    it("Fills the grid with 20 values referencing their plan symbol", function(){
      expect(level.grid.length).toEqual(20);
    });


    it("Fills the empty grid array with 'wall' 's related to the 'x' on plan", function(){
      expect(level.grid[0]).toContain('wall');
    });

    it("Fills the empty grid array with 'lava' 's related to the '!' on plan", function(){
      expect(level.grid[17]).toContain('lava');
    });

    it("Fills the empty grid array with 'null' 's related to the ' ' on plan", function(){
      expect(level.grid[17]).toContain(null);
    });

    it("Fills the empty actors array with actor functions", function(){
      expect(typeof level.actors[1]).toBe("object");
      expect(level.actors.length).toEqual(15);
    });

    it("saves the Lava actors in the actors array with their own position, size and speed properties ", function(){
      expect(level.actors[2].pos).toBeTruthy();
      expect(level.actors[2].speed).not.toBe(null);
    });

    it("saves the Lava actors pos property as a Vector object", function(){
      expect(typeof level.actors[0].pos).toBe("object");
      expect(level.actors[0].pos).toEqual(jasmine.objectContaining({x: 18})
      );
    });

    xit("saves the Lava actors properties as Vector objects", function(){
      expect(typeof level.actors[1].speed).toBe("object");
    });

    it("Has a level over/in progress status that is null by default", function(){
      expect(level.status).toEqual(null);
    });

    it("Has a level reload delay that is null by default", function(){
      expect(level.finishDelay).toEqual(null);
    });

  });

  beforeEach(function(){
    superSimplePlan = ["x   o   @=!"];
    simpleLevel = new Level(superSimplePlan);
  });


  it("Finds the player in the actors array", function(){
    playerArray = simpleLevel.actors.filter(function(actor){
      return actor.type == "player";
    });
    expect(playerArray.length).toEqual(1);
  });

  it("Assigns a player object to the level's player property", function(){
    expect(typeof simpleLevel.player).toEqual("object");
  });

  it("saves the player object's own pos, speed and size properties", function(){
    expect(simpleLevel.player.pos).not.toBe(null);
    expect(simpleLevel.player.speed).not.toBe(null);
    expect(simpleLevel.player.size).not.toBe(null);
  });

  describe("#isFinished", function(){

    it("The null starting status means the game isn't finished", function(){
      expect(level.isFinished()).toBeFalsy();
    });

    xit("lets the finishDelay clock count down to 0 before ending the level", function(){
      // expect(level.isFinished)
    });
  });

  xdescribe("#obstacleAt", function(){

  });

});

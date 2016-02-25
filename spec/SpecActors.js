describe("Actors", function() {
  var vector;
  var player;
  var obstacle;


  beforeEach(function(){
    vector = new Vector(1, 1);
    player = new Player(vector);
    level = {
      width: 20,
      height: 20,
      player1: player,
      status: null
    };
  });

  describe("Player", function(){

    it("has position, size and speed properties with vector objects", function(){
      expect(typeof player.pos).toEqual("object");
      expect(typeof player.size).toEqual("object");
      expect(typeof player.speed).toEqual("object");
    });

    it("adds a vector of position 0, -0.5 to the player pos property", function(){
      expect(player.pos).toEqual(jasmine.objectContaining({x: 1, y: 0.5}));
    });

    it("has a default size of vector 0.8, 1.5", function(){
      expect(player.size).toEqual(jasmine.objectContaining({x: 0.8, y: 1.5}));
    });

    it("has a default speed of vector 0, 0", function(){
      expect(player.speed).toEqual(jasmine.objectContaining({x: 0, y: 0}));
    });
  });

  describe("Player#type", function(){
    it("returns the string 'player' when called on player", function(){
      expect(player.type).toEqual("player");
    });
  });

  describe("Player#MoveX", function(){

    it("Increases the player speed vector x value when right key is pressed", function(){
      beforeSpeed = player.speed.x;
      spyOn(level, "obstacle");

      player.moveX(0, 0, 37);
      expect(player.speed.x).toBeGreaterThan(beforeSpeed);
    });
  });
});

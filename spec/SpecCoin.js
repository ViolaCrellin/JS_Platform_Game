describe("Coin", function (){
var wobbleSpeed;
var wobbleDist;
var step;
var originalCoinPos;
var originalCoinWobble;

  beforeEach(function(){
    wobbleSpeed = 8;
    wobbleDist = 0.07;
    step = 1;
    vector = new Vector(1, 1);
    spyOn(Math, "random").and.returnValue(0.5);
    coin = new Coin(vector);
    originalCoinWobble = coin.wobble;
    originalCoinPos = coin.pos;
  });

  describe("#constructor", function(){
    it("assigns the coin a vector obj for current position", function(){
      expect(typeof originalCoinPos).toEqual("object");
    });

    it("adds 0.2 and 0.6 to the coins current level plan position", function(){
      expect(originalCoinPos).toEqual(jasmine.objectContaining({x: 1.2, y: 1.1}));
    });

    it("equates the base position of the coin to its current position", function(){
      expect(coin.pos).toEqual(coin.basePos);
    });

    it("gives the coin a vector size of 0.6 by 0.6", function(){
      expect(coin.size).toEqual(jasmine.objectContaining({x: 0.6, y: 0.6}));
    });

    it("calculates the coin a random wobble", function(){
      expect(originalCoinWobble).toEqual(0.5 * Math.PI * 2);
    });
  });

  describe("#act", function(){

    beforeEach(function(){
      coin.act(step);
    });

    it("increments the wobble of the coin by wobble speed * step", function(){
      expect(coin.wobble).toEqual(originalCoinWobble += 8);
    });

    it("generates a new y position based on a sin function vector of the coins new wobble", function(){
      wobbleP = Math.sin(coin.wobble) * 0.07;
      expect(coin.pos).toEqual(originalCoinPos.plus(new Vector(0, wobbleP)));
    });
  });

  describe("#type", function(){
    it("defines the type of the Coin object as 'coin'", function(){
      expect(coin.type).toEqual("coin");
    });
  });
});

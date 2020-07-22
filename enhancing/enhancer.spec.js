const {repair} = require('./enhancer.js');
// test away!

describe("repair()", function(){
    it("should restore durability to 100", () => {
        //Arrange
        let item ={
            name:  "arrow",
            durability: 52,
            enhancement: 7
        }
        
        //Act
        const restoredItem = repair(item)

        //Assert 
        expect(restoredItem.durability).toBe(100)


    }) 
})

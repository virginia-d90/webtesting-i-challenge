const {repair, success, fail} = require('./enhancer.js');
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

describe("success()", function(){
    it("should increase enhancement by 1", function(){
        // let currentEnhancement = 17
        let item = {
            name: "arrow",
            durability: 52,
            enhancement: 15
        }

        const enhancedItem = success(item)

        expect(enhancedItem.enhancement).toBe(16)
    })

    it("should not increase enhancement past 20", function(){
        let item = {
            name: "arrow",
            durability: 52,
            enhancement: 20
        }

        const enhancedItem = success(item)

        expect(enhancedItem.enhancement).toBe(20)
    })
});

describe("fail()", function(){
    it("should decrease durability by 5 if enhancement is less than 15", function(){
        let item = {
            name: "arrow",
            durability: 52,
            enhancement: 14
        }

        const failItem = fail(item)

        expect(failItem.durability).toBe(47)
    })

    it("should decrease durability by 10 if enhancement is >= 15", function(){
        let item = {
            name: "arrow",
            durability: 50,
            enhancement: 15
        }
        let itemPlus = {
            name: "arrow2",
            durability: 40,
            enhancement: 18
        }

        const failItem = fail(item)
        const failItemPlus = fail(itemPlus)

        expect(failItem.durability).toBe(40)
        expect(failItemPlus.durability).toBe(30)
    })

    it("should decrease enhancement by 1 if > 16", function(){
        let item = {
            name: "arrow2",
            durability: 40,
            enhancement: 18
        }

        const failItem = fail(item)

        expect(failItem.enhancement).toBe(17)
    })
})

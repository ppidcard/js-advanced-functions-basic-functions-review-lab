// Your code here
const saturdayFun = function(activity){
    let message;
    if (!activity){
    message = `This Saturday, I want to roller-skate!`;
    }else if(activity){
    message = `This Saturday, I want to ${activity}!`;
    }
    return message;
}
const mondayWork = function(activity){
    let message;
    if (!activity){
    message = `This Monday, I will go to the office.`;
    }else if(activity){
    message = `This Monday, I will ${activity}.`;
    }
    return message;
}
function wrapAdjective(input1 = '*') {
    let result = function(input2){
        return `You are ${input1}${input2}${input1}!` 
    }
    return result;
}

const Calculator = {
    add:function(a,b){
        return a + b;
    },
    subtract: function(a,b){
        return a-b;
    },
    divide: function(a,b){
        return a/b;
    },
    multiply: function(a,b){
        return a*b
    },
}

function actionApplyer(startInt,arrayEnd){
    let a=startInt;

    for (let i = 0; i < arrayEnd.length; i++ ){
        a = arrayEnd[i](a);
      }
    
      return a;

    }
/*

    describe("receives two arguments: a starting integer and an array of functions", function() {
      it("returns the given starting point, unchanged, when the array is empty", function() {
        expect(actionApplyer(0, [])).to.equal(0)
      })

      it("Given 13, returns 4 after being acted on by several functions", function() {
        let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
        arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]
        expect(actionApplyer(13, arrayOfTransforms)).to.equal(4, message)
      })
    })


  })
})
*/
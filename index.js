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

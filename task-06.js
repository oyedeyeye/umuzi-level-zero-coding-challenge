function maximumNumber(firstNum, secondNum, thirdNum){
    var maximumNum;
    if(firstNum >= secondNum && firstNum >= thirdNum){
        maximumNum = firstNum;
    } else if(secondNum >= firstNum && secondNum >= thirdNum){
        maximumNum = secondNum;
    } else {
        maximumNum = thirdNum
    }
    console.log("The Maximum number is " + maximumNum);
}

maximumNumber(5, 6, 7);
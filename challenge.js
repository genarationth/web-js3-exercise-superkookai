function checkPassed(score){
    if (score < 0 || score > 11){
        return 'Invalid score';
    }else if (score >= 5){
        return true;
    }else{
        return false;
    }
}

function checkLevel(score){
    if(checkPassed(score)){
        if(score > 8 && score < 11){
            console.log("Excellent");
        }else if (score === 11){
            console.log("Perfect");
        }
        else{
            console.log(`Your score is ${score}`);
        }
    }else{
        console.log("You fail!");
    }

}

checkLevel(4);
checkLevel(5);
checkLevel(9);
checkLevel(11);
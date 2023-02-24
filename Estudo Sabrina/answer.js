function biggerNumber(numbers){
    let biggerValue;
    numbers.forEach((element, index) => {
        if(biggerValue && biggerValue < element){
            biggerValue = element
        } 
        if(!biggerValue) biggerValue = element
    });
    console.log(biggerValue)
}


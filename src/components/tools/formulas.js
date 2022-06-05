


function Ngens(X, X0){
    let result = Math.abs(Math.ceil(Math.log(X/X0)/ Math.log(1.5)));
    console.log('result is: '+  result)
    return result;
}

export {Ngens}
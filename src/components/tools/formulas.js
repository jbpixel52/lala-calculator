


function Ngens(N, N0){
    let result = Math.abs(Math.ceil(Math.log(N/N0)/ Math.log(3/2)));
    console.log('result is: '+  result)
    return result;
}

export {Ngens}
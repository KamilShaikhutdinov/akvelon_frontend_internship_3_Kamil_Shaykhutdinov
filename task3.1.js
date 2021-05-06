// task №3.1

function reverseBits(x){

    let binary =  x.toString(2) 
    
    let result = binary.split('').reverse().join('')
    
    console.log(parseInt( result, 2 ))
}
console.log( 'Bits reverser')
reverseBits(417) 
reverseBits(267) 
reverseBits(0) 
reverseBits(2017) 
reverseBits(1023) 
reverseBits(1024) 
reverseBits(Number.MAX_SAFE_INTEGER) 




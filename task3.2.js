//task 3.2


function factorial(n) {
    if (n == 0) return 1;
    return (n != 1) ? n * factorial(n - 1) : 1;
    
  }
  
  console.log( 'Factorial task')
  console.log(factorial(0) )
  console.log(factorial(1) )
  console.log(factorial(4) )
  console.log(factorial(7) )
  console.log( factorial(17) )
  

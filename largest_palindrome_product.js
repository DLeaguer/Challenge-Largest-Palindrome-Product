/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  
  // do your work here
  let result = [];
  let answer = {};
  
  console.log('');
  console.log('digits', digits);
  console.log('result', result);

  if (digits === 2) {
    for (let i=99; i>90; i--) {
      for (let j=i; j>90; j--) {
        factor_0 = i; 
        factor_1 = j;
        palindromeNumber = i * j;
        let pal = Number(palindromeNumber.toString().split('').reverse().join(''));
        
        // console.log('i', i, ' * ', j, ' is ', palindromeNumber, ' = ', pal, ' ?');
        if (pal === palindromeNumber) {
          result.push({
            factor_0: i,
            factor_1: j,
            palindromeNumber: palindromeNumber
          });
          // console.log('');
          // console.log('result');
          // console.log(result);
        }
      }
    } 
    console.log('');
    console.log('start loop through results')
    for (let k in result) {
      console.log('answer', answer);
      console.log('result', result);
      console.log('result[k].palindromeNumber', result[k].palindromeNumber);
      console.log('answer.palindromeNumber', answer.palindromeNumber);
      if (answer.palindromeNumber === undefined) {
        answer = result[0];
        console.log('1st answer', answer);
      } else {
        console.log(answer[k].palindromeNumber, '>', result[k].palindromeNumber, '?');
        if (result[k].palindromeNumber > answer.palindromeNumber) {
          answer = result;
          console.log('');
          console.log('factor_0 =', factor_0);
          console.log('factor_1 =', factor_1);
          console.log('palindromeNumber', palindromeNumber);
          console.log('result =', result);
          console.log('answer', answer);
        }
      }
    }
    return answer;


  } else if (digits === 3) {
    for (let i=999; i>900; i--) {
      for (let j=i; j>900; j--) {
        factor_0 = i; 
        factor_1 = j;
        palindromeNumber = i * j;
        let pal = Number(palindromeNumber.toString().split('').reverse().join(''));
        
        // console.log('i', i, ' * ', j, ' is ', palindromeNumber, ' = ', pal, ' ?');
        if (pal === palindromeNumber) {
          result.push({
            factor_0: i,
            factor_1: j,
            palindromeNumber: palindromeNumber
          });
          // console.log('');
          // console.log('result');
          // console.log(result);
        }
      }
    } 
    console.log('');
    console.log('start loop through results')
    for (let k in result) {
      if (answer.palindromeNumber === undefined) {
        answer = result[0];
        console.log('');
        console.log('answer', answer);
        console.log('');
        console.log('result');
        console.log(result);
        console.log('');
        console.log('result[k].palindromeNumber', result[k].palindromeNumber);
        console.log('answer.palindromeNumber', answer.palindromeNumber);
        console.log('');
        console.log('1st answer', answer);
      } else {
        console.log('');
        console.log('other answers');
        console.log(answer.palindromeNumber, '>', result[k].palindromeNumber, '?');
        if (result[k].palindromeNumber > answer.palindromeNumber) {
          answer = result[k];
          console.log('');
          console.log('factor_0 =', factor_0);
          console.log('factor_1 =', factor_1);
          console.log('palindromeNumber', palindromeNumber);
          console.log('result =', result);
          console.log('answer', answer);
        }
      }
    }
    return answer;
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};

// this didn't work.  I was trying to make only one nested for loop for all digits.length

// for (let i=1000; i>90; i--) {
//   for (let j=i; j>90; j--) {
//     factor_0 = i; 
//     factor_1 = j;
//     palindromeNumber = i * j;
//     let pal = Number(palindromeNumber.toString().split('').reverse().join(''));
    
//     let iLength = i.toString().length;
//     let jLength = j.toString().length;
//     if (iLength === digits && jLength === digits) {
//       console.log('');
//       console.log(iLength, '=', digits);
//       console.log('i', i, ' * ', j, ' is ', palindromeNumber, ' = ', pal, ' ?');
//       if (pal === palindromeNumber) {
//         result.push(palindromeNumber);
//         console.log('pal result', result);
//       }
//     }
//     if (iLength === digits && jLength === digits) {
//       for (let k=result.length; k>90; k--) {
//         if (result[k] < result[k-1]) {
//           answer = result[k-1];
//           console.log('');
//           console.log('factor_0 =', factor_0);
//           console.log('factor_1 =', factor_1);
//           console.log('palindromeNumber', palindromeNumber);
//           console.log('result =', result);
//         }
//       }
//     }
//     return {
//       factor_0 : factor_0,
//       factor_1 : factor_1,
//       palindromeNumber : palindromeNumber          
//     }
//   }
// }



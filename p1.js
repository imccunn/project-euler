// Project Euler - Problem 1
// 
// By Ian D. McCunn
//
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// >> Find the sum of all the multiples of 3 or 5 below 1000.

'use strict';

(function() {
	
	var maxNumber = 1000,
		mul1 = 3,
		mul2 = 5,
		mulCollectionSum = 0;

	function isMultiple(mul, num) {
		return (num % mul === 0) ? true : false;
	}

	function collectMultiples(belowThisNum) {
		for (var i = 0; i < belowThisNum; i++) {
			if (isMultiple(mul1, i) || isMultiple(mul2, i)) {
				console.log(i);
				mulCollectionSum += i;
			}
		}
	}

	collectMultiples(maxNumber);
	console.log('The sum of all multiples of 3 or 5 below 1000 is ' + mulCollectionSum + '.');

})();
// Project Euler - Problem 3
// 
// By Ian D. McCunn
//
//
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

(function() {
	'use strict';

	function isPrime(n) {
		var ret = false;
		for (var i = 2; i < n; i++) {
			if (n % i == 0) {
				return ret;
			} 
		}
		ret = true;
		return ret;
	}

	// nPrimes
	//
	//
	//
	// @params n = fetch this many primes, optionally: args[1] = all primes up to this number
	// @return [] of primes

	function nPrimes(n) { // [, primesToThisNumber]
		var nPrimes = [];
		var count = 1;
		if (arguments[1]) {
			while (count < arguments[1]) {
				if (isPrime(count)) {
					nPrimes.push(count);
				}
				count++;
			}
		} else {
			while (nPrimes.length < n) {
				if (isPrime(count)) {
					nPrimes.push(count);
				}
				count++;
			}
		}
		
		return nPrimes;
	}

	function allPrimeFactorsLessThan(n) {

	}

	function largestPrimeFactorOf(n) {

	}

})();
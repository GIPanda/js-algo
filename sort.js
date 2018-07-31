/***************************
 * Selection sort
 ***************************/
function selectionSort(arr, n) {
	for(let i = 0; i < n; i++) {
		let minIndex = i;
		for(let j = i + 1; j < n; j++) {
			if (arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}
		// swap
		let tmp = arr[minIndex];
		arr[minIndex] = arr[i];
		arr[i] = tmp;		
	}

	return arr;	
}



/***************************
 * Test
 ***************************/
const SortTestHelper = require('./_helper.js');

let a = SortTestHelper.generateRandomArray(100000, 0, 10000);
// SortTestHelper.testSort('Selection sort', selectionSort, a, a.length);
SortTestHelper.testSort('Selection sort', selectionSort, a, a.length);
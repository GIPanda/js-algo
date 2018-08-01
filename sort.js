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
 * Insertion sort
 ***************************/
function insertionSort(arr, n) {
	for(let i = 1; i < n; i++) {

		let e = arr[i];
		let j;
		for(j = i; j > 0 && arr[j-1] > e; j--) {
			arr[j] = arr[j-1];
		}
		arr[j] = e;
	}

	return arr;
}


/***************************
 * Bubble sort
 ***************************/
function bubbleSort() {

}


/***************************
 * Shell sort
 ***************************/
 function shellSort() {

 }


/***************************
 * Test
 ***************************/
const SortTestHelper = require('./_helper.js');

let n = 100000; 
let a = SortTestHelper.generateRandomArray(n, 0, 3);
let b = a.slice(0);
let c = SortTestHelper.generateNearlyOrderedArray(n, 30);

// SortTestHelper.testSort('Selection sort', selectionSort, c, c.length);
// SortTestHelper.testSort('Insertion sort', insertionSort, c, c.length);
/***************************
 * Selection sort
 * 时间复杂度: O(n^2)
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
const mergeSort = require('./merge_sort.js');
const insertionSort = require('./insertion_sort.js');
const quickSort = require('./quick_sort.js');


let n = 1000000; 
let arr1 = SortTestHelper.generateRandomArray(n, 0, n);
let arr2 = arr1.slice(0);
let arr3 = arr1.slice(0);

let arr4 = SortTestHelper.generateNearlyOrderedArray(n, 0);
let arr5 = arr4.slice(0);


// SortTestHelper.testSort('Selection sort', selectionSort, arr1, arr1.length);
//SortTestHelper.testSort('Insertion sort', insertionSort.basic, arr4, arr4.length);

SortTestHelper.testSort('Merge sort', mergeSort.advanced, arr2, arr2.length);
SortTestHelper.testSort('Quick sort', quickSort.basic, arr3, arr3.length);







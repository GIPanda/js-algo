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
const selectionSort = require('./selection_sort.js');
const insertionSort = require('./insertion_sort.js');
const mergeSort = require('./merge_sort.js');
const quickSort = require('./quick_sort.js');


let n = 10000; 
let arr1 = SortTestHelper.generateRandomArray(n, 0, n);
let arr2 = arr1.slice(0);
let arr3 = arr1.slice(0);

let arr4 = SortTestHelper.generateNearlyOrderedArray(n, 100);
let arr5 = arr4.slice(0);


// SortTestHelper.testSort('Selection sort', selectionSort.basic, arr4, arr4.length);

// SortTestHelper.testSort('Insertion sort', insertionSort.basic, arr4, arr4.length);

// SortTestHelper.testSort('Merge sort', mergeSort.basic, arr4, arr4.length);
// SortTestHelper.testSort('Merge sort advanced', mergeSort.advanced, arr4, arr4.length);
// SortTestHelper.testSort('Merge sort bottom-up', mergeSort.bu, arr5, arr5.length);
// SortTestHelper.testSort('Merge sort bottom-up advanced', mergeSort.buAdvanced, arr5, arr5.length);

SortTestHelper.testSort('Quick sort', quickSort.basic, arr4, arr4.length);
SortTestHelper.testSort('Quick sort advanced', quickSort.advanced, arr5, arr5.length);




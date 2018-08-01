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
 * Insertion sort
 * 时间复杂度: O(n^2)
 * 特点: 对近乎有序的数组排序极快
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
 * Merge sort
 * 时间复杂度: O(n*logn)
 * 特点: 空间换时间
 * 缺点: 占用内存空间
 ***************************/
function _merge(arr, l, mid, r) {

	let aux = [];
	for(let i = l; i <= r; i++) {
		aux.push(arr[i]);
	}

	let i = l, j = mid + 1;
	for(let k =l; k <= r; k++) {
		if ( i > mid ) {
			arr[k] = aux[j-l];
			j++;
		} else if (j > r) {
			arr[k] = aux[i-l];
			i++;
		} else if (aux[i-l] < aux[j-l]) {
			arr[k] = aux[i-l];
			i++;
		} else {
			arr[k] = aux[j-l];
			j++;
		}
	}
}

function _subMerge(arr, l, r) {
	if ( l >= r) {
		return;	
	}

	const mid = Math.floor((l+r)/2);
	_subMerge(arr, l, mid);
	_subMerge(arr, mid + 1, r);
	_merge(arr, l, mid, r);

}

function mergeSort(arr, n) {
	_subMerge(arr, 0, n-1);
}

/***************************
 * Test
 ***************************/
const SortTestHelper = require('./_helper.js');

let n = 100000; 
let arr1 = SortTestHelper.generateRandomArray(n, 0, n);
let arr2 = arr1.slice(0);
let arr3 = arr1.slice(0);

let arr4 = SortTestHelper.generateNearlyOrderedArray(n, 30);

// SortTestHelper.testSort('Selection sort', selectionSort, arr1, arr1.length);
SortTestHelper.testSort('Insertion sort', insertionSort, arr2, arr2.length);

SortTestHelper.testSort('Merge sort', mergeSort, arr3, arr3.length);







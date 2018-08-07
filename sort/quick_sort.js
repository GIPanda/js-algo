const insertionSort = require('./insertion_sort.js');

/***************************
 * Quick sort
 * 时间复杂度: O(n*logn)
 * 最差情况, 数组近乎有序时, 退化为 O(n^2)
 ***************************/
function partition(arr, l, r) {

	let v = arr[l];

	// arr[l+1...j] < v; arr[j+1...i) > v
	let j = l;
	for (let i = l + 1; i <= r; i++) {
		if(arr[i] < v) {
			// swap
			let tmp = arr[j+1];
			arr[j+1] = arr[i];
			arr[i] = tmp;
			j++;
		}
	}

	// swap
	let tmp = arr[l];
	arr[l] = arr[j];
	arr[j] = tmp;

	return j;
}

function quickSort(arr, l, r) {
	if(l >= r) {
		return;
	}

	p = partition(arr, l, r);

	quickSort(arr, l, p-1);
	quickSort(arr, p+1, r);
}

/***************************
 * Advanced Quick sort
 ***************************/
function partitionAdvanced(arr, l, r) {
	//set random index
	const ri = Math.floor(Math.random() % (r - l + 1) + l);
	let tmp1 = arr[l];
	arr[l] = arr[ri];
	arr[ri] = tmp1;

	let v = arr[l];

	// arr[l+1...j] < v; arr[j+1...i) > v
	let j = l;
	for (let i = l + 1; i <= r; i++) {
		if(arr[i] < v) {
			// swap
			let tmp = arr[j+1];
			arr[j+1] = arr[i];
			arr[i] = tmp;
			j++;
		}
	}

	// swap
	let tmp = arr[l];
	arr[l] = arr[j];
	arr[j] = tmp;

	return j;
}

function quickSortAdvanced(arr, l, r) {
	if (r -l <= 15) {
		insertionSort.range(arr, l, r);
		return;
	}

	p = partitionAdvanced(arr, l, r);

	quickSortAdvanced(arr, l, p-1);
	quickSortAdvanced(arr, p+1, r);	
}


exports.basic = function(arr, n) {
	quickSort(arr, 0, n-1);
}

exports.advanced = function(arr, n) {
	quickSortAdvanced(arr, 0, n-1);
}
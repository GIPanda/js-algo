const insertionSort = require('./insertion_sort.js');

/***************************
 * Quick sort
 * 时间复杂度: O(n*logn)
 * 最差情况, 数组近乎有序时, 退化为 O(n^2)
 ***************************/
function partition(arr, l, r) {

	let v = arr[l];

	// arr[l+1...j] < v; arr[j+1...r) > v
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
	const ri = Math.floor(Math.random()*(r - l + 1)) + l;
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

/***************************
 * Quick sort 2 ways
 ***************************/
function partition2(arr, l, r){
	const ri = Math.floor(Math.random() * (r - l + 1)) + l;
	// swap arr[ri] and arr[l]
	let tmp = arr[ri];
	arr[ri] = arr[l];
	arr[l] = tmp;

	let v = arr[l];

	// arr[l+1...i) <= v; arr(j...r] >= v
	let i = l + 1,j = r;
	while(true) {
		while(arr[i] < v && i <= r){
			i++;
		}
		while(arr[j] > v && j >= l+1){
			j--;
		}

		if (i > j){
			break;
		}

		// swap arr[i] and arr[j]
		let tmp1 = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp1;

		i++;
		j--;
	}

	// swap arr[l] and arr[j]
	let tmp3 = arr[l];
	arr[l] = arr[j];
	arr[j] = tmp3;

	return j;
}

function quickSort2Ways(arr, l, r){
	if(l >= r){
		return;
	}

	p = partition2(arr, l, r);
	
	quickSort2Ways(arr, l, p-1);
	quickSort2Ways(arr, p+1, r);
}


/***************************
 * Quick sort 3 ways
 ***************************/
function partition3(arr, l, r){
	const ri = Math.floor(Math.random() * (r - l + 1)) + l;
	// swap arr[l] and arr[ri]*
	let tmp = arr[l];
	arr[l] = arr[ri];
	arr[ri] = tmp;

	const v = arr[l];


	// arr[l+1...lt] < v, arr[lt+1...gt-1] = v, arr[gt...r] > v
	let lt = l, gt = r + 1, i = l+1;

	while( i < gt ){
		if (arr[i] < v) {
			// swap arr[i] and arr[lt+1]
			let tmp1 = arr[i];
			arr[i] = arr[lt+1];
			arr[lt+1] = tmp1;

			lt++;
			i++

		} else if (arr[i] > v) {
			// swap arr[i] and arr[gt]
			let tmp2 = arr[i];
			arr[i] = arr[gt-1];
			arr[gt-1] = tmp2;
			gt--;

		} else {
			i++;
		}
	}


	// swap arr[l] and arr[lt]
	let tmp3 = arr[l];
	arr[l] = arr[lt];
	arr[lt] = tmp3;

	return {
		lt: lt,
		gt: gt
	}
}

function quickSort3Ways(arr, l, r){
	if (l >= r){
		return
	}

	p = partition3(arr, l, r);

	
	quickSort3Ways(arr, l, p.lt-1);
	quickSort3Ways(arr, p.gt, r);

}

exports.basic = function(arr, n) {
	quickSort(arr, 0, n-1);
}

exports.advanced = function(arr, n) {
	quickSortAdvanced(arr, 0, n-1);
}

exports.twoWays = function(arr, n) {
	quickSort2Ways(arr, 0, n-1);
}

exports.threeWays = function(arr, n) {
	quickSort3Ways(arr, 0, n-1);
}
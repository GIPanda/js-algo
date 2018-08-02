const insertionSort = require('./insertion_sort.js');

/***************************
 * Merge sort
 * 时间复杂度: O(n*logn)
 * 特点: 空间换时间
 * 缺点: 占用内存空间
 ***************************/
function merge(arr, l, mid, r) {

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

function mergeSort(arr, l, r) {
	if ( l >= r) {
		return;	
	}

	const mid = Math.floor((l+r)/2);
	mergeSort(arr, l, mid);
	mergeSort(arr, mid + 1, r);
	merge(arr, l, mid, r);
}


function advancedMergeSort(arr, l, r) {

	if (r -l <= 15) {
		insertionSort.range(arr, l, r);
		return;
	}	

	const mid = Math.floor((l+r)/2);
	advancedMergeSort(arr, l, mid);
	advancedMergeSort(arr, mid + 1, r);
	if (arr[mid] > arr[mid + 1]) {
		merge(arr, l, mid, r);		
	}
}

exports.basic = function (arr, n) {
	mergeSort(arr, 0, n-1);
}

exports.advanced = function(arr, n) {
	advancedMergeSort(arr, 0, n-1);
}
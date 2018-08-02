/***************************
 * Insertion sort
 * 时间复杂度: O(n^2)
 * 特点: 对近乎有序的数组排序极快
 ***************************/

exports.basic = function(arr, n) {
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

exports.range = function(arr, l, r) {
	for (let i=l; i<=r; i++) {
		let e= arr[i];
		let j;
		for(j=i; j > l && arr[j-1] > e; j++) {
			arr[j] = arr[j-1];
		}
		arr[j] = e;
	}
}
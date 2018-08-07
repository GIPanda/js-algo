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


exports.basic = selectionSort;
/***************************
 * Selection sort
 ***************************/
function selectionSort(arr) {
	let n = arr.length;

	for(let i = 0; i < 10; i++) {
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

let a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
a = selectionSort(a);
console.log(a);

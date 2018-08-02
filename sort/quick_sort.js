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


exports.basic = function(arr, n) {
	quickSort(arr, 0, n-1);
}
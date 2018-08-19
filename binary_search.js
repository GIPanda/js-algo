function binarySearch(arr, n, target) {

	// 在 arr[l...r]之中查找 target
	let l = 0, r = n - 1;
	while( l <= r) {
		// let mid = Math.floor((l+r) / 2);
		let mid = l + Math.floor((r-l)/2);
		if (arr[mid] === target) {
			return mid;
		}

		if (target < arr[mid]) {
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}

	return -1;
}
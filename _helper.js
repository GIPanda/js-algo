
module.exports = {

	generateRandomArray(n, rangeL, rangeR) {
		let arr = [];

		if (rangeL <= rangeR) {
			let min = Math.ceil(rangeL);
			let max = Math.floor(rangeR);

			for (let i =0; i < n; i++) {
				arr[i] = min + Math.floor(Math.random() * (max-min + 1));
			}
		} else {
			console.error('generate radmon array : range error');
		}

		return arr;
	},

	isSorted(arr, n) {
		for(let i=0; i < n - 1; i++) {
			if (arr[i] > arr[i+1]) {
				return false;
			}
		}

		return true;
	},

	testSort(sortName, sortFn, arr, n) {
		let startTime = new Date().getTime();
		sortFn.call(this, arr, n);
		let endTime = new Date().getTime();

		if (!this.isSorted(arr)) {
			console.log(sortName + ' : array not sorted');			
		} else {
			console.log(sortName + ' : ' + (endTime - startTime)/1000 + 's');			
		}
	}
}

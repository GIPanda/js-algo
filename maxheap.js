
class MaxHeap {
	
	constructor(capacity) {
		this.capacity = capacity;
		this.count = 0;

		this.data = [];		
	}

	size() {
		return this.count;
	}

	isEmpty() {
		return this.count === 0;
	}

	shiftUp(k) {
		let parent = Math.floor(k/2);
		while(k > 1 && this.data[k] > this.data[parent]) {
			//swap
			let tmp = this.data[k];
			this.data[k] = this.data[parent];
			this.data[parent] = tmp;

			k = parent;
			parent = Math.floor(parent/2);
		}
	}

	shiftDown(k) {
		while(2*k <= this.count) {
			let j = 2*k;

			if (j + 1 <= this.count && this.data[j + 1] > this.data[j]) {
				j += 1;
			}

			if (this.data[k] >= this.data[j]) {
				break;
			}

			let tmp = this.data[k];
			this.data[k] = this.data[j];
			this.data[j] = tmp;
			k = j;	
		}
	}

	insert(item) {
		if (this.count + 1 <= this.capacity) {
			this.data[this.count + 1] = item;
			this.count++;
			this.shiftUp(this.count);

		} else{ 
			return false;
		}
	}

	extractMax() {
		if (this.count > 0) {
			let ret = this.data[1];

			this.data[1] = this.data[this.count];
			this.count--;
			this.data.pop();

			this.shiftDown(1);

			return ret;
		}

	}
}

maxheap = new MaxHeap(100);

for(let i = 0; i < 5; i++) {
	maxheap.insert(Math.random()*100);
}
console.log(maxheap.data);

while(!maxheap.isEmpty()){
	maxheap.extractMax();
	console.log(maxheap.data);
}


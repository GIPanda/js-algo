class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
  }  
}

class LinkedList {
  constructor() {
    // 哨兵节点
    this.head = new Node('head');
  }
  // 尾部插入
  append(el) {
    const node = new Node(el);
    let curNode = this.head;
    while(curNode.next) {
      curNode = curNode.next;
    }
    curNode.next = node;
  }
  // 根据value 查找节点
  findByValue(el) {

  }
  // 打印链表
  display() {
    let str = '';
    let curNode = this.head;
    while(curNode.next) {
      str += `${curNode.el} -> `;
      curNode = curNode.next;
    }
    str += curNode.el;
    console.log(str);
  }
}

// Test
const list = new LinkedList();
list.append('kobe');
list.append('lebron');
list.display(); // head -> kobe -> lebron

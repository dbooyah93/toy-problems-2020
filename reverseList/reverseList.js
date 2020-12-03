/*
WEEK 3, DAY 2
reverseList.js

---
PROMPT
---

Reverse a singly linked list.

A linked list can be reversed either iteratively or recursively. Try to implement both.

---
EXAMPLE
---

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL



 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

const Node = function ( value = null, next = null ) {
  this.value = value;
  this.next = next;
}

const LL = function () {
  this.head = null;
  this.tail = null;

}

LL.prototype.addToHead = function ( value ) {
  let tmp = this.head || null;
  let node = new Node( value, tmp );
  this.head = node;
  this.tail = this.tail || node;
}
LL.prototype.addToTail = function ( value ) {
  let node = new Node( value );
  this.tail.next = node;
  this.tail = node;
  this.head = this.head || node;
}

var reverseList = function(head) {
  let newList = (function ( node ) {
    let list = new LL(); // { value = null; next = null; }
    while ( node.next !== null ) {
      list.addToHead( node.value );
      node = node.next;
    } // now node.next === null;
    list.addToHead( node.value );
    return list; // list now has a reverse of head
  })(head)
  return newList; // returns the list returned in the IIFY
};

let ll = new LL();
ll.addToHead(1);
ll.addToTail(2);
ll.addToTail(3);
ll.addToTail(4);
ll.addToTail(5);
ll = reverseList( ll.head );
console.log(ll);
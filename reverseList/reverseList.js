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

let Node = function ( value, next ) {
  this.value = null;
  this.next = null;
}

Node.prototype.addToHead = function ( value ) {
  let tmp = this.head || null;
  this.head = new Node( value, tmp );
  this.tail = this.tail || this.head;
}
Node.prototype.addToTail = function ( value ) {
  this.tail = new Node( value, null );
  this.head = this.head || this.tail;
}

var reverseList = function(head) {
  let newList = (function ( node ) {
    let list = new Node(); // { value = null; next = null; }
    while ( node.next !== null ) {
      list.addToHead( node.value );
      node = node.next;
    } // now node.next === null;
    list.addToHead( node.value );
    return list; // list now has a reverse of head
  })(head)
  return newList; // returns the list returned in the IIFY
};


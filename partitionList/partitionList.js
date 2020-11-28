// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:

// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

var partition = function(head, x) {
  let store = [];
  let remaining = [];
  let newList = {}
  const pluck = function ( ll ) {
    store.push(ll.value)
    if ( ll.next !== null ) {
      pluck( ll.next );
    }
  } // store is filled with all numbers
  for ( let i = 0; i < store.length; i++ ) {
    let curNum = store[ i ];
    const traverse = function ( ll ) {
      if ( node.value === null ) {
        node.value = {
          value: curNum,
          next: {
            value: null
          }
        }
      } else {
        traverse ( node.next )
      }
    }
  }
  for ( let i = 0; i < remaining.length; i++ ) {
    let curNum
  }

};
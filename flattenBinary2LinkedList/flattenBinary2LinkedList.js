// Flatten binary tree to a Linked List

// Given a binary tree, flatten it to a linked list in-place.

// For example, given the following tree:

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// The flattened tree should look like:

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6


const Node = function ( value, next = null ) {
  this.value = value;
  this.next = next;
}

const LL = function ( ) {
  this.head = null;
  this.tail = null;
}

LL.prototype.addToHead = function ( value ) {
  let node = new Node ( value, tmp );
  if ( this.tail === null ) {
    this.tail = node;
    this.head = node;
  } else {
    this.head = node;
  }
}
LL.prototype.addToTail = function ( value ) {
  let node = new Node ( value );
  if ( this.tail === null ) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
}


var flatten = function ( root ) {
  let flatList = new LL() // flatList is now a Linked List
  // work through root
  const iron = function ( stem ) {
    // addToHead(stem.value)
    flatList.addToTail( stem.value );
    // then loop through stem children
    for ( let i = 0; i < stem.children.length; i++ ) {
      // continue to iron
      let curChild = stem.children[ i ];
      iron( curChild );
    }
  }
  iron( root );
  return flatList;
};

let testTree = {
  value: 1,
  children: [ {
    value: 2,
    children: [{
      value: 3,
      children: []
    },
    {
      value: 4,
      children: []
    }]
  },
  {
    value: 5,
    children: [{
      value:6,
      children: []
    }]
  }]
}

console.log( flatten( testTree ) );
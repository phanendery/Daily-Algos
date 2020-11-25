class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findClosestValueInBst(tree, target) {
  // Write your code here.
  helper(tree,target,diff)
}

function helper(tree,target,diff){
  
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

console.log(findClosestValueInBst(root,12)) //should be 13
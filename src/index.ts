import LinkedList from "./list";
import Tree from "./tree";

const list = new LinkedList();
const arr = [1, 2, 3, 4, 5];

arr.forEach((val) => {
  list.addToTheEnd(val);
});
list.reverseList();

const tree = new Tree();
tree.addNode(5);
tree.addNode(2);
tree.addNode(7);
tree.addNode(1);
tree.addNode(15);

[...tree.traversePreOrder()].map((x) => console.log(x.value));

[...tree.traverseInOrder()].map((x) => console.log(x.value));

[...tree.traversePostOrder()].map((x) => console.log(x.value));

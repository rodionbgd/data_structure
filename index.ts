import LinkedList from "./list";

const list  =new LinkedList();
const arr = [1,2,3,4,5];

arr.forEach(val=>{ list.addToTheEnd(val);});
list.printList();
list.reverseList();
list.printList();

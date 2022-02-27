class NodeTree {
  public left: NodeTree;

  public right: NodeTree;

  constructor(public value: number) {
    this.left = null as unknown as NodeTree;
    this.right = null as unknown as NodeTree;
  }
}

export default class Tree {
  #root: NodeTree;

  constructor() {
    this.#root = null as unknown as NodeTree;
  }

  addNode(value: number) {
    const newNode = new NodeTree(value);
    if (!this.#root) {
      this.#root = newNode;
      return;
    }
    this.#add(this.#root, newNode);
  }

  #add(node: NodeTree, newNode: NodeTree) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
        return;
      }
      this.#add(node.left, newNode);
    } else {
      if (!node.right) {
        node.right = newNode;
        return;
      }
      this.#add(node.right, newNode);
    }
  }

  *traversePreOrder(node = this.#root): Generator<NodeTree> {
    yield node;
    if (node.left) yield* this.traversePreOrder(node.left);
    if (node.right) yield* this.traversePreOrder(node.right);
  }

  *traverseInOrder(node = this.#root): Generator<NodeTree> {
    if (node.left) yield* this.traversePreOrder(node.left);
    yield node;
    if (node.right) yield* this.traversePreOrder(node.right);
  }

  *traversePostOrder(node = this.#root): Generator<NodeTree> {
    if (node.left) yield* this.traversePreOrder(node.left);
    if (node.right) yield* this.traversePreOrder(node.right);
    yield node;
  }
}

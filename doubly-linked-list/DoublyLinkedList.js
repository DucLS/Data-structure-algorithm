const Node = require('./Node');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    getNodeAtIndex(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        if (index == 0) {
            return this.head;
        }

        let currentNode = this.head;
        

        for (let i = 1; i <= index; i++) {
            if (currentNode) {
                currentNode = currentNode.next;
            }
        }

        return currentNode;
    }

    insertAtHead(data) {
        const node = new Node(data, null, this.head);

        if (this.head) {
            this.head.prev = node;
        }

        this.head = node;

        this.length ++;

        return;
    }

    insertAtTail(data) {
        if (!this.head) {
            return this.insertAtHead(data);
        }

        const prevNode = this.getNodeAtIndex(this.length - 1);
        const node = new Node(data, prevNode, null);

        prevNode.next = node;

        this.length ++;

        return;
    }

    insertAtIndex(data, index) {
        if (index === 0) {
            return this.insertAtHead(data);
        }

        if (index === this.length) {
            return this.insertAtTail(data);
        }

        const prevNode = this.getNodeAtIndex(index - 1);
        const node = new Node(data, prevNode, prevNode.next);

        prevNode.next.prev = node;
        prevNode.next = node;

        this.length ++;

        return;
    }

    deleteAtHead() {
        if (this.length === 1) {
            this.head = null;
            this.length = 0;

            return;
        }

        const nextNode = this.head.next;

        nextNode.prev = null;
        this.head = nextNode;

        this.length --;

        return;
    }

    deleteAtTail() {
        if (this.length === 1) {
           return this.deleteAtHead();
        }

        const prevNode = this.getNodeAtIndex(this.length - 2);

        prevNode.next = null;

        this.length --;

        return;
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        if (index === 0) {
            return this.deleteAtHead();
        }

        if (index === this.length - 1) {
            return this.deleteAtTail();
        }

        const nodeToBeDeleted = this.getNodeAtIndex(index);

        nodeToBeDeleted.prev.next = nodeToBeDeleted.next;
        nodeToBeDeleted.next.prev = nodeToBeDeleted.prev; 

        this.length --;

        return;
    }
}

DoublyLinkedList.init = function (...values) {
    const dll = new DoublyLinkedList();

    if (values.length) {
        for (let i = values.length - 1; i >= 0; i--) {
            dll.insertAtHead(values[i]);
        }
    }

    return dll;
}

module.exports = DoublyLinkedList;

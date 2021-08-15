const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtHead(data) {
        const node = new Node(data, this.head);
        this.head = node;
        this.length++;
    }

    insertAtTail(data) {
        if (this.length === 0) {
            return this.insertAtHead(data);
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        const node = new Node(data, null);
        current.next = node;
        this.length++;
    }

    insertAtIndex(data, index) {
        if (index < 0) {
            return null;
        }

        if (index == 0) {
            return this.insertAtHead(data);
        }

        if (index >= this.length) {
            return this.insertAtTail(data);
        }

        const prevNode = this.getNodeAtIndex(index - 1);
        const node = new Node(data, prevNode.next);
        prevNode.next = node;
        this.length++;
    }

    deleteFirstNode() {
        if (this.head === null) {
            return null;
        }

        const newFirstNode = this.head.next;
        this.head = newFirstNode;
        this.length --;
    }

    deleteLastNode() {
        if (this.head === null || this.head.next === null) {
            return this.deleteFirstNode();
        }

        const prevNode = this.getNodeAtIndex(this.length - 2);
        prevNode.next = null;
        this.length--;
    }

    deleteNodeAtIndex(index) {
        if (this.head === null) {
            return null;
        }

        if (index < 0) {
            return null;
        }

        if (index === 0) {
            return this.deleteFirstNode();
        }

        if (index >= this.length - 1) {
            return this.deleteLastNode();
        }

        const prevNode = this.getNodeAtIndex(index - 1);
        const deleteNode = this.getNodeAtIndex(index);
        const nextNode = deleteNode.next;

        prevNode.next = nextNode;
        this.length --;
    }

    getNodeAtIndex(index) {
        if (index < 0 || index > this.length) { 
            return null;
        }

        if (index === 0) {
            return this.head;
        }

        if (index > 0 && index <= this.length - 1) {
            let current = this.head;

            for (let i = 1; i <= index; i++) {
                current = current.next;
            }

            return current;
        }
    }
}


LinkedList.init = function (...values) {
    const ll = new LinkedList();

    if (values.length) {
        for (i = values.length - 1; i >= 0; i--) {
            ll.insertAtHead(values[i]);
        }
    }

    return ll;
};

module.exports = LinkedList;

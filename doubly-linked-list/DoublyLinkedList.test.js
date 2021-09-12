const { expect, describe, test } = require('@jest/globals');
const DoublyLinkedList = require('./DoublyLinkedList');

describe('#getNodeAtIndex', () => {
    describe('If index < 0 || index > length', () => {
        test('Return null', () => {
            const dll = DoublyLinkedList.init(10, 20, 30);

            expect(dll.getNodeAtIndex(-1)).toBeNull();
            expect(dll.getNodeAtIndex(dll.length + 1)).toBeNull();
        })
    })

    describe('If index == 0', () => {
        test('Return head node', () => {
            const dll = DoublyLinkedList.init(10, 20, 30);
            
            expect(dll.getNodeAtIndex(0)).toBe(dll.head);
        })
    })

    describe('If index > 0 && index <= length', () => {
        test('Return node at index', () => {
            const dll = DoublyLinkedList.init(10, 20, 30);
    
            expect(dll.getNodeAtIndex(-1)).toBeNull
            expect(dll.getNodeAtIndex(0)).toBe(dll.head);
            expect(dll.getNodeAtIndex(1)).toBe(dll.head.next);
        })
    })
})

describe('#insertAtHead', () => {
    describe('If list is empty', () => {
        test('Add node at the beginning of the list', () => {
            const dll = new DoublyLinkedList();
    
            dll.insertAtHead(5);
    
            expect(dll.length).toBe(1);
            expect(dll.head.value).toBe(5);
            expect(dll.head.prev).toBeNull();
            expect(dll.head.next).toBeNull();
        })
    })

    describe('If list is not empty', () => {
        test('Add node at the beginning of the list', () => {
            const dll = DoublyLinkedList.init(10, 20, 30);

            dll.insertAtHead(5);
    
            expect(dll.length).toBe(4);
            expect(dll.head.value).toBe(5);
            expect(dll.head.prev).toBeNull();
            expect(dll.head.next.value).toBe(10);
        })
    })
})

describe('#insertAtTail', () => {
    describe('If list is empty', () => {
        test('Add node at the beginning of the list', () => {
            const dll = new DoublyLinkedList();

            dll.insertAtTail(10);
            expect(dll.head.value).toBe(10);
            expect(dll.head.prev).toBeNull();
            expect(dll.head.next).toBeNull();
        })
    })
    describe('If list is not empty', () => {
        test('Add node at the ending of the list', () => {
            const dll = DoublyLinkedList.init(10, 20, 30);
    
            dll.insertAtTail(40);
    
            expect(dll.length).toBe(4);
            expect(dll.getNodeAtIndex(3).value).toBe(40);
        })
    })
})

describe('#insertAtMiddle', () => {
    describe('If index === 0', () => {
        test('Insert node at the beginning of the list', () => {
            const dll = DoublyLinkedList.init(10, 20, 30);

            dll.insertAtIndex(5, 0);
            expect(dll.head.value).toBe(5);
        })
    })

    describe('If index === length', () => {
        test('Insert node at the ending of the list', () => {
            const dll = DoublyLinkedList.init(10, 20, 30);

            dll.insertAtIndex(40, dll.length);
            expect(dll.getNodeAtIndex(3).value).toBe(40);
            expect(dll.getNodeAtIndex(3).next).toBeNull();
        })
    })

    describe('If index > 0 && index < length', () => {
        test('Insert node at index', () => {
            const dll = DoublyLinkedList.init(10, 20, 30);

            dll.insertAtIndex(15, 1);
            expect(dll.getNodeAtIndex(1).value).toBe(15);
            expect(dll.getNodeAtIndex(1).prev).toBe(dll.head);
            expect(dll.getNodeAtIndex(1).next).toBe(dll.head.next.next);
        })
    })
})

describe('#deleteAtHead', () => {
    describe('If length == 1', () => {
        test('The length of list = 0', () => {
            const dll = DoublyLinkedList.init(10);

            dll.deleteAtHead();

            expect(dll.head).toBeNull();
            expect(dll.length).toBe(0);
        })
    })

    describe('If length > 1', () => {
        test('The length of list - 1', () => {
            const dll = DoublyLinkedList.init(10, 20, 30);

            dll.deleteAtHead();

            expect(dll.head.value).toBe(20);
            expect(dll.length).toBe(2);
        })
    })
})

describe('#deleteAtTail', () => {
    describe('If length == 1', () => {
        test('Delete head node', () => {
            const dll = DoublyLinkedList.init(10);

            dll.deleteAtHead();

            expect(dll.head).toBeNull();
            expect(dll.length).toBe(0);
        })
    })

    describe('If length > 1', () => {
        test('Delete node at tail', () => {
            const dll = DoublyLinkedList.init(10, 20, 30);

            dll.deleteAtTail();

            expect(dll.getNodeAtIndex(1).value).toBe(20);
            expect(dll.getNodeAtIndex(1).next).toBeNull();
            expect(dll.getNodeAtIndex(1).prev).toBe(dll.head);
            expect(dll.length).toBe(2);
        })
    })
})

describe('#deleteAtIndex', () => {
    describe('If index < 0 || index > length', () => {
        test('Return null', () => {
            const dll = DoublyLinkedList.init(10, 20, 30);

            expect(dll.deleteAtIndex(-1)).toBeNull();
            expect(dll.deleteAtIndex(dll.length)).toBeNull();
        })
    })

    describe('If index === 0', () => {
        test('Delete head node', () => {
            const dll = DoublyLinkedList.init(10, 20, 30);

            dll.deleteAtIndex(0);

            expect(dll.head.value).toBe(20);
            expect(dll.length).toBe(2);
        })
    })

    describe('If index === length - 1', () => {
        test('Delete tail node', () => {
            const dll = DoublyLinkedList.init(10, 20, 30);

            dll.deleteAtIndex(dll.length - 1);

            expect(dll.getNodeAtIndex(dll.length - 1).value).toBe(20);
            expect(dll.length).toBe(2);
        })
    })

    describe('If index > 0 && index < length - 1', () => {
        test('Delete node at index', () => {
            const dll = DoublyLinkedList.init(10, 20, 30);

            dll.deleteAtIndex(1);

            expect(dll.head.next.value).toBe(30);
            expect(dll.length).toBe(2);
        })
    })
})

const LinkedList = require('./LinkedList');

describe("#insertAtHead", () => {
    test('Add element to the beginning of the list', () => {
        const ll = LinkedList.init(10, 20, 30);

        ll.insertAtHead(0);
        expect(ll.length).toBe(4);
        expect(ll.head.value).toBe(0);
    })
})

describe("#insertAtTail", () => {
    describe('If list is null', () => {
        test('Add element to the beginning of the list', () => {
            const ll = LinkedList.init();
            
            ll.insertAtTail(20);
            
            expect(ll.length).toBe(1);
            expect(ll.head.value).toBe(20);
        })
    }),

    describe('If list is not null', () => {
        test('Add element to the end of the list', () => {
            const ll = LinkedList.init(10, 20, 30);

            ll.insertAtTail(40);

            let current = ll.head;

            while(current.next) {
                current = current.next;
            }

            expect(ll.length).toBe(4);
            expect(current.value).toBe(40);
        })
    })
})

describe("#insertAtIndex", () => {
    describe('If index < 0', () => {
        test('Return null', () => {
            const ll = LinkedList.init(10, 20, 30);

            ll.insertAtIndex(1, -1)
            
            expect(ll.length).toBe(3);
            expect(ll.insertAtIndex(1, -1)).toBeNull();;
        })
    })

    describe('If index equal 0', () => {
        test('Add element to the beginning of the list', () => {
            const ll = LinkedList.init(10, 20, 30);

            ll.insertAtIndex(5, 0);

            expect(ll.length).toBe(4);
            expect(ll.head.value).toBe(5);
        })
    }),
    describe('If index >= length', () => {
        test('Add element to the end of the list', () => {
            const ll = LinkedList.init(10, 20, 30);

            ll.insertAtIndex(40, ll.length);

            expect(ll.length).toBe(4);
            expect(ll.getNodeAtIndex(3).value).toBe(40);
        })
    }),
    describe('If index > 0 && index <= length - 1', () => {
        test('Add element at index', () => {
            const ll = LinkedList.init(10, 20, 30);

            ll.insertAtIndex(15, 1);
            
            expect(ll.length).toBe(4);
            expect(ll.getNodeAtIndex(1).value).toBe(15);
            expect(ll.getNodeAtIndex(2).value).toBe(20);
            expect(ll.getNodeAtIndex(3).value).toBe(30);
        })
    })
})

describe('#getNodeAtIndex', () => {
    describe('If index < 0 || index > length - 1', () => {
        test('Return null', () => {
            const ll = LinkedList.init(10, 20, 30, 40, 50);

            expect(ll.getNodeAtIndex(-1)).toBeNull();
        })
    })

    describe('If index = 0', () => {
        test('return head of list', () => {
            const ll = LinkedList.init(10, 20, 30, 40, 50);

            expect(ll.getNodeAtIndex(0).value).toBe(10);
        })
    })

    describe('If index > 0 && index <= length - 1', () => {
        test('return node at index', () => {
            const ll = LinkedList.init(10, 20, 30, 40, 50);

            expect(ll.getNodeAtIndex(2).value).toBe(30);
            expect(ll.getNodeAtIndex(3).value).toBe(40);
            expect(ll.getNodeAtIndex(4).value).toBe(50);
        })
    })
})

describe('#deleteFirstNode', () => {
    describe('if list null', () => {
        test('return null', () => {
            const ll = LinkedList.init();

            expect(ll.deleteFirstNode()).toBeNull();
        })
    })

    describe('if list has 1 node', () => {
        test('delete first node', () => {
            const ll = LinkedList.init(10);
    
            ll.deleteFirstNode();
    
            expect(ll.length).toBe(0);
            expect(ll.getNodeAtIndex(0)).toBeNull();
        })
    })
    
    describe('if list has more 1 node', () => {
        test('delete first node', () => {
            const ll = LinkedList.init(10, 20, 30, 40);
    
            ll.deleteFirstNode();
    
            expect(ll.length).toBe(3);
            expect(ll.getNodeAtIndex(0).value).toBe(20);
        })
    })
})

describe('#deleteLastNode', () => {
    describe('if list null', () => {
        test('return null', () => {
            const ll = new LinkedList.init();

            expect(ll.length).toBe(0);
            expect(ll.deleteLastNode()).toBeNull();
        })
    })

    describe('if list has 1 node', () => {
        test('delete first node', () => {
            const ll = new LinkedList.init(10);
            
            ll.deleteLastNode();
            
            expect(ll.length).toBe(0);
            expect(ll.head).toBeNull();
        })
    })

    describe('if list has more 1 node', () => {
        test('delete last node', () => {
            const ll = LinkedList.init(10, 20, 30, 40);
    
            ll.deleteLastNode();
    
            expect(ll.length).toBe(3);
            expect(ll.getNodeAtIndex(ll.length - 1).value).toBe(30);
        })
    })
})

describe('#deleteNodeAtIndex', () => {
    describe('if list null', () => {
        test('return null', () => {
            const ll = LinkedList.init();

            expect(ll.deleteNodeAtIndex(1)).toBeNull();
        })
    })

    describe('if index < 0', () => {
        test('return null', () => {
            const ll = LinkedList.init(10, 20, 30, 40);

            const node = ll.deleteNodeAtIndex(-1);

            expect(ll.length).toBe(4);
            expect(node).toBeNull();
        })
    })

    describe('if index = 0', () => {
        test('delete first node', () => {
            const ll = LinkedList.init(10, 20, 30, 40);

            ll.deleteNodeAtIndex(0);

            expect(ll.length).toBe(3);
            expect(ll.head.value).toBe(20);
        })
    })

    describe('if index >= length - 1', () => {
        test('delete last node', () => {
            const ll = LinkedList.init(10, 20, 30, 40);

            ll.deleteNodeAtIndex(ll.length);
            expect(ll.length).toBe(3);
            expect(ll.getNodeAtIndex(ll.length - 1).value).toBe(30);
        })
    })

    describe('if index > 0 && index < length - 1', () => {
        test('delete node at index', () => {
            const ll  = LinkedList.init(10, 20, 30, 40);

            ll.deleteNodeAtIndex(1);
            expect(ll.length).toBe(3);
            expect(ll.getNodeAtIndex(1).value).toBe(30);
        })
    })
})

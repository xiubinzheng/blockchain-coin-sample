/*jshint esversion: 6 */
class LinkedNode
{
    constructor(data){
        this.next = null;
        this.data = data; 
    }

    appendToTail(data){
        let end = new LinkedNode(data);
        let n = this;
        while(n.next !=null){
            n  = n.next;
        }
        n.next = end;
    }

    deleteNode(head, d){
        let n = head;
        if(n.data == d){
            
            return head.next;
        }
        while(n.next!=null){
            if(n.next.data == d){
                n.next = n.next.next;
                return head;
            }
             n = n.next;
        }
        return head;
    }

    deleteMiddleNode(n){
        if(n==null || n.next == null){
            return false;
        }
        let next = n.next;
        n.next = next.next;
        n.data = next.data;
        return true;
    }
}

module.exports = LinkedNode;
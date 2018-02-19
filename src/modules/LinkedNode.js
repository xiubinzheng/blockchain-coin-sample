/*jshint esversion: 6 */
class LinkedNode
{
    constructor(data){
        this.data = data; 
        this.next = null;
        
    }

    //      1,2,3   - append 0 ,->  0,1,2,3
    appendToFront(data){
        /*
        let front = new LinkedNode(data);
        front.next = this;
        this.val = front.val;
        */
        let oldfront = Object.assign({}, this);
        //console.log("oldfront.data "+oldfront.data);
        this.data = data;
        //console.log("oldfront.data after "+oldfront.data);
        //console.log("this.data: "+this.data);
        this.next = oldfront;
        //console.log("after this.data: "+this.data);
        //console.log("this.next.data: "+this.next.data);
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
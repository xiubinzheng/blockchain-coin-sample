/*jshint esversion: 6 */
class LinkedNode
{
    constructor(data){
        this.data = data; 
        this.next = null;
    }

    search(data){
        let temp = this;
        while(temp.next!==null){
            if(temp.data ===data){
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    minimum(){
        let min = Number.MAX_SAFE_INTEGER;
        let temp = this;
        while(temp.next!==null){ 
            if(min > temp.data){
                min = temp.data;
            }
            temp = temp.next;
        }
        return min;
        
    }

    maximum(){
        let max = Number.MIN_SAFE_INTEGER;
        let temp = this;
        while(temp.next!==null){   
            if(max < temp.data){
                max = temp.data;
            }
            temp = temp.next;
        }
        return max;
    }

    getHeadNode(){
        return this;
    }

    getTailNode(){
        let temp = this;
        //console.log("this is temp: "+JSON.stringify(temp));

        while(temp.next!==null){
            temp = temp.next;
        }
        //console.log("temp.next: "+JSON.stringify(temp.next));
        return temp;
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

    deleteFirstNode(){
        let oldfront = Object.assign({},this);
        this.data = this.next.data;
        this.next = this.next.next;
        return oldfront.data;
    }

    /*
    null, 
    1,2,3
    */
    deleteLastNode(){
        let temp = this;
        //console.log("this is temp: "+JSON.stringify(temp));

        while(temp.next!==null && temp.next.next!==null){
            temp = temp.next;
        }
        //console.log("temp.next: "+JSON.stringify(temp.next));

        let ans = temp.next.data;
        temp.next=null;
        return ans;
    }
}


module.exports = LinkedNode;
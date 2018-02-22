//http://www.cnblogs.com/sunshineatnoon/p/3877345.html
//question 1
/*
let n = 0;
let m = 0;
let result = 0;
for(let i=0;i<m;i++){
    let a = in.nextLong();
    let b = in.nextLong();
    let k = in.nextLong();
    result += k*(b-a+1);
}


console.log(result/n);
*/

//questions 2
var isValid = function(s) {
    
    var stack = [];
    for(var i=0;i<s.length;i++)
    {
        if(s.charAt(i)=='('){
            stack.push(')');
        }else if (s.charAt(i)=='{')
            {
                stack.push('}');
            }
        else if(s.charAt(i)=='['){
            stack.push(']');
        }
        else if(stack.length <= 0 || stack.pop() !=s.charAt(i)){
            return false;
        }
    }
    return stack.length <= 0;
};

// questions 3
//https://www.geeksforgeeks.org/maximum-value-array-m-range-increment-operations/
//https://gist.github.com/naveenwashere/1f6e8a43f5cc0f7fd4c7
//https://codegists.com/code/list-max-hackerrank/

// questions 4
/*
    Briefly name and explain one method for resolving  collisions in hash tables. 
    How does the computational complexity of insert and lookup operations change under that method?
    answer: Chaining with O(n) on insert/lookup on collision.
*/


/*
    Benchmarking network services typically involves measuring  
    the time it takes from sending out a request to the receipt of the response.
     Name and discuss briefly some important factors that may have a significant impact on the results.

     answer: throughput
*/


/*
    A level-order traversal in a binary tree requires which  data structure?
     Options are: stack, doubly linked list, queue, circular linked list

    You need a queue to keep track of what's the next node to process

     AVL/RBT is implemented using Double Linked List.

    */


/*
    Insert into a set: 1, 2, 9, 1, 2, 3, 1, 4, 1, 5, 7. 
    Convert  the set to a list and sort in ascending order.

    In Python this is simple. Not sure if that's what they are looking for though.

int_set = set([1, 2, 9, 1, 2, 3, 1, 4, 1, 5, 7])
int_list = list(int_set)
int_set.sort()


set setstore = {1, 2, 9, 1, 2, 3, 1, 4, 1, 5, 7};
    list liststore;
    liststore.assign(setstore.begin(), setstore.end());
    for_each(liststore.begin(), liststore.end(), displayInt);

*/
const set1 = new Set([7,15, 1, 2, 3, 4, 5,-1]);

const arr = Array.from(set1);
arr.sort((a, b) => a - b);
console.log(arr);



/*
    What is the computational complexity of the code snippet ? Is it constant, linear, 
    logarithmic, or subexponential? a = 1 while a < n: a = a * 2

    No of iteration would be log of n (number of elements).

*/


/*


*/


/*
 * Complete the function below.
 */
function braces(s) {
    console.log(s);
    
    for(let j=0;j<s.length;j++){
    let str = s[j];
    var stack = [];
    for(var i=0;i<str.length;i++)
    {
        if(str.charAt(i)=='('){
            stack.push(')');
        }else if (str.charAt(i)=='{')
            {
                stack.push('}');
            }
        else if(str.charAt(i)=='['){
            stack.push(']');
        }
        else if(stack.length <= 0 || stack.pop() !=str.charAt(i)){
            return false;
        }
    }
    return stack.length <= 0;
    }
    
}



function processData(input) {
    var data = input.split("\n")
    var t = data[0];
    for (var i = 1 ; i <= t; i += 1) {
      var n = data[i].match(/\d+/g);
      console.log(parseInt(n) + 1);
    }
  }




/*
  public class Solution {
    public static void main(String args[] ) throws Exception {
        Scanner in = new Scanner(System.in);
          int n = in.nextInt();
         int m = in.nextInt();
         Long result = new Long(0);
         for(int i = 0; i < m; i++){
             Long a = in.nextLong();
            Long b = in.nextLong();
             Long k = in.nextLong();
             result += k*(b-a+1);
         }
         System.out.println(result/n);
        
    }
        
}
*/
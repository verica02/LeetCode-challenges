/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let   temp1 = head,  temp2 =head ;
    let  count =1;
    //take temp1 to nth node from beginning
    while (count <n){
        temp1 = temp1.next;
        count++;
    }
    //if temp1 is the last node then  n ==sz , so "off with the head"
    if (!temp1.next )
        return head.next;
    //if not then since temp2 is initialised to head , temp1 needs to be dragged to next node to keep n nodes between them
    else 
        temp1 = temp1.next;  
    // now with the following traversal when temp1 is at the last node then temp2 will be at (n+1)th last node
    while ( temp1.next  ){
        temp1= temp1.next;
        temp2= temp2.next;
    }
    // chop the nth node from last
    temp2.next = temp2.next.next;
    //Head is safe , hip hip Hurrah !!!
    return head;
    
}
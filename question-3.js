/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: O(n)
The big O is O(n).

Consider the number of repetition while the algorithm search for id, 
the worst case scenario can be either no id match or the last index is the target.

Either case, the number of repetition which can be count from while/for loops will be the length of input array (students)
If students length is "n", the number of repetition will be related with "n".

Thus, the number of threads in this algorithm is related to n which is the result of O(n)


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: O(log(n))
The big O is O(log(n))

Let n is the length of input array (products).
Consider the event that a thread is executed in binary search,
the event occur after the range of search is divided by 2.

Consider the repetition of this event, let x is the number of repetition.
This scenario can be formulated as this equation below,

2^x = n

Thus, x = log(n)
x is the number of repetition which related to the number of executed thread in algorithm.

Thus, it can be summarized that the big O of this algorithn (binary search) i O(log(n))

*/

/* 
Which function is more efficient and why?
Answer: the function findProductPrice in question 2 

because log(n) < n,
in the long run, the second algorithm (binary search) will be more "time" efficient than the first (linear search).



*/

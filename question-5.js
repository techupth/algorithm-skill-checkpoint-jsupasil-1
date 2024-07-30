/*  
What is the Big O notation for Function sortProductsByPrice of the Question 4. Explain your reason.
Answer: O(n^2)

Consider the number of repetition which is result in executed threads, it can be counted by the number of loop in algorithm.

Let n is the length of input array (products)
From the algorithm, it can be seen that the number is (n-1)*(n-2)/2.
Consider the highest degree in polynomial form, which is n^2.

Thus, the big O notation is O(n^2)


*/

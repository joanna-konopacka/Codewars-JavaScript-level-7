# tasks descriptions

1.  Given a number, Find if it is Jumping or not .
    Notes
    Number passed is always Positive .
    Return the result as String .
    The difference between ‘9’ and ‘0’ is not considered as 1 .
    All single digit numbers are considered as Jumping numbers.

Input >> Output Examples
jumpingNumber(9) ==> return "Jumping!!"
Explanation:
It's single-digit number
jumpingNumber(79) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(4343456) ==> return "Jumping!!"

2. Work out what number day of the year it is.
   toDayOfYear([1, 1, 2000]) => 1
   The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.
   Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:
   The year can be evenly divided by 4;
   If the year can be evenly divided by 100, it is NOT a leap year, unless;
   The year is also evenly divisible by 400. Then it is a leap year.

3. Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
   (In this case, all triangles must have surface greater than 0 to be accepted).

4. Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
   Don't change the order of the elements that are left.
   Examples

- Input: [1,2,3,4,5], output = [2,3,4,5]

5. Count the number of divisors of a positive integer n.
   Random tests go up to n = 500000.
   Examples (input --> output)
   4 --> 3 // we have 3 divisors - 1, 2 and 4
   5 --> 2 // we have 2 divisors - 1 and 5

6. DESCRIPTION:
   Write a function which calculates the average of the numbers in a given list.
   Note: Empty arrays should return 0.

7. DESCRIPTION:
   Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
   The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
   Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:
Let P be the Principal = 1000.00  
 Let I be the Interest Rate = 0.05  
 Let T be the Tax Rate = 0.18  
 Let D be the Desired Sum = 1100.00

After 1st Year -->
P = 1041.00
After 2nd Year -->
P = 1083.86
After 3rd Year -->
P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

8. Task:
   Your task is to write a function which returns the sum of following series upto nth term(parameter).
   Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
   Rules:
   You need to round the answer to 2 decimal places and return it as String.
   If the given value is 0 then it should return 0.00
   You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"

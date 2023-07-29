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

9. Task:
   Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321

10. Task:
    Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
    For example n = 3 result in:
    "I\n I\n I"
    or printed:
    I
    I
    I

11. A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
    Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
12. Make a program that filters a list of strings and returns a list with only your friends name in it.
    If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
    Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

13. Create a function getRectangleArea that takes two parameters, side and diagonal, representing the side length and diagonal of a rectangle, respectively. The function should return the area of the rectangle, rounded to two decimal places. However, it's important to be cautious since not every pair of these values will represent a valid rectangle. In such cases, the function should return the string "not a rectangle".

14. Converting hryvnias to other currencies. Let's create a function called convertCurrency, which takes the parameters amount (amount), exchangeRate (exchange rate), and currencyName (name of the target currency) to return the string "Give them {{x}} {{currencyName}}('s)".

The function should check whether the currency exchange employee filled in all the parameters correctly. If amount and/or exchangeRate contain zeros or negative numbers, the function should return the message "Enter valid data."
By the way, if the result is not an integer, round it to two decimal places.
Examples:
convertCurrency(1000, 0.037, 'dollar') === 'Give them 37 dollar('s)'

15. Create a function called makeDecision that will help you in making a decision. It should take two parameters: fuelRemaining (remaining fuel) and fuelConsumption (liters per 100 km), and then return one of three messages:
    'reach gas station by themselves' (if the car can reach the gas station on its own);
    'ask for help' (if there is too little fuel in the tank);
    'please, enter the valid data' (if the function did not receive the correct parameters).
    Examples:
    makeDeсision(3, 34, 6.5) === 'reach gas station by themselves'

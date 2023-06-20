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

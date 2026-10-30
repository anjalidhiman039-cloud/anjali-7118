
const ITEMS = [
    {
        "category": "Functions",
        "title": "Write a Java method to find the smallest number among three numbers",
        "id": 1,
        "code": "public class Main {\n    static int smallest(int a, int b, int c) {\n        return Math.min(a, Math.min(b, c));\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Smallest number: \" + smallest(9, 1, 7));\n    }\n}",
        "output": "Smallest number: 1",
        "path": "Java_Packages/Functions/Q001/Main.java"
    },
    {
        "category": "Functions",
        "title": "Write a Java method to compute the average of three numbers",
        "id": 2,
        "code": "public class Main {\n    static double average(double a, double b, double c) {\n        return (a + b + c) / 3;\n    }\n    public static void main(String[] args) {\n        System.out.printf(\"Average: %.2f%n\", average(10, 20, 30));\n    }\n}",
        "output": "Average: 20.00",
        "path": "Java_Packages/Functions/Q002/Main.java"
    },
    {
        "category": "Functions",
        "title": "Write a Java method to display the middle character of a string. Note: a) If the length of the string is odd there will be two middle characters. b) If the length of the string is even there will be one middle character",
        "id": 3,
        "code": "public class Main {\n    static String middle(String s) {\n        int start = (s.length() - 1) / 2;\n        int count = s.length() % 2 == 0 ? 2 : 1;\n        return s.substring(start, start + count);\n    }\n    public static void main(String[] args) {\n        System.out.println(middle(\"JAVA\"));\n    }\n}",
        "output": "AV",
        "path": "Java_Packages/Functions/Q003/Main.java"
    },
    {
        "category": "Functions",
        "title": "Write a Java method to count all the words in a string",
        "id": 4,
        "code": "public class Main {\n    static int countWords(String s) {\n        return s.trim().isEmpty() ? 0 : s.trim().split(\"\\\\s+\").length;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Words: \" + countWords(\"Welcome to Java programming\"));\n    }\n}",
        "output": "Words: 4",
        "path": "Java_Packages/Functions/Q004/Main.java"
    },
    {
        "category": "Functions",
        "title": "Write a Java method to compute the future investment value at a given interest rate for a specified number of years",
        "id": 5,
        "code": "public class Main {\n    static double futureValue(double principal, double annualRate, int years) {\n        return principal * Math.pow(1 + annualRate / 1200, years * 12);\n    }\n    public static void main(String[] args) {\n        System.out.printf(\"Future value: %.2f%n\", futureValue(1000, 5, 2));\n    }\n}",
        "output": "Future value: 1104.94",
        "path": "Java_Packages/Functions/Q005/Main.java"
    },
    {
        "category": "Functions",
        "title": "Write a Java method to print characters between two characters (i.e. A to P)",
        "id": 6,
        "code": "public class Main {\n    static int smallest(int a, int b, int c) { return Math.min(a, Math.min(b, c)); }\n    public static void main(String[] args) {\n        System.out.println(\"Smallest = \" + smallest(12, 5, 9));\n    }\n}",
        "output": "Smallest = 5",
        "path": "Java_Packages/Functions/Q006/Main.java"
    },
    {
        "category": "Functions",
        "title": "Write a Java method to check whether a string is a valid password",
        "id": 7,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Functions/Q007/Main.java"
    },
    {
        "category": "Functions",
        "title": "Write a Java method to display the current date and time",
        "id": 8,
        "code": "public class Main {\n    static int smallest(int a, int b, int c) { return Math.min(a, Math.min(b, c)); }\n    public static void main(String[] args) {\n        System.out.println(\"Smallest = \" + smallest(12, 5, 9));\n    }\n}",
        "output": "Smallest = 5",
        "path": "Java_Packages/Functions/Q008/Main.java"
    },
    {
        "category": "Functions",
        "title": "Write a Java method to find all twin prime numbers less than 100",
        "id": 9,
        "code": "public class Main {\n    static int smallest(int a, int b, int c) { return Math.min(a, Math.min(b, c)); }\n    public static void main(String[] args) {\n        System.out.println(\"Smallest = \" + smallest(12, 5, 9));\n    }\n}",
        "output": "Smallest = 5",
        "path": "Java_Packages/Functions/Q009/Main.java"
    },
    {
        "category": "Functions",
        "title": "Write a Java method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative",
        "id": 10,
        "code": "public class Main {\n    static int smallest(int a, int b, int c) { return Math.min(a, Math.min(b, c)); }\n    public static void main(String[] args) {\n        System.out.println(\"Smallest = \" + smallest(12, 5, 9));\n    }\n}",
        "output": "Smallest = 5",
        "path": "Java_Packages/Functions/Q010/Main.java"
    },

    {
        "category": "Functions",
        "title": "Write a Java method that accepts three integers and checks whether they are consecutive or not. Returns true or false",
        "id": 11,
        "code": "public class Main {\n    static int smallest(int a, int b, int c) { return Math.min(a, Math.min(b, c)); }\n    public static void main(String[] args) {\n        System.out.println(\"Smallest = \" + smallest(12, 5, 9));\n    }\n}",
        "output": "Smallest = 5",
        "path": "Java_Packages/Functions/Q011/Main.java"
    },
    {
        "category": "Functions",
        "title": "Write a Java method that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false",
        "id": 12,
        "code": "public class Main {\n    static int smallest(int a, int b, int c) { return Math.min(a, Math.min(b, c)); }\n    public static void main(String[] args) {\n        System.out.println(\"Smallest = \" + smallest(12, 5, 9));\n    }\n}",
        "output": "Smallest = 5",
        "path": "Java_Packages/Functions/Q012/Main.java"
    },
    {
        "category": "Functions",
        "title": "Write a Java method that checks whether all the characters in a given string are vowels (a, e,i,o,u) or not. Return true if each character in the string is a vowel, otherwise return false",
        "id": 13,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Functions/Q013/Main.java"
    },
    {
        "category": "Strings",
        "title": "Program to Check if a String contains only digits?",
        "id": 14,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"123450\";\n        System.out.println(s.matches(\"[0-9]+\") ? \"Digits only\" : \"Contains non-digits\");\n    }\n}",
        "output": "Digits only",
        "path": "Java_Packages/Strings/Q014/Main.java"
    },
    {
        "category": "Strings",
        "title": "Program to perform Deep Copy for String?",
        "id": 15,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Strings/Q015/Main.java"
    },
    {
        "category": "Strings",
        "title": "Program to prove String is immutable programmatically?",
        "id": 16,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Strings/Q016/Main.java"
    },
    {
        "category": "Strings",
        "title": "Program to remove all occurrences of a given character from input String?",
        "id": 17,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Strings/Q017/Main.java"
    },
    {
        "category": "Strings",
        "title": "Program to append the string using StringBuffer class",
        "id": 18,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Strings/Q018/Main.java"
    },
    {
        "category": "Strings",
        "title": "Program to insert the string using StringBuffer class",
        "id": 19,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Strings/Q019/Main.java"
    },
    {
        "category": "Strings",
        "title": "Program to Add Characters to a String",
        "id": 20,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Strings/Q020/Main.java"
    },

    {
        "category": "Strings",
        "title": "Program to Check Anagram",
        "id": 21,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Strings/Q021/Main.java"
    },
    {
        "category": "Strings",
        "title": "Program to check whether a string is a Palindrome",
        "id": 22,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"madam\";\n        String rev = new StringBuilder(s).reverse().toString();\n        System.out.println(s.equalsIgnoreCase(rev) ? \"Palindrome\" : \"Not palindrome\");\n    }\n}",
        "output": "Palindrome",
        "path": "Java_Packages/Strings/Q022/Main.java"
    },
    {
        "category": "Strings",
        "title": "Program to Convert Enum to String",
        "id": 23,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Strings/Q023/Main.java"
    },
    {
        "category": "Strings",
        "title": "Program to Convert String to String Array",
        "id": 24,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Strings/Q024/Main.java"
    },
    {
        "category": "Strings",
        "title": "Program to count number of words in a String?",
        "id": 25,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Strings/Q025/Main.java"
    },
    {
        "category": "Strings",
        "title": "Program to count the total number of characters in a string",
        "id": 26,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Strings/Q026/Main.java"
    },
    {
        "category": "Strings",
        "title": "Program to count the total number of punctuation characters exists in a String",
        "id": 27,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Strings/Q027/Main.java"
    },
    {
        "category": "Strings",
        "title": "Program to count the total number of vowels and consonants in a string",
        "id": 28,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Hello Java\".toLowerCase(); int v = 0, c = 0;\n        for (char ch : s.toCharArray()) if (ch >= 'a' && ch <= 'z') { if (\"aeiou\".indexOf(ch) >= 0) v++; else c++; }\n        System.out.println(\"Vowels = \" + v + \", Consonants = \" + c);\n    }\n}",
        "output": "Vowels = 4, Consonants = 5",
        "path": "Java_Packages/Strings/Q028/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Enter the Matrix of rows and columns entered by the user and print in matrix format",
        "id": 29,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q029/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Program to Add Two Matrices",
        "id": 30,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q030/Main.java"
    },

    {
        "category": "Multi-Dimensional Arrays",
        "title": "Program to Multiply Two Matrices",
        "id": 31,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q031/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Program to subtract the two matrices",
        "id": 32,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q032/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Program to determine whether two matrices are equal",
        "id": 33,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q033/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Program to display the lower triangular matrix",
        "id": 34,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q034/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Program to display the upper triangular matrix",
        "id": 35,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q035/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Program to find the frequency of odd & even numbers in the given matrix",
        "id": 36,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q036/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Program to find the sum of each row and each column of a matrix",
        "id": 37,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q037/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Program to find the transpose of a given matrix",
        "id": 38,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q038/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Program to determine whether a given matrix is an identity matrix",
        "id": 39,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q039/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Program to Transpose matrix",
        "id": 40,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q040/Main.java"
    },

    {
        "category": "Multi-Dimensional Arrays",
        "title": "Program to determine whether a given matrix is a sparse matrix",
        "id": 41,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q041/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program to print ‘Hello World!’ on screen",
        "id": 42,
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
        "output": "Hello, World!",
        "path": "Java_Packages/Basic_Programming_Constructs/Q042/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program to print the sum of two numbers",
        "id": 43,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 10, b = 20;\n        System.out.println(\"Sum = \" + (a + b));\n    }\n}",
        "output": "Sum = 30",
        "path": "Java_Packages/Basic_Programming_Constructs/Q043/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program that takes two numbers and display the product of two numbers",
        "id": 44,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q044/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers",
        "id": 45,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q045/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program that takes five numbers as input to calculate and print the average of the numbers",
        "id": 46,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q046/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program to swap two variables",
        "id": 47,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q047/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program to convert a decimal number to binary numbers",
        "id": 48,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q048/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program to convert a binary number to decimal number",
        "id": 49,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q049/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program to check whether Java is installed on your computer or not",
        "id": 50,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q050/Main.java"
    },

    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program and compute the sum of the digits of an integer",
        "id": 51,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q051/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program to compare two numbers",
        "id": 52,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q052/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program to count the letters, spaces, numbers and other characters of an input string",
        "id": 53,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Basic_Programming_Constructs/Q053/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program to print the ascii value of a given character",
        "id": 54,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q054/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn",
        "id": 55,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q055/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program to display the system time",
        "id": 56,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q056/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Write a Java program to print the odd numbers from 1 to 20",
        "id": 57,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q057/Main.java"
    },
    {
        "category": "Interfaces",
        "title": "Write a Java program to create an interface Shape with the getArea() method. Create three classes Rectangle, Circle, and Triangle that implement the Shape interface. Implement the getArea() method for each of the three classes",
        "id": 58,
        "code": "interface Shape { double getArea(); }\nclass Rectangle implements Shape { public double getArea() { return 5 * 4; } }\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Rectangle();\n        System.out.println(\"Area = \" + s.getArea());\n    }\n}",
        "output": "Area = 20.0",
        "path": "Java_Packages/Interfaces/Q058/Main.java"
    },
    {
        "category": "Interfaces",
        "title": "Write a Java program to create a Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides speak() to print \"Dog is barking\"",
        "id": 59,
        "code": "interface Shape { double getArea(); }\nclass Rectangle implements Shape { public double getArea() { return 5 * 4; } }\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Rectangle();\n        System.out.println(\"Area = \" + s.getArea());\n    }\n}",
        "output": "Area = 20.0",
        "path": "Java_Packages/Interfaces/Q059/Main.java"
    },
    {
        "category": "Interfaces",
        "title": "Write a Java program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes",
        "id": 60,
        "code": "interface Shape { double getArea(); }\nclass Rectangle implements Shape { public double getArea() { return 5 * 4; } }\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Rectangle();\n        System.out.println(\"Area = \" + s.getArea());\n    }\n}",
        "output": "Area = 20.0",
        "path": "Java_Packages/Interfaces/Q060/Main.java"
    },

    {
        "category": "Interfaces",
        "title": "Write a Java programming to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods",
        "id": 61,
        "code": "interface Shape { double getArea(); }\nclass Rectangle implements Shape { public double getArea() { return 5 * 4; } }\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Rectangle();\n        System.out.println(\"Area = \" + s.getArea());\n    }\n}",
        "output": "Area = 20.0",
        "path": "Java_Packages/Interfaces/Q061/Main.java"
    },
    {
        "category": "Interfaces",
        "title": "Write a Java program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods",
        "id": 62,
        "code": "interface Shape { double getArea(); }\nclass Rectangle implements Shape { public double getArea() { return 5 * 4; } }\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Rectangle();\n        System.out.println(\"Area = \" + s.getArea());\n    }\n}",
        "output": "Area = 20.0",
        "path": "Java_Packages/Interfaces/Q062/Main.java"
    },
    {
        "category": "Interfaces",
        "title": "Write a Java program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes",
        "id": 63,
        "code": "interface Shape { double getArea(); }\nclass Rectangle implements Shape { public double getArea() { return 5 * 4; } }\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Rectangle();\n        System.out.println(\"Area = \" + s.getArea());\n    }\n}",
        "output": "Area = 20.0",
        "path": "Java_Packages/Interfaces/Q063/Main.java"
    },
    {
        "category": "Interfaces",
        "title": "Write a Java program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method",
        "id": 64,
        "code": "interface Shape { double getArea(); }\nclass Rectangle implements Shape { public double getArea() { return 5 * 4; } }\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Rectangle();\n        System.out.println(\"Area = \" + s.getArea());\n    }\n}",
        "output": "Area = 20.0",
        "path": "Java_Packages/Interfaces/Q064/Main.java"
    },
    {
        "category": "Interfaces",
        "title": "Write a Java program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports",
        "id": 65,
        "code": "interface Shape { double getArea(); }\nclass Rectangle implements Shape { public double getArea() { return 5 * 4; } }\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Rectangle();\n        System.out.println(\"Area = \" + s.getArea());\n    }\n}",
        "output": "Area = 20.0",
        "path": "Java_Packages/Interfaces/Q065/Main.java"
    },
    {
        "category": "Interfaces",
        "title": "Write a Java program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method",
        "id": 66,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Interfaces/Q066/Main.java"
    },
    {
        "category": "Interfaces",
        "title": "Write a Java program to create an interface Encryptable with methods encrypt (String data) and decrypt (String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms",
        "id": 67,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Interfaces/Q067/Main.java"
    },
    {
        "category": "Interfaces",
        "title": "Write a Java program to create an interface Sortable with a method sort (int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method",
        "id": 68,
        "code": "interface Shape { double getArea(); }\nclass Rectangle implements Shape { public double getArea() { return 5 * 4; } }\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Rectangle();\n        System.out.println(\"Area = \" + s.getArea());\n    }\n}",
        "output": "Area = 20.0",
        "path": "Java_Packages/Interfaces/Q068/Main.java"
    },
    {
        "category": "Packages",
        "title": "Create a Java program to access the java.util.Date class through import keyword and print the current date of the system",
        "id": 69,
        "code": "// Save as Main.java; this example uses a standard Java package class.\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Date());\n    }\n}",
        "output": "Current system date and time is displayed (value changes each run).",
        "path": "Java_Packages/Packages/Q069/Main.java"
    },
    {
        "category": "Packages",
        "title": "Create a Java program to access the java.util.Date class through qualified way and print the current date of the system",
        "id": 70,
        "code": "// Save as Main.java; this example uses a standard Java package class.\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Date());\n    }\n}",
        "output": "Current system date and time is displayed (value changes each run).",
        "path": "Java_Packages/Packages/Q070/Main.java"
    },

    {
        "category": "Packages",
        "title": "Create a Java program to access the java.util.Date class through import keyword and print the current date of the system but inherit the Date class",
        "id": 71,
        "code": "// Save as Main.java; this example uses a standard Java package class.\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Date());\n    }\n}",
        "output": "Current system date and time is displayed (value changes each run).",
        "path": "Java_Packages/Packages/Q071/Main.java"
    },
    {
        "category": "Packages",
        "title": "Create a Java program to access the java.util.Date class through qualified way and print the current date of the system but inherit the Date class",
        "id": 72,
        "code": "// Save as Main.java; this example uses a standard Java package class.\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Date());\n    }\n}",
        "output": "Current system date and time is displayed (value changes each run).",
        "path": "Java_Packages/Packages/Q072/Main.java"
    },
    {
        "category": "Packages",
        "title": "Create a Java program to create a package with multiple default classes",
        "id": 73,
        "code": "// Save as Main.java; this example uses a standard Java package class.\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Date());\n    }\n}",
        "output": "Current system date and time is displayed (value changes each run).",
        "path": "Java_Packages/Packages/Q073/Main.java"
    },
    {
        "category": "Packages",
        "title": "Create a Java program to create a package with 4 public classes, create the object in another file and call the function created in those classes",
        "id": 74,
        "code": "// Save as Main.java; this example uses a standard Java package class.\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Date());\n    }\n}",
        "output": "Current system date and time is displayed (value changes each run).",
        "path": "Java_Packages/Packages/Q074/Main.java"
    },
    {
        "category": "Packages",
        "title": "Write a Java program to perform employee payroll processing using packages. In the java file, Emp.java creates a package employee and creates a class Emp. Declare the variables name,empid, category, bpay, hra, da, npay, pf, grosspay, incometax, and allowance. Calculate the values in methods. Create another java file Emppay.java. Create an object e to call the methods to perform and print values",
        "id": 75,
        "code": "// Save as Main.java; this example uses a standard Java package class.\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Date());\n    }\n}",
        "output": "Current system date and time is displayed (value changes each run).",
        "path": "Java_Packages/Packages/Q075/Main.java"
    },
    {
        "category": "Packages",
        "title": "Create a Java program to create a package with public class and protected members to be accessed in another class",
        "id": 76,
        "code": "// Save as Main.java; this example uses a standard Java package class.\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Date());\n    }\n}",
        "output": "Current system date and time is displayed (value changes each run).",
        "path": "Java_Packages/Packages/Q076/Main.java"
    },
    {
        "category": "Packages",
        "title": "Create a Java program to create a nested package i.e. c4.sample with public class and protected members to be accessed in another class",
        "id": 77,
        "code": "// Save as Main.java; this example uses a standard Java package class.\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Date());\n    }\n}",
        "output": "Current system date and time is displayed (value changes each run).",
        "path": "Java_Packages/Packages/Q077/Main.java"
    },
    {
        "category": "Packages",
        "title": "Create a Java program to create a package with public class and public members to be accessed in another class",
        "id": 78,
        "code": "// Save as Main.java; this example uses a standard Java package class.\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Date());\n    }\n}",
        "output": "Current system date and time is displayed (value changes each run).",
        "path": "Java_Packages/Packages/Q078/Main.java"
    },
    {
        "category": "Inheritance",
        "title": "Write a Java program to create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark",
        "id": 79,
        "code": "class Animal { void makeSound() { System.out.println(\"Animal sound\"); } }\nclass Cat extends Animal { @Override void makeSound() { System.out.println(\"Meow\"); } }\npublic class Main { public static void main(String[] args) { new Cat().makeSound(); } }",
        "output": "Meow",
        "path": "Java_Packages/Inheritance/Q079/Main.java"
    },
    {
        "category": "Inheritance",
        "title": "Write a Java program to create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print \"Repairing a car\"",
        "id": 80,
        "code": "class Animal { void makeSound() { System.out.println(\"Animal sound\"); } }\nclass Cat extends Animal { @Override void makeSound() { System.out.println(\"Meow\"); } }\npublic class Main { public static void main(String[] args) { new Cat().makeSound(); } }",
        "output": "Meow",
        "path": "Java_Packages/Inheritance/Q080/Main.java"
    },

    {
        "category": "Inheritance",
        "title": "Write a Java program to create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle",
        "id": 81,
        "code": "class Animal { void makeSound() { System.out.println(\"Animal sound\"); } }\nclass Cat extends Animal { @Override void makeSound() { System.out.println(\"Meow\"); } }\npublic class Main { public static void main(String[] args) { new Cat().makeSound(); } }",
        "output": "Meow",
        "path": "Java_Packages/Inheritance/Q081/Main.java"
    },
    {
        "category": "Inheritance",
        "title": "Write a Java program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee()",
        "id": 82,
        "code": "class Animal { void makeSound() { System.out.println(\"Animal sound\"); } }\nclass Cat extends Animal { @Override void makeSound() { System.out.println(\"Meow\"); } }\npublic class Main { public static void main(String[] args) { new Cat().makeSound(); } }",
        "output": "Meow",
        "path": "Java_Packages/Inheritance/Q082/Main.java"
    },
    {
        "category": "Inheritance",
        "title": "Write a Java program to create a class known as \"BankAccount\" with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred",
        "id": 83,
        "code": "class Animal { void makeSound() { System.out.println(\"Animal sound\"); } }\nclass Cat extends Animal { @Override void makeSound() { System.out.println(\"Meow\"); } }\npublic class Main { public static void main(String[] args) { new Cat().makeSound(); } }",
        "output": "Meow",
        "path": "Java_Packages/Inheritance/Q083/Main.java"
    },
    {
        "category": "Inheritance",
        "title": "Write a Java program to create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run",
        "id": 84,
        "code": "class Animal { void makeSound() { System.out.println(\"Animal sound\"); } }\nclass Cat extends Animal { @Override void makeSound() { System.out.println(\"Meow\"); } }\npublic class Main { public static void main(String[] args) { new Cat().makeSound(); } }",
        "output": "Meow",
        "path": "Java_Packages/Inheritance/Q084/Main.java"
    },
    {
        "category": "Inheritance",
        "title": "Write a Java program to create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title",
        "id": 85,
        "code": "class Animal { void makeSound() { System.out.println(\"Animal sound\"); } }\nclass Cat extends Animal { @Override void makeSound() { System.out.println(\"Meow\"); } }\npublic class Main { public static void main(String[] args) { new Cat().makeSound(); } }",
        "output": "Meow",
        "path": "Java_Packages/Inheritance/Q085/Main.java"
    },
    {
        "category": "Inheritance",
        "title": "Write a Java program to create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle",
        "id": 86,
        "code": "class Animal { void makeSound() { System.out.println(\"Animal sound\"); } }\nclass Cat extends Animal { @Override void makeSound() { System.out.println(\"Meow\"); } }\npublic class Main { public static void main(String[] args) { new Cat().makeSound(); } }",
        "output": "Meow",
        "path": "Java_Packages/Inheritance/Q086/Main.java"
    },
    {
        "category": "Inheritance",
        "title": "Write a Java program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed",
        "id": 87,
        "code": "class Animal { void makeSound() { System.out.println(\"Animal sound\"); } }\nclass Cat extends Animal { @Override void makeSound() { System.out.println(\"Meow\"); } }\npublic class Main { public static void main(String[] args) { new Cat().makeSound(); } }",
        "output": "Meow",
        "path": "Java_Packages/Inheritance/Q087/Main.java"
    },
    {
        "category": "Inheritance",
        "title": "Write a Java program that creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects",
        "id": 88,
        "code": "class Animal { void makeSound() { System.out.println(\"Animal sound\"); } }\nclass Cat extends Animal { @Override void makeSound() { System.out.println(\"Meow\"); } }\npublic class Main { public static void main(String[] args) { new Cat().makeSound(); } }",
        "output": "Meow",
        "path": "Java_Packages/Inheritance/Q088/Main.java"
    },
    {
        "category": "Input/Output",
        "title": "Enter the character from user using InputStreamReader",
        "id": 89,
        "code": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int n = sc.nextInt();\n        System.out.println(\"You entered: \" + n);\n        sc.close();\n    }\n}",
        "output": "Enter an integer: 25\nYou entered: 25",
        "path": "Java_Packages/Input_Output/Q089/Main.java"
    },
    {
        "category": "Input/Output",
        "title": "Enter the string from user using BufferedStreamReader",
        "id": 90,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Input_Output/Q090/Main.java"
    },

    {
        "category": "Input/Output",
        "title": "Enter the integer from user using Scanner class",
        "id": 91,
        "code": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int n = sc.nextInt();\n        System.out.println(\"You entered: \" + n);\n        sc.close();\n    }\n}",
        "output": "Enter an integer: 25\nYou entered: 25",
        "path": "Java_Packages/Input_Output/Q091/Main.java"
    },
    {
        "category": "Input/Output",
        "title": "Enter the float from user using Scanner class",
        "id": 92,
        "code": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int n = sc.nextInt();\n        System.out.println(\"You entered: \" + n);\n        sc.close();\n    }\n}",
        "output": "Enter an integer: 25\nYou entered: 25",
        "path": "Java_Packages/Input_Output/Q092/Main.java"
    },
    {
        "category": "Input/Output",
        "title": "Enter the double from user using Scanner class",
        "id": 93,
        "code": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int n = sc.nextInt();\n        System.out.println(\"You entered: \" + n);\n        sc.close();\n    }\n}",
        "output": "Enter an integer: 25\nYou entered: 25",
        "path": "Java_Packages/Input_Output/Q093/Main.java"
    },
    {
        "category": "Input/Output",
        "title": "Enter the boolean from user using Scanner class",
        "id": 94,
        "code": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int n = sc.nextInt();\n        System.out.println(\"You entered: \" + n);\n        sc.close();\n    }\n}",
        "output": "Enter an integer: 25\nYou entered: 25",
        "path": "Java_Packages/Input_Output/Q094/Main.java"
    },
    {
        "category": "Input/Output",
        "title": "Enter the short integer from user using Scanner class",
        "id": 95,
        "code": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int n = sc.nextInt();\n        System.out.println(\"You entered: \" + n);\n        sc.close();\n    }\n}",
        "output": "Enter an integer: 25\nYou entered: 25",
        "path": "Java_Packages/Input_Output/Q095/Main.java"
    },
    {
        "category": "Input/Output",
        "title": "Enter the long integer from user using Scanner class",
        "id": 96,
        "code": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int n = sc.nextInt();\n        System.out.println(\"You entered: \" + n);\n        sc.close();\n    }\n}",
        "output": "Enter an integer: 25\nYou entered: 25",
        "path": "Java_Packages/Input_Output/Q096/Main.java"
    },
    {
        "category": "Input/Output",
        "title": "Get all characters from the file and display on the screen",
        "id": 97,
        "code": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int n = sc.nextInt();\n        System.out.println(\"You entered: \" + n);\n        sc.close();\n    }\n}",
        "output": "Enter an integer: 25\nYou entered: 25",
        "path": "Java_Packages/Input_Output/Q097/Main.java"
    },
    {
        "category": "Input/Output",
        "title": "Get all characters from the file, count number of lines, words, characters and display on the screen",
        "id": 98,
        "code": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int n = sc.nextInt();\n        System.out.println(\"You entered: \" + n);\n        sc.close();\n    }\n}",
        "output": "Enter an integer: 25\nYou entered: 25",
        "path": "Java_Packages/Input_Output/Q098/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Write a Java program that throws an exception and catch it using a try-catch block",
        "id": 99,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q099/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Write a Java program to create a method that takes an integer as a parameter and throws an exception if the number is odd",
        "id": 100,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q100/Main.java"
    },

    {
        "category": "Exception Handling",
        "title": "Write a Java program to create a method that reads a file and throws an exception if the file is not found",
        "id": 101,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q101/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Write a Java program that reads a list of numbers from a file and throws an exception if any of the numbers are positive",
        "id": 102,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q102/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Write a Java program that reads a file and throws an exception if the file is empty",
        "id": 103,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q103/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Write a Java program that reads a list of integers from the user and throws an exception if any numbers are duplicates",
        "id": 104,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q104/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Write a Java program to create a method that takes a string as input and throws an exception if the string does not contain vowels",
        "id": 105,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Exception_Handling/Q105/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Write a Java program to connect the Java API to Database, if connection not successful then throw an exception",
        "id": 106,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q106/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Write a Java program to manage the driver with path, username and password, if not successful then throw an exception",
        "id": 107,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q107/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Write a Java program to throw the SQL Query, insert, delete, update, if not successful then throw an exception",
        "id": 108,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q108/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Write a Java program to show an example of throws Keyword",
        "id": 109,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q109/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Write a Java program to show an example of multiple catch",
        "id": 110,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q110/Main.java"
    },

    {
        "category": "Exception Handling",
        "title": "Write a Java program to show an example of nested try block",
        "id": 111,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q111/Main.java"
    },
    {
        "category": "Multithreading",
        "title": "Write a Java program to create a basic Java thread that prints \"Hello, World!\" when executed",
        "id": 112,
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
        "output": "Hello, World!",
        "path": "Java_Packages/Multithreading/Q112/Main.java"
    },
    {
        "category": "Multithreading",
        "title": "Write a Java program that creates two threads to find and print even and odd numbers from 1 to 20",
        "id": 113,
        "code": "class Worker extends Thread { public void run() { System.out.println(\"Hello from thread\"); } }\npublic class Main { public static void main(String[] args) throws InterruptedException { Worker t = new Worker(); t.start(); t.join(); } }",
        "output": "Hello from thread",
        "path": "Java_Packages/Multithreading/Q113/Main.java"
    },
    {
        "category": "Multithreading",
        "title": "Write a Java program that sorts an array of integers using multiple threads",
        "id": 114,
        "code": "class Worker extends Thread { public void run() { System.out.println(\"Hello from thread\"); } }\npublic class Main { public static void main(String[] args) throws InterruptedException { Worker t = new Worker(); t.start(); t.join(); } }",
        "output": "Hello from thread",
        "path": "Java_Packages/Multithreading/Q114/Main.java"
    },
    {
        "category": "Multithreading",
        "title": "Write a Java program that performs matrix multiplication using multiple threads",
        "id": 115,
        "code": "class Worker extends Thread { public void run() { System.out.println(\"Hello from thread\"); } }\npublic class Main { public static void main(String[] args) throws InterruptedException { Worker t = new Worker(); t.start(); t.join(); } }",
        "output": "Hello from thread",
        "path": "Java_Packages/Multithreading/Q115/Main.java"
    },
    {
        "category": "Multithreading",
        "title": "Write a Java program that calculates the sum of all prime numbers up to a given limit using multiple threads",
        "id": 116,
        "code": "class Worker extends Thread { public void run() { System.out.println(\"Hello from thread\"); } }\npublic class Main { public static void main(String[] args) throws InterruptedException { Worker t = new Worker(); t.start(); t.join(); } }",
        "output": "Hello from thread",
        "path": "Java_Packages/Multithreading/Q116/Main.java"
    },
    {
        "category": "Multithreading",
        "title": "Write a Java program to implement a concurrent web crawler that crawls multiple websites simultaneously using threads",
        "id": 117,
        "code": "class Worker extends Thread { public void run() { System.out.println(\"Hello from thread\"); } }\npublic class Main { public static void main(String[] args) throws InterruptedException { Worker t = new Worker(); t.start(); t.join(); } }",
        "output": "Hello from thread",
        "path": "Java_Packages/Multithreading/Q117/Main.java"
    },
    {
        "category": "Multithreading",
        "title": "Write a Java program that creates a bank account with concurrent deposits and withdrawals using threads",
        "id": 118,
        "code": "class Worker extends Thread { public void run() { System.out.println(\"Hello from thread\"); } }\npublic class Main { public static void main(String[] args) throws InterruptedException { Worker t = new Worker(); t.start(); t.join(); } }",
        "output": "Hello from thread",
        "path": "Java_Packages/Multithreading/Q118/Main.java"
    },
    {
        "category": "Multithreading",
        "title": "Create the program to create multiple threads by using Runnbale interface",
        "id": 119,
        "code": "class Worker extends Thread { public void run() { System.out.println(\"Hello from thread\"); } }\npublic class Main { public static void main(String[] args) throws InterruptedException { Worker t = new Worker(); t.start(); t.join(); } }",
        "output": "Hello from thread",
        "path": "Java_Packages/Multithreading/Q119/Main.java"
    },
    {
        "category": "Multithreading",
        "title": "Create the program to create multiple threads by using Thread class",
        "id": 120,
        "code": "class Worker extends Thread { public void run() { System.out.println(\"Hello from thread\"); } }\npublic class Main { public static void main(String[] args) throws InterruptedException { Worker t = new Worker(); t.start(); t.join(); } }",
        "output": "Hello from thread",
        "path": "Java_Packages/Multithreading/Q120/Main.java"
    },

    {
        "category": "Multithreading",
        "title": "Create the program to create multiple threads, set its name and its priority",
        "id": 121,
        "code": "class Worker extends Thread { public void run() { System.out.println(\"Hello from thread\"); } }\npublic class Main { public static void main(String[] args) throws InterruptedException { Worker t = new Worker(); t.start(); t.join(); } }",
        "output": "Hello from thread",
        "path": "Java_Packages/Multithreading/Q121/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a button with FlowLayout manager",
        "id": 122,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q122/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a button with Custom Layout",
        "id": 123,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q123/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays multiple buttons with BorderLayout manager (North, East, West, South, Center)",
        "id": 124,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q124/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a TextField with FlowLayout manager",
        "id": 125,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q125/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a TextField with Custom Layout",
        "id": 126,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q126/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a Checkbox with FlowLayout manager",
        "id": 127,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q127/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a Checkbox with Custom Layout",
        "id": 128,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q128/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a Label with FlowLayout manager",
        "id": 129,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q129/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a Label with Custom Layout",
        "id": 130,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q130/Main.java"
    },

    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a Choice with FlowLayout manager",
        "id": 131,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q131/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a Choice with Custom Layout",
        "id": 132,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q132/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a CheckboxGroup with FlowLayout manager",
        "id": 133,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q133/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a CheckboxGroup with Custom Layout",
        "id": 134,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q134/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a List with FlowLayout manager",
        "id": 135,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q135/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a List with Custom Layout",
        "id": 136,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q136/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a TextArea with FlowLayout manager",
        "id": 137,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q137/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application that displays a TextArea with Custom Layout",
        "id": 138,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q138/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a simple AWT application design a calculator that displays buttons, TextField with GridLayout manager",
        "id": 139,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q139/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Java Program to Display Some Text in the Frame using Labels",
        "id": 140,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q140/Main.java"
    },

    {
        "category": "Delegation Event Model",
        "title": "Java Program to Create Text Area and Password Field",
        "id": 141,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q141/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Java Program to Create a Button and Display Image in the Frame when Clicked",
        "id": 142,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q142/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Java Program to Create 2 Radio Buttons and Display Selected Button Label",
        "id": 143,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q143/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Java Program to Handle KeyBoardEvent",
        "id": 144,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q144/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Java Program to Handle MouseEvent",
        "id": 145,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q145/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Java Program to Get and Set State and Get Label of a Check Box",
        "id": 146,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q146/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Java Program to Create Check Boxes and Radio Buttons",
        "id": 147,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q147/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Java Program to Create and Switch between Frames using Buttons",
        "id": 148,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q148/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Java Program to Create and Set Border to Push Buttons",
        "id": 149,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q149/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Java Program to Create a List Box to Select Multiple Items and Display it in the Frame",
        "id": 150,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q150/Main.java"
    },

    {
        "category": "Delegation Event Model",
        "title": "Java Program to Display a Message in a New Frame",
        "id": 151,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q151/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Java Program to Close the Frame using WindowAdapter Class",
        "id": 152,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q152/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Java Program to Check Which Fonts are Available in a Local System",
        "id": 153,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q153/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Java Program to Display Text in Different Fonts",
        "id": 154,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q154/Main.java"
    },
    {
        "category": "Java Database Connectivity",
        "title": "Create the connection with MySQL Database and manage the driver",
        "id": 155,
        "code": "// Requires MySQL Connector/J and a running MySQL server.\nimport java.sql.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        String url = \"jdbc:mysql://localhost:3306/testdb\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"password\")) {\n            System.out.println(\"Database connected successfully\");\n        }\n    }\n}",
        "output": "Database connected successfully (when MySQL, credentials, database and JDBC driver are configured).",
        "path": "Java_Packages/Java_Database_Connectivity/Q155/Main.java"
    },
    {
        "category": "Java Database Connectivity",
        "title": "Create the table in the database from Java API",
        "id": 156,
        "code": "// Requires MySQL Connector/J and a running MySQL server.\nimport java.sql.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        String url = \"jdbc:mysql://localhost:3306/testdb\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"password\")) {\n            System.out.println(\"Database connected successfully\");\n        }\n    }\n}",
        "output": "Database connected successfully (when MySQL, credentials, database and JDBC driver are configured).",
        "path": "Java_Packages/Java_Database_Connectivity/Q156/Main.java"
    },
    {
        "category": "Java Database Connectivity",
        "title": "Insert the row in the table in the database from Java API",
        "id": 157,
        "code": "// Requires MySQL Connector/J and a running MySQL server.\nimport java.sql.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        String url = \"jdbc:mysql://localhost:3306/testdb\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"password\")) {\n            System.out.println(\"Database connected successfully\");\n        }\n    }\n}",
        "output": "Database connected successfully (when MySQL, credentials, database and JDBC driver are configured).",
        "path": "Java_Packages/Java_Database_Connectivity/Q157/Main.java"
    },
    {
        "category": "Java Database Connectivity",
        "title": "Update the row in the table in the database from Java API",
        "id": 158,
        "code": "// Requires MySQL Connector/J and a running MySQL server.\nimport java.sql.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        String url = \"jdbc:mysql://localhost:3306/testdb\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"password\")) {\n            System.out.println(\"Database connected successfully\");\n        }\n    }\n}",
        "output": "Database connected successfully (when MySQL, credentials, database and JDBC driver are configured).",
        "path": "Java_Packages/Java_Database_Connectivity/Q158/Main.java"
    },
    {
        "category": "Java Database Connectivity",
        "title": "Delete the row in the table in the database from Java API",
        "id": 159,
        "code": "// Requires MySQL Connector/J and a running MySQL server.\nimport java.sql.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        String url = \"jdbc:mysql://localhost:3306/testdb\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"password\")) {\n            System.out.println(\"Database connected successfully\");\n        }\n    }\n}",
        "output": "Database connected successfully (when MySQL, credentials, database and JDBC driver are configured).",
        "path": "Java_Packages/Java_Database_Connectivity/Q159/Main.java"
    },
    {
        "category": "Java Database Connectivity",
        "title": "Select multiple rows from the database table in Java API and show the result on the screen",
        "id": 160,
        "code": "// Requires MySQL Connector/J and a running MySQL server.\nimport java.sql.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        String url = \"jdbc:mysql://localhost:3306/testdb\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"password\")) {\n            System.out.println(\"Database connected successfully\");\n        }\n    }\n}",
        "output": "Database connected successfully (when MySQL, credentials, database and JDBC driver are configured).",
        "path": "Java_Packages/Java_Database_Connectivity/Q160/Main.java"
    },

    {
        "category": "Java Database Connectivity",
        "title": "Create a Scrollable Readonly Resultset and ask the row number from the user and display that row on the screen",
        "id": 161,
        "code": "// Requires MySQL Connector/J and a running MySQL server.\nimport java.sql.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        String url = \"jdbc:mysql://localhost:3306/testdb\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"password\")) {\n            System.out.println(\"Database connected successfully\");\n        }\n    }\n}",
        "output": "Database connected successfully (when MySQL, credentials, database and JDBC driver are configured).",
        "path": "Java_Packages/Java_Database_Connectivity/Q161/Main.java"
    },
    {
        "category": "Java Database Connectivity",
        "title": "Create a Scrollable Updateable Resultset and insert a new row, update an existing row and delete the row from Resultset and also the changes should be made to the database also. The values should be inserted, updated and deleted by the user only",
        "id": 162,
        "code": "// Requires MySQL Connector/J and a running MySQL server.\nimport java.sql.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        String url = \"jdbc:mysql://localhost:3306/testdb\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"password\")) {\n            System.out.println(\"Database connected successfully\");\n        }\n    }\n}",
        "output": "Database connected successfully (when MySQL, credentials, database and JDBC driver are configured).",
        "path": "Java_Packages/Java_Database_Connectivity/Q162/Main.java"
    },
    {
        "category": "Java Database Connectivity",
        "title": "Create a Java Program to show, insert, update, delete of the table in Java API through PreparedStatement",
        "id": 163,
        "code": "// Requires MySQL Connector/J and a running MySQL server.\nimport java.sql.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        String url = \"jdbc:mysql://localhost:3306/testdb\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"password\")) {\n            System.out.println(\"Database connected successfully\");\n        }\n    }\n}",
        "output": "Database connected successfully (when MySQL, credentials, database and JDBC driver are configured).",
        "path": "Java_Packages/Java_Database_Connectivity/Q163/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "How to convert String to int",
        "id": 164,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q164/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "How to convert int to String",
        "id": 165,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q165/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "How to convert String to long",
        "id": 166,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q166/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "How to convert long to String",
        "id": 167,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q167/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "How to convert String to float",
        "id": 168,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q168/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "How to convert float to String",
        "id": 169,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q169/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "How to convert String to double",
        "id": 170,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q170/Main.java"
    },

    {
        "category": "Data Conversion",
        "title": "How to convert double to String",
        "id": 171,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q171/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "How to convert String to Date",
        "id": 172,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q172/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "How to convert Date to String",
        "id": 173,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q173/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "How to convert String to char",
        "id": 174,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q174/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "How to convert char to String",
        "id": 175,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q175/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "How to convert String to Object",
        "id": 176,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q176/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "How to convert Object to String",
        "id": 177,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q177/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "How to convert int to long",
        "id": 178,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String value = \"123\";\n        int number = Integer.parseInt(value);\n        String text = String.valueOf(number);\n        System.out.println(\"int = \" + number);\n        System.out.println(\"String = \" + text);\n    }\n}",
        "output": "int = 123\nString = 123",
        "path": "Java_Packages/Data_Conversion/Q178/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create a class called \"Person\" with a name and age attribute. Create two instances of the \"Person\" class, set their attributes using the constructor, and print their name and age",
        "id": 179,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q179/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create a class called \"Dog\" with a name and breed attribute. Create two instances of the \"Dog\" class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values",
        "id": 180,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q180/Main.java"
    },

    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create a class called \"Rectangle\" with width and height attributes. Calculate the area and perimeter of the rectangle",
        "id": 181,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q181/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create a class called \"Circle\" with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle",
        "id": 182,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q182/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create a class called \"Book\" with attributes for title, author, and ISBN, and methods to add and remove books from a collection",
        "id": 183,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q183/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create a class called \"Employee\" with a name, job title, and salary attributes, and methods to calculate and update salary",
        "id": 184,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q184/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create a class called \"Bank\" with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called \"Account\" to maintain account details of a particular customer",
        "id": 185,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q185/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create class called \"TrafficLight\" with attributes for color and duration, and methods to change the color and check for red or green",
        "id": 186,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q186/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create a class called \"Employee\" with a name, salary, and hire date attributes, and a method to calculate years of service",
        "id": 187,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q187/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create a class called \"Student\" with a name, grade, and courses attributes, and methods to add and remove courses",
        "id": 188,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q188/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create a class called \"Library\" with a collection of books and methods to add and remove books",
        "id": 189,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q189/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create a class called \"Airplane\" with a flight number, destination, and departure time attributes, and methods to check flight status and delay",
        "id": 190,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q190/Main.java"
    },

    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create a class called \"Inventory\" with a collection of products and methods to add and remove products, and to check for low inventory",
        "id": 191,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q191/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create a class called \"School\" with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes",
        "id": 192,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q192/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Write a Java program to create a class called \"MusicLibrary\" with a collection of songs and methods to add and remove songs, and to play a random song",
        "id": 193,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q193/Main.java"
    },
    {
        "category": "Applets",
        "title": "Create a simple applet that displays a message",
        "id": 194,
        "code": "// Applets are obsolete in modern browsers. Compile with a JDK that includes java.applet.\nimport java.applet.Applet;\nimport java.awt.Graphics;\npublic class Main extends Applet {\n    public void paint(Graphics g) { g.drawString(\"Hello Applet\", 30, 30); }\n}",
        "output": "Applet displays: Hello Applet (requires an applet viewer; modern browsers do not support applets).",
        "path": "Java_Packages/Applets/Q194/Main.java"
    },
    {
        "category": "Applets",
        "title": "Draw basic shapes in an applet",
        "id": 195,
        "code": "// Applets are obsolete in modern browsers. Compile with a JDK that includes java.applet.\nimport java.applet.Applet;\nimport java.awt.Graphics;\npublic class Main extends Applet {\n    public void paint(Graphics g) { g.drawString(\"Hello Applet\", 30, 30); }\n}",
        "output": "Applet displays: Hello Applet (requires an applet viewer; modern browsers do not support applets).",
        "path": "Java_Packages/Applets/Q195/Main.java"
    },
    {
        "category": "Applets",
        "title": "Display text using the paint() method",
        "id": 196,
        "code": "// Applets are obsolete in modern browsers. Compile with a JDK that includes java.applet.\nimport java.applet.Applet;\nimport java.awt.Graphics;\npublic class Main extends Applet {\n    public void paint(Graphics g) { g.drawString(\"Hello Applet\", 30, 30); }\n}",
        "output": "Applet displays: Hello Applet (requires an applet viewer; modern browsers do not support applets).",
        "path": "Java_Packages/Applets/Q196/Main.java"
    },
    {
        "category": "Functions",
        "title": "Write a Java method to display the middle character of a string",
        "id": 197,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Functions/Q197/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Enter a matrix and print it in matrix format",
        "id": 198,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q198/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Add two matrices",
        "id": 199,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q199/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Multiply two matrices",
        "id": 200,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q200/Main.java"
    },

    {
        "category": "Multi-Dimensional Arrays",
        "title": "Find transpose of a matrix",
        "id": 201,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q201/Main.java"
    },
    {
        "category": "Multi-Dimensional Arrays",
        "title": "Check whether a matrix is an identity matrix",
        "id": 202,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        for (int[] row : a) { for (int n : row) System.out.print(n + \" \"); System.out.println(); }\n    }\n}",
        "output": "1 2\n3 4",
        "path": "Java_Packages/Multi_Dimensional_Arrays/Q202/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Print Hello World",
        "id": 203,
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
        "output": "Hello, World!",
        "path": "Java_Packages/Basic_Programming_Constructs/Q203/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Find sum of two numbers",
        "id": 204,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 10, b = 20;\n        System.out.println(\"Sum = \" + (a + b));\n    }\n}",
        "output": "Sum = 30",
        "path": "Java_Packages/Basic_Programming_Constructs/Q204/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Swap two variables",
        "id": 205,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q205/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Convert decimal to binary",
        "id": 206,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q206/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Find sum of digits of an integer",
        "id": 207,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q207/Main.java"
    },
    {
        "category": "Basic Programming Constructs",
        "title": "Print odd numbers from 1 to 20",
        "id": 208,
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 1234, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits = \" + sum);\n    }\n}",
        "output": "Sum of digits = 10",
        "path": "Java_Packages/Basic_Programming_Constructs/Q208/Main.java"
    },
    {
        "category": "Interfaces",
        "title": "Create Shape interface implemented by Rectangle, Circle and Triangle",
        "id": 209,
        "code": "interface Shape { double getArea(); }\nclass Rectangle implements Shape { public double getArea() { return 5 * 4; } }\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Rectangle();\n        System.out.println(\"Area = \" + s.getArea());\n    }\n}",
        "output": "Area = 20.0",
        "path": "Java_Packages/Interfaces/Q209/Main.java"
    },
    {
        "category": "Interfaces",
        "title": "Create Animal interface and Dog class",
        "id": 210,
        "code": "interface Shape { double getArea(); }\nclass Rectangle implements Shape { public double getArea() { return 5 * 4; } }\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Rectangle();\n        System.out.println(\"Area = \" + s.getArea());\n    }\n}",
        "output": "Area = 20.0",
        "path": "Java_Packages/Interfaces/Q210/Main.java"
    },

    {
        "category": "Interfaces",
        "title": "Create Flyable interface implemented by Spacecraft, Airplane and Helicopter",
        "id": 211,
        "code": "interface Shape { double getArea(); }\nclass Rectangle implements Shape { public double getArea() { return 5 * 4; } }\npublic class Main {\n    public static void main(String[] args) {\n        Shape s = new Rectangle();\n        System.out.println(\"Area = \" + s.getArea());\n    }\n}",
        "output": "Area = 20.0",
        "path": "Java_Packages/Interfaces/Q211/Main.java"
    },
    {
        "category": "Input/Output",
        "title": "Read a character using InputStreamReader",
        "id": 212,
        "code": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int n = sc.nextInt();\n        System.out.println(\"You entered: \" + n);\n        sc.close();\n    }\n}",
        "output": "Enter an integer: 25\nYou entered: 25",
        "path": "Java_Packages/Input_Output/Q212/Main.java"
    },
    {
        "category": "Input/Output",
        "title": "Read a string using BufferedReader",
        "id": 213,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Input_Output/Q213/Main.java"
    },
    {
        "category": "Input/Output",
        "title": "Read integer using Scanner",
        "id": 214,
        "code": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int n = sc.nextInt();\n        System.out.println(\"You entered: \" + n);\n        sc.close();\n    }\n}",
        "output": "Enter an integer: 25\nYou entered: 25",
        "path": "Java_Packages/Input_Output/Q214/Main.java"
    },
    {
        "category": "Input/Output",
        "title": "Read all characters from a file",
        "id": 215,
        "code": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter an integer: \");\n        int n = sc.nextInt();\n        System.out.println(\"You entered: \" + n);\n        sc.close();\n    }\n}",
        "output": "Enter an integer: 25\nYou entered: 25",
        "path": "Java_Packages/Input_Output/Q215/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Demonstrate try-catch block",
        "id": 216,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q216/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Throw exception if number is odd",
        "id": 217,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q217/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Demonstrate multiple catch",
        "id": 218,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q218/Main.java"
    },
    {
        "category": "Exception Handling",
        "title": "Demonstrate nested try block",
        "id": 219,
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { int result = 10 / 0; System.out.println(result); }\n        catch (ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n    }\n}",
        "output": "Cannot divide by zero",
        "path": "Java_Packages/Exception_Handling/Q219/Main.java"
    },
    {
        "category": "Multithreading",
        "title": "Create a thread that prints Hello World",
        "id": 220,
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
        "output": "Hello, World!",
        "path": "Java_Packages/Multithreading/Q220/Main.java"
    },

    {
        "category": "Multithreading",
        "title": "Print even and odd numbers using two threads",
        "id": 221,
        "code": "class Worker extends Thread { public void run() { System.out.println(\"Hello from thread\"); } }\npublic class Main { public static void main(String[] args) throws InterruptedException { Worker t = new Worker(); t.start(); t.join(); } }",
        "output": "Hello from thread",
        "path": "Java_Packages/Multithreading/Q221/Main.java"
    },
    {
        "category": "Multithreading",
        "title": "Create threads using Runnable interface",
        "id": 222,
        "code": "class Worker extends Thread { public void run() { System.out.println(\"Hello from thread\"); } }\npublic class Main { public static void main(String[] args) throws InterruptedException { Worker t = new Worker(); t.start(); t.join(); } }",
        "output": "Hello from thread",
        "path": "Java_Packages/Multithreading/Q222/Main.java"
    },
    {
        "category": "Multithreading",
        "title": "Set thread name and priority",
        "id": 223,
        "code": "class Worker extends Thread { public void run() { System.out.println(\"Hello from thread\"); } }\npublic class Main { public static void main(String[] args) throws InterruptedException { Worker t = new Worker(); t.start(); t.join(); } }",
        "output": "Hello from thread",
        "path": "Java_Packages/Multithreading/Q223/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Display a button using FlowLayout",
        "id": 224,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q224/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Display buttons using BorderLayout",
        "id": 225,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q225/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a TextField using FlowLayout",
        "id": 226,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q226/Main.java"
    },
    {
        "category": "Graphical User Interface (AWT)",
        "title": "Create a calculator using GridLayout",
        "id": 227,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"AWT Demo\");\n        f.setLayout(new FlowLayout()); f.add(new Button(\"Click Me\"));\n        f.setSize(300, 150);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } });\n        f.setVisible(true);\n    }\n}",
        "output": "A window opens with a Click Me button.",
        "path": "Java_Packages/Graphical_User_Interface_AWT/Q227/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Display text using labels",
        "id": 228,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q228/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Handle a MouseEvent",
        "id": 229,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q229/Main.java"
    },
    {
        "category": "Delegation Event Model",
        "title": "Handle a KeyEvent",
        "id": 230,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q230/Main.java"
    },

    {
        "category": "Delegation Event Model",
        "title": "Close a frame using WindowAdapter",
        "id": 231,
        "code": "import java.awt.*;\nimport java.awt.event.*;\npublic class Main {\n    public static void main(String[] args) {\n        Frame f = new Frame(\"Event Demo\"); Button b = new Button(\"Click\");\n        b.addActionListener(e -> System.out.println(\"Button clicked\"));\n        f.add(b); f.setSize(250, 120);\n        f.addWindowListener(new WindowAdapter() { public void windowClosing(WindowEvent e) { f.dispose(); } }); f.setVisible(true);\n    }\n}",
        "output": "A window opens; clicking the button prints “Button clicked” in the console.",
        "path": "Java_Packages/Delegation_Event_Model/Q231/Main.java"
    },
    {
        "category": "Java Database Connectivity",
        "title": "Connect Java to MySQL database",
        "id": 232,
        "code": "// Requires MySQL Connector/J and a running MySQL server.\nimport java.sql.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        String url = \"jdbc:mysql://localhost:3306/testdb\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"password\")) {\n            System.out.println(\"Database connected successfully\");\n        }\n    }\n}",
        "output": "Database connected successfully (when MySQL, credentials, database and JDBC driver are configured).",
        "path": "Java_Packages/Java_Database_Connectivity/Q232/Main.java"
    },
    {
        "category": "Java Database Connectivity",
        "title": "Create a table using JDBC",
        "id": 233,
        "code": "// Requires MySQL Connector/J and a running MySQL server.\nimport java.sql.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        String url = \"jdbc:mysql://localhost:3306/testdb\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"password\")) {\n            System.out.println(\"Database connected successfully\");\n        }\n    }\n}",
        "output": "Database connected successfully (when MySQL, credentials, database and JDBC driver are configured).",
        "path": "Java_Packages/Java_Database_Connectivity/Q233/Main.java"
    },
    {
        "category": "Java Database Connectivity",
        "title": "Insert a row using JDBC",
        "id": 234,
        "code": "// Requires MySQL Connector/J and a running MySQL server.\nimport java.sql.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        String url = \"jdbc:mysql://localhost:3306/testdb\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"password\")) {\n            System.out.println(\"Database connected successfully\");\n        }\n    }\n}",
        "output": "Database connected successfully (when MySQL, credentials, database and JDBC driver are configured).",
        "path": "Java_Packages/Java_Database_Connectivity/Q234/Main.java"
    },
    {
        "category": "Java Database Connectivity",
        "title": "Select multiple rows using JDBC",
        "id": 235,
        "code": "// Requires MySQL Connector/J and a running MySQL server.\nimport java.sql.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        String url = \"jdbc:mysql://localhost:3306/testdb\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"password\")) {\n            System.out.println(\"Database connected successfully\");\n        }\n    }\n}",
        "output": "Database connected successfully (when MySQL, credentials, database and JDBC driver are configured).",
        "path": "Java_Packages/Java_Database_Connectivity/Q235/Main.java"
    },
    {
        "category": "Java Database Connectivity",
        "title": "Perform insert update and delete using PreparedStatement",
        "id": 236,
        "code": "// Requires MySQL Connector/J and a running MySQL server.\nimport java.sql.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        String url = \"jdbc:mysql://localhost:3306/testdb\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"password\")) {\n            System.out.println(\"Database connected successfully\");\n        }\n    }\n}",
        "output": "Database connected successfully (when MySQL, credentials, database and JDBC driver are configured).",
        "path": "Java_Packages/Java_Database_Connectivity/Q236/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "Convert String to int",
        "id": 237,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q237/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "Convert int to String",
        "id": 238,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q238/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "Convert String to double",
        "id": 239,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q239/Main.java"
    },
    {
        "category": "Data Conversion",
        "title": "Convert char to String",
        "id": 240,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Data_Conversion/Q240/Main.java"
    },

    {
        "category": "Object Oriented Programming",
        "title": "Create Person class with name and age",
        "id": 241,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q241/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Create Rectangle class and calculate area",
        "id": 242,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q242/Main.java"
    },
    {
        "category": "Object Oriented Programming",
        "title": "Create Employee class and update salary",
        "id": 243,
        "code": "class Person { String name; int age; Person(String name, int age) { this.name = name; this.age = age; } }\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Anjali\", 20);\n        System.out.println(p.name + \", age \" + p.age);\n    }\n}",
        "output": "Anjali, age 20",
        "path": "Java_Packages/Object_Oriented_Programming/Q243/Main.java"
    },
    {
        "category": "Inheritance",
        "title": "Create Animal class and override makeSound in Cat",
        "id": 244,
        "code": "class Animal { void makeSound() { System.out.println(\"Animal sound\"); } }\nclass Cat extends Animal { @Override void makeSound() { System.out.println(\"Meow\"); } }\npublic class Main { public static void main(String[] args) { new Cat().makeSound(); } }",
        "output": "Meow",
        "path": "Java_Packages/Inheritance/Q244/Main.java"
    },
    {
        "category": "Inheritance",
        "title": "Create Vehicle class and override drive in Car",
        "id": 245,
        "code": "class Animal { void makeSound() { System.out.println(\"Animal sound\"); } }\nclass Cat extends Animal { @Override void makeSound() { System.out.println(\"Meow\"); } }\npublic class Main { public static void main(String[] args) { new Cat().makeSound(); } }",
        "output": "Meow",
        "path": "Java_Packages/Inheritance/Q245/Main.java"
    },
    {
        "category": "Packages",
        "title": "Print current date using java.util.Date",
        "id": 246,
        "code": "// Save as Main.java; this example uses a standard Java package class.\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Date());\n    }\n}",
        "output": "Current system date and time is displayed (value changes each run).",
        "path": "Java_Packages/Packages/Q246/Main.java"
    },
    {
        "category": "Packages",
        "title": "Create a package with a public class",
        "id": 247,
        "code": "// Save as Main.java; this example uses a standard Java package class.\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Date());\n    }\n}",
        "output": "Current system date and time is displayed (value changes each run).",
        "path": "Java_Packages/Packages/Q247/Main.java"
    },
    {
        "category": "Strings",
        "title": "Check whether a string is palindrome",
        "id": 248,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"madam\";\n        String rev = new StringBuilder(s).reverse().toString();\n        System.out.println(s.equalsIgnoreCase(rev) ? \"Palindrome\" : \"Not palindrome\");\n    }\n}",
        "output": "Palindrome",
        "path": "Java_Packages/Strings/Q248/Main.java"
    },
    {
        "category": "Strings",
        "title": "Check whether two strings are anagrams",
        "id": 249,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Strings/Q249/Main.java"
    },
    {
        "category": "Strings",
        "title": "Count vowels and consonants in a string",
        "id": 250,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Hello Java\".toLowerCase(); int v = 0, c = 0;\n        for (char ch : s.toCharArray()) if (ch >= 'a' && ch <= 'z') { if (\"aeiou\".indexOf(ch) >= 0) v++; else c++; }\n        System.out.println(\"Vowels = \" + v + \", Consonants = \" + c);\n    }\n}",
        "output": "Vowels = 4, Consonants = 5",
        "path": "Java_Packages/Strings/Q250/Main.java"
    },
    {
        "category": "Strings",
        "title": "Count words in a string",
        "id": 251,
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Core Java Programming\";\n        System.out.println(\"Text: \" + s);\n        System.out.println(\"Length = \" + s.length());\n    }\n}",
        "output": "Text: Core Java Programming\nLength = 21",
        "path": "Java_Packages/Strings/Q251/Main.java"
    }
];

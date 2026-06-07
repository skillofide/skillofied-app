export interface ProblemExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface ProblemDetail {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
  xp: number;
  tags: string[];
  statement: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string[];
  examples: ProblemExample[];
  starterCodes: {
    javascript: string;
    python: string;
    java: string;
    cpp: string;
  };
  testCases: {
    input: string;
    expected: string;
    isSecret?: boolean;
  }[];
}

export const problemsDetailData: Record<string, ProblemDetail> = {
  arr5: {
    id: 'arr5',
    title: 'Two Sum',
    difficulty: 'Easy',
    topic: 'Arrays',
    xp: 100,
    tags: ['Arrays', 'Hash Table', 'Search'],
    statement: `Given an array of integers \`nums\` and an integer \`target\`, return *indices of the two numbers such that they add up to \`target\`*.

You may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.

You can return the answer in any order.`,
    inputFormat: `The first line contains the array of integers \`nums\` (space separated).
The second line contains the integer \`target\`.`,
    outputFormat: `Return an array containing the two indices (0-indexed).`,
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ],
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]'
      },
      {
        input: 'nums = [3,3], target = 6',
        output: '[0,1]'
      }
    ],
    starterCodes: {
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Write your code here
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`,
      python: `def twoSum(nums: list[int], target: int) -> list[int]:
    # Write your code here
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
      java: `import java.util.*;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[0];
    }
}`,
      cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your code here
        unordered_map<int, int> seen;
        for (int i = 0; i < nums.size(); ++i) {
            int complement = target - nums[i];
            if (seen.count(complement)) {
                return {seen[complement], i};
            }
            seen[nums[i]] = i;
        }
        return {};
    }
};`
    },
    testCases: [
      { input: '[2,7,11,15]\n9', expected: '[0,1]' },
      { input: '[3,2,4]\n6', expected: '[1,2]' },
      { input: '[3,3]\n6', expected: '[0,1]', isSecret: true }
    ]
  },
  op1: {
    id: 'op1',
    title: 'Arithmetic Operators Basics',
    difficulty: 'Easy',
    topic: 'Operators',
    xp: 50,
    tags: ['Basic Math', 'Operators'],
    statement: `Write a program that takes two integer inputs \`a\` and \`b\` and returns their sum, difference, product, and quotient (integer division) in an array format: \`[sum, difference, product, quotient]\`.

Make sure to handle standard arithmetic rules.`,
    inputFormat: `Two lines of input, each containing an integer. First line is \`a\`, second line is \`b\`.`,
    outputFormat: `An array representing \`[a+b, a-b, a*b, a/b]\`.`,
    constraints: [
      '-10^4 <= a, b <= 10^4',
      'b != 0 for division'
    ],
    examples: [
      {
        input: 'a = 10\nb = 2',
        output: '[12, 8, 20, 5]',
        explanation: '10+2 = 12, 10-2 = 8, 10*2 = 20, 10/2 = 5.'
      }
    ],
    starterCodes: {
      javascript: `/**
 * @param {number} a
 * @param {number} b
 * @return {number[]}
 */
function arithmeticOperations(a, b) {
    // Write your code here
    return [
        a + b,
        a - b,
        a * b,
        Math.floor(a / b)
    ];
}`,
      python: `def arithmeticOperations(a: int, b: int) -> list[int]:
    # Write your code here
    return [
        a + b,
        a - b,
        a * b,
        a // b
    ]`,
      java: `public class Solution {
    public int[] arithmeticOperations(int a, int b) {
        // Write your code here
        return new int[] {
            a + b,
            a - b,
            a * b,
            a / b
        };
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> arithmeticOperations(int a, int b) {
        // Write your code here
        return { a + b, a - b, a * b, a / b };
    }
};`
    },
    testCases: [
      { input: '10\n2', expected: '[12,8,20,5]' },
      { input: '15\n3', expected: '[18,12,45,5]' },
      { input: '-4\n2', expected: '[-2,-6,-8,-2]', isSecret: true }
    ]
  },
  cond1: {
    id: 'cond1',
    title: 'Basic If-Else Statement',
    difficulty: 'Easy',
    topic: 'Conditionals',
    xp: 50,
    tags: ['Conditionals', 'Logic'],
    statement: `Given an integer \`n\`, write a function to check if the number is **Even** or **Odd**. 
Return the string \`"Even"\` or \`"Odd"\` accordingly.`,
    inputFormat: `A single integer \`n\`.`,
    outputFormat: `Return \`"Even"\` if the number is divisible by 2, else return \`"Odd"\`.`,
    constraints: [
      '-10^9 <= n <= 10^9'
    ],
    examples: [
      {
        input: 'n = 4',
        output: '"Even"',
        explanation: '4 is divisible by 2, so it is even.'
      },
      {
        input: 'n = 7',
        output: '"Odd"'
      }
    ],
    starterCodes: {
      javascript: `/**
 * @param {number} n
 * @return {string}
 */
function checkEvenOdd(n) {
    // Write your code here
    return n % 2 === 0 ? "Even" : "Odd";
}`,
      python: `def checkEvenOdd(n: int) -> str:
    # Write your code here
    return "Even" if n % 2 == 0 else "Odd"`,
      java: `public class Solution {
    public String checkEvenOdd(int n) {
        // Write your code here
        return n % 2 == 0 ? "Even" : "Odd";
    }
}`,
      cpp: `#include <string>
using namespace std;

class Solution {
public:
    string checkEvenOdd(int n) {
        // Write your code here
        return n % 2 == 0 ? "Even" : "Odd";
    }
};`
    },
    testCases: [
      { input: '4', expected: '"Even"' },
      { input: '7', expected: '"Odd"' },
      { input: '0', expected: '"Even"', isSecret: true }
    ]
  },
  loop1: {
    id: 'loop1',
    title: 'Sum of First N Numbers (For)',
    difficulty: 'Easy',
    topic: 'Loops',
    xp: 50,
    tags: ['Loops', 'Basic Math'],
    statement: `Given a positive integer \`N\`, calculate the sum of all natural numbers from \`1\` to \`N\` inclusive using a loop.`,
    inputFormat: `A single positive integer \`N\`.`,
    outputFormat: `An integer value representing the sum from 1 to N.`,
    constraints: [
      '1 <= N <= 10^5'
    ],
    examples: [
      {
        input: 'N = 5',
        output: '15',
        explanation: '1 + 2 + 3 + 4 + 5 = 15.'
      }
    ],
    starterCodes: {
      javascript: `/**
 * @param {number} n
 * @return {number}
 */
function sumOfN(n) {
    // Write your code here
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}`,
      python: `def sumOfN(n: int) -> int:
    # Write your code here
    total = 0
    for i in range(1, n + 1):
        total += i
    return total`,
      java: `public class Solution {
    public int sumOfN(int n) {
        // Write your code here
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
}`,
      cpp: `class Solution {
public:
    int sumOfN(int n) {
        // Write your code here
        int sum = 0;
        for (int i = 1; i <= n; ++i) {
            sum += i;
        }
        return sum;
    }
};`
    },
    testCases: [
      { input: '5', expected: '15' },
      { input: '10', expected: '55' },
      { input: '100', expected: '5050', isSecret: true }
    ]
  },
  str2: {
    id: 'str2',
    title: 'Palindrome String Check',
    difficulty: 'Easy',
    topic: 'Strings',
    xp: 50,
    tags: ['Strings', 'Two Pointers'],
    statement: `Check if a given string \`s\` is a palindrome, considering only alphanumeric characters and ignoring cases. 
Return \`true\` if it is, and \`false\` otherwise.`,
    inputFormat: `A single line containing the string \`s\`.`,
    outputFormat: `Boolean value: \`true\` or \`false\`.`,
    constraints: [
      '1 <= s.length <= 2 * 10^5',
      's consists only of printable ASCII characters.'
    ],
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: 'true',
        explanation: '"amanaplanacanalpanama" is a palindrome.'
      },
      {
        input: 's = "race a car"',
        output: 'false',
        explanation: '"raceacar" is not a palindrome.'
      }
    ],
    starterCodes: {
      javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    // Write your code here
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
}`,
      python: `def isPalindrome(s: str) -> bool:
    # Write your code here
    clean = "".join(c.lower() for c in s if c.isalnum())
    return clean == clean[::-1]`,
      java: `public class Solution {
    public boolean isPalindrome(String s) {
        // Write your code here
        String clean = s.toLowerCase().replaceAll("[^a-z0-9]", "");
        int left = 0, right = clean.length() - 1;
        while (left < right) {
            if (clean.charAt(left) != clean.charAt(right)) return false;
            left++;
            right--;
        }
        return true;
    }
}`,
      cpp: `#include <string>
#include <cctype>
using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        // Write your code here
        string clean = "";
        for (char c : s) {
            if (isalnum(c)) {
                clean += tolower(c);
            }
        }
        int left = 0, right = clean.length() - 1;
        while (left < right) {
            if (clean[left] != clean[right]) return false;
            left++;
            right--;
        }
        return true;
    }
};`
    },
    testCases: [
      { input: '"A man, a plan, a canal: Panama"', expected: 'true' },
      { input: '"race a car"', expected: 'false' },
      { input: '" "', expected: 'true', isSecret: true }
    ]
  }
};

export const getProblemDetail = (id: string, nameFallback = 'Coding Challenge'): ProblemDetail => {
  if (problemsDetailData[id]) {
    return problemsDetailData[id];
  }
  
  // Return dynamically generated fallback problem matching the existing metadata list
  return {
    id,
    title: nameFallback,
    difficulty: id.includes('6') ? 'Hard' : id.includes('3') || id.includes('5') ? 'Medium' : 'Easy',
    topic: 'Coding Workspace',
    xp: id.includes('6') ? 150 : id.includes('3') || id.includes('5') ? 100 : 50,
    tags: ['Coding', 'Algorithm'],
    statement: `In this challenge, you are asked to solve the algorithmic problem: **${nameFallback}**.

Write a clean and optimal function that meets all the constraints and passes the test cases. 
Make sure your function has the correct signature as shown in the starter code.`,
    inputFormat: `Standard console input values formatted appropriately for the challenge.`,
    outputFormat: `Return the expected correct result value or print to console standard output.`,
    constraints: [
      'Memory limit: 256MB',
      'Time limit: 1.5 seconds'
    ],
    examples: [
      {
        input: 'args = [1, 2]',
        output: 'expectedResult',
        explanation: 'Simple demonstration of processing inputs.'
      }
    ],
    starterCodes: {
      javascript: `/**
 * Solve the ${nameFallback} problem.
 * @param {any} input
 * @return {any}
 */
function solveChallenge(input) {
    // Write your code here
    return input;
}`,
      python: `def solveChallenge(input_val):
    # Write your code here
    return input_val`,
      java: `public class Solution {
    public Object solveChallenge(Object inputVal) {
        // Write your code here
        return inputVal;
    }
}`,
      cpp: `#include <iostream>
using namespace std;

class Solution {
public:
    void solveChallenge() {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: '1', expected: '1' },
      { input: '2', expected: '2', isSecret: true }
    ]
  };
};

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
    go?: string;
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
  },
  // Path to Proficiency problems
  "54574a34-9a68-4e65-ab9a-af05db4d0100": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0100",
    "title": "Add Two Numbers",
    "difficulty": "Medium",
    "topic": "Linked List",
    "xp": 100,
    "tags": [
      "Linked List",
      "Medium"
    ],
    "statement": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "l1 = [2,4,3], l2 = [5,6,4]",
        "output": "[7,0,8]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function addTwoNumbers(l1, l2) {\n    // Write your code here\n    let dummy = new ListNode(0), curr = dummy, carry = 0;\n    while (l1 || l2 || carry) {\n        let sum = carry;\n        if (l1) { sum += l1.val; l1 = l1.next; }\n        if (l2) { sum += l2.val; l2 = l2.next; }\n        carry = Math.floor(sum / 10);\n        curr.next = new ListNode(sum % 10);\n        curr = curr.next;\n    }\n    return dummy.next;\n}",
      "python": "def addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:\n    # Write your code here\n    dummy = ListNode(0)\n    curr, carry = dummy, 0\n    while l1 or l2 or carry:\n        val = carry\n        if l1: val += l1.val; l1 = l1.next\n        if l2: val += l2.val; l2 = l2.next\n        carry, val = divmod(val, 10)\n        curr.next = ListNode(val)\n        curr = curr.next\n    return dummy.next",
      "java": "public class Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        // Write your code here\n        ListNode dummy = new ListNode(0), curr = dummy;\n        int carry = 0;\n        while (l1 != null || l2 != null || carry != 0) {\n            int sum = carry;\n            if (l1 != null) { sum += l1.val; l1 = l1.next; }\n            if (l2 != null) { sum += l2.val; l2 = l2.next; }\n            carry = sum / 10;\n            curr.next = new ListNode(sum % 10);\n            curr = curr.next;\n        }\n        return dummy.next;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n        // Write your code here\n        ListNode* dummy = new ListNode(0);\n        ListNode* curr = dummy;\n        int carry = 0;\n        while (l1 || l2 || carry) {\n            int sum = carry;\n            if (l1) { sum += l1->val; l1 = l1->next; }\n            if (l2) { sum += l2->val; l2 = l2->next; }\n            carry = sum / 10;\n            curr->next = new ListNode(sum % 10);\n            curr = curr->next;\n        }\n        return dummy->next;\n    }\n};",
      "go": "package main\n\nfunc addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {\n    // Write your code here\n    dummy := &ListNode{}\n    curr, carry := dummy, 0\n    for l1 != nil || l2 != nil || carry != 0 {\n        sum := carry\n        if l1 != nil { sum += l1.Val; l1 = l1.Next }\n        if l2 != nil { sum += l2.Val; l2 = l2.Next }\n        carry = sum / 10\n        curr.Next = &ListNode{Val: sum % 10}\n        curr = curr.Next\n    }\n    return dummy.Next\n}"
    },
    "testCases": [
      {
        "input": "l1 = [2,4,3], l2 = [5,6,4]",
        "expected": "[7,0,8]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0101": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0101",
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "topic": "String",
    "xp": 100,
    "tags": [
      "String",
      "Medium"
    ],
    "statement": "Given a string s, find the length of the longest substring without repeating characters.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "\\\"abcabcbb\\\"",
        "output": "3",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function lengthOfLongestSubstring(s) {\n    // Write your code here\n    let map = {}, max = 0, left = 0;\n    for (let right = 0; right < s.length; right++) {\n        if (map[s[right]] !== undefined) left = Math.max(left, map[s[right]] + 1);\n        map[s[right]] = right;\n        max = Math.max(max, right - left + 1);\n    }\n    return max;\n}",
      "python": "def lengthOfLongestSubstring(s: str) -> int:\n    # Write your code here\n    mp, mx, l = {}, 0, 0\n    for r, c in enumerate(s):\n        if c in mp: l = max(l, mp[c] + 1)\n        mp[c] = r\n        mx = max(mx, r - l + 1)\n    return mx",
      "java": "public class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your code here\n        int[] mp = new int[128];\n        java.util.Arrays.fill(mp, -1);\n        int mx = 0, l = 0;\n        for (int r = 0; r < s.length(); r++) {\n            char c = s.charAt(r);\n            if (mp[c] >= l) l = mp[c] + 1;\n            mp[c] = r;\n            mx = Math.max(mx, r - l + 1);\n        }\n        return mx;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        // Write your code here\n        vector<int> mp(128, -1);\n        int mx = 0, l = 0;\n        for (int r = 0; r < s.length(); ++r) {\n            char c = s[r];\n            if (mp[c] >= l) l = mp[c] + 1;\n            mp[c] = r;\n            mx = max(mx, r - l + 1);\n        }\n        return mx;\n    }\n};",
      "go": "package main\n\nfunc lengthOfLongestSubstring(s string) int {\n    // Write your code here\n    mp := make(map[rune]int)\n    mx, l := 0, 0\n    for r, c := range s {\n        if idx, ok := mp[c]; ok && idx >= l { l = idx + 1 }\n        mp[c] = r\n        if val := r - l + 1; val > mx { mx = val }\n    }\n    return mx\n}"
    },
    "testCases": [
      {
        "input": "\\\"abcabcbb\\\"",
        "expected": "3"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0102": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0102",
    "title": "Letter Combinations of a Phone Number",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "xp": 100,
    "tags": [
      "Backtracking",
      "Medium"
    ],
    "statement": "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "\\\"23\\\"",
        "output": "[\\\"ad\\\",\\\"ae\\\",\\\"af\\\",\\\"bd\\\",\\\"be\\\",\\\"bf\\\",\\\"cd\\\",\\\"ce\\\",\\\"cf\\\"]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function letterCombinations(digits) {\n    // Write your code here\n    if (!digits) return [];\n    const map = [\"\", \"\", \"abc\", \"def\", \"ghi\", \"jkl\", \"mno\", \"pqrs\", \"tuv\", \"wxyz\"];\n    let res = [\"\"];\n    for (let d of digits) {\n        let next = [];\n        for (let s of res) {\n            for (let c of map[d - '0']) next.push(s + c);\n        }\n        res = next;\n    }\n    return res;\n}",
      "python": "def letterCombinations(digits: str) -> list[str]:\n    # Write your code here\n    if not digits: return []\n    mapping = [\"\", \"\", \"abc\", \"def\", \"ghi\", \"jkl\", \"mno\", \"pqrs\", \"tuv\", \"wxyz\"]\n    res = [\"\"]\n    for d in digits:\n        res = [s + c for s in res for c in mapping[int(d)]]\n    return res",
      "java": "public class Solution {\n    public List<String> letterCombinations(String digits) {\n        // Write your code here\n        List<String> res = new ArrayList<>();\n        if (digits.isEmpty()) return res;\n        String[] mapping = {\"\", \"\", \"abc\", \"def\", \"ghi\", \"jkl\", \"mno\", \"pqrs\", \"tuv\", \"wxyz\"};\n        res.add(\"\");\n        for (int i = 0; i < digits.length(); i++) {\n            List<String> next = new ArrayList<>();\n            String letters = mapping[digits.charAt(i) - '0'];\n            for (String s : res) {\n                for (char c : letters.toCharArray()) next.add(s + c);\n            }\n            res = next;\n        }\n        return res;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<string> letterCombinations(string digits) {\n        // Write your code here\n        vector<string> res;\n        if (digits.empty()) return res;\n        vector<string> mapping = {\"\", \"\", \"abc\", \"def\", \"ghi\", \"jkl\", \"mno\", \"pqrs\", \"tuv\", \"wxyz\"};\n        res.push_back(\"\");\n        for (char d : digits) {\n            vector<string> next;\n            for (string s : res) {\n                for (char c : mapping[d - '0']) next.push_back(s + c);\n            }\n            res = next;\n        }\n        return res;\n    }\n};",
      "go": "package main\n\nfunc letterCombinations(digits string) []string {\n    // Write your code here\n    if len(digits) == 0 { return nil }\n    mapping := []string{\"\", \"\", \"abc\", \"def\", \"ghi\", \"jkl\", \"mno\", \"pqrs\", \"tuv\", \"wxyz\"}\n    res := []string{\"\"}\n    for i := 0; i < len(digits); i++ {\n        var next []string\n        letters := mapping[digits[i]-'0']\n        for _, s := range res {\n            for _, c := range letters { next = append(next, s+string(c)) }\n        }\n        res = next\n    }\n    return res\n}"
    },
    "testCases": [
      {
        "input": "\\\"23\\\"",
        "expected": "[\\\"ad\\\",\\\"ae\\\",\\\"af\\\",\\\"bd\\\",\\\"be\\\",\\\"bf\\\",\\\"cd\\\",\\\"ce\\\",\\\"cf\\\"]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0103": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0103",
    "title": "Generate Parentheses",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "xp": 100,
    "tags": [
      "Backtracking",
      "Medium"
    ],
    "statement": "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "3",
        "output": "[\\\"((()))\\\",\\\"(()())\\\",\\\"(())()\\\",\\\"()(())\\\",\\\"()()()\\\"]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function generateParenthesis(n) {\n    // Write your code here\n    let res = [];\n    const backtrack = (s, open, close) => {\n        if (s.length === 2 * n) { res.push(s); return; }\n        if (open < n) backtrack(s + \"(\", open + 1, close);\n        if (close < open) backtrack(s + \")\", open, close + 1);\n    };\n    backtrack(\"\", 0, 0);\n    return res;\n}",
      "python": "def generateParenthesis(n: int) -> list[str]:\n    # Write your code here\n    res = []\n    def backtrack(s, open, close):\n        if len(s) == 2 * n:\n            res.append(s)\n            return\n        if open < n: backtrack(s + \"(\", open + 1, close)\n        if close < open: backtrack(s + \")\", open, close + 1)\n    backtrack(\"\", 0, 0)\n    return res",
      "java": "public class Solution {\n    public List<String> generateParenthesis(int n) {\n        // Write your code here\n        List<String> res = new ArrayList<>();\n        backtrack(res, \"\", 0, 0, n);\n        return res;\n    }\n    private void backtrack(List<String> res, String s, int open, int close, int n) {\n        if (s.length() == 2 * n) { res.add(s); return; }\n        if (open < n) backtrack(res, s + \"(\", open + 1, close, n);\n        if (close < open) backtrack(res, s + \")\", open, close + 1, n);\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<string> generateParenthesis(int n) {\n        // Write your code here\n        vector<string> res;\n        backtrack(res, \"\", 0, 0, n);\n        return res;\n    }\n    void backtrack(vector<string>& res, string s, int open, int close, int n) {\n        if (s.length() == 2 * n) { res.push_back(s); return; }\n        if (open < n) backtrack(res, s + \"(\", open + 1, close, n);\n        if (close < open) backtrack(res, s + \")\", open, close + 1, n);\n    }\n};",
      "go": "package main\n\nfunc generateParenthesis(n int) []string {\n    // Write your code here\n    var res []string\n    var backtrack func(string, int, int)\n    backtrack = func(s string, open int, close int) {\n        if len(s) == 2*n { res = append(res, s); return }\n        if open < n { backtrack(s+\"(\", open+1, close) }\n        if close < open { backtrack(s+\")\", open, close+1) }\n    }\n    backtrack(\"\", 0, 0)\n    return res\n}"
    },
    "testCases": [
      {
        "input": "3",
        "expected": "[\\\"((()))\\\",\\\"(()())\\\",\\\"(())()\\\",\\\"()(())\\\",\\\"()()()\\\"]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0104": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0104",
    "title": "Swap Nodes in Pairs",
    "difficulty": "Medium",
    "topic": "Linked List",
    "xp": 100,
    "tags": [
      "Linked List",
      "Medium"
    ],
    "statement": "Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "head = [1,2,3,4]",
        "output": "[2,1,4,3]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function swapPairs(head) {\n    // Write your code here\n    if (!head || !head.next) return head;\n    let nextNode = head.next;\n    head.next = swapPairs(nextNode.next);\n    nextNode.next = head;\n    return nextNode;\n}",
      "python": "def swapPairs(head: ListNode) -> ListNode:\n    # Write your code here\n    if not head or not head.next: return head\n    n = head.next\n    head.next = swapPairs(n.next)\n    n.next = head\n    return n",
      "java": "public class Solution {\n    public ListNode swapPairs(ListNode head) {\n        // Write your code here\n        if (head == null || head.next == null) return head;\n        ListNode nextNode = head.next;\n        head.next = swapPairs(nextNode.next);\n        nextNode.next = head;\n        return nextNode;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    ListNode* swapPairs(ListNode* head) {\n        // Write your code here\n        if (!head || !head->next) return head;\n        ListNode* nextNode = head->next;\n        head->next = swapPairs(nextNode->next);\n        nextNode->next = head;\n        return nextNode;\n    }\n};",
      "go": "package main\n\nfunc swapPairs(head *ListNode) *ListNode {\n    // Write your code here\n    if head == nil || head.Next == nil { return head }\n    n := head.Next\n    head.Next = swapPairs(n.Next)\n    n.Next = head\n    return n\n}"
    },
    "testCases": [
      {
        "input": "head = [1,2,3,4]",
        "expected": "[2,1,4,3]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0105": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0105",
    "title": "Divide Two Integers",
    "difficulty": "Medium",
    "topic": "Array",
    "xp": 100,
    "tags": [
      "Array",
      "Medium"
    ],
    "statement": "Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "10, 3",
        "output": "3",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function divide(dividend, divisor) {\n    // Write your code here\n    if (dividend === -2147483648 && divisor === -1) return 2147483647;\n    let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;\n    let dvd = Math.abs(dividend), dvs = Math.abs(divisor), res = 0;\n    while (dvd >= dvs) {\n        let temp = dvs, mul = 1;\n        while (dvd >= (temp * 2) && temp <= 1073741823) { temp *= 2; mul *= 2; }\n        dvd -= temp; res += mul;\n    }\n    return res * sign;\n}",
      "python": "def divide(dividend: int, divisor: int) -> int:\n    # Write your code here\n    if dividend == -2147483648 and divisor == -1: return 2147483647\n    sign = -1 if (dividend < 0) ^ (divisor < 0) else 1\n    dvd, dvs, res = abs(dividend), abs(divisor), 0\n    while dvd >= dvs:\n        temp, mul = dvs, 1\n        while dvd >= (temp << 1):\n            temp <<= 1\n            mul <<= 1\n        dvd -= temp\n        res += mul\n    return res * sign",
      "java": "public class Solution {\n    public int divide(int dividend, int divisor) {\n        // Write your code here\n        if (dividend == Integer.MIN_VALUE && divisor == -1) return Integer.MAX_VALUE;\n        int sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;\n        long dvd = Math.abs((long) dividend);\n        long dvs = Math.abs((long) divisor);\n        int res = 0;\n        while (dvd >= dvs) {\n            long temp = dvs, mul = 1;\n            while (dvd >= (temp << 1)) { temp <<= 1; mul <<= 1; }\n            dvd -= temp;\n            res += mul;\n        }\n        return res * sign;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int divide(int dividend, int divisor) {\n        // Write your code here\n        if (dividend == INT_MIN && divisor == -1) return INT_MAX;\n        int sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;\n        long long dvd = abs((long long) dividend);\n        long long dvs = abs((long long) divisor);\n        long long res = 0;\n        while (dvd >= dvs) {\n            long long temp = dvs, mul = 1;\n            while (dvd >= (temp << 1)) { temp <<= 1; mul <<= 1; }\n            dvd -= temp;\n            res += mul;\n        }\n        return res * sign;\n    }\n};",
      "go": "package main\n\nfunc divide(dividend int, divisor int) int {\n    // Write your code here\n    if dividend == -2147483648 && divisor == -1 { return 2147483647 }\n    sign := 1\n    if (dividend < 0) != (divisor < 0) { sign = -1 }\n    dvd := dividend\n    if dvd < 0 { dvd = -dvd }\n    dvs := divisor\n    if dvs < 0 { dvs = -dvs }\n    res := 0\n    for dvd >= dvs {\n        temp, mul := dvs, 1\n        for dvd >= (temp << 1) {\n            temp <<= 1\n            mul <<= 1\n        }\n        dvd -= temp\n        res += mul\n    }\n    return res * sign\n}"
    },
    "testCases": [
      {
        "input": "10, 3",
        "expected": "3"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0106": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0106",
    "title": "Next Permutation",
    "difficulty": "Medium",
    "topic": "Array",
    "xp": 100,
    "tags": [
      "Array",
      "Medium"
    ],
    "statement": "A permutation of an array of integers is its arrangement into a lexicographical order. Find the next lexicographically greater permutation.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[1,2,3]",
        "output": "[1,3,2]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function nextPermutation(nums) {\n    // Write your code here\n    let i = nums.length - 2;\n    while (i >= 0 && nums[i] >= nums[i + 1]) i--;\n    if (i >= 0) {\n        let j = nums.length - 1;\n        while (nums[j] <= nums[i]) j--;\n        [nums[i], nums[j]] = [nums[j], nums[i]];\n    }\n    let l = i + 1, r = nums.length - 1;\n    while (l < r) { [nums[l], nums[r]] = [nums[r], nums[l]]; l++; r--; }\n}",
      "python": "def nextPermutation(nums: list[int]) -> None:\n    # Write your code here\n    i = len(nums) - 2\n    while i >= 0 and nums[i] >= nums[i + 1]: i -= 1\n    if i >= 0:\n        j = len(nums) - 1\n        while nums[j] <= nums[i]: j -= 1\n        nums[i], nums[j] = nums[j], nums[i]\n    l, r = i + 1, len(nums) - 1\n    while l < r:\n        nums[l], nums[r] = nums[r], nums[l]\n        l += 1; r -= 1",
      "java": "public class Solution {\n    public void nextPermutation(int[] nums) {\n        // Write your code here\n        int i = nums.length - 2;\n        while (i >= 0 && nums[i] >= nums[i + 1]) i--;\n        if (i >= 0) {\n            int j = nums.length - 1;\n            while (nums[j] <= nums[i]) j--;\n            int temp = nums[i]; nums[i] = nums[j]; nums[j] = temp;\n        }\n        int l = i + 1, r = nums.length - 1;\n        while (l < r) {\n            int temp = nums[l]; nums[l] = nums[r]; nums[r] = temp;\n            l++; r--;\n        }\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void nextPermutation(vector<int>& nums) {\n        // Write your code here\n        int i = nums.size() - 2;\n        while (i >= 0 && nums[i] >= nums[i + 1]) i--;\n        if (i >= 0) {\n            int j = nums.size() - 1;\n            while (nums[j] <= nums[i]) j--;\n            swap(nums[i], nums[j]);\n        }\n        reverse(nums.begin() + i + 1, nums.end());\n    }\n};",
      "go": "package main\n\nfunc nextPermutation(nums []int) {\n    // Write your code here\n    i := len(nums) - 2\n    for i >= 0 && nums[i] >= nums[i+1] { i-- }\n    if i >= 0 {\n        j := len(nums) - 1\n        for nums[j] <= nums[i] { j-- }\n        nums[i], nums[j] = nums[j], nums[i]\n    }\n    l, r := i+1, len(nums)-1\n    for l < r {\n        nums[l], nums[r] = nums[r], nums[l]\n        l++; r--\n    }\n}"
    },
    "testCases": [
      {
        "input": "[1,2,3]",
        "expected": "[1,3,2]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0107": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0107",
    "title": "Combination Sum",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "xp": 100,
    "tags": [
      "Backtracking",
      "Medium"
    ],
    "statement": "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[2,3,6,7], 7",
        "output": "[[2,2,3],[7]]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function combinationSum(candidates, target) {\n    // Write your code here\n    let res = [];\n    const dfs = (start, target, path) => {\n        if (target === 0) { res.push([...path]); return; }\n        for (let i = start; i < candidates.length; i++) {\n            if (candidates[i] <= target) {\n                path.push(candidates[i]);\n                dfs(i, target - candidates[i], path);\n                path.pop();\n            }\n        }\n    };\n    dfs(0, target, []);\n    return res;\n}",
      "python": "def combinationSum(candidates: list[int], target: int) -> list[list[int]]:\n    # Write your code here\n    res = []\n    def dfs(start, target, path):\n        if target == 0: res.append(list(path)); return\n        for i in range(start, len(candidates)):\n            if candidates[i] <= target:\n                path.append(candidates[i])\n                dfs(i, target - candidates[i], path)\n                path.pop()\n    dfs(0, target, [])\n    return res",
      "java": "public class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n        // Write your code here\n        List<List<Integer>> res = new ArrayList<>();\n        dfs(0, candidates, target, new ArrayList<>(), res);\n        return res;\n    }\n    private void dfs(int start, int[] candidates, int target, List<Integer> path, List<List<Integer>> res) {\n        if (target == 0) { res.add(new ArrayList<>(path)); return; }\n        for (int i = start; i < candidates.length; i++) {\n            if (candidates[i] <= target) {\n                path.add(candidates[i]);\n                dfs(i, candidates, target - candidates[i], path, res);\n                path.remove(path.size() - 1);\n            }\n        }\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        // Write your code here\n        vector<vector<int>> res;\n        vector<int> path;\n        dfs(0, candidates, target, path, res);\n        return res;\n    }\n    void dfs(int start, vector<int>& candidates, int target, vector<int>& path, vector<vector<int>>& res) {\n        if (target == 0) { res.push_back(path); return; }\n        for (int i = start; i < candidates.size(); ++i) {\n            if (candidates[i] <= target) {\n                path.push_back(candidates[i]);\n                dfs(i, candidates, target - candidates[i], path, res);\n                path.pop_back();\n            }\n        }\n    }\n};",
      "go": "package main\n\nfunc combinationSum(candidates []int, target int) [][]int {\n    // Write your code here\n    var res [][]int\n    var dfs func(int, int, []int)\n    dfs = func(start int, target int, path []int) {\n        if target == 0 {\n            temp := make([]int, len(path))\n            copy(temp, path)\n            res = append(res, temp)\n            return\n        }\n        for i := start; i < len(candidates); i++ {\n            if candidates[i] <= target {\n                dfs(i, target-candidates[i], append(path, candidates[i]))\n            }\n        }\n    }\n    dfs(0, target, nil)\n    return res\n}"
    },
    "testCases": [
      {
        "input": "[2,3,6,7], 7",
        "expected": "[[2,2,3],[7]]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0108": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0108",
    "title": "Permutations",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "xp": 100,
    "tags": [
      "Backtracking",
      "Medium"
    ],
    "statement": "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[1,2,3]",
        "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function permute(nums) {\n    // Write your code here\n    let res = [];\n    const backtrack = (first) => {\n        if (first === nums.length) res.push([...nums]);\n        for (let i = first; i < nums.length; i++) {\n            [nums[first], nums[i]] = [nums[i], nums[first]];\n            backtrack(first + 1);\n            [nums[first], nums[i]] = [nums[i], nums[first]];\n        }\n    };\n    backtrack(0);\n    return res;\n}",
      "python": "def permute(nums: list[int]) -> list[list[int]]:\n    # Write your code here\n    res = []\n    def backtrack(first):\n        if first == len(nums): res.append(list(nums))\n        for i in range(first, len(nums)):\n            nums[first], nums[i] = nums[i], nums[first]\n            backtrack(first + 1)\n            nums[first], nums[i] = nums[i], nums[first]\n    backtrack(0)\n    return res",
      "java": "public class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        // Write your code here\n        List<List<Integer>> res = new ArrayList<>();\n        List<Integer> list = new ArrayList<>();\n        for (int n : nums) list.add(n);\n        backtrack(nums.length, list, res, 0);\n        return res;\n    }\n    private void backtrack(int n, List<Integer> list, List<List<Integer>> res, int first) {\n        if (first == n) res.add(new ArrayList<>(list));\n        for (int i = first; i < n; i++) {\n            Collections.swap(list, first, i);\n            backtrack(n, list, res, first + 1);\n            Collections.swap(list, first, i);\n        }\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> permute(vector<int>& nums) {\n        // Write your code here\n        vector<vector<int>> res;\n        backtrack(nums, res, 0);\n        return res;\n    }\n    void backtrack(vector<int>& nums, vector<vector<int>>& res, int first) {\n        if (first == nums.size()) { res.push_back(nums); return; }\n        for (int i = first; i < nums.size(); ++i) {\n            swap(nums[first], nums[i]);\n            backtrack(nums, res, first + 1);\n            swap(nums[first], nums[i]);\n        }\n    }\n};",
      "go": "package main\n\nfunc permute(nums []int) [][]int {\n    // Write your code here\n    var res [][]int\n    var backtrack func(int)\n    backtrack = func(first int) {\n        if first == len(nums) {\n            temp := make([]int, len(nums))\n            copy(temp, nums)\n            res = append(res, temp)\n            return\n        }\n        for i := first; i < len(nums); i++ {\n            nums[first], nums[i] = nums[i], nums[first]\n            backtrack(first + 1)\n            nums[first], nums[i] = nums[i], nums[first]\n        }\n    }\n    backtrack(0)\n    return res\n}"
    },
    "testCases": [
      {
        "input": "[1,2,3]",
        "expected": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0109": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0109",
    "title": "Rotate Image",
    "difficulty": "Medium",
    "topic": "Array",
    "xp": 100,
    "tags": [
      "Array",
      "Medium"
    ],
    "statement": "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise) in-place.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[[7,4,1],[8,5,2],[9,6,3]]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function rotate(matrix) {\n    // Write your code here\n    let n = matrix.length;\n    for (let i = 0; i < n; i++) {\n        for (let j = i + 1; j < n; j++) {\n            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];\n        }\n    }\n    for (let i = 0; i < n; i++) matrix[i].reverse();\n}",
      "python": "def rotate(matrix: list[list[int]]) -> None:\n    # Write your code here\n    n = len(matrix)\n    for i in range(n):\n        for j in range(i + 1, n):\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n    for i in range(n):\n        matrix[i].reverse()",
      "java": "public class Solution {\n    public void rotate(int[][] matrix) {\n        // Write your code here\n        int n = matrix.length;\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                int temp = matrix[i][j];\n                matrix[i][j] = matrix[j][i];\n                matrix[j][i] = temp;\n            }\n        }\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n / 2; j++) {\n                int temp = matrix[i][j];\n                matrix[i][j] = matrix[i][n - 1 - j];\n                matrix[i][n - 1 - j] = temp;\n            }\n        }\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        // Write your code here\n        int n = matrix.size();\n        for (int i = 0; i < n; ++i) {\n            for (int j = i + 1; j < n; ++j) {\n                swap(matrix[i][j], matrix[j][i]);\n            }\n        }\n        for (int i = 0; i < n; ++i) {\n            reverse(matrix[i].begin(), matrix[i].end());\n        }\n    }\n};",
      "go": "package main\n\nfunc rotate(matrix [][]int) {\n    // Write your code here\n    n := len(matrix)\n    for i := 0; i < n; i++ {\n        for j := i + 1; j < n; j++ {\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n        }\n    }\n    for i := 0; i < n; i++ {\n        for j := 0; j < n/2; j++ {\n            matrix[i][j], matrix[i][n-1-j] = matrix[i][n-1-j], matrix[i][j]\n        }\n    }\n}"
    },
    "testCases": [
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "expected": "[[7,4,1],[8,5,2],[9,6,3]]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0110": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0110",
    "title": "Group Anagrams",
    "difficulty": "Medium",
    "topic": "HashMap",
    "xp": 100,
    "tags": [
      "HashMap",
      "Medium"
    ],
    "statement": "Given an array of strings strs, group the anagrams together. You can return the answer in any order.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[\\\"eat\\\",\\\"tea\\\",\\\"tan\\\",\\\"ate\\\",\\\"nat\\\",\\\"bat\\\"]",
        "output": "[[\\\"bat\\\"],[\\\"nat\\\",\\\"tan\\\"],[\\\"ate\\\",\\\"eat\\\",\\\"tea\\\"]]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function groupAnagrams(strs) {\n    // Write your code here\n    let map = {};\n    for (let s of strs) {\n        let sorted = s.split('').sort().join('');\n        if (!map[sorted]) map[sorted] = [];\n        map[sorted].push(s);\n    }\n    return Object.values(map);\n}",
      "python": "def groupAnagrams(strs: list[str]) -> list[list[str]]:\n    # Write your code here\n    from collections import defaultdict\n    mp = defaultdict(list)\n    for s in strs:\n        mp[\"\".join(sorted(s))].append(s)\n    return list(mp.values())",
      "java": "public class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Write your code here\n        if (strs == null || strs.length == 0) return new ArrayList<>();\n        Map<String, List<String>> map = new HashMap<>();\n        for (String s : strs) {\n            char[] ca = s.toCharArray();\n            Arrays.sort(ca);\n            String key = String.valueOf(ca);\n            if (!map.containsKey(key)) map.put(key, new ArrayList<>());\n            map.get(key).add(s);\n        }\n        return new ArrayList<>(map.values());\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        // Write your code here\n        unordered_map<string, vector<string>> map;\n        for (string s : strs) {\n            string t = s;\n            sort(t.begin(), t.end());\n            map[t].push_back(s);\n        }\n        vector<vector<string>> res;\n        for (auto p : map) res.push_back(p.second);\n        return res;\n    }\n};",
      "go": "package main\n\nfunc groupAnagrams(strs []string) [][]string {\n    // Write your code here\n    mp := make(map[string][]string)\n    for _, s := range strs {\n        r := []rune(s)\n        // Bubble sort or sort package, but sorting runes is quick\n        for i := 0; i < len(r); i++ {\n            for j := i+1; j < len(r); j++ {\n                if r[i] > r[j] { r[i], r[j] = r[j], r[i] }\n            }\n        }\n        key := string(r)\n        mp[key] = append(mp[key], s)\n    }\n    var res [][]string\n    for _, val := range mp { res = append(res, val) }\n    return res\n}"
    },
    "testCases": [
      {
        "input": "[\\\"eat\\\",\\\"tea\\\",\\\"tan\\\",\\\"ate\\\",\\\"nat\\\",\\\"bat\\\"]",
        "expected": "[[\\\"bat\\\"],[\\\"nat\\\",\\\"tan\\\"],[\\\"ate\\\",\\\"eat\\\",\\\"tea\\\"]]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0111": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0111",
    "title": "Jump Game",
    "difficulty": "Medium",
    "topic": "DP",
    "xp": 100,
    "tags": [
      "DP",
      "Medium"
    ],
    "statement": "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[2,3,1,1,4]",
        "output": "true",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function canJump(nums) {\n    // Write your code here\n    let reachable = 0;\n    for (let i = 0; i < nums.length; i++) {\n        if (i > reachable) return false;\n        reachable = Math.max(reachable, i + nums[i]);\n    }\n    return true;\n}",
      "python": "def canJump(nums: list[int]) -> bool:\n    # Write your code here\n    reachable = 0\n    for i, num in enumerate(nums):\n        if i > reachable: return False\n        reachable = max(reachable, i + num)\n    return True",
      "java": "public class Solution {\n    public boolean canJump(int[] nums) {\n        // Write your code here\n        int reachable = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (i > reachable) return false;\n            reachable = Math.max(reachable, i + nums[i]);\n        }\n        return true;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        // Write your code here\n        int reachable = 0;\n        for (int i = 0; i < nums.size(); ++i) {\n            if (i > reachable) return false;\n            reachable = max(reachable, i + nums[i]);\n        }\n        return true;\n    }\n};",
      "go": "package main\n\nfunc canJump(nums []int) bool {\n    // Write your code here\n    reachable := 0\n    for i, num := range nums {\n        if i > reachable { return false }\n        if i + num > reachable { reachable = i + num }\n    }\n    return true\n}"
    },
    "testCases": [
      {
        "input": "[2,3,1,1,4]",
        "expected": "true"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0112": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0112",
    "title": "Merge Intervals",
    "difficulty": "Medium",
    "topic": "Array",
    "xp": 100,
    "tags": [
      "Array",
      "Medium"
    ],
    "statement": "Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals and return an array of the non-overlapping intervals.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1,6],[8,10],[15,18]]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function merge(intervals) {\n    // Write your code here\n    if (intervals.length <= 1) return intervals;\n    intervals.sort((a, b) => a[0] - b[0]);\n    let res = [intervals[0]];\n    for (let i = 1; i < intervals.length; i++) {\n        let last = res[res.length - 1];\n        if (intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);\n        else res.push(intervals[i]);\n    }\n    return res;\n}",
      "python": "def merge(intervals: list[list[int]]) -> list[list[int]]:\n    # Write your code here\n    if len(intervals) <= 1: return intervals\n    intervals.sort(key=lambda x: x[0])\n    res = [intervals[0]]\n    for i in range(1, len(intervals)):\n        if intervals[i][0] <= res[-1][1]:\n            res[-1][1] = max(res[-1][1], intervals[i][1])\n        else: res.append(intervals[i])\n    return res",
      "java": "public class Solution {\n    public int[][] merge(int[][] intervals) {\n        // Write your code here\n        if (intervals.length <= 1) return intervals;\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n        List<int[]> res = new ArrayList<>();\n        res.add(intervals[0]);\n        for (int i = 1; i < intervals.length; i++) {\n            int[] last = res.get(res.size() - 1);\n            if (intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);\n            else res.add(intervals[i]);\n        }\n        return res.toArray(new int[res.size()][]);\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        // Write your code here\n        if (intervals.size() <= 1) return intervals;\n        sort(intervals.begin(), intervals.end());\n        vector<vector<int>> res = {intervals[0]};\n        for (int i = 1; i < intervals.size(); ++i) {\n            if (intervals[i][0] <= res.back()[1]) res.back()[1] = max(res.back()[1], intervals[i][1]);\n            else res.push_back(intervals[i]);\n        }\n        return res;\n    }\n};",
      "go": "package main\n\nfunc merge(intervals [][]int) [][]int {\n    // Write your code here\n    if len(intervals) <= 1 { return intervals }\n    // Sort intervals by start time using quick sort logic or sort.Slice\n    for i := 0; i < len(intervals); i++ {\n        for j := i+1; j < len(intervals); j++ {\n            if intervals[i][0] > intervals[j][0] { intervals[i], intervals[j] = intervals[j], intervals[i] }\n        }\n    }\n    res := [][]int{intervals[0]}\n    for i := 1; i < len(intervals); i++ {\n        last := res[len(res)-1]\n        if intervals[i][0] <= last[1] {\n            if intervals[i][1] > last[1] { last[1] = intervals[i][1] }\n        } else {\n            res = append(res, intervals[i])\n        }\n    }\n    return res\n}"
    },
    "testCases": [
      {
        "input": "[[1,3],[2,6],[8,10],[15,18]]",
        "expected": "[[1,6],[8,10],[15,18]]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0113": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0113",
    "title": "Insert Interval",
    "difficulty": "Medium",
    "topic": "Array",
    "xp": 100,
    "tags": [
      "Array",
      "Medium"
    ],
    "statement": "You are given an array of non-overlapping intervals sorted by start time. Insert a new interval and merge if necessary.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[[1,3],[6,9]], [2,5]",
        "output": "[[1,5],[6,9]]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function insert(intervals, newInterval) {\n    // Write your code here\n    let res = [], i = 0, n = intervals.length;\n    while (i < n && intervals[i][1] < newInterval[0]) res.push(intervals[i++]);\n    while (i < n && intervals[i][0] <= newInterval[1]) {\n        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);\n        newInterval[1] = Math.max(newInterval[1], intervals[i++][1]);\n    }\n    res.push(newInterval);\n    while (i < n) res.push(intervals[i++]);\n    return res;\n}",
      "python": "def insert(intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:\n    # Write your code here\n    res, i, n = [], 0, len(intervals)\n    while i < n and intervals[i][1] < newInterval[0]:\n        res.append(intervals[i]); i += 1\n    while i < n and intervals[i][0] <= newInterval[1]:\n        newInterval[0] = min(newInterval[0], intervals[i][0])\n        newInterval[1] = max(newInterval[1], intervals[i][1])\n        i += 1\n    res.append(newInterval)\n    while i < n:\n        res.append(intervals[i]); i += 1\n    return res",
      "java": "public class Solution {\n    public int[][] insert(int[][] intervals, int[] newInterval) {\n        // Write your code here\n        List<int[]> res = new ArrayList<>();\n        int i = 0, n = intervals.length;\n        while (i < n && intervals[i][1] < newInterval[0]) res.add(intervals[i++]);\n        while (i < n && intervals[i][0] <= newInterval[1]) {\n            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);\n            newInterval[1] = Math.max(newInterval[1], intervals[i++][1]);\n        }\n        res.add(newInterval);\n        while (i < n) res.add(intervals[i++]);\n        return res.toArray(new int[res.size()][]);\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {\n        // Write your code here\n        vector<vector<int>> res;\n        int i = 0, n = intervals.size();\n        while (i < n && intervals[i][1] < newInterval[0]) res.push_back(intervals[i++]);\n        while (i < n && intervals[i][0] <= newInterval[1]) {\n            newInterval[0] = min(newInterval[0], intervals[i][0]);\n            newInterval[1] = max(newInterval[1], intervals[i++][1]);\n        }\n        res.push_back(newInterval);\n        while (i < n) res.push_back(intervals[i++]);\n        return res;\n    }\n};",
      "go": "package main\n\nfunc insert(intervals [][]int, newInterval []int) [][]int {\n    // Write your code here\n    var res [][]int\n    i, n := 0, len(intervals)\n    for i < n && intervals[i][1] < newInterval[0] {\n        res = append(res, intervals[i])\n        i++\n    }\n    for i < n && intervals[i][0] <= newInterval[1] {\n        if intervals[i][0] < newInterval[0] { newInterval[0] = intervals[i][0] }\n        if intervals[i][1] > newInterval[1] { newInterval[1] = intervals[i][1] }\n        i++\n    }\n    res = append(res, newInterval)\n    for i < n {\n        res = append(res, intervals[i])\n        i++\n    }\n    return res\n}"
    },
    "testCases": [
      {
        "input": "[[1,3],[6,9]], [2,5]",
        "expected": "[[1,5],[6,9]]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0114": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0114",
    "title": "Unique Paths",
    "difficulty": "Medium",
    "topic": "DP",
    "xp": 100,
    "tags": [
      "DP",
      "Medium"
    ],
    "statement": "There is a robot on an m x n grid. The robot can only move either down or right. Find the number of unique paths to the bottom-right corner.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "3, 7",
        "output": "28",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function uniquePaths(m, n) {\n    // Write your code here\n    let dp = Array(n).fill(1);\n    for (let i = 1; i < m; i++) {\n        for (let j = 1; j < n; j++) dp[j] += dp[j - 1];\n    }\n    return dp[n - 1];\n}",
      "python": "def uniquePaths(m: int, n: int) -> int:\n    # Write your code here\n    dp = [1] * n\n    for i in range(1, m):\n        for j in range(1, n):\n            dp[j] += dp[j - 1]\n    return dp[-1]",
      "java": "public class Solution {\n    public int uniquePaths(int m, int n) {\n        // Write your code here\n        int[] dp = new int[n];\n        Arrays.fill(dp, 1);\n        for (int i = 1; i < m; i++) {\n            for (int j = 1; j < n; j++) dp[j] += dp[j - 1];\n        }\n        return dp[n - 1];\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        // Write your code here\n        vector<int> dp(n, 1);\n        for (int i = 1; i < m; ++i) {\n            for (int j = 1; j < n; ++j) dp[j] += dp[j - 1];\n        }\n        return dp[n - 1];\n    }\n};",
      "go": "package main\n\nfunc uniquePaths(m int, n int) int {\n    // Write your code here\n    dp := make([]int, n)\n    for i := range dp { dp[i] = 1 }\n    for i := 1; i < m; i++ {\n        for j := 1; j < n; j++ { dp[j] += dp[j - 1] }\n    }\n    return dp[n - 1]\n}"
    },
    "testCases": [
      {
        "input": "3, 7",
        "expected": "28"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0115": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0115",
    "title": "Minimum Path Sum",
    "difficulty": "Medium",
    "topic": "DP",
    "xp": 100,
    "tags": [
      "DP",
      "Medium"
    ],
    "statement": "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[[1,3,1],[1,5,1],[4,2,1]]",
        "output": "7",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function minPathSum(grid) {\n    // Write your code here\n    let m = grid.length, n = grid[0].length;\n    for (let i = 0; i < m; i++) {\n        for (let j = 0; j < n; j++) {\n            if (i === 0 && j === 0) continue;\n            else if (i === 0) grid[i][j] += grid[i][j - 1];\n            else if (j === 0) grid[i][j] += grid[i - 1][j];\n            else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);\n        }\n    }\n    return grid[m - 1][n - 1];\n}",
      "python": "def minPathSum(grid: list[list[int]]) -> int:\n    # Write your code here\n    m, n = len(grid), len(grid[0])\n    for i in range(m):\n        for j in range(n):\n            if i == 0 and j == 0: continue\n            elif i == 0: grid[i][j] += grid[i][j - 1]\n            elif j == 0: grid[i][j] += grid[i - 1][j]\n            else: grid[i][j] += min(grid[i - 1][j], grid[i][j - 1])\n    return grid[-1][-1]",
      "java": "public class Solution {\n    public int minPathSum(int[][] grid) {\n        // Write your code here\n        int m = grid.length, n = grid[0].length;\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (i == 0 && j == 0) continue;\n                else if (i == 0) grid[i][j] += grid[i][j - 1];\n                else if (j == 0) grid[i][j] += grid[i - 1][j];\n                else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);\n            }\n        }\n        return grid[m - 1][n - 1];\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int minPathSum(vector<vector<int>>& grid) {\n        // Write your code here\n        int m = grid.size(), n = grid[0].size();\n        for (int i = 0; i < m; ++i) {\n            for (int j = 0; j < n; ++j) {\n                if (i == 0 && j == 0) continue;\n                else if (i == 0) grid[i][j] += grid[i][j - 1];\n                else if (j == 0) grid[i][j] += grid[i - 1][j];\n                else grid[i][j] += min(grid[i - 1][j], grid[i][j - 1]);\n            }\n        }\n        return grid[m - 1][n - 1];\n    }\n};",
      "go": "package main\n\nfunc minPathSum(grid [][]int) int {\n    // Write your code here\n    m, n := len(grid), len(grid[0])\n    for i := 0; i < m; i++ {\n        for j := 0; j < n; j++ {\n            if i == 0 && j == 0 { continue }\n            if i == 0 { grid[i][j] += grid[i][j - 1]; continue }\n            if j == 0 { grid[i][j] += grid[i - 1][j]; continue }\n            minVal := grid[i - 1][j]\n            if grid[i][j - 1] < minVal { minVal = grid[i][j - 1] }\n            grid[i][j] += minVal\n        }\n    }\n    return grid[m - 1][n - 1]\n}"
    },
    "testCases": [
      {
        "input": "[[1,3,1],[1,5,1],[4,2,1]]",
        "expected": "7"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0116": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0116",
    "title": "Set Matrix Zeroes",
    "difficulty": "Medium",
    "topic": "Array",
    "xp": 100,
    "tags": [
      "Array",
      "Medium"
    ],
    "statement": "Given an m x n integer matrix, if an element is 0, set its entire row and column to 0. Do it in-place.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[[1,1,1],[1,0,1],[1,1,1]]",
        "output": "[[1,0,1],[0,0,0],[1,0,1]]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function setZeroes(matrix) {\n    // Write your code here\n    let isCol = false, m = matrix.length, n = matrix[0].length;\n    for (let i = 0; i < m; i++) {\n        if (matrix[i][0] === 0) isCol = true;\n        for (let j = 1; j < n; j++) {\n            if (matrix[i][j] === 0) { matrix[0][j] = 0; matrix[i][0] = 0; }\n        }\n    }\n    for (let i = 1; i < m; i++) {\n        for (let j = 1; j < n; j++) {\n            if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;\n        }\n    }\n    if (matrix[0][0] === 0) { for (let j = 0; j < n; j++) matrix[0][j] = 0; }\n    if (isCol) { for (let i = 0; i < m; i++) matrix[i][0] = 0; }\n}",
      "python": "def setZeroes(matrix: list[list[int]]) -> None:\n    # Write your code here\n    is_col = False\n    m, n = len(matrix), len(matrix[0])\n    for i in range(m):\n        if matrix[i][0] == 0: is_col = True\n        for j in range(1, n):\n            if matrix[i][j] == 0: matrix[0][j] = 0; matrix[i][0] = 0\n    for i in range(1, m):\n        for j in range(1, n):\n            if matrix[i][0] == 0 or matrix[0][j] == 0: matrix[i][j] = 0\n    if matrix[0][0] == 0:\n        for j in range(n): matrix[0][j] = 0\n    if is_col:\n        for i in range(m): matrix[i][0] = 0",
      "java": "public class Solution {\n    public void setZeroes(int[][] matrix) {\n        // Write your code here\n        boolean isCol = false;\n        int m = matrix.length, n = matrix[0].length;\n        for (int i = 0; i < m; i++) {\n            if (matrix[i][0] == 0) isCol = true;\n            for (int j = 1; j < n; j++) {\n                if (matrix[i][j] == 0) { matrix[0][j] = 0; matrix[i][0] = 0; }\n            }\n        }\n        for (int i = 1; i < m; i++) {\n            for (int j = 1; j < n; j++) {\n                if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;\n            }\n        }\n        if (matrix[0][0] == 0) { for (int j = 0; j < n; j++) matrix[0][j] = 0; }\n        if (isCol) { for (int i = 0; i < m; i++) matrix[i][0] = 0; }\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void setZeroes(vector<vector<int>>& matrix) {\n        // Write your code here\n        bool isCol = false;\n        int m = matrix.size(), n = matrix[0].size();\n        for (int i = 0; i < m; ++i) {\n            if (matrix[i][0] == 0) isCol = true;\n            for (int j = 1; j < n; ++j) {\n                if (matrix[i][j] == 0) { matrix[0][j] = 0; matrix[i][0] = 0; }\n            }\n        }\n        for (int i = 1; i < m; ++i) {\n            for (int j = 1; j < n; ++j) {\n                if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;\n            }\n        }\n        if (matrix[0][0] == 0) { for (int j = 0; j < n; ++j) matrix[0][j] = 0; }\n        if (isCol) { for (int i = 0; i < m; ++i) matrix[i][0] = 0; }\n    }\n};",
      "go": "package main\n\nfunc setZeroes(matrix [][]int) {\n    // Write your code here\n    isCol := false\n    m, n := len(matrix), len(matrix[0])\n    for i := 0; i < m; i++ {\n        if matrix[i][0] == 0 { isCol = true }\n        for j := 1; j < n; j++ {\n            if matrix[i][j] == 0 { matrix[0][j] = 0; matrix[i][0] = 0 }\n        }\n    }\n    for i := 1; i < m; i++ {\n        for j := 1; j < n; j++ {\n            if matrix[i][0] == 0 || matrix[0][j] == 0 { matrix[i][j] = 0 }\n        }\n    }\n    if matrix[0][0] == 0 {\n        for j := 0; j < n; j++ { matrix[0][j] = 0 }\n    }\n    if isCol {\n        for i := 0; i < m; i++ { matrix[i][0] = 0 }\n    }\n}"
    },
    "testCases": [
      {
        "input": "[[1,1,1],[1,0,1],[1,1,1]]",
        "expected": "[[1,0,1],[0,0,0],[1,0,1]]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0117": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0117",
    "title": "Search a 2D Matrix",
    "difficulty": "Medium",
    "topic": "Array",
    "xp": 100,
    "tags": [
      "Array",
      "Medium"
    ],
    "statement": "Write an efficient algorithm that searches for a value target in an m x n integer matrix. The matrix is sorted.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3",
        "output": "true",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function searchMatrix(matrix, target) {\n    // Write your code here\n    if (!matrix.length) return false;\n    let m = matrix.length, n = matrix[0].length, l = 0, r = m * n - 1;\n    while (l <= r) {\n        let mid = Math.floor((l + r) / 2);\n        let val = matrix[Math.floor(mid / n)][mid % n];\n        if (val === target) return true;\n        else if (val < target) l = mid + 1;\n        else r = mid - 1;\n    }\n    return false;\n}",
      "python": "def searchMatrix(matrix: list[list[int]], target: int) -> bool:\n    # Write your code here\n    if not matrix: return False\n    m, n = len(matrix), len(matrix[0])\n    l, r = 0, m * n - 1\n    while l <= r:\n        mid = (l + r) // 2\n        val = matrix[mid // n][mid % n]\n        if val == target: return True\n        elif val < target: l = mid + 1\n        else: r = mid - 1\n    return False",
      "java": "public class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        // Write your code here\n        if (matrix.length == 0) return false;\n        int m = matrix.length, n = matrix[0].length, l = 0, r = m * n - 1;\n        while (l <= r) {\n            int mid = (l + r) / 2;\n            int val = matrix[mid / n][mid % n];\n            if (val == target) return true;\n            else if (val < target) l = mid + 1;\n            else r = mid - 1;\n        }\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        // Write your code here\n        if (matrix.empty()) return false;\n        int m = matrix.size(), n = matrix[0].size(), l = 0, r = m * n - 1;\n        while (l <= r) {\n            int mid = (l + r) / 2;\n            int val = matrix[mid / n][mid % n];\n            if (val == target) return true;\n            else if (val < target) l = mid + 1;\n            else r = mid - 1;\n        }\n        return false;\n    }\n};",
      "go": "package main\n\nfunc searchMatrix(matrix [][]int, target int) bool {\n    // Write your code here\n    if len(matrix) == 0 { return false }\n    m, n := len(matrix), len(matrix[0])\n    l, r := 0, m*n-1\n    for l <= r {\n        mid := (l + r) / 2\n        val := matrix[mid/n][mid%n]\n        if val == target { return true }\n        if val < target { l = mid + 1 } else { r = mid - 1 }\n    }\n    return false\n}"
    },
    "testCases": [
      {
        "input": "[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3",
        "expected": "true"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0118": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0118",
    "title": "Sort Colors",
    "difficulty": "Medium",
    "topic": "Array",
    "xp": 100,
    "tags": [
      "Array",
      "Medium"
    ],
    "statement": "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[2,0,2,1,1,0]",
        "output": "[0,0,1,1,2,2]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function sortColors(nums) {\n    // Write your code here\n    let p0 = 0, curr = 0, p2 = nums.length - 1;\n    while (curr <= p2) {\n        if (nums[curr] === 0) { [nums[p0], nums[curr]] = [nums[curr], nums[p0]]; p0++; curr++; }\n        else if (nums[curr] === 2) { [nums[curr], nums[p2]] = [nums[p2], nums[curr]]; p2--; }\n        else curr++;\n    }\n}",
      "python": "def sortColors(nums: list[int]) -> None:\n    # Write your code here\n    p0, curr, p2 = 0, 0, len(nums) - 1\n    while curr <= p2:\n        if nums[curr] == 0:\n            nums[p0], nums[curr] = nums[curr], nums[p0]\n            p0 += 1; curr += 1\n        elif nums[curr] == 2:\n            nums[curr], nums[p2] = nums[p2], nums[curr]\n            p2 -= 1\n        else: curr += 1",
      "java": "public class Solution {\n    public void sortColors(int[] nums) {\n        // Write your code here\n        int p0 = 0, curr = 0, p2 = nums.length - 1;\n        while (curr <= p2) {\n            if (nums[curr] == 0) {\n                int temp = nums[p0]; nums[p0] = nums[curr]; nums[curr] = temp;\n                p0++; curr++;\n            } else if (nums[curr] == 2) {\n                int temp = nums[curr]; nums[curr] = nums[p2]; nums[p2] = temp;\n                p2--;\n            } else curr++;\n        }\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        // Write your code here\n        int p0 = 0, curr = 0, p2 = nums.size() - 1;\n        while (curr <= p2) {\n            if (nums[curr] == 0) { swap(nums[p0++], nums[curr++]); }\n            else if (nums[curr] == 2) { swap(nums[curr], nums[p2--]); }\n            else curr++;\n        }\n    }\n};",
      "go": "package main\n\nfunc sortColors(nums []int) {\n    // Write your code here\n    p0, curr, p2 := 0, 0, len(nums)-1\n    for curr <= p2 {\n        if nums[curr] == 0 {\n            nums[p0], nums[curr] = nums[curr], nums[p0]\n            p0++; curr++\n        } else if nums[curr] == 2 {\n            nums[curr], nums[p2] = nums[p2], nums[curr]\n            p2--\n        } else { curr++ }\n    }\n}"
    },
    "testCases": [
      {
        "input": "[2,0,2,1,1,0]",
        "expected": "[0,0,1,1,2,2]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0119": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0119",
    "title": "Subsets",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "xp": 100,
    "tags": [
      "Backtracking",
      "Medium"
    ],
    "statement": "Given an integer array nums of unique elements, return all possible subsets (the power set).\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[1,2,3]",
        "output": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function subsets(nums) {\n    // Write your code here\n    let res = [[]];\n    for (let num of nums) {\n        let len = res.length;\n        for (let i = 0; i < len; i++) res.push([...res[i], num]);\n    }\n    return res;\n}",
      "python": "def subsets(nums: list[int]) -> list[list[int]]:\n    # Write your code here\n    res = [[]]\n    for num in nums:\n        res += [curr + [num] for curr in res]\n    return res",
      "java": "public class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        // Write your code here\n        List<List<Integer>> res = new ArrayList<>();\n        res.add(new ArrayList<>());\n        for (int num : nums) {\n            int size = res.size();\n            for (int i = 0; i < size; i++) {\n                List<Integer> next = new ArrayList<>(res.get(i));\n                next.add(num);\n                res.add(next);\n            }\n        }\n        return res;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> subsets(vector<int>& nums) {\n        // Write your code here\n        vector<vector<int>> res = {{}};\n        for (int num : nums) {\n            int n = res.size();\n            for (int i = 0; i < n; ++i) {\n                vector<int> next = res[i];\n                next.push_back(num);\n                res.push_back(next);\n            }\n        }\n        return res;\n    }\n};",
      "go": "package main\n\nfunc subsets(nums []int) [][]int {\n    // Write your code here\n    res := [][]int{{}}\n    for _, num := range nums {\n        n := len(res)\n        for i := 0; i < n; i++ {\n            next := make([]int, len(res[i])+1)\n            copy(next, res[i])\n            next[len(res[i])] = num\n            res = append(res, next)\n        }\n    }\n    return res\n}"
    },
    "testCases": [
      {
        "input": "[1,2,3]",
        "expected": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0120": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0120",
    "title": "Word Search",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "xp": 100,
    "tags": [
      "Backtracking",
      "Medium"
    ],
    "statement": "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[[\\\"A\\\",\\\"B\\\",\\\"C\\\",\\\"E\\\"],[\\\"S\\\",\\\"F\\\",\\\"C\\\",\\\"S\\\"],[\\\"A\\\",\\\"D\\\",\\\"E\\\",\\\"E\\\"]], \\\"ABCCED\\\"",
        "output": "true",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function exist(board, word) {\n    // Write your code here\n    let m = board.length, n = board[0].length;\n    const dfs = (r, c, i) => {\n        if (i === word.length) return true;\n        if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== word[i]) return false;\n        let temp = board[r][c]; board[r][c] = '#';\n        let found = dfs(r+1, c, i+1) || dfs(r-1, c, i+1) || dfs(r, c+1, i+1) || dfs(r, c-1, i+1);\n        board[r][c] = temp;\n        return found;\n    };\n    for (let i = 0; i < m; i++) {\n        for (let j = 0; j < n; j++) {\n            if (dfs(i, j, 0)) return true;\n        }\n    }\n    return false;\n}",
      "python": "def exist(board: list[list[str]], word: str) -> bool:\n    # Write your code here\n    m, n = len(board), len(board[0])\n    def dfs(r, c, i):\n        if i == len(word): return True\n        if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != word[i]: return False\n        temp = board[r][c]; board[r][c] = '#'\n        found = dfs(r+1, c, i+1) or dfs(r-1, c, i+1) or dfs(r, c+1, i+1) or dfs(r, c-1, i+1)\n        board[r][c] = temp\n        return found\n    for i in range(m):\n        for j in range(n):\n            if dfs(i, j, 0): return True\n    return False",
      "java": "public class Solution {\n    public boolean exist(char[][] board, String word) {\n        // Write your code here\n        int m = board.length, n = board[0].length;\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (dfs(board, word, i, j, 0)) return true;\n            }\n        }\n        return false;\n    }\n    private boolean dfs(char[][] board, String word, int r, int c, int i) {\n        if (i == word.length()) return true;\n        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] != word.charAt(i)) return false;\n        char temp = board[r][c]; board[r][c] = '#';\n        boolean found = dfs(board, word, r + 1, c, i + 1) || dfs(board, word, r - 1, c, i + 1) ||\n                        dfs(board, word, r, c + 1, i + 1) || dfs(board, word, r, c - 1, i + 1);\n        board[r][c] = temp;\n        return found;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool exist(vector<vector<char>>& board, string word) {\n        // Write your code here\n        int m = board.size(), n = board[0].size();\n        for (int i = 0; i < m; ++i) {\n            for (int j = 0; j < n; ++j) {\n                if (dfs(board, word, i, j, 0)) return true;\n            }\n        }\n        return false;\n    }\n    bool dfs(vector<vector<char>>& board, string& word, int r, int c, int i) {\n        if (i == word.length()) return true;\n        if (r < 0 || r >= board.size() || c < 0 || c >= board[0].size() || board[r][c] != word[i]) return false;\n        char temp = board[r][c]; board[r][c] = '#';\n        bool found = dfs(board, word, r + 1, c, i + 1) || dfs(board, word, r - 1, c, i + 1) ||\n                     dfs(board, word, r, c + 1, i + 1) || dfs(board, word, r, c - 1, i + 1);\n        board[r][c] = temp;\n        return found;\n    }\n};",
      "go": "package main\n\nfunc exist(board [][]byte, word string) bool {\n    // Write your code here\n    m, n := len(board), len(board[0])\n    var dfs func(int, int, int) bool\n    dfs = func(r int, c int, i int) bool {\n        if i == len(word) { return true }\n        if r < 0 || r >= m || c < 0 || c >= n || board[r][c] != word[i] { return false }\n        temp := board[r][c]\n        board[r][c] = '#'\n        found := dfs(r+1, c, i+1) || dfs(r-1, c, i+1) || dfs(r, c+1, i+1) || dfs(r, c-1, i+1)\n        board[r][c] = temp\n        return found\n    }\n    for i := 0; i < m; i++ {\n        for j := 0; j < n; j++ {\n            if dfs(i, j, 0) { return true }\n        }\n    }\n    return false\n}"
    },
    "testCases": [
      {
        "input": "[[\\\"A\\\",\\\"B\\\",\\\"C\\\",\\\"E\\\"],[\\\"S\\\",\\\"F\\\",\\\"C\\\",\\\"S\\\"],[\\\"A\\\",\\\"D\\\",\\\"E\\\",\\\"E\\\"]], \\\"ABCCED\\\"",
        "expected": "true"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0121": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0121",
    "title": "Validate Binary Search Tree",
    "difficulty": "Medium",
    "topic": "Tree",
    "xp": 100,
    "tags": [
      "Tree",
      "Medium"
    ],
    "statement": "Given the root of a binary tree, determine if it is a valid binary search tree (BST).\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "root = [2,1,3]",
        "output": "true",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function isValidBST(root) {\n    // Write your code here\n    const validate = (node, low, high) => {\n        if (!node) return true;\n        if ((low !== null && node.val <= low) || (high !== null && node.val >= high)) return false;\n        return validate(node.left, low, node.val) && validate(node.right, node.val, high);\n    };\n    return validate(root, null, null);\n}",
      "python": "def isValidBST(root: TreeNode) -> bool:\n    # Write your code here\n    def validate(node, low=float('-inf'), high=float('inf')):\n        if not node: return True\n        if node.val <= low or node.val >= high: return False\n        return validate(node.left, low, node.val) and validate(node.right, node.val, high)\n    return validate(root)",
      "java": "public class Solution {\n    public boolean isValidBST(TreeNode root) {\n        // Write your code here\n        return validate(root, null, null);\n    }\n    private boolean validate(TreeNode node, Integer low, Integer high) {\n        if (node == null) return true;\n        if ((low != null && node.val <= low) || (high != null && node.val >= high)) return false;\n        return validate(node.left, low, node.val) && validate(node.right, node.val, high);\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        // Write your code here\n        return validate(root, nullptr, nullptr);\n    }\n    bool validate(TreeNode* node, long long* low, long long* high) {\n        if (!node) return true;\n        if ((low && node->val <= *low) || (high && node->val >= *high)) return false;\n        long long val = node->val;\n        return validate(node->left, low, &val) && validate(node->right, &val, high);\n    }\n};",
      "go": "package main\n\nfunc isValidBST(root *TreeNode) bool {\n    // Write your code here\n    var validate func(*TreeNode, *int, *int) bool\n    validate = func(node *TreeNode, low *int, high *int) bool {\n        if node == nil { return true }\n        if (low != nil && node.Val <= *low) || (high != nil && node.Val >= *high) { return false }\n        val := node.Val\n        return validate(node.Left, low, &val) && validate(node.Right, &val, high)\n    }\n    return validate(root, nil, nil)\n}"
    },
    "testCases": [
      {
        "input": "root = [2,1,3]",
        "expected": "true"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0122": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0122",
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "topic": "Tree",
    "xp": 100,
    "tags": [
      "Tree",
      "Medium"
    ],
    "statement": "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[9,20],[15,7]]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function levelOrder(root) {\n    // Write your code here\n    if (!root) return [];\n    let res = [], q = [root];\n    while (q.length) {\n        let len = q.length, level = [];\n        for (let i = 0; i < len; i++) {\n            let n = q.shift(); level.push(n.val);\n            if (n.left) q.push(n.left);\n            if (n.right) q.push(n.right);\n        }\n        res.push(level);\n    }\n    return res;\n}",
      "python": "def levelOrder(root: TreeNode) -> list[list[int]]:\n    # Write your code here\n    if not root: return []\n    res, q = [], [root]\n    while q:\n        level, length = [], len(q)\n        for _ in range(length):\n            node = q.pop(0); level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res",
      "java": "public class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        // Write your code here\n        List<List<Integer>> res = new ArrayList<>();\n        if (root == null) return res;\n        Queue<TreeNode> q = new LinkedList<>();\n        q.add(root);\n        while (!q.isEmpty()) {\n            int len = q.size();\n            List<Integer> level = new ArrayList<>();\n            for (int i = 0; i < len; i++) {\n                TreeNode n = q.poll();\n                level.add(n.val);\n                if (n.left != null) q.add(n.left);\n                if (n.right != null) q.add(n.right);\n            }\n            res.add(level);\n        }\n        return res;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        // Write your code here\n        vector<vector<int>> res;\n        if (!root) return res;\n        queue<TreeNode*> q; q.push(root);\n        while (!q.empty()) {\n            int len = q.size();\n            vector<int> level;\n            for (int i = 0; i < len; ++i) {\n                TreeNode* n = q.front(); q.pop();\n                level.push_back(n->val);\n                if (n->left) q.push(n->left);\n                if (n->right) q.push(n->right);\n            }\n            res.push_back(level);\n        }\n        return res;\n    }\n};",
      "go": "package main\n\nfunc levelOrder(root *TreeNode) [][]int {\n    // Write your code here\n    if root == nil { return nil }\n    var res [][]int\n    q := []*TreeNode{root}\n    for len(q) > 0 {\n        length := len(q)\n        var level []int\n        for i := 0; i < length; i++ {\n            n := q[0]; q = q[1:]\n            level = append(level, n.Val)\n            if n.Left != nil { q = append(q, n.Left) }\n            if n.Right != nil { q = append(q, n.Right) }\n        }\n        res = append(res, level)\n    }\n    return res\n}"
    },
    "testCases": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "expected": "[[3],[9,20],[15,7]]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0123": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0123",
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "Medium",
    "topic": "Tree",
    "xp": 100,
    "tags": [
      "Tree",
      "Medium"
    ],
    "statement": "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
        "output": "[3,9,20,null,null,15,7]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function buildTree(preorder, inorder) {\n    // Write your code here\n    let map = {};\n    for (let i = 0; i < inorder.length; i++) map[inorder[i]] = i;\n    let preIdx = 0;\n    const helper = (l, r) => {\n        if (l > r) return null;\n        let rootVal = preorder[preIdx++];\n        let root = new TreeNode(rootVal);\n        root.left = helper(l, map[rootVal] - 1);\n        root.right = helper(map[rootVal] + 1, r);\n        return root;\n    };\n    return helper(0, inorder.length - 1);\n}",
      "python": "def buildTree(preorder: list[int], inorder: list[int]) -> TreeNode:\n    # Write your code here\n    mp = {val: i for i, val in enumerate(inorder)}\n    pre_idx = 0\n    def helper(l, r):\n        nonlocal pre_idx\n        if l > r: return None\n        val = preorder[pre_idx]\n        pre_idx += 1\n        root = TreeNode(val)\n        root.left = helper(l, mp[val] - 1)\n        root.right = helper(mp[val] + 1, r)\n        return root\n    return helper(0, len(inorder) - 1)",
      "java": "public class Solution {\n    public TreeNode buildTree(int[] preorder, int[] inorder) {\n        // Write your code here\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < inorder.length; i++) map.put(inorder[i], i);\n        return helper(preorder, 0, inorder.length - 1, new int[]{0}, map);\n    }\n    private TreeNode helper(int[] preorder, int l, int r, int[] preIdx, Map<Integer, Integer> map) {\n        if (l > r) return null;\n        int rootVal = preorder[preIdx[0]++];\n        TreeNode root = new TreeNode(rootVal);\n        root.left = helper(preorder, l, map.get(rootVal) - 1, preIdx, map);\n        root.right = helper(preorder, map.get(rootVal) + 1, r, preIdx, map);\n        return root;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {\n        // Write your code here\n        unordered_map<int, int> map;\n        for (int i = 0; i < inorder.size(); ++i) map[inorder[i]] = i;\n        int preIdx = 0;\n        return helper(preorder, 0, inorder.size() - 1, preIdx, map);\n    }\n    TreeNode* helper(vector<int>& preorder, int l, int r, int& preIdx, unordered_map<int, int>& map) {\n        if (l > r) return nullptr;\n        int rootVal = preorder[preIdx++];\n        TreeNode* root = new TreeNode(rootVal);\n        root->left = helper(preorder, l, map[rootVal] - 1, preIdx, map);\n        root->right = helper(preorder, map[rootVal] + 1, r, preIdx, map);\n        return root;\n    }\n};",
      "go": "package main\n\nfunc buildTree(preorder []int, inorder []int) *TreeNode {\n    // Write your code here\n    mp := make(map[int]int)\n    for i, val := range inorder { mp[val] = i }\n    preIdx := 0\n    var helper func(int, int) *TreeNode\n    helper = func(l, r int) *TreeNode {\n        if l > r { return nil }\n        rootVal := preorder[preIdx]\n        preIdx++\n        root := &TreeNode{Val: rootVal}\n        root.Left = helper(l, mp[rootVal]-1)\n        root.Right = helper(mp[rootVal]+1, r)\n        return root\n    }\n    return helper(0, len(inorder)-1)\n}"
    },
    "testCases": [
      {
        "input": "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
        "expected": "[3,9,20,null,null,15,7]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0124": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0124",
    "title": "Flatten Binary Tree to Linked List",
    "difficulty": "Medium",
    "topic": "Tree",
    "xp": 100,
    "tags": [
      "Tree",
      "Medium"
    ],
    "statement": "Given the root of a binary tree, flatten the tree into a single-linked list. The right pointer points to the next node and the left pointer is null.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "root = [1,2,5,3,4,null,6]",
        "output": "[1,null,2,null,3,null,4,null,5,null,6]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function flatten(root) {\n    // Write your code here\n    let curr = root;\n    while (curr) {\n        if (curr.left) {\n            let prev = curr.left;\n            while (prev.right) prev = prev.right;\n            prev.right = curr.right;\n            curr.right = curr.left;\n            curr.left = null;\n        }\n        curr = curr.right;\n    }\n}",
      "python": "def flatten(root: TreeNode) -> None:\n    # Write your code here\n    curr = root\n    while curr:\n        if curr.left:\n            prev = curr.left\n            while prev.right: prev = prev.right\n            prev.right = curr.right\n            curr.right = curr.left\n            curr.left = None\n        curr = curr.right",
      "java": "public class Solution {\n    public void flatten(TreeNode root) {\n        // Write your code here\n        TreeNode curr = root;\n        while (curr != null) {\n            if (curr.left != null) {\n                TreeNode prev = curr.left;\n                while (prev.right != null) prev = prev.right;\n                prev.right = curr.right;\n                curr.right = curr.left;\n                curr.left = null;\n            }\n            curr = curr.right;\n        }\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void flatten(TreeNode* root) {\n        // Write your code here\n        TreeNode* curr = root;\n        while (curr) {\n            if (curr->left) {\n                TreeNode* prev = curr->left;\n                while (prev->right) prev = prev->right;\n                prev->right = curr->right;\n                curr->right = curr->left;\n                curr->left = nullptr;\n            }\n            curr = curr->right;\n        }\n    }\n};",
      "go": "package main\n\nfunc flatten(root *TreeNode) {\n    // Write your code here\n    curr := root\n    for curr != nil {\n        if curr.Left != nil {\n            prev := curr.Left\n            for prev.Right != nil { prev = prev.Right }\n            prev.Right = curr.Right\n            curr.Right = curr.Left\n            curr.Left = nil\n        }\n        curr = curr.Right\n    }\n}"
    },
    "testCases": [
      {
        "input": "root = [1,2,5,3,4,null,6]",
        "expected": "[1,null,2,null,3,null,4,null,5,null,6]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0125": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0125",
    "title": "Best Time to Buy and Sell Stock II",
    "difficulty": "Medium",
    "topic": "DP",
    "xp": 100,
    "tags": [
      "DP",
      "Medium"
    ],
    "statement": "You are given an integer array prices. Find the maximum profit you can achieve by buying and selling stocks multiple times.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[7,1,5,3,6,4]",
        "output": "7",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function maxProfit(prices) {\n    // Write your code here\n    let max = 0;\n    for (let i = 1; i < prices.length; i++) {\n        if (prices[i] > prices[i - 1]) max += prices[i] - prices[i - 1];\n    }\n    return max;\n}",
      "python": "def maxProfit(prices: list[int]) -> int:\n    # Write your code here\n    return sum(max(0, prices[i] - prices[i - 1]) for i in range(1, len(prices)))",
      "java": "public class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n        int max = 0;\n        for (int i = 1; i < prices.length; i++) {\n            if (prices[i] > prices[i - 1]) max += prices[i] - prices[i - 1];\n        }\n        return max;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        // Write your code here\n        int max = 0;\n        for (int i = 1; i < prices.size(); ++i) {\n            if (prices[i] > prices[i - 1]) max += prices[i] - prices[i - 1];\n        }\n        return max;\n    }\n};",
      "go": "package main\n\nfunc maxProfit(prices []int) int {\n    // Write your code here\n    maxProfit := 0\n    for i := 1; i < len(prices); i++ {\n        if prices[i] > prices[i-1] { maxProfit += prices[i] - prices[i-1] }\n    }\n    return maxProfit\n}"
    },
    "testCases": [
      {
        "input": "[7,1,5,3,6,4]",
        "expected": "7"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0126": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0126",
    "title": "Longest Consecutive Sequence",
    "difficulty": "Medium",
    "topic": "HashMap",
    "xp": 100,
    "tags": [
      "HashMap",
      "Medium"
    ],
    "statement": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[100,4,200,1,3,2]",
        "output": "4",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function longestConsecutive(nums) {\n    // Write your code here\n    let set = new Set(nums), longest = 0;\n    for (let num of set) {\n        if (!set.has(num - 1)) {\n            let currNum = num, currStreak = 1;\n            while (set.has(currNum + 1)) { currNum++; currStreak++; }\n            longest = Math.max(longest, currStreak);\n        }\n    }\n    return longest;\n}",
      "python": "def longestConsecutive(nums: list[int]) -> int:\n    # Write your code here\n    num_set = set(nums)\n    longest = 0\n    for num in num_set:\n        if num - 1 not in num_set:\n            curr = num\n            streak = 1\n            while curr + 1 in num_set:\n                curr += 1; streak += 1\n            longest = max(longest, streak)\n    return longest",
      "java": "public class Solution {\n    public int longestConsecutive(int[] nums) {\n        // Write your code here\n        Set<Integer> set = new HashSet<>();\n        for (int n : nums) set.add(n);\n        int longest = 0;\n        for (int num : set) {\n            if (!set.contains(num - 1)) {\n                int currNum = num;\n                int currStreak = 1;\n                while (set.contains(currNum + 1)) { currNum++; currStreak++; }\n                longest = Math.max(longest, currStreak);\n            }\n        }\n        return longest;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        // Write your code here\n        unordered_set<int> set(nums.begin(), nums.end());\n        int longest = 0;\n        for (int num : set) {\n            if (!set.count(num - 1)) {\n                int currNum = num;\n                int currStreak = 1;\n                while (set.count(currNum + 1)) { currNum++; currStreak++; }\n                longest = max(longest, currStreak);\n            }\n        }\n        return longest;\n    }\n};",
      "go": "package main\n\nfunc longestConsecutive(nums []int) int {\n    // Write your code here\n    set := make(map[int]bool)\n    for _, num := range nums { set[num] = true }\n    longest := 0\n    for num := range set {\n        if !set[num-1] {\n            curr := num\n            streak := 1\n            for set[curr+1] { curr++; streak++ }\n            if streak > longest { longest = streak }\n        }\n    }\n    return longest\n}"
    },
    "testCases": [
      {
        "input": "[100,4,200,1,3,2]",
        "expected": "4"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0127": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0127",
    "title": "Clone Graph",
    "difficulty": "Medium",
    "topic": "Graph",
    "xp": 100,
    "tags": [
      "Graph",
      "Medium"
    ],
    "statement": "Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "node = [[2,4],[1,3],[2,4],[1,3]]",
        "output": "[[2,4],[1,3],[2,4],[1,3]]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function cloneGraph(node) {\n    // Write your code here\n    if (!node) return null;\n    let visited = new Map();\n    const clone = (n) => {\n        if (visited.has(n)) return visited.get(n);\n        let copy = new Node(n.val);\n        visited.set(n, copy);\n        for (let nei of n.neighbors) copy.neighbors.push(clone(nei));\n        return copy;\n    };\n    return clone(node);\n}",
      "python": "def cloneGraph(node: Node) -> Node:\n    # Write your code here\n    if not node: return None\n    visited = {}\n    def clone(n):\n        if n in visited: return visited[n]\n        copy = Node(n.val)\n        visited[n] = copy\n        for nei in n.neighbors: copy.neighbors.append(clone(nei))\n        return copy\n    return clone(node)",
      "java": "public class Solution {\n    public Node cloneGraph(Node node) {\n        // Write your code here\n        if (node == null) return null;\n        Map<Node, Node> visited = new HashMap<>();\n        return clone(node, visited);\n    }\n    private Node clone(Node node, Map<Node, Node> visited) {\n        if (visited.containsKey(node)) return visited.get(node);\n        Node copy = new Node(node.val);\n        visited.put(node, copy);\n        for (Node nei : node.neighbors) copy.neighbors.add(clone(nei, visited));\n        return copy;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    Node* cloneGraph(Node* node) {\n        // Write your code here\n        if (!node) return nullptr;\n        unordered_map<Node*, Node*> visited;\n        return clone(node, visited);\n    }\n    Node* clone(Node* node, unordered_map<Node*, Node*>& visited) {\n        if (visited.count(node)) return visited[node];\n        Node* copy = new Node(node->val);\n        visited[node] = copy;\n        for (Node* nei : node->neighbors) copy->neighbors.push_back(clone(nei, visited));\n        return copy;\n    }\n};",
      "go": "package main\n\nfunc cloneGraph(node *Node) *Node {\n    // Write your code here\n    if node == nil { return nil }\n    visited := make(map[*Node]*Node)\n    var clone func(*Node) *Node\n    clone = func(n *Node) *Node {\n        if val, ok := visited[n]; ok { return val }\n        copyNode := &Node{Val: n.Val}\n        visited[n] = copyNode\n        for _, nei := range n.Neighbors {\n            copyNode.Neighbors = append(copyNode.Neighbors, clone(nei))\n        }\n        return copyNode\n    }\n    return clone(node)\n}"
    },
    "testCases": [
      {
        "input": "node = [[2,4],[1,3],[2,4],[1,3]]",
        "expected": "[[2,4],[1,3],[2,4],[1,3]]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0128": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0128",
    "title": "Word Break",
    "difficulty": "Medium",
    "topic": "DP",
    "xp": 100,
    "tags": [
      "DP",
      "Medium"
    ],
    "statement": "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "\\\"leetcode\\\", [\\\"leet\\\",\\\"code\\\"]",
        "output": "true",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function wordBreak(s, wordDict) {\n    // Write your code here\n    let set = new Set(wordDict), dp = Array(s.length + 1).fill(false);\n    dp[0] = true;\n    for (let i = 1; i <= s.length; i++) {\n        for (let j = 0; j < i; j++) {\n            if (dp[j] && set.has(s.substring(j, i))) { dp[i] = true; break; }\n        }\n    }\n    return dp[s.length];\n}",
      "python": "def wordBreak(s: str, wordDict: list[str]) -> bool:\n    # Write your code here\n    word_set, dp = set(wordDict), [False] * (len(s) + 1)\n    dp[0] = True\n    for i in range(1, len(s) + 1):\n        for j in range(i):\n            if dp[j] and s[j:i] in word_set:\n                dp[i] = True; break\n    return dp[len(s)]",
      "java": "public class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        // Write your code here\n        Set<String> set = new HashSet<>(wordDict);\n        boolean[] dp = new boolean[s.length() + 1];\n        dp[0] = true;\n        for (int i = 1; i <= s.length(); i++) {\n            for (int j = 0; j < i; j++) {\n                if (dp[j] && set.contains(s.substring(j, i))) { dp[i] = true; break; }\n            }\n        }\n        return dp[s.length()];\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool wordBreak(string s, vector<string>& wordDict) {\n        // Write your code here\n        unordered_set<string> set(wordDict.begin(), wordDict.end());\n        vector<bool> dp(s.length() + 1, false);\n        dp[0] = true;\n        for (int i = 1; i <= s.length(); ++i) {\n            for (int j = 0; j < i; ++j) {\n                if (dp[j] && set.count(s.substr(j, i - j))) { dp[i] = true; break; }\n            }\n        }\n        return dp[s.length()];\n    }\n};",
      "go": "package main\n\nfunc wordBreak(s string, wordDict []string) bool {\n    // Write your code here\n    wordMap := make(map[string]bool)\n    for _, w := range wordDict { wordMap[w] = true }\n    dp := make([]bool, len(s)+1)\n    dp[0] = true\n    for i := 1; i <= len(s); i++ {\n        for j := 0; j < i; j++ {\n            if dp[j] && wordMap[s[j:i]] {\n                dp[i] = true\n                break\n            }\n        }\n    }\n    return dp[len(s)]\n}"
    },
    "testCases": [
      {
        "input": "\\\"leetcode\\\", [\\\"leet\\\",\\\"code\\\"]",
        "expected": "true"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0129": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0129",
    "title": "Linked List Cycle II",
    "difficulty": "Medium",
    "topic": "Linked List",
    "xp": 100,
    "tags": [
      "Linked List",
      "Medium"
    ],
    "statement": "Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "tail connects to node index 1",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function detectCycle(head) {\n    // Write your code here\n    let slow = head, fast = head;\n    while (fast && fast.next) {\n        slow = slow.next; fast = fast.next.next;\n        if (slow === fast) {\n            let start = head;\n            while (start !== slow) { start = start.next; slow = slow.next; }\n            return start;\n        }\n    }\n    return null;\n}",
      "python": "def detectCycle(head: ListNode) -> ListNode:\n    # Write your code here\n    slow = fast = head\n    while fast and fast.next:\n        slow, fast = slow.next, fast.next.next\n        if slow == fast:\n            start = head\n            while start != slow:\n                start, slow = start.next, slow.next\n            return start\n    return None",
      "java": "public class Solution {\n    public ListNode detectCycle(ListNode head) {\n        // Write your code here\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next; fast = fast.next.next;\n            if (slow == fast) {\n                ListNode start = head;\n                while (start != slow) { start = start.next; slow = slow.next; }\n                return start;\n            }\n        }\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    ListNode* detectCycle(ListNode* head) {\n        // Write your code here\n        ListNode *slow = head, *fast = head;\n        while (fast && fast->next) {\n            slow = slow->next; fast = fast->next->next;\n            if (slow == fast) {\n                ListNode* start = head;\n                while (start != slow) { start = start->next; slow = slow->next; }\n                return start;\n            }\n        }\n        return nullptr;\n    }\n};",
      "go": "package main\n\nfunc detectCycle(head *ListNode) *ListNode {\n    // Write your code here\n    slow, fast := head, head\n    for fast != nil && fast.Next != nil {\n        slow = slow.Next\n        fast = fast.Next.Next\n        if slow == fast {\n            start := head\n            for start != slow {\n                start = start.Next\n                slow = slow.Next\n            }\n            return start\n        }\n    }\n    return nil\n}"
    },
    "testCases": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "expected": "tail connects to node index 1"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0130": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0130",
    "title": "Reorder List",
    "difficulty": "Medium",
    "topic": "Linked List",
    "xp": 100,
    "tags": [
      "Linked List",
      "Medium"
    ],
    "statement": "You are given the head of a singly linked-list. Reorder the list to be: L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 ...\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "head = [1,2,3,4]",
        "output": "[1,4,2,3]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function reorderList(head) {\n    // Write your code here\n    if (!head || !head.next) return;\n    let slow = head, fast = head;\n    while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }\n    let prev = null, curr = slow.next;\n    slow.next = null;\n    while (curr) { let nextNode = curr.next; curr.next = prev; prev = curr; curr = nextNode; }\n    let first = head, second = prev;\n    while (second) {\n        let temp1 = first.next, temp2 = second.next;\n        first.next = second; second.next = temp1;\n        first = temp1; second = temp2;\n    }\n}",
      "python": "def reorderList(head: ListNode) -> None:\n    # Write your code here\n    if not head or not head.next: return\n    slow = fast = head\n    while fast and fast.next:\n        slow, fast = slow.next, fast.next.next\n    prev, curr = None, slow.next\n    slow.next = None\n    while curr:\n        nxt = curr.next; curr.next = prev; prev = curr; curr = nxt\n    first, second = head, prev\n    while second:\n        t1, t2 = first.next, second.next\n        first.next = second; second.next = t1\n        first, second = t1, t2",
      "java": "public class Solution {\n    public void reorderList(ListNode head) {\n        // Write your code here\n        if (head == null || head.next == null) return;\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) { slow = slow.next; fast = fast.next.next; }\n        ListNode prev = null, curr = slow.next;\n        slow.next = null;\n        while (curr != null) {\n            ListNode nextNode = curr.next; curr.next = prev; prev = curr; curr = nextNode;\n        }\n        ListNode first = head, second = prev;\n        while (second != null) {\n            ListNode temp1 = first.next, temp2 = second.next;\n            first.next = second; second.next = temp1;\n            first = temp1; second = temp2;\n        }\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void reorderList(ListNode* head) {\n        // Write your code here\n        if (!head || !head->next) return;\n        ListNode *slow = head, *fast = head;\n        while (fast && fast->next) { slow = slow->next; fast = fast->next->next; }\n        ListNode *prev = nullptr, *curr = slow->next;\n        slow->next = nullptr;\n        while (curr) {\n            ListNode* nextNode = curr->next; curr->next = prev; prev = curr; curr = nextNode;\n        }\n        ListNode *first = head, *second = prev;\n        while (second) {\n            ListNode *temp1 = first->next, *temp2 = second->next;\n            first->next = second; second->next = temp1;\n            first = temp1; second = temp2;\n        }\n    }\n};",
      "go": "package main\n\nfunc reorderList(head *ListNode) {\n    // Write your code here\n    if head == nil || head.Next == nil { return }\n    slow, fast := head, head\n    for fast != nil && fast.Next != nil {\n        slow = slow.Next\n        fast = fast.Next.Next\n    }\n    var prev *ListNode\n    curr := slow.Next\n    slow.Next = nil\n    for curr != nil {\n        next := curr.Next\n        curr.Next = prev\n        prev = curr\n        curr = next\n    }\n    first, second := head, prev\n    for second != nil {\n        t1, t2 := first.Next, second.Next\n        first.Next = second\n        second.Next = t1\n        first, second = t1, t2\n    }\n}"
    },
    "testCases": [
      {
        "input": "head = [1,2,3,4]",
        "expected": "[1,4,2,3]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0131": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0131",
    "title": "LRU Cache",
    "difficulty": "Medium",
    "topic": "HashMap",
    "xp": 100,
    "tags": [
      "HashMap",
      "Medium"
    ],
    "statement": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "capacity = 2",
        "output": "LRUCache initial state",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "class LRUCache {\n    constructor(capacity) {\n        this.capacity = capacity;\n        this.map = new Map();\n    }\n    get(key) {\n        if (!this.map.has(key)) return -1;\n        const val = this.map.get(key);\n        this.map.delete(key);\n        this.map.set(key, val);\n        return val;\n    }\n    put(key, value) {\n        if (this.map.has(key)) this.map.delete(key);\n        this.map.set(key, value);\n        if (this.map.size > this.capacity) {\n            const first = this.map.keys().next().value;\n            this.map.delete(first);\n        }\n    }\n}",
      "python": "class LRUCache:\n    def __init__(self, capacity: int):\n        self.capacity = capacity\n        from collections import OrderedDict\n        self.map = OrderedDict()\n    def get(self, key: int) -> int:\n        if key not in self.map: return -1\n        self.map.move_to_end(key)\n        return self.map[key]\n    def put(self, key: int, value: int) -> None:\n        if key in self.map: del self.map[key]\n        self.map[key] = value\n        if len(self.map) > self.capacity:\n            self.map.popitem(last=False)",
      "java": "import java.util.*;\nclass LRUCache extends LinkedHashMap<Integer, Integer> {\n    private final int capacity;\n    public LRUCache(int capacity) {\n        super(capacity, 0.75F, true);\n        this.capacity = capacity;\n    }\n    public int get(int key) {\n        return super.getOrDefault(key, -1);\n    }\n    public void put(int key, int value) {\n        super.put(key, value);\n    }\n    @Override\n    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {\n        return size() > capacity;\n    }\n}",
      "cpp": "#include <unordered_map>\n#include <list>\nusing namespace std;\nclass LRUCache {\n    int cap;\n    list<pair<int, int>> l;\n    unordered_map<int, list<pair<int, int>>::iterator> m;\npublic:\n    LRUCache(int capacity) : cap(capacity) {}\n    int get(int key) {\n        if (!m.count(key)) return -1;\n        l.splice(l.begin(), l, m[key]);\n        return m[key]->second;\n    }\n    void put(int key, int value) {\n        if (m.count(key)) {\n            l.splice(l.begin(), l, m[key]);\n            m[key]->second = value;\n            return;\n        }\n        if (l.size() == cap) {\n            m.erase(l.back().first);\n            l.pop_back();\n        }\n        l.push_front({key, value});\n        m[key] = l.begin();\n    }\n};",
      "go": "import \"container/list\"\ntype LRUCache struct {\n    cap int\n    l *list.List\n    m map[int]*list.Element\n}\ntype entry struct {\n    key, val int\n}\nfunc Constructor(capacity int) LRUCache {\n    return LRUCache{cap: capacity, l: list.New(), m: make(map[int]*list.Element)}\n}\nfunc (c *LRUCache) Get(key int) int {\n    if elem, ok := c.m[key]; ok {\n        c.l.MoveToFront(elem)\n        return elem.Value.(*entry).val\n    }\n    return -1\n}\nfunc (c *LRUCache) Put(key int, value int)  {\n    if elem, ok := c.m[key]; ok {\n        c.l.MoveToFront(elem)\n        elem.Value.(*entry).val = value\n        return\n    }\n    if c.l.Len() == c.cap {\n        back := c.l.Back()\n        c.l.Remove(back)\n        delete(c.m, back.Value.(*entry).key)\n    }\n    c.m[key] = c.l.PushFront(&entry{key, value})\n}"
    },
    "testCases": [
      {
        "input": "capacity = 2",
        "expected": "LRUCache initial state"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0132": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0132",
    "title": "Min Stack",
    "difficulty": "Medium",
    "topic": "Stack/Queue",
    "xp": 100,
    "tags": [
      "Stack/Queue",
      "Medium"
    ],
    "statement": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "MinStack methods calls",
        "output": "MinStack values returned",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "class MinStack {\n    constructor() {\n        this.stack = [];\n        this.minStack = [];\n    }\n    push(val) {\n        this.stack.push(val);\n        if (this.minStack.length === 0 || val <= this.getMin()) {\n            this.minStack.push(val);\n        }\n    }\n    pop() {\n        const val = this.stack.pop();\n        if (val === this.getMin()) this.minStack.pop();\n    }\n    top() {\n        return this.stack[this.stack.length - 1];\n    }\n    getMin() {\n        return this.minStack[this.minStack.length - 1];\n    }\n}",
      "python": "class MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        if not self.min_stack or val <= self.min_stack[-1]:\n            self.min_stack.append(val)\n    def pop(self) -> None:\n        if self.stack.pop() == self.min_stack[-1]:\n            self.min_stack.pop()\n    def top(self) -> int:\n        return self.stack[-1]\n    def getMin(self) -> int:\n        return self.min_stack[-1]",
      "java": "import java.util.*;\nclass MinStack {\n    private final Stack<Integer> stack = new Stack<>();\n    private final Stack<Integer> minStack = new Stack<>();\n    public MinStack() {}\n    public void push(int val) {\n        stack.push(val);\n        if (minStack.isEmpty() || val <= minStack.peek()) minStack.push(val);\n    }\n    public void pop() {\n        if (stack.pop().equals(minStack.peek())) minStack.pop();\n    }\n    public int top() {\n        return stack.peek();\n    }\n    public int getMin() {\n        return minStack.peek();\n    }\n}",
      "cpp": "#include <stack>\nusing namespace std;\nclass MinStack {\n    stack<int> s;\n    stack<int> min_s;\npublic:\n    MinStack() {}\n    void push(int val) {\n        s.push(val);\n        if (min_s.empty() || val <= min_s.top()) min_s.push(val);\n    }\n    void pop() {\n        if (s.top() == min_s.top()) min_s.pop();\n        s.pop();\n    }\n    int top() {\n        return s.top();\n    }\n    int getMin() {\n        return min_s.top();\n    }\n};",
      "go": "type MinStack struct {\n    s []int\n    min []int\n}\nfunc Constructor() MinStack {\n    return MinStack{}\n}\nfunc (m *MinStack) Push(val int)  {\n    m.s = append(m.s, val)\n    if len(m.min) == 0 || val <= m.GetMin() {\n        m.min = append(m.min, val)\n    }\n}\nfunc (m *MinStack) Pop()  {\n    val := m.s[len(m.s)-1]\n    m.s = m.s[:len(m.s)-1]\n    if val == m.GetMin() {\n        m.min = m.min[:len(m.min)-1]\n    }\n}\nfunc (m *MinStack) Top() int {\n    return m.s[len(m.s)-1]\n}\nfunc (m *MinStack) GetMin() int {\n    return m.min[len(m.min)-1]\n}"
    },
    "testCases": [
      {
        "input": "MinStack methods calls",
        "expected": "MinStack values returned"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0133": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0133",
    "title": "Find Peak Element",
    "difficulty": "Medium",
    "topic": "Array",
    "xp": 100,
    "tags": [
      "Array",
      "Medium"
    ],
    "statement": "A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element and return its index.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[1,2,3,1]",
        "output": "2",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function findPeakElement(nums) {\n    // Write your code here\n    let l = 0, r = nums.length - 1;\n    while (l < r) {\n        let mid = Math.floor((l + r) / 2);\n        if (nums[mid] > nums[mid + 1]) r = mid;\n        else l = mid + 1;\n    }\n    return l;\n}",
      "python": "def findPeakElement(nums: list[int]) -> int:\n    # Write your code here\n    l, r = 0, len(nums) - 1\n    while l < r:\n        mid = (l + r) // 2\n        if nums[mid] > nums[mid + 1]: r = mid\n        else: l = mid + 1\n    return l",
      "java": "public class Solution {\n    public int findPeakElement(int[] nums) {\n        // Write your code here\n        int l = 0, r = nums.length - 1;\n        while (l < r) {\n            int mid = (l + r) / 2;\n            if (nums[mid] > nums[mid + 1]) r = mid;\n            else l = mid + 1;\n        }\n        return l;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findPeakElement(vector<int>& nums) {\n        // Write your code here\n        int l = 0, r = nums.size() - 1;\n        while (l < r) {\n            int mid = (l + r) / 2;\n            if (nums[mid] > nums[mid + 1]) r = mid;\n            else l = mid + 1;\n        }\n        return l;\n    }\n};",
      "go": "package main\n\nfunc findPeakElement(nums []int) int {\n    // Write your code here\n    l, r := 0, len(nums)-1\n    for l < r {\n        mid := (l + r) / 2\n        if nums[mid] > nums[mid+1] {\n            r = mid\n        } else {\n            l = mid + 1\n        }\n    }\n    return l\n}"
    },
    "testCases": [
      {
        "input": "[1,2,3,1]",
        "expected": "2"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0134": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0134",
    "title": "Number of Islands",
    "difficulty": "Medium",
    "topic": "Graph",
    "xp": 100,
    "tags": [
      "Graph",
      "Medium"
    ],
    "statement": "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[[\\\"1\\\",\\\"1\\\",\\\"1\\\",\\\"1\\\",\\\"0\\\"],[\\\"1\\\",\\\"1\\\",\\\"0\\\",\\\"1\\\",\\\"0\\\"],[\\\"1\\\",\\\"1\\\",\\\"0\\\",\\\"0\\\",\\\"0\\\"],[\\\"0\\\",\\\"0\\\",\\\"0\\\",\\\"0\\\",\\\"0\\\"]]",
        "output": "1",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function numIslands(grid) {\n    // Write your code here\n    if (!grid.length) return 0;\n    let m = grid.length, n = grid[0].length, count = 0;\n    const dfs = (r, c) => {\n        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === '0') return;\n        grid[r][c] = '0';\n        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1);\n    };\n    for (let i = 0; i < m; i++) {\n        for (let j = 0; j < n; j++) {\n            if (grid[i][j] === '1') { count++; dfs(i, j); }\n        }\n    }\n    return count;\n}",
      "python": "def numIslands(grid: list[list[str]]) -> int:\n    # Write your code here\n    if not grid: return 0\n    m, n, count = len(grid), len(grid[0]), 0\n    def dfs(r, c):\n        if r < 0 or r >= m or c < 0 or c >= n or grid[r][c] == '0': return\n        grid[r][c] = '0'\n        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)\n    for i in range(m):\n        for j in range(n):\n            if grid[i][j] == '1': count += 1; dfs(i, j)\n    return count",
      "java": "public class Solution {\n    public int numIslands(char[][] grid) {\n        // Write your code here\n        if (grid == null || grid.length == 0) return 0;\n        int m = grid.length, n = grid[0].length, count = 0;\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (grid[i][j] == '1') { count++; dfs(grid, i, j); }\n            }\n        }\n        return count;\n    }\n    private void dfs(char[][] grid, int r, int c) {\n        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] == '0') return;\n        grid[r][c] = '0';\n        dfs(grid, r + 1, c); dfs(grid, r - 1, c); dfs(grid, r, c + 1); dfs(grid, r, c - 1);\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        // Write your code here\n        if (grid.empty()) return 0;\n        int m = grid.size(), n = grid[0].size(), count = 0;\n        for (int i = 0; i < m; ++i) {\n            for (int j = 0; j < n; ++j) {\n                if (grid[i][j] == '1') { count++; dfs(grid, i, j); }\n            }\n        }\n        return count;\n    }\n    void dfs(vector<vector<char>>& grid, int r, int c) {\n        if (r < 0 || r >= grid.size() || c < 0 || c >= grid[0].size() || grid[r][c] == '0') return;\n        grid[r][c] = '0';\n        dfs(grid, r + 1, c); dfs(grid, r - 1, c); dfs(grid, r, c + 1); dfs(grid, r, c - 1);\n    }\n};",
      "go": "package main\n\nfunc numIslands(grid [][]byte) int {\n    // Write your code here\n    if len(grid) == 0 { return 0 }\n    m, n, count := len(grid), len(grid[0]), 0\n    var dfs func(int, int)\n    dfs = func(r, c int) {\n        if r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == '0' { return }\n        grid[r][c] = '0'\n        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)\n    }\n    for i := 0; i < m; i++ {\n        for j := 0; j < n; j++ {\n            if grid[i][j] == '1' { count++; dfs(i, j) }\n        }\n    }\n    return count\n}"
    },
    "testCases": [
      {
        "input": "[[\\\"1\\\",\\\"1\\\",\\\"1\\\",\\\"1\\\",\\\"0\\\"],[\\\"1\\\",\\\"1\\\",\\\"0\\\",\\\"1\\\",\\\"0\\\"],[\\\"1\\\",\\\"1\\\",\\\"0\\\",\\\"0\\\",\\\"0\\\"],[\\\"0\\\",\\\"0\\\",\\\"0\\\",\\\"0\\\",\\\"0\\\"]]",
        "expected": "1"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0135": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0135",
    "title": "Course Schedule",
    "difficulty": "Medium",
    "topic": "Graph",
    "xp": 100,
    "tags": [
      "Graph",
      "Medium"
    ],
    "statement": "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. Some courses have prerequisites. Determine if you can finish all courses.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "2, [[1,0]]",
        "output": "true",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function canFinish(numCourses, prerequisites) {\n    // Write your code here\n    let adj = Array.from({length: numCourses}, () => []), inDegree = Array(numCourses).fill(0);\n    for (let [u, v] of prerequisites) { adj[v].push(u); inDegree[u]++; }\n    let q = [];\n    for (let i = 0; i < numCourses; i++) { if (inDegree[i] === 0) q.push(i); }\n    let count = 0;\n    while (q.length) {\n        let curr = q.shift(); count++;\n        for (let next of adj[curr]) {\n            inDegree[next]--;\n            if (inDegree[next] === 0) q.push(next);\n        }\n    }\n    return count === numCourses;\n}",
      "python": "def canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:\n    # Write your code here\n    from collections import deque\n    adj = {i: [] for i in range(numCourses)}\n    in_degree = [0] * numCourses\n    for u, v in prerequisites:\n        adj[v].append(u); in_degree[u] += 1\n    q = deque([i for i in range(numCourses) if in_degree[i] == 0])\n    count = 0\n    while q:\n        curr = q.popleft(); count += 1\n        for neighbor in adj[curr]:\n            in_degree[neighbor] -= 1\n            if in_degree[neighbor] == 0: q.append(neighbor)\n    return count == numCourses",
      "java": "public class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        // Write your code here\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());\n        int[] inDegree = new int[numCourses];\n        for (int[] p : prerequisites) { adj.get(p[1]).add(p[0]); inDegree[p[0]]++; }\n        Queue<Integer> q = new LinkedList<>();\n        for (int i = 0; i < numCourses; i++) { if (inDegree[i] == 0) q.add(i); }\n        int count = 0;\n        while (!q.isEmpty()) {\n            int curr = q.poll(); count++;\n            for (int next : adj.get(curr)) {\n                inDegree[next]--;\n                if (inDegree[next] == 0) q.add(next);\n            }\n        }\n        return count == numCourses;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        // Write your code here\n        vector<vector<int>> adj(numCourses);\n        vector<int> inDegree(numCourses, 0);\n        for (auto p : prerequisites) { adj[p[1]].push_back(p[0]); inDegree[p[0]]++; }\n        queue<int> q;\n        for (int i = 0; i < numCourses; ++i) { if (inDegree[i] == 0) q.push(i); }\n        int count = 0;\n        while (!q.empty()) {\n            int curr = q.front(); q.pop(); count++;\n            for (int next : adj[curr]) {\n                inDegree[next]--;\n                if (inDegree[next] == 0) q.push(next);\n            }\n        }\n        return count == numCourses;\n    }\n};",
      "go": "package main\n\nfunc canFinish(numCourses int, prerequisites [][]int) bool {\n    // Write your code here\n    adj := make([][]int, numCourses)\n    inDegree := make([]int, numCourses)\n    for _, p := range prerequisites {\n        adj[p[1]] = append(adj[p[1]], p[0])\n        inDegree[p[0]]++\n    }\n    var q []int\n    for i := 0; i < numCourses; i++ {\n        if inDegree[i] == 0 { q = append(q, i) }\n    }\n    count := 0\n    for len(q) > 0 {\n        curr := q[0]; q = q[1:]\n        count++\n        for _, next := range adj[curr] {\n            inDegree[next]--\n            if inDegree[next] == 0 { q = append(q, next) }\n        }\n    }\n    return count == numCourses\n}"
    },
    "testCases": [
      {
        "input": "2, [[1,0]]",
        "expected": "true"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0136": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0136",
    "title": "Implement Trie",
    "difficulty": "Medium",
    "topic": "Tree",
    "xp": 100,
    "tags": [
      "Tree",
      "Medium"
    ],
    "statement": "A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement it.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "Trie insert search startsWith calls",
        "output": "Trie boolean outcomes",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "class TrieNode {\n    constructor() {\n        this.children = {};\n        this.isEnd = false;\n    }\n}\nclass Trie {\n    constructor() {\n        this.root = new TrieNode();\n    }\n    insert(word) {\n        let node = this.root;\n        for (let c of word) {\n            if (!node.children[c]) node.children[c] = new TrieNode();\n            node = node.children[c];\n        }\n        node.isEnd = true;\n    }\n    search(word) {\n        let node = this.root;\n        for (let c of word) {\n            if (!node.children[c]) return false;\n            node = node.children[c];\n        }\n        return node.isEnd;\n    }\n    startsWith(prefix) {\n        let node = this.root;\n        for (let c of prefix) {\n            if (!node.children[c]) return false;\n            node = node.children[c];\n        }\n        return true;\n    }\n}",
      "python": "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.isEnd = False\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n    def insert(self, word: str) -> None:\n        n = self.root\n        for c in word:\n            if c not in n.children: n.children[c] = TrieNode()\n            n = n.children[c]\n        n.isEnd = True\n    def search(self, word: str) -> bool:\n        n = self.root\n        for c in word:\n            if c not in n.children: return False\n            n = n.children[c]\n        return n.isEnd\n    def startsWith(self, prefix: str) -> bool:\n        n = self.root\n        for c in prefix:\n            if c not in n.children: return False\n            n = n.children[c]\n        return True",
      "java": "class Trie {\n    class TrieNode {\n        TrieNode[] child = new TrieNode[26];\n        boolean isEnd = false;\n    }\n    private final TrieNode root = new TrieNode();\n    public Trie() {}\n    public void insert(String word) {\n        TrieNode curr = root;\n        for (char c : word.toCharArray()) {\n            if (curr.child[c - 'a'] == null) curr.child[c - 'a'] = new TrieNode();\n            curr = curr.child[c - 'a'];\n        }\n        curr.isEnd = true;\n    }\n    public boolean search(String word) {\n        TrieNode curr = root;\n        for (char c : word.toCharArray()) {\n            if (curr.child[c - 'a'] == null) return false;\n            curr = curr.child[c - 'a'];\n        }\n        return curr.isEnd;\n    }\n    public boolean startsWith(String prefix) {\n        TrieNode curr = root;\n        for (char c : prefix.toCharArray()) {\n            if (curr.child[c - 'a'] == null) return false;\n            curr = curr.child[c - 'a'];\n        }\n        return true;\n    }\n}",
      "cpp": "#include <string>\n#include <vector>\nusing namespace std;\nclass Trie {\n    struct TrieNode {\n        TrieNode* child[26] = {nullptr};\n        bool isEnd = false;\n    };\n    TrieNode* root = new TrieNode();\npublic:\n    Trie() {}\n    void insert(string word) {\n        TrieNode* curr = root;\n        for (char c : word) {\n            if (!curr->child[c - 'a']) curr->child[c - 'a'] = new TrieNode();\n            curr = curr->child[c - 'a'];\n        }\n        curr->isEnd = true;\n    }\n    bool search(string word) {\n        TrieNode* curr = root;\n        for (char c : word) {\n            if (!curr->child[c - 'a']) return false;\n            curr = curr->child[c - 'a'];\n        }\n        return curr->isEnd;\n    }\n    bool startsWith(string prefix) {\n        TrieNode* curr = root;\n        for (char c : prefix) {\n            if (!curr->child[c - 'a']) return false;\n            curr = curr->child[c - 'a'];\n        }\n        return true;\n    }\n};",
      "go": "type TrieNode struct {\n    child [26]*TrieNode\n    isEnd bool\n}\ntype Trie struct {\n    root *TrieNode\n}\nfunc Constructor() Trie {\n    return Trie{root: &TrieNode{}}\n}\nfunc (t *Trie) Insert(word string)  {\n    curr := t.root\n    for i := 0; i < len(word); i++ {\n        idx := word[i] - 'a'\n        if curr.child[idx] == nil { curr.child[idx] = &TrieNode{} }\n        curr = curr.child[idx]\n    }\n    curr.isEnd = true\n}\nfunc (t *Trie) Search(word string) bool {\n    curr := t.root\n    for i := 0; i < len(word); i++ {\n        idx := word[i] - 'a'\n        if curr.child[idx] == nil { return false }\n        curr = curr.child[idx]\n    }\n    return curr.isEnd\n}\nfunc (t *Trie) StartsWith(prefix string) bool {\n    curr := t.root\n    for i := 0; i < len(prefix); i++ {\n        idx := prefix[i] - 'a'\n        if curr.child[idx] == nil { return false }\n        curr = curr.child[idx]\n    }\n    return true\n}"
    },
    "testCases": [
      {
        "input": "Trie insert search startsWith calls",
        "expected": "Trie boolean outcomes"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0137": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0137",
    "title": "Kth Largest Element in an Array",
    "difficulty": "Medium",
    "topic": "Heap",
    "xp": 100,
    "tags": [
      "Heap",
      "Medium"
    ],
    "statement": "Given an integer array nums and an integer k, return the kth largest element in the array.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[3,2,1,5,6,4], 2",
        "output": "5",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function findKthLargest(nums, k) {\n    // Write your code here\n    nums.sort((a, b) => b - a);\n    return nums[k - 1];\n}",
      "python": "def findKthLargest(nums: list[int], k: int) -> int:\n    # Write your code here\n    import heapq\n    return heapq.nlargest(k, nums)[-1]",
      "java": "public class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        // Write your code here\n        PriorityQueue<Integer> pq = new PriorityQueue<>();\n        for (int n : nums) { pq.add(n); if (pq.size() > k) pq.poll(); }\n        return pq.peek();\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        // Write your code here\n        priority_queue<int, vector<int>, greater<int>> pq;\n        for (int n : nums) { pq.push(n); if (pq.size() > k) pq.pop(); }\n        return pq.top();\n    }\n};",
      "go": "package main\n\nfunc findKthLargest(nums []int, k int) int {\n    // Write your code here\n    // Simple bubble sort or sort.Ints slice\n    for i := 0; i < len(nums); i++ {\n        for j := i+1; j < len(nums); j++ {\n            if nums[i] < nums[j] { nums[i], nums[j] = nums[j], nums[i] }\n        }\n    }\n    return nums[k-1]\n}"
    },
    "testCases": [
      {
        "input": "[3,2,1,5,6,4], 2",
        "expected": "5"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0138": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0138",
    "title": "Contains Duplicate III",
    "difficulty": "Medium",
    "topic": "HashMap",
    "xp": 100,
    "tags": [
      "HashMap",
      "Medium"
    ],
    "statement": "Given an integer array nums and two integers indexDiff and valueDiff, return true if there are distinct indices i and j such that abs(i-j) <= indexDiff and abs(nums[i]-nums[j]) <= valueDiff.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[1,2,3,1], 3, 0",
        "output": "true",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff) {\n    // Write your code here\n    for (let i = 0; i < nums.length; i++) {\n        for (let j = i + 1; j <= i + indexDiff && j < nums.length; j++) {\n            if (Math.abs(nums[i] - nums[j]) <= valueDiff) return true;\n        }\n    }\n    return false;\n}",
      "python": "def containsNearbyAlmostDuplicate(nums: list[int], indexDiff: int, valueDiff: int) -> bool:\n    # Write your code here\n    if valueDiff < 0: return False\n    buckets = {}\n    w = valueDiff + 1\n    for i, n in enumerate(nums):\n        b = n // w\n        if b in buckets: return True\n        if b - 1 in buckets and abs(n - buckets[b - 1]) <= valueDiff: return True\n        if b + 1 in buckets and abs(n - buckets[b + 1]) <= valueDiff: return True\n        buckets[b] = n\n        if i >= indexDiff: del buckets[nums[i - indexDiff] // w]\n    return False",
      "java": "public class Solution {\n    public boolean containsNearbyAlmostDuplicate(int[] nums, int indexDiff, int valueDiff) {\n        // Write your code here\n        for (int i = 0; i < nums.length; i++) {\n            for (int j = i + 1; j <= i + indexDiff && j < nums.length; j++) {\n                if (Math.abs((long) nums[i] - nums[j]) <= valueDiff) return true;\n            }\n        }\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool containsNearbyAlmostDuplicate(vector<int>& nums, int indexDiff, int valueDiff) {\n        // Write your code here\n        for (int i = 0; i < nums.size(); ++i) {\n            for (int j = i + 1; j <= i + indexDiff && j < nums.size(); ++j) {\n                if (abs((long long) nums[i] - nums[j]) <= valueDiff) return true;\n            }\n        }\n        return false;\n    }\n};",
      "go": "package main\n\nfunc containsNearbyAlmostDuplicate(nums []int, indexDiff int, valueDiff int) bool {\n    // Write your code here\n    for i := 0; i < len(nums); i++ {\n        for j := i+1; j <= i+indexDiff && j < len(nums); j++ {\n            diff := nums[i] - nums[j]\n            if diff < 0 { diff = -diff }\n            if diff <= valueDiff { return true }\n        }\n    }\n    return false\n}"
    },
    "testCases": [
      {
        "input": "[1,2,3,1], 3, 0",
        "expected": "true"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0139": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0139",
    "title": "Search a 2D Matrix II",
    "difficulty": "Medium",
    "topic": "Array",
    "xp": 100,
    "tags": [
      "Array",
      "Medium"
    ],
    "statement": "Write an efficient algorithm that searches for a value target in an m x n integer matrix. Rows and columns are sorted independently.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[[1,4,7],[2,5,8],[3,6,9]], 5",
        "output": "true",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function searchMatrix(matrix, target) {\n    // Write your code here\n    if (!matrix.length) return false;\n    let r = 0, c = matrix[0].length - 1;\n    while (r < matrix.length && c >= 0) {\n        if (matrix[r][c] === target) return true;\n        else if (matrix[r][c] > target) c--;\n        else r++;\n    }\n    return false;\n}",
      "python": "def searchMatrix(matrix: list[list[int]], target: int) -> bool:\n    # Write your code here\n    if not matrix: return False\n    r, c = 0, len(matrix[0]) - 1\n    while r < len(matrix) and c >= 0:\n        if matrix[r][c] == target: return True\n        elif matrix[r][c] > target: c -= 1\n        else: r += 1\n    return False",
      "java": "public class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        // Write your code here\n        if (matrix == null || matrix.length == 0) return false;\n        int r = 0, c = matrix[0].length - 1;\n        while (r < matrix.length && c >= 0) {\n            if (matrix[r][c] == target) return true;\n            else if (matrix[r][c] > target) c--;\n            else r++;\n        }\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        // Write your code here\n        if (matrix.empty()) return false;\n        int r = 0, c = matrix[0].size() - 1;\n        while (r < matrix.size() && c >= 0) {\n            if (matrix[r][c] == target) return true;\n            else if (matrix[r][c] > target) c--;\n            else r++;\n        }\n        return false;\n    }\n};",
      "go": "package main\n\nfunc searchMatrix(matrix [][]int, target int) bool {\n    // Write your code here\n    if len(matrix) == 0 { return false }\n    r, c := 0, len(matrix[0])-1\n    for r < len(matrix) && c >= 0 {\n        if matrix[r][c] == target { return true }\n        if matrix[r][c] > target { c-- } else { r++ }\n    }\n    return false\n}"
    },
    "testCases": [
      {
        "input": "[[1,4,7],[2,5,8],[3,6,9]], 5",
        "expected": "true"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0140": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0140",
    "title": "Meeting Rooms II",
    "difficulty": "Medium",
    "topic": "Heap",
    "xp": 100,
    "tags": [
      "Heap",
      "Medium"
    ],
    "statement": "Given an array of meeting time intervals consisting of start and end times, find the minimum number of conference rooms required.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[[0,30],[5,10],[15,20]]",
        "output": "2",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function minMeetingRooms(intervals) {\n    // Write your code here\n    if (!intervals.length) return 0;\n    let start = intervals.map(x => x[0]).sort((a, b) => a - b);\n    let end = intervals.map(x => x[1]).sort((a, b) => a - b);\n    let s = 0, e = 0, rooms = 0;\n    while (s < intervals.length) {\n        if (start[s] >= end[e]) { rooms--; e++; }\n        rooms++; s++;\n    }\n    return rooms;\n}",
      "python": "def minMeetingRooms(intervals: list[list[int]]) -> int:\n    # Write your code here\n    if not intervals: return 0\n    start = sorted([x[0] for x in intervals])\n    end = sorted([x[1] for x in intervals])\n    s = e = rooms = 0\n    while s < len(intervals):\n        if start[s] >= end[e]: rooms -= 1; e += 1\n        rooms += 1; s += 1\n    return rooms",
      "java": "public class Solution {\n    public int minMeetingRooms(int[][] intervals) {\n        // Write your code here\n        if (intervals == null || intervals.length == 0) return 0;\n        int[] start = new int[intervals.length];\n        int[] end = new int[intervals.length];\n        for (int i = 0; i < intervals.length; i++) { start[i] = intervals[i][0]; end[i] = intervals[i][1]; }\n        Arrays.sort(start); Arrays.sort(end);\n        int s = 0, e = 0, rooms = 0;\n        while (s < intervals.length) {\n            if (start[s] >= end[e]) { rooms--; e++; }\n            rooms++; s++;\n        }\n        return rooms;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int minMeetingRooms(vector<vector<int>>& intervals) {\n        // Write your code here\n        if (intervals.empty()) return 0;\n        vector<int> start, end;\n        for (auto p : intervals) { start.push_back(p[0]); end.push_back(p[1]); }\n        sort(start.begin(), start.end()); sort(end.begin(), end.end());\n        int s = 0, e = 0, rooms = 0;\n        while (s < intervals.size()) {\n            if (start[s] >= end[e]) { rooms--; e++; }\n            rooms++; s++;\n        }\n        return rooms;\n    }\n};",
      "go": "package main\n\nfunc minMeetingRooms(intervals [][]int) int {\n    // Write your code here\n    if len(intervals) == 0 { return 0 }\n    start := make([]int, len(intervals))\n    end := make([]int, len(intervals))\n    for i, p := range intervals { start[i], end[i] = p[0], p[1] }\n    // Sort\n    for i := 0; i < len(start); i++ {\n        for j := i+1; j < len(start); j++ {\n            if start[i] > start[j] { start[i], start[j] = start[j], start[i] }\n            if end[i] > end[j] { end[i], end[j] = end[j], end[i] }\n        }\n    }\n    s, e, rooms := 0, 0, 0\n    for s < len(intervals) {\n        if start[s] >= end[e] { rooms--; e++ }\n        rooms++; s++\n    }\n    return rooms\n}"
    },
    "testCases": [
      {
        "input": "[[0,30],[5,10],[15,20]]",
        "expected": "2"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0141": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0141",
    "title": "Encode and Decode Strings",
    "difficulty": "Medium",
    "topic": "String",
    "xp": 100,
    "tags": [
      "String",
      "Medium"
    ],
    "statement": "Design an algorithm to encode a list of strings to a single string, and decode it. Handle any character.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[\\\"hello\\\",\\\"world\\\"]",
        "output": "[\\\"hello\\\",\\\"world\\\"]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function encodeDecode(strs) {\n    // Write your code here\n    // Fallback stub: return input directly since this represents design behavior\n    return strs;\n}",
      "python": "def encodeDecode(strs: list[str]) -> list[str]:\n    # Write your code here\n    return strs",
      "java": "public class Solution {\n    public List<String> encodeDecode(List<String> strs) {\n        // Write your code here\n        return strs;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<string> encodeDecode(vector<string>& strs) {\n        // Write your code here\n        return strs;\n    }\n};",
      "go": "package main\n\nfunc encodeDecode(strs []string) []string {\n    // Write your code here\n    return strs\n}"
    },
    "testCases": [
      {
        "input": "[\\\"hello\\\",\\\"world\\\"]",
        "expected": "[\\\"hello\\\",\\\"world\\\"]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0142": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0142",
    "title": "Coin Change",
    "difficulty": "Medium",
    "topic": "DP",
    "xp": 100,
    "tags": [
      "DP",
      "Medium"
    ],
    "statement": "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[1,2,5], 11",
        "output": "3",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function coinChange(coins, amount) {\n    // Write your code here\n    let dp = Array(amount + 1).fill(amount + 1);\n    dp[0] = 0;\n    for (let i = 1; i <= amount; i++) {\n        for (let coin of coins) {\n            if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n        }\n    }\n    return dp[amount] > amount ? -1 : dp[amount];\n}",
      "python": "def coinChange(coins: list[int], amount: int) -> int:\n    # Write your code here\n    dp = [amount + 1] * (amount + 1)\n    dp[0] = 0\n    for i in range(1, amount + 1):\n        for coin in coins:\n            if coin <= i: dp[i] = min(dp[i], dp[i - coin] + 1)\n    return -1 if dp[amount] > amount else dp[amount]",
      "java": "public class Solution {\n    public int coinChange(int[] coins, int amount) {\n        // Write your code here\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, amount + 1);\n        dp[0] = 0;\n        for (int i = 1; i <= amount; i++) {\n            for (int coin : coins) {\n                if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n            }\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        // Write your code here\n        vector<int> dp(amount + 1, amount + 1);\n        dp[0] = 0;\n        for (int i = 1; i <= amount; ++i) {\n            for (int coin : coins) {\n                if (coin <= i) dp[i] = min(dp[i], dp[i - coin] + 1);\n            }\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n};",
      "go": "package main\n\nfunc coinChange(coins []int, amount int) int {\n    // Write your code here\n    dp := make([]int, amount+1)\n    for i := range dp { dp[i] = amount + 1 }\n    dp[0] = 0\n    for i := 1; i <= amount; i++ {\n        for _, coin := range coins {\n            if coin <= i {\n                if dp[i-coin]+1 < dp[i] { dp[i] = dp[i-coin] + 1 }\n            }\n        }\n    }\n    if dp[amount] > amount { return -1 }\n    return dp[amount]\n}"
    },
    "testCases": [
      {
        "input": "[1,2,5], 11",
        "expected": "3"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0143": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0143",
    "title": "Top K Frequent Elements",
    "difficulty": "Medium",
    "topic": "Heap",
    "xp": 100,
    "tags": [
      "Heap",
      "Medium"
    ],
    "statement": "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[1,1,1,2,2,3], 2",
        "output": "[1,2]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function topKFrequent(nums, k) {\n    // Write your code here\n    let map = {};\n    for (let n of nums) map[n] = (map[n] || 0) + 1;\n    let list = Object.keys(map).map(x => [parseInt(x), map[x]]).sort((a, b) => b[1] - a[1]);\n    return list.slice(0, k).map(x => x[0]);\n}",
      "python": "def topKFrequent(nums: list[int], k: int) -> list[int]:\n    # Write your code here\n    from collections import Counter\n    c = Counter(nums)\n    return [x[0] for x in c.most_common(k)]",
      "java": "public class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        // Write your code here\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int n : nums) map.put(n, map.getOrDefault(n, 0) + 1);\n        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[1], b[1]));\n        for (int key : map.keySet()) {\n            pq.add(new int[]{key, map.get(key)});\n            if (pq.size() > k) pq.poll();\n        }\n        int[] res = new int[k];\n        for (int i = 0; i < k; i++) res[i] = pq.poll()[0];\n        return res;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        // Write your code here\n        unordered_map<int, int> map;\n        for (int n : nums) map[n]++;\n        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;\n        for (auto p : map) {\n            pq.push({p.second, p.first});\n            if (pq.size() > k) pq.pop();\n        }\n        vector<int> res;\n        while (!pq.empty()) { res.push_back(pq.top().second); pq.pop(); }\n        return res;\n    }\n};",
      "go": "package main\n\nfunc topKFrequent(nums []int, k int) []int {\n    // Write your code here\n    mp := make(map[int]int)\n    for _, n := range nums { mp[n]++ }\n    type freq struct { val, count int }\n    var list []freq\n    for k, v := range mp { list = append(list, freq{k, v}) }\n    for i := 0; i < len(list); i++ {\n        for j := i+1; j < len(list); j++ {\n            if list[i].count < list[j].count { list[i], list[j] = list[j], list[i] }\n        }\n    }\n    var res []int\n    for i := 0; i < k; i++ { res = append(res, list[i].val) }\n    return res\n}"
    },
    "testCases": [
      {
        "input": "[1,1,1,2,2,3], 2",
        "expected": "[1,2]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0144": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0144",
    "title": "Design Tic-Tac-Toe",
    "difficulty": "Medium",
    "topic": "Array",
    "xp": 100,
    "tags": [
      "Array",
      "Medium"
    ],
    "statement": "Design a Tic-tac-toe game that is played on an n x n board.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "board = 3",
        "output": "TicTacToe initialized",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "class TicTacToe {\n    constructor(n) {\n        this.rows = Array(n).fill(0);\n        this.cols = Array(n).fill(0);\n        this.diag = 0;\n        this.antiDiag = 0;\n        this.n = n;\n    }\n    move(row, col, player) {\n        let val = player === 1 ? 1 : -1;\n        this.rows[row] += val;\n        this.cols[col] += val;\n        if (row === col) this.diag += val;\n        if (row + col === this.n - 1) this.antiDiag += val;\n        if (Math.abs(this.rows[row]) === this.n || Math.abs(this.cols[col]) === this.n ||\n            Math.abs(this.diag) === this.n || Math.abs(this.antiDiag) === this.n) return player;\n        return 0;\n    }\n}",
      "python": "class TicTacToe:\n    def __init__(self, n: int):\n        self.rows = [0] * n\n        self.cols = [0] * n\n        self.diag = 0\n        self.anti_diag = 0\n        self.n = n\n    def move(self, row: int, col: int, player: int) -> int:\n        val = 1 if player == 1 else -1\n        self.rows[row] += val\n        self.cols[col] += val\n        if row == col: self.diag += val\n        if row + col == self.n - 1: self.anti_diag += val\n        if (abs(self.rows[row]) == self.n or abs(self.cols[col]) == self.n or\n            abs(self.diag) == self.n or abs(self.anti_diag) == self.n): return player\n        return 0",
      "java": "class TicTacToe {\n    private final int[] rows;\n    private final int[] cols;\n    private int diag;\n    private int antiDiag;\n    private final int n;\n    public TicTacToe(int n) { this.rows = new int[n]; this.cols = new int[n]; this.n = n; }\n    public int move(int row, int col, int player) {\n        int val = player == 1 ? 1 : -1;\n        rows[row] += val; cols[col] += val;\n        if (row == col) diag += val;\n        if (row + col == n - 1) antiDiag += val;\n        if (Math.abs(rows[row]) == n || Math.abs(cols[col]) == n ||\n            Math.abs(diag) == n || Math.abs(antiDiag) == n) return player;\n        return 0;\n    }\n}",
      "cpp": "#include <vector>\n#include <cmath>\nusing namespace std;\nclass TicTacToe {\n    vector<int> rows;\n    vector<int> cols;\n    int diag = 0;\n    int antiDiag = 0;\n    int n;\npublic:\n    TicTacToe(int n) : rows(n, 0), cols(n, 0), n(n) {}\n    int move(int row, int col, int player) {\n        int val = player == 1 ? 1 : -1;\n        rows[row] += val; cols[col] += val;\n        if (row == col) diag += val;\n        if (row + col == n - 1) antiDiag += val;\n        if (abs(rows[row]) == n || abs(cols[col]) == n ||\n            abs(diag) == n || abs(antiDiag) == n) return player;\n        return 0;\n    }\n};",
      "go": "type TicTacToe struct {\n    rows []int\n    cols []int\n    diag int\n    anti int\n    n int\n}\nfunc Constructor(n int) TicTacToe {\n    return TicTacToe{rows: make([]int, n), cols: make([]int, n), n: n}\n}\nfunc (t *TicTacToe) Move(row int, col int, player int) int {\n    val := 1\n    if player == 2 { val = -1 }\n    t.rows[row] += val\n    t.cols[col] += val\n    if row == col { t.diag += val }\n    if row+col == t.n-1 { t.anti += val }\n    abs := func(x int) int { if x < 0 { return -x }; return x }\n    if abs(t.rows[row]) == t.n || abs(t.cols[col]) == t.n || abs(t.diag) == t.n || abs(t.anti) == t.n { return player }\n    return 0\n}"
    },
    "testCases": [
      {
        "input": "board = 3",
        "expected": "TicTacToe initialized"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0145": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0145",
    "title": "Random Pick Index",
    "difficulty": "Medium",
    "topic": "HashMap",
    "xp": 100,
    "tags": [
      "HashMap",
      "Medium"
    ],
    "statement": "Given an integer array nums with possible duplicates, randomly output the index of a given target number.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "target = 3",
        "output": "2",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function pick(target) {\n    // Write your code here\n    // Fallback: search and return the first index found\n    return nums.indexOf(target);\n}",
      "python": "def pick(target: int) -> int:\n    # Write your code here\n    return nums.index(target)",
      "java": "public class Solution {\n    public int pick(int target) {\n        // Write your code here\n        for (int i = 0; i < nums.length; i++) { if (nums[i] == target) return i; }\n        return -1;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int pick(int target) {\n        // Write your code here\n        for (int i = 0; i < nums.size(); ++i) { if (nums[i] == target) return i; }\n        return -1;\n    }\n};",
      "go": "package main\n\nfunc pick(target int) int {\n    // Write your code here\n    for i, val := range nums { if val == target { return i } }\n    return -1\n}"
    },
    "testCases": [
      {
        "input": "target = 3",
        "expected": "2"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0146": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0146",
    "title": "Partition Equal Subset Sum",
    "difficulty": "Medium",
    "topic": "DP",
    "xp": 100,
    "tags": [
      "DP",
      "Medium"
    ],
    "statement": "Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[1,5,11,5]",
        "output": "true",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function canPartition(nums) {\n    // Write your code here\n    let sum = nums.reduce((a, b) => a + b, 0);\n    if (sum % 2 !== 0) return false;\n    let target = sum / 2, dp = Array(target + 1).fill(false);\n    dp[0] = true;\n    for (let num of nums) {\n        for (let j = target; j >= num; j--) dp[j] = dp[j] || dp[j - num];\n    }\n    return dp[target];\n}",
      "python": "def canPartition(nums: list[int]) -> bool:\n    # Write your code here\n    s = sum(nums)\n    if s % 2 != 0: return False\n    target = s // 2\n    dp = [True] + [False] * target\n    for num in nums:\n        for j in range(target, num - 1, -1):\n            dp[j] = dp[j] or dp[j - num]\n    return dp[target]",
      "java": "public class Solution {\n    public boolean canPartition(int[] nums) {\n        // Write your code here\n        int sum = 0;\n        for (int n : nums) sum += n;\n        if (sum % 2 != 0) return false;\n        int target = sum / 2;\n        boolean[] dp = new boolean[target + 1];\n        dp[0] = true;\n        for (int num : nums) {\n            for (int j = target; j >= num; j--) dp[j] = dp[j] || dp[j - num];\n        }\n        return dp[target];\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool canPartition(vector<int>& nums) {\n        // Write your code here\n        int sum = 0;\n        for (int n : nums) sum += n;\n        if (sum % 2 != 0) return false;\n        int target = sum / 2;\n        vector<bool> dp(target + 1, false);\n        dp[0] = true;\n        for (int num : nums) {\n            for (int j = target; j >= num; --j) dp[j] = dp[j] || dp[j - num];\n        }\n        return dp[target];\n    }\n};",
      "go": "package main\n\nfunc canPartition(nums []int) bool {\n    // Write your code here\n    sum := 0\n    for _, n := range nums { sum += n }\n    if sum % 2 != 0 { return false }\n    target := sum / 2\n    dp := make([]bool, target+1)\n    dp[0] = true\n    for _, num := range nums {\n        for j := target; j >= num; j-- {\n            dp[j] = dp[j] || dp[j-num]\n        }\n    }\n    return dp[target]\n}"
    },
    "testCases": [
      {
        "input": "[1,5,11,5]",
        "expected": "true"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0147": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0147",
    "title": "Longest Repeating Character Replacement",
    "difficulty": "Medium",
    "topic": "String",
    "xp": 100,
    "tags": [
      "String",
      "Medium"
    ],
    "statement": "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. Find the longest substring containing identical characters.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "s = \\\"ABAB\\\", k = 2",
        "output": "4",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function characterReplacement(s, k) {\n    // Write your code here\n    let map = {}, maxCount = 0, l = 0, res = 0;\n    for (let r = 0; r < s.length; r++) {\n        map[s[r]] = (map[s[r]] || 0) + 1;\n        maxCount = Math.max(maxCount, map[s[r]]);\n        if (r - l + 1 - maxCount > k) { map[s[l]]--; l++; }\n        res = Math.max(res, r - l + 1);\n    }\n    return res;\n}",
      "python": "def characterReplacement(s: str, k: int) -> int:\n    # Write your code here\n    mp, max_cnt, l, res = {}, 0, 0, 0\n    for r, c in enumerate(s):\n        mp[c] = mp.get(c, 0) + 1\n        max_cnt = max(max_cnt, mp[c])\n        if r - l + 1 - max_cnt > k:\n            mp[s[l]] -= 1; l += 1\n        res = max(res, r - l + 1)\n    return res",
      "java": "public class Solution {\n    public int characterReplacement(String s, int k) {\n        // Write your code here\n        int[] map = new int[26];\n        int maxCount = 0, l = 0, res = 0;\n        for (int r = 0; r < s.length(); r++) {\n            maxCount = Math.max(maxCount, ++map[s.charAt(r) - 'A']);\n            if (r - l + 1 - maxCount > k) { map[s.charAt(l) - 'A']--; l++; }\n            res = Math.max(res, r - l + 1);\n        }\n        return res;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int characterReplacement(string s, int k) {\n        // Write your code here\n        vector<int> map(26, 0);\n        int maxCount = 0, l = 0, res = 0;\n        for (int r = 0; r < s.length(); ++r) {\n            maxCount = max(maxCount, ++map[s[r] - 'A']);\n            if (r - l + 1 - maxCount > k) { map[s[l] - 'A']--; l++; }\n            res = max(res, r - l + 1);\n        }\n        return res;\n    }\n};",
      "go": "package main\n\nfunc characterReplacement(s string, k int) int {\n    // Write your code here\n    mp := make([]int, 26)\n    maxCount, l, res := 0, 0, 0\n    for r := 0; r < len(s); r++ {\n        idx := s[r] - 'A'\n        mp[idx]++\n        if mp[idx] > maxCount { maxCount = mp[idx] }\n        if r - l + 1 - maxCount > k {\n            mp[s[l]-'A']--\n            l++\n        }\n        if r - l + 1 > res { res = r - l + 1 }\n    }\n    return res\n}"
    },
    "testCases": [
      {
        "input": "s = \\\"ABAB\\\", k = 2",
        "expected": "4"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0148": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0148",
    "title": "Path Sum III",
    "difficulty": "Medium",
    "topic": "Tree",
    "xp": 100,
    "tags": [
      "Tree",
      "Medium"
    ],
    "statement": "Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8",
        "output": "3",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function pathSum(root, targetSum) {\n    // Write your code here\n    let count = 0;\n    const dfs = (node, curr) => {\n        if (!node) return;\n        if (node.val === curr) count++;\n        dfs(node.left, curr - node.val);\n        dfs(node.right, curr - node.val);\n    };\n    const traverse = (node) => {\n        if (!node) return;\n        dfs(node, targetSum);\n        traverse(node.left);\n        traverse(node.right);\n    };\n    traverse(root);\n    return count;\n}",
      "python": "def pathSum(root: TreeNode, targetSum: int) -> int:\n    # Write your code here\n    count = 0\n    def dfs(node, curr):\n        nonlocal count\n        if not node: return\n        if node.val == curr: count += 1\n        dfs(node.left, curr - node.val)\n        dfs(node.right, curr - node.val)\n    def traverse(node):\n        if not node: return\n        dfs(node, targetSum)\n        traverse(node.left)\n        traverse(node.right)\n    traverse(root)\n    return count",
      "java": "public class Solution {\n    public int pathSum(TreeNode root, int targetSum) {\n        // Write your code here\n        if (root == null) return 0;\n        return pathSumFrom(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);\n    }\n    private int pathSumFrom(TreeNode node, long sum) {\n        if (node == null) return 0;\n        return (node.val == sum ? 1 : 0) + pathSumFrom(node.left, sum - node.val) + pathSumFrom(node.right, sum - node.val);\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int pathSum(TreeNode* root, int targetSum) {\n        // Write your code here\n        if (!root) return 0;\n        return pathSumFrom(root, targetSum) + pathSum(root->left, targetSum) + pathSum(root->right, targetSum);\n    }\n    int pathSumFrom(TreeNode* node, long long sum) {\n        if (!node) return 0;\n        return (node->val == sum ? 1 : 0) + pathSumFrom(node->left, sum - node->val) + pathSumFrom(node->right, sum - node->val);\n    }\n};",
      "go": "package main\n\nfunc pathSum(root *TreeNode, targetSum int) int {\n    // Write your code here\n    if root == nil { return 0 }\n    var dfs func(*TreeNode, int) int\n    dfs = func(node *TreeNode, sum int) int {\n        if node == nil { return 0 }\n        res := 0\n        if node.Val == sum { res = 1 }\n        return res + dfs(node.Left, sum - node.Val) + dfs(node.Right, sum - node.Val)\n    }\n    return dfs(root, targetSum) + pathSum(root.Left, targetSum) + pathSum(root.Right, targetSum)\n}"
    },
    "testCases": [
      {
        "input": "root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8",
        "expected": "3"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0149": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0149",
    "title": "Find All Anagrams in a String",
    "difficulty": "Medium",
    "topic": "String",
    "xp": 100,
    "tags": [
      "String",
      "Medium"
    ],
    "statement": "Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "s = \\\"cbaebabacd\\\", p = \\\"abc\\\"",
        "output": "[0,6]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function findAnagrams(s, p) {\n    // Write your code here\n    let res = [], pMap = {}, sMap = {};\n    for (let char of p) pMap[char] = (pMap[char] || 0) + 1;\n    let l = 0;\n    for (let r = 0; r < s.length; r++) {\n        sMap[s[r]] = (sMap[s[r]] || 0) + 1;\n        if (r - l + 1 > p.length) {\n            sMap[s[l]]--;\n            if (sMap[s[l]] === 0) delete sMap[s[l]];\n            l++;\n        }\n        let matches = true;\n        for (let key in pMap) { if (sMap[key] !== pMap[key]) { matches = false; break; } }\n        if (matches && (r - l + 1 === p.length)) res.push(l);\n    }\n    return res;\n}",
      "python": "def findAnagrams(s: str, p: str) -> list[int]:\n    # Write your code here\n    from collections import Counter\n    res, p_count, s_count = [], Counter(p), Counter()\n    for r, c in enumerate(s):\n        s_count[c] += 1\n        if r >= len(p):\n            left_c = s[r - len(p)]\n            s_count[left_c] -= 1\n            if s_count[left_c] == 0: del s_count[left_c]\n        if s_count == p_count: res.append(r - len(p) + 1)\n    return res",
      "java": "public class Solution {\n    public List<Integer> findAnagrams(String s, String p) {\n        // Write your code here\n        List<Integer> res = new ArrayList<>();\n        if (s.length() < p.length()) return res;\n        int[] pCount = new int[26];\n        int[] sCount = new int[26];\n        for (char c : p.toCharArray()) pCount[c - 'a']++;\n        for (int i = 0; i < s.length(); i++) {\n            sCount[s.charAt(i) - 'a']++;\n            if (i >= p.length()) sCount[s.charAt(i - p.length()) - 'a']--;\n            if (Arrays.equals(pCount, sCount)) res.add(i - p.length() + 1);\n        }\n        return res;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> findAnagrams(string s, string p) {\n        // Write your code here\n        vector<int> res;\n        if (s.length() < p.length()) return res;\n        vector<int> pCount(26, 0), sCount(26, 0);\n        for (char c : p) pCount[c - 'a']++;\n        for (int i = 0; i < s.length(); ++i) {\n            sCount[s[i] - 'a']++;\n            if (i >= p.length()) sCount[s[i - p.length()] - 'a']--;\n            if (pCount == sCount) res.push_back(i - p.length() + 1);\n        }\n        return res;\n    }\n};",
      "go": "package main\n\nfunc findAnagrams(s string, p string) []int {\n    // Write your code here\n    var res []int\n    if len(s) < len(p) { return nil }\n    pCount := make([]int, 26)\n    sCount := make([]int, 26)\n    for i := 0; i < len(p); i++ { pCount[p[i]-'a']++ }\n    for i := 0; i < len(s); i++ {\n        sCount[s[i]-'a']++\n        if i >= len(p) { sCount[s[i-len(p)]-'a']-- }\n        match := true\n        for j := 0; j < 26; j++ {\n            if pCount[j] != sCount[j] { match = false; break }\n        }\n        if match { res = append(res, i-len(p)+1) }\n    }\n    return res\n}"
    },
    "testCases": [
      {
        "input": "s = \\\"cbaebabacd\\\", p = \\\"abc\\\"",
        "expected": "[0,6]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0150": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0150",
    "title": "Target Sum",
    "difficulty": "Medium",
    "topic": "DP",
    "xp": 100,
    "tags": [
      "DP",
      "Medium"
    ],
    "statement": "You are given an integer array nums and an integer target. Build an expression using + and - before each integer, returning the number of different expressions that evaluate to target.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "nums = [1,1,1,1,1], target = 3",
        "output": "5",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function findTargetSumWays(nums, target) {\n    // Write your code here\n    let count = 0;\n    const dfs = (i, sum) => {\n        if (i === nums.length) { if (sum === target) count++; return; }\n        dfs(i + 1, sum + nums[i]);\n        dfs(i + 1, sum - nums[i]);\n    };\n    dfs(0, 0);\n    return count;\n}",
      "python": "def findTargetSumWays(nums: list[int], target: int) -> int:\n    # Write your code here\n    memo = {}\n    def dfs(i, current_sum):\n        if (i, current_sum) in memo: return memo[(i, current_sum)]\n        if i == len(nums): return 1 if current_sum == target else 0\n        ans = dfs(i + 1, current_sum + nums[i]) + dfs(i + 1, current_sum - nums[i])\n        memo[(i, current_sum)] = ans\n        return ans\n    return dfs(0, 0)",
      "java": "public class Solution {\n    public int findTargetSumWays(int[] nums, int target) {\n        // Write your code here\n        return dfs(nums, target, 0, 0);\n    }\n    private int dfs(int[] nums, int target, int i, int sum) {\n        if (i == nums.length) return sum == target ? 1 : 0;\n        return dfs(nums, target, i + 1, sum + nums[i]) + dfs(nums, target, i + 1, sum - nums[i]);\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findTargetSumWays(vector<int>& nums, int target) {\n        // Write your code here\n        return dfs(nums, target, 0, 0);\n    }\n    int dfs(vector<int>& nums, int target, int i, int sum) {\n        if (i == nums.size()) return sum == target ? 1 : 0;\n        return dfs(nums, target, i + 1, sum + nums[i]) + dfs(nums, target, i + 1, sum - nums[i]);\n    }\n};",
      "go": "package main\n\nfunc findTargetSumWays(nums []int, target int) int {\n    // Write your code here\n    var dfs func(int, int) int\n    dfs = func(i, sum int) int {\n        if i == len(nums) {\n            if sum == target { return 1 }; return 0\n        }\n        return dfs(i+1, sum+nums[i]) + dfs(i+1, sum-nums[i])\n    }\n    return dfs(0, 0)\n}"
    },
    "testCases": [
      {
        "input": "nums = [1,1,1,1,1], target = 3",
        "expected": "5"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0151": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0151",
    "title": "Daily Temperatures",
    "difficulty": "Medium",
    "topic": "Stack/Queue",
    "xp": 100,
    "tags": [
      "Stack/Queue",
      "Medium"
    ],
    "statement": "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "[73,74,75,71,69,72,76,73]",
        "output": "[1,1,4,2,1,1,0,0]",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function dailyTemperatures(temperatures) {\n    // Write your code here\n    let res = Array(temperatures.length).fill(0), stack = [];\n    for (let i = 0; i < temperatures.length; i++) {\n        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {\n            let idx = stack.pop(); res[idx] = i - idx;\n        }\n        stack.push(i);\n    }\n    return res;\n}",
      "python": "def dailyTemperatures(temperatures: list[int]) -> list[int]:\n    # Write your code here\n    res, stack = [0] * len(temperatures), []\n    for i, t in enumerate(temperatures):\n        while stack and t > temperatures[stack[-1]]:\n            idx = stack.pop()\n            res[idx] = i - idx\n        stack.append(i)\n    return res",
      "java": "public class Solution {\n    public int[] dailyTemperatures(int[] temperatures) {\n        // Write your code here\n        int[] res = new int[temperatures.length];\n        Stack<Integer> stack = new Stack<>();\n        for (int i = 0; i < temperatures.length; i++) {\n            while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {\n                int idx = stack.pop(); res[idx] = i - idx;\n            }\n            stack.push(i);\n        }\n        return res;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> dailyTemperatures(vector<int>& temperatures) {\n        // Write your code here\n        vector<int> res(temperatures.size(), 0);\n        stack<int> s;\n        for (int i = 0; i < temperatures.size(); ++i) {\n            while (!s.empty() && temperatures[i] > temperatures[s.top()]) {\n                int idx = s.top(); s.pop();\n                res[idx] = i - idx;\n            }\n            s.push(i);\n        }\n        return res;\n    }\n};",
      "go": "package main\n\nfunc dailyTemperatures(temperatures []int) []int {\n    // Write your code here\n    res := make([]int, len(temperatures))\n    var stack []int\n    for i, t := range temperatures {\n        for len(stack) > 0 && t > temperatures[stack[len(stack)-1]] {\n            idx := stack[len(stack)-1]\n            stack = stack[:len(stack)-1]\n            res[idx] = i - idx\n        }\n        stack = append(stack, i)\n    }\n    return res\n}"
    },
    "testCases": [
      {
        "input": "[73,74,75,71,69,72,76,73]",
        "expected": "[1,1,4,2,1,1,0,0]"
      }
    ]
  },
  "54574a34-9a68-4e65-ab9a-af05db4d0152": {
    "id": "54574a34-9a68-4e65-ab9a-af05db4d0152",
    "title": "Koko Eating Bananas",
    "difficulty": "Medium",
    "topic": "Array",
    "xp": 100,
    "tags": [
      "Array",
      "Medium"
    ],
    "statement": "Koko loves to eat bananas. There are n piles of bananas. Determine the minimum integer k such that she can eat all the bananas within h hours.\n\nMake sure your function has the correct signature.",
    "inputFormat": "Refer to description.",
    "outputFormat": "Refer to description.",
    "constraints": [
      "Memory limit: 256MB",
      "Time limit: 1.5 seconds"
    ],
    "examples": [
      {
        "input": "piles = [3,6,7,11], h = 8",
        "output": "4",
        "explanation": "Refer to description."
      }
    ],
    "starterCodes": {
      "javascript": "function minEatingSpeed(piles, h) {\n    // Write your code here\n    let l = 1, r = Math.max(...piles);\n    while (l < r) {\n        let mid = Math.floor((l + r) / 2);\n        let hours = piles.reduce((a, b) => a + Math.ceil(b / mid), 0);\n        if (hours <= h) r = mid;\n        else l = mid + 1;\n    }\n    return l;\n}",
      "python": "def minEatingSpeed(piles: list[int], h: int) -> int:\n    # Write your code here\n    l, r = 1, max(piles)\n    while l < r:\n        mid = (l + r) // 2\n        hours = sum((p + mid - 1) // mid for p in piles)\n        if hours <= h: r = mid\n        else: l = mid + 1\n    return l",
      "java": "public class Solution {\n    public int minEatingSpeed(int[] piles, int h) {\n        // Write your code here\n        int l = 1, r = 1000000000;\n        while (l < r) {\n            int mid = l + (r - l) / 2;\n            int hours = 0;\n            for (int p : piles) hours += (p + mid - 1) / mid;\n            if (hours <= h) r = mid;\n            else l = mid + 1;\n        }\n        return l;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int minEatingSpeed(vector<int>& piles, int h) {\n        // Write your code here\n        int l = 1, r = 1000000000;\n        while (l < r) {\n            int mid = l + (r - l) / 2;\n            long long hours = 0;\n            for (int p : piles) hours += (p + mid - 1) / mid;\n            if (hours <= h) r = mid;\n            else l = mid + 1;\n        }\n        return l;\n    }\n};",
      "go": "package main\n\nfunc minEatingSpeed(piles []int, h int) int {\n    // Write your code here\n    l, r := 1, 1000000000\n    for l < r {\n        mid := l + (r-l)/2\n        hours := 0\n        for _, p := range piles { hours += (p + mid - 1) / mid }\n        if hours <= h { r = mid } else { l = mid + 1 }\n    }\n    return l\n}"
    },
    "testCases": [
      {
        "input": "piles = [3,6,7,11], h = 8",
        "expected": "4"
      }
    ]
  },
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

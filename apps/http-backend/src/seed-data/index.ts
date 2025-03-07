export const questions = {
  questions: [
    {
      id: 1,
      title: "Two Sum",
      description:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      difficulty: "Easy",
      examples: [
        {
          input: { nums: [2, 7, 11, 15], target: 9 },
          output: [0, 1],
        },
        {
          input: { nums: [3, 2, 4], target: 6 },
          output: [1, 2],
        },
      ],
      constraints: [
        "2 <= nums.length <= 10^4",
        "-10^9 <= nums[i] <= 10^9",
        "-10^9 <= target <= 10^9",
        "Only one valid answer exists.",
      ],
    },
    {
      id: 2,
      title: "Reverse Integer",
      description:
        "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], return 0.",
      difficulty: "Medium",
      examples: [
        { input: { x: 123 }, output: 321 },
        { input: { x: -123 }, output: -321 },
        { input: { x: 120 }, output: 21 },
      ],
      constraints: ["-2^31 <= x <= 2^31 - 1"],
    },
    {
      id: 3,
      title: "Palindrome Number",
      description:
        "Given an integer x, return true if x is a palindrome, and false otherwise.",
      difficulty: "Easy",
      examples: [
        { input: { x: 121 }, output: true },
        { input: { x: -121 }, output: false },
        { input: { x: 10 }, output: false },
      ],
      constraints: ["-2^31 <= x <= 2^31 - 1"],
    },
    {
      id: 4,
      title: "Roman to Integer",
      description: "Convert a Roman numeral to an integer.",
      difficulty: "Easy",
      examples: [
        { input: { s: "III" }, output: 3 },
        { input: { s: "LVIII" }, output: 58 },
        { input: { s: "MCMXCIV" }, output: 1994 },
      ],
      constraints: [
        "1 <= s.length <= 15",
        "s contains only characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')",
        "Valid Roman numeral input.",
      ],
    },
    {
      id: 5,
      title: "Longest Substring Without Repeating Characters",
      description:
        "Given a string s, find the length of the longest substring without repeating characters.",
      difficulty: "Medium",
      examples: [
        { input: { s: "abcabcbb" }, output: 3 },
        { input: { s: "bbbbb" }, output: 1 },
        { input: { s: "pwwkew" }, output: 3 },
      ],
      constraints: [
        "0 <= s.length <= 5 * 10^4",
        "s consists of English letters, digits, symbols, and spaces.",
      ],
    },
    {
      id: 6,
      title: "Container With Most Water",
      description:
        "Given an array of integers height representing the heights of vertical lines, find two lines that together with the x-axis form a container that holds the most water.",
      difficulty: "Medium",
      examples: [
        { input: { height: [1, 8, 6, 2, 5, 4, 8, 3, 7] }, output: 49 },
        { input: { height: [1, 1] }, output: 1 },
      ],
      constraints: ["2 <= height.length <= 10^5", "0 <= height[i] <= 10^4"],
    },
    {
      id: 7,
      title: "Integer to Roman",
      description: "Convert an integer to a Roman numeral.",
      difficulty: "Medium",
      examples: [
        { input: { num: 3 }, output: "III" },
        { input: { num: 58 }, output: "LVIII" },
        { input: { num: 1994 }, output: "MCMXCIV" },
      ],
      constraints: ["1 <= num <= 3999"],
    },
    {
      id: 8,
      title: "3Sum",
      description:
        "Given an array nums of n integers, find all unique triplets in the array which gives the sum of zero.",
      difficulty: "Medium",
      examples: [
        {
          input: { nums: [-1, 0, 1, 2, -1, -4] },
          output: [
            [-1, -1, 2],
            [-1, 0, 1],
          ],
        },
        { input: { nums: [] }, output: [] },
        { input: { nums: [0] }, output: [] },
      ],
      constraints: ["0 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
    },
    {
      id: 9,
      title: "Remove Nth Node From End of List",
      description:
        "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
      difficulty: "Medium",
      examples: [
        { input: { head: [1, 2, 3, 4, 5], n: 2 }, output: [1, 2, 3, 5] },
        { input: { head: [1], n: 1 }, output: [] },
        { input: { head: [1, 2], n: 1 }, output: [1] },
      ],
      constraints: [
        "1 <= list size <= 30",
        "0 <= Node.val <= 100",
        "1 <= n <= list size",
      ],
    },
    {
      id: 10,
      title: "Valid Parentheses",
      description:
        "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      difficulty: "Easy",
      examples: [
        { input: { s: "()" }, output: true },
        { input: { s: "()[]{}" }, output: true },
        { input: { s: "(]" }, output: false },
      ],
      constraints: [
        "1 <= s.length <= 10^4",
        "s consists of parentheses only '()[]{}'.",
      ],
    },
    {
      id: 11,
      title: "Merge Two Sorted Lists",
      description:
        "Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.",
      difficulty: "Easy",
      examples: [
        { input: { l1: [1, 2, 4], l2: [1, 3, 4] }, output: [1, 1, 2, 3, 4, 4] },
        { input: { l1: [], l2: [] }, output: [] },
        { input: { l1: [], l2: [0] }, output: [0] },
      ],
      constraints: [
        "The number of nodes in both lists is in the range [0, 50].",
        "-100 <= Node.val <= 100",
        "Both l1 and l2 are sorted in non-decreasing order.",
      ],
    },
    {
      id: 12,
      title: "Search Insert Position",
      description:
        "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
      difficulty: "Easy",
      examples: [
        { input: { nums: [1, 3, 5, 6], target: 5 }, output: 2 },
        { input: { nums: [1, 3, 5, 6], target: 2 }, output: 1 },
        { input: { nums: [1, 3, 5, 6], target: 7 }, output: 4 },
      ],
      constraints: [
        "1 <= nums.length <= 10^4",
        "-10^4 <= nums[i] <= 10^4",
        "nums contains distinct values sorted in ascending order.",
        "-10^4 <= target <= 10^4",
      ],
    },
    {
      id: 13,
      title: "Maximum Subarray",
      description:
        "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
      difficulty: "Easy",
      examples: [
        { input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] }, output: 6 },
        { input: { nums: [1] }, output: 1 },
        { input: { nums: [5, 4, -1, 7, 8] }, output: 23 },
      ],
      constraints: ["1 <= nums.length <= 3 * 10^4", "-10^5 <= nums[i] <= 10^5"],
    },
    {
      id: 14,
      title: "Climbing Stairs",
      description:
        "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
      difficulty: "Easy",
      examples: [
        { input: { n: 2 }, output: 2 },
        { input: { n: 3 }, output: 3 },
        { input: { n: 4 }, output: 5 },
      ],
      constraints: ["1 <= n <= 45"],
    },
    {
      id: 15,
      title: "Best Time to Buy and Sell Stock",
      description:
        "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
      difficulty: "Easy",
      examples: [
        { input: { prices: [7, 1, 5, 3, 6, 4] }, output: 5 },
        { input: { prices: [7, 6, 4, 3, 1] }, output: 0 },
      ],
      constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
    },
    {
      id: 16,
      title: "Valid Palindrome",
      description:
        "Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
      difficulty: "Easy",
      examples: [
        { input: { s: "A man, a plan, a canal: Panama" }, output: true },
        { input: { s: "race a car" }, output: false },
      ],
      constraints: [
        "1 <= s.length <= 2 * 10^5",
        "s consists only of printable ASCII characters.",
      ],
    },
    {
      id: 17,
      title: "Single Number",
      description:
        "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
      difficulty: "Easy",
      examples: [
        { input: { nums: [2, 2, 1] }, output: 1 },
        { input: { nums: [4, 1, 2, 1, 2] }, output: 4 },
      ],
      constraints: [
        "1 <= nums.length <= 3 * 10^4",
        "-3 * 10^4 <= nums[i] <= 3 * 10^4",
        "Each element in the array appears twice except for one element which appears only once.",
      ],
    },
    {
      id: 18,
      title: "Linked List Cycle",
      description:
        "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
      difficulty: "Easy",
      examples: [
        { input: { head: [3, 2, 0, -4], pos: 1 }, output: true },
        { input: { head: [1, 2], pos: 0 }, output: true },
        { input: { head: [1], pos: -1 }, output: false },
      ],
      constraints: [
        "The number of nodes in the list is in the range [0, 10^4].",
        "-10^5 <= Node.val <= 10^5",
        "pos is -1 or a valid index in the linked list.",
      ],
    },
    {
      id: 19,
      title: "Binary Tree Inorder Traversal",
      description:
        "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
      difficulty: "Easy",
      examples: [
        { input: { root: [1, null, 2, 3] }, output: [1, 3, 2] },
        { input: { root: [] }, output: [] },
      ],
      constraints: [
        "The number of nodes in the tree is in the range [0, 100].",
        "-100 <= Node.val <= 100",
      ],
    },
    {
      id: 20,
      title: "Symmetric Tree",
      description:
        "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
      difficulty: "Easy",
      examples: [
        { input: { root: [1, 2, 2, 3, 4, 4, 3] }, output: true },
        { input: { root: [1, 2, 2, null, 3, null, 3] }, output: false },
      ],
      constraints: [
        "The number of nodes in the tree is in the range [0, 1000].",
        "-100 <= Node.val <= 100",
      ],
    },
    {
      id: 21,
      title: "Maximum Depth of Binary Tree",
      description: "Given the root of a binary tree, return its maximum depth.",
      difficulty: "Easy",
      examples: [
        { input: { root: [3, 9, 20, null, null, 15, 7] }, output: 3 },
        { input: { root: [1, null, 2] }, output: 2 },
      ],
      constraints: [
        "The number of nodes in the tree is in the range [0, 10^4].",
        "-100 <= Node.val <= 100",
      ],
    },
    {
      id: 22,
      title: "Path Sum",
      description:
        "Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.",
      difficulty: "Easy",
      examples: [
        {
          input: {
            root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1],
            targetSum: 22,
          },
          output: true,
        },
        { input: { root: [1, 2, 3], targetSum: 5 }, output: false },
      ],
      constraints: [
        "The number of nodes in the tree is in the range [0, 5000].",
        "-1000 <= Node.val <= 1000",
        "-1000 <= targetSum <= 1000",
      ],
    },
    {
      id: 23,
      title: "Pascal's Triangle",
      description:
        "Given an integer numRows, return the first numRows of Pascal's triangle.",
      difficulty: "Easy",
      examples: [
        {
          input: { numRows: 5 },
          output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
        },
        { input: { numRows: 1 }, output: [[1]] },
      ],
      constraints: ["1 <= numRows <= 30"],
    },
    {
      id: 24,
      title: "Valid Anagram",
      description:
        "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
      difficulty: "Easy",
      examples: [
        { input: { s: "anagram", t: "nagaram" }, output: true },
        { input: { s: "rat", t: "car" }, output: false },
      ],
      constraints: [
        "1 <= s.length, t.length <= 5 * 10^4",
        "s and t consist of lowercase English letters.",
      ],
    },
    {
      id: 25,
      title: "Missing Number",
      description:
        "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
      difficulty: "Easy",
      examples: [
        { input: { nums: [3, 0, 1] }, output: 2 },
        { input: { nums: [0, 1] }, output: 2 },
      ],
      constraints: [
        "n == nums.length",
        "1 <= n <= 10^4",
        "0 <= nums[i] <= n",
        "All the numbers of nums are unique.",
      ],
    },
    {
      id: 26,
      title: "Move Zeroes",
      description:
        "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
      difficulty: "Easy",
      examples: [
        { input: { nums: [0, 1, 0, 3, 12] }, output: [1, 3, 12, 0, 0] },
        { input: { nums: [0] }, output: [0] },
      ],
      constraints: ["1 <= nums.length <= 10^4", "-2^31 <= nums[i] <= 2^31 - 1"],
    },
    {
      id: 27,
      title: "Word Pattern",
      description:
        "Given a pattern and a string s, find if s follows the same pattern.",
      difficulty: "Easy",
      examples: [
        { input: { pattern: "abba", s: "dog cat cat dog" }, output: true },
        { input: { pattern: "abba", s: "dog cat cat fish" }, output: false },
      ],
      constraints: [
        "1 <= pattern.length <= 300",
        "pattern contains only lowercase English letters.",
        "1 <= s.length <= 3000",
        "s contains lowercase English letters and spaces.",
        "s does not contain leading or trailing spaces.",
        "All words in s are separated by a single space.",
      ],
    },
    {
      id: 28,
      title: "Power of Two",
      description:
        "Given an integer n, return true if it is a power of two. Otherwise, return false.",
      difficulty: "Easy",
      examples: [
        { input: { n: 1 }, output: true },
        { input: { n: 16 }, output: true },
        { input: { n: 3 }, output: false },
      ],
      constraints: ["-2^31 <= n <= 2^31 - 1"],
    },
    {
      id: 29,
      title: "First Unique Character in a String",
      description:
        "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
      difficulty: "Easy",
      examples: [
        { input: { s: "leetcode" }, output: 0 },
        { input: { s: "loveleetcode" }, output: 2 },
      ],
      constraints: [
        "1 <= s.length <= 10^5",
        "s consists of only lowercase English letters.",
      ],
    },
    {
      id: 30,
      title: "Ransom Note",
      description:
        "Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.",
      difficulty: "Easy",
      examples: [
        { input: { ransomNote: "a", magazine: "b" }, output: false },
        { input: { ransomNote: "aa", magazine: "aab" }, output: true },
      ],
      constraints: [
        "1 <= ransomNote.length, magazine.length <= 10^5",
        "ransomNote and magazine consist of lowercase English letters.",
      ],
    },
    {
      id: 31,
      title: "Reverse String",
      description:
        "Write a function that reverses a string. The input string is given as an array of characters s.",
      difficulty: "Easy",
      examples: [
        {
          input: { s: ["h", "e", "l", "l", "o"] },
          output: ["o", "l", "l", "e", "h"],
        },
        {
          input: { s: ["H", "a", "n", "n", "a", "h"] },
          output: ["h", "a", "n", "n", "a", "H"],
        },
      ],
      constraints: [
        "1 <= s.length <= 10^5",
        "s[i] is a printable ASCII character.",
      ],
    },
    {
      id: 32,
      title: "Longest Common Prefix",
      description:
        "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",
      difficulty: "Easy",
      examples: [
        { input: { strs: ["flower", "flow", "flight"] }, output: "fl" },
        { input: { strs: ["dog", "racecar", "car"] }, output: "" },
      ],
      constraints: [
        "1 <= strs.length <= 200",
        "0 <= strs[i].length <= 200",
        "strs[i] consists of only lowercase English letters.",
      ],
    },
    {
      id: 33,
      title: "Majority Element",
      description:
        "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.",
      difficulty: "Easy",
      examples: [
        { input: { nums: [3, 2, 3] }, output: 3 },
        { input: { nums: [2, 2, 1, 1, 1, 2, 2] }, output: 2 },
      ],
      constraints: [
        "n == nums.length",
        "1 <= n <= 5 * 10^4",
        "-10^9 <= nums[i] <= 10^9",
      ],
    },
    {
      id: 34,
      title: "Contains Duplicate",
      description:
        "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      difficulty: "Easy",
      examples: [
        { input: { nums: [1, 2, 3, 1] }, output: true },
        { input: { nums: [1, 2, 3, 4] }, output: false },
      ],
      constraints: ["1 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"],
    },
    {
      id: 35,
      title: "Happy Number",
      description:
        "Write an algorithm to determine if a number n is happy. A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.",
      difficulty: "Easy",
      examples: [
        { input: { n: 19 }, output: true },
        { input: { n: 2 }, output: false },
      ],
      constraints: ["1 <= n <= 2^31 - 1"],
    },
    {
      id: 36,
      title: "Count Primes",
      description:
        "Given an integer n, return the number of prime numbers that are strictly less than n.",
      difficulty: "Medium",
      examples: [
        { input: { n: 10 }, output: 4 },
        { input: { n: 0 }, output: 0 },
      ],
      constraints: ["0 <= n <= 5 * 10^6"],
    },
    {
      id: 37,
      title: "Power of Three",
      description:
        "Given an integer n, return true if it is a power of three. Otherwise, return false.",
      difficulty: "Easy",
      examples: [
        { input: { n: 27 }, output: true },
        { input: { n: 0 }, output: false },
      ],
      constraints: ["-2^31 <= n <= 2^31 - 1"],
    },
    {
      id: 38,
      title: "Reverse Bits",
      description: "Reverse bits of a given 32 bits unsigned integer.",
      difficulty: "Easy",
      examples: [
        { input: { n: 43261596 }, output: 964176192 },
        { input: { n: 4294967293 }, output: 3221225471 },
      ],
      constraints: ["The input must be a 32-bit unsigned integer."],
    },
    {
      id: 39,
      title: "Number of 1 Bits",
      description:
        "Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).",
      difficulty: "Easy",
      examples: [
        { input: { n: 11 }, output: 3 },
        { input: { n: 128 }, output: 1 },
      ],
      constraints: ["The input must be a 32-bit unsigned integer."],
    },
    {
      id: 40,
      title: "Valid Parentheses",
      description:
        "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      difficulty: "Easy",
      examples: [
        { input: { s: "()" }, output: true },
        { input: { s: "()[]{}" }, output: true },
        { input: { s: "(]" }, output: false },
      ],
      constraints: [
        "1 <= s.length <= 10^4",
        "s consists of parentheses only '()[]{}'.",
      ],
    },
  ],
};

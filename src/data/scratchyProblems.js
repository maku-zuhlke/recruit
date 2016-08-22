import { codeBlocksInstruction } from './strings';

export const fibonacci = {
  instruction: codeBlocksInstruction + 'solve the fibonacci challenge.',
  correctOrder: [4, 1, 6, 3, 2, 5],
  blocks: [{
    text: 'int f = 0;\nint g = 1;',
    id: 1
  },
    {
      text: 'f = f + g;\ng = f - g;}',
      id: 2
    },
    {
      text: 'System.out.print(f + " ");',
      id: 3
    },
    {
      text: 'public static void main (String[] args) {',
      id: 4
    },
    {
      text: 'System.out.println();}',
      id: 5
    },
    {
      text: 'for (int i = 1; i <= 10; i++) {',
      id: 6
    }]
};

export const bubbleSort = {
  instruction: codeBlocksInstruction + 'build the bubble sort method',
  correctOrder: [7, 4, 5, 2, 1, 8, 6, 3],
  blocks: [
    {
      text: 'if (numbers[j - 1] > numbers[j]) {',
      id: 1
    },
    {
      text: 'for (int j = 1; j < (n - i); j++) {',
      id: 2
    },
    {
      text: 'numbers[j] = temp;}}}}',
      id: 3
    },
    {
      text: 'int n = numbers.length;\nint temp = 0;',
      id: 4
    },
    {
      text: 'for (int i = 0; i < n; i++) {',
      id: 5
    },
    {
      text: 'numbers[j - 1] = numbers[j];',
      id: 6
    },
    {
      text: 'public static void bubbleSort(int[] numbers) {',
      id: 7
    },
    {
      text: 'temp = numbers[j - 1];',
      id: 8
    }]
};

export const selectionSort = {
  instruction: codeBlocksInstruction + 'build the selection sort method',
  correctOrder: [9, 2, 7, 11, 6, 10, 3, 1, 5, 4, 8],
  blocks: [
    {
      text: 'if (min != i) {',
      id: 1
    },
    {
      text: 'int n = numbers.length;\nint min;',
      id: 2
    },
    {
      text: 'min = j;}}',
      id: 3
    },
    {
      text: 'numbers[i] = numbers[min];',
      id: 4
    },
    {
      text: 'int temp = numbers[i];',
      id: 5
    },
    {
      text: 'for (int j = i + 1; j < n; j++) {',
      id: 6
    },
    {
      text: 'for (int i = 0; i < n - 1; i++) {',
      id: 7
    },
    {
      text: 'numbers[min] = temp;}}}',
      id: 8
    },
    {
      text: 'public static void selectionSort(int[] numbers) {',
      id: 9
    },

    {
      text: 'if (numbers[j] < numbers[min]) {',
      id: 10
    },
    {
      text: 'min = i;',
      id: 11
    }]
};

export const insertionSort = {
  instruction: codeBlocksInstruction + 'build the insertion sort method',
  correctOrder: [8, 6, 1, 5, 3, 9, 4, 7, 2],
  blocks: [
    {
      text: 'for (int i = 1; i < numbers.length; i++) {',
      id: 1
    },
    {
      text: 'j--;}}}',
      id: 2
    },
    {
      text: 'while (j > 0 && numbers[j - 1] > numbers[j]) {',
      id: 3
    },
    {
      text: 'numbers[j] = numbers[j - 1];',
      id: 4
    },
    {
      text: 'j = i;',
      id: 5
    },
    {
      text: 'int j;\nint temp;',
      id: 6
    },
    {
      text: 'numbers[j - 1] = temp;',
      id: 7
    },
    {
      text: 'public static void insertionSort(int[] numbers) {',
      id: 8
    },
    {
      text: 'temp = numbers[j];',
      id: 9
    }]
};

export const palindromes = {
  instruction: codeBlocksInstruction + 'build a method that checks if a given word is a palindrome',
  correctOrder: [3, 5, 7, 2, 6, 1, 4],
  blocks: [
    {
      text: 'isPalindrome = isPalindrome && isSameLetter;}}',
      id: 1
    },
    {
      text: 'for (int i = 0; i <= size/2; i++) {',
      id: 2
    },
    {
      text: 'public static boolean isPalindrome(String word) {',
      id: 3
    },
    {
      text: 'return isPalindrome;}',
      id: 4
    },
    {
      text: 'int size = word.length() - 1;\nboolean isSameLetter, isPalindrome = true;',
      id: 5
    },
    {
      text: 'isSameLetter = (word.charAt(i) == word.charAt(size - i));',
      id: 6
    },
    {
      text: 'if (size >= 2) {',
      id: 7
    }]
};

export const anagrams = {
  instruction: codeBlocksInstruction + 'build a method that checks if two words are anagram of each other',
  correctOrder: [5, 8, 6, 1, 10, 2, 11, 9, 3, 4, 7],
  blocks: [
    {
      text: 'int index;\nchar[] chars = word.toCharArray();',
      id: 1
    },
    {
      text: 'index = otherWord.indexOf(character);',
      id: 2
    },
    {
      text: '} else {',
      id: 3
    },
    {
      text: 'return false;}}',
      id: 4
    },
    {
      text: 'public static boolean isAnagram(String word, String otherWord) {',
      id: 5
    },
    {
      text: 'return false;}',
      id: 6
    },
    {
      text: 'return otherWord.isEmpty();}',
      id: 7
    },
    {
      text: 'if (word.length() != otherWord.length()) {',
      id: 8
    },
    {
      text: 'otherWord = otherWord.substring(0, index) + otherWord.substring(index + 1, otherWord.length());',
      id: 9
    },
    {
      text: 'for (char character : chars) {',
      id: 10
    },
    {
      text: 'if (index >= 0) {',
      id: 11
    }]
};

export const secondHighest = {
  instruction: codeBlocksInstruction + 'build a method prints the second highest number in an array',
  correctOrder: [3, 8, 2, 6, 5, 9, 1, 7, 4],
  blocks: [
    {
      text: '} else if (n > secondMax) {',
      id: 1
    },
    {
      text: 'for (int n : numbers) {',
      id: 2
    },
    {
      text: 'public static void secondHighest(int[] numbers) {',
      id: 3
    },
    {
      text: 'System.out.println(secondMax);}',
      id: 4
    },
    {
      text: 'secondMax = max;',
      id: 5
    },
    {
      text: 'if (n > max) {',
      id: 6
    },
    {
      text: 'secondMax = n;}}',
      id: 7
    },
    {
      text: 'int max = Integer.MIN_VALUE;\nint secondMax = Integer.MIN_VALUE;',
      id: 8
    },
    {
      text: 'max = n;',
      id: 9
    }]
};

export const sumOfLargestAndSmallest = {
  instruction: codeBlocksInstruction + 'build a method prints the sum of the largest and smallest numbers in an array',
  correctOrder: [4, 8, 1, 6, 3, 5, 2, 7],
  blocks: [
    {
      text: 'for (int n : numbers) {',
      id: 1
    },
    {
      text: 'smallest = n;}}',
      id: 2
    },
    {
      text: 'largest = n;}',
      id: 3
    },
    {
      text: 'public static void sumOfLargestAndSmallest(int[] numbers) {',
      id: 4
    },
    {
      text: 'if (n < smallest) {',
      id: 5
    },
    {
      text: 'if (n > largest) {',
      id: 6
    },
    {
      text: 'System.out.println(largest + smallest);}',
      id: 7
    },
    {
      text: 'int largest = Integer.MIN_VALUE;\nint smallest = Integer.MAX_VALUE;',
      id: 8
    }]
};


export const binarySearch = {
  instruction: codeBlocksInstruction + 'build the binary search method',
  correctOrder: [5, 3, 7, 1, 9, 4, 10, 2, 6, 11, 8],
  blocks: [
    {
      text: 'if (last == 0) {',
      id: 1
    },
    {
      text: '} else if (numbers[middle] < key) {',
      id: 2
    },
    {
      text: 'int first = 0;\nint last = numbers.length;',
      id: 3
    },
    {
      text: '} else if (numbers[middle] == key) {',
      id: 4
    },
    {
      text: 'public static int binarySearch(int[] numbers, int key) {',
      id: 5
    },
    {
      text: 'return binarySearch(Arrays.copyOfRange(numbers, middle + 1, last), key);',
      id: 6
    },
    {
      text: 'int middle = last/2;',
      id: 7
    },
    {
      text: 'return binarySearch(Arrays.copyOfRange(numbers, first, middle), key);}}',
      id: 8
    },
    {
      text: 'return -1;',
      id: 9
    },
    {
      text: 'return middle;',
      id: 10
    },
    {
      text: '} else {',
      id: 11
    }]
};

export const removeDuplicates = {
  instruction: codeBlocksInstruction + 'build a method that removes duplicate elements from an array',
  correctOrder: [9, 5, 3, 7, 1, 8, 6, 10, 2, 4],
  blocks: [
    {
      text: 'for (int i = 1; i < numbersWithDuplicates.length; i++) {',
      id: 1
    },
    {
      text: 'previous = number;}',
      id: 2
    },
    {
      text: 'int[] result = new int[numbersWithDuplicates.length];\nint previous = numbersWithDuplicates[0];',
      id: 3
    },
    {
      text: 'return result;}',
      id: 4
    },
    {
      text: 'Arrays.sort(numbersWithDuplicates);',
      id: 5
    },
    {
      text: 'if (previous != number) {',
      id: 6
    },
    {
      text: 'result[0] = previous;',
      id: 7
    },
    {
      text: 'int number = numbersWithDuplicates[i];',
      id: 8
    },
    {
      text: 'public static int[] removeDuplicates(int[] numbersWithDuplicates) {',
      id: 9
    },
    {
      text: 'result[i] = number;}',
      id: 10
    }]
};

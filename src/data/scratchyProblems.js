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
      text: ' or (int i = 0; i < n; i++) {',
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

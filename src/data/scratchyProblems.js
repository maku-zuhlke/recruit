export const fibonacci = {
  instruction: 'Drag and drop the blocks to solve the fibonacci challenge.',
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
    }],
  win: false
};

export const rotate = {
  instruction: 'Drag and drop the blocks to rotate an array of n elements to the right by k steps.\n For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].',
  correctOrder: [4, 8, 3, 10, 1, 2, 7, 5, 9, 6],
  blocks: [{
    text: 'for (int i = 0; i &lt; k; i++){',
    id: 1
  },
    {
      text: 'result[i] = nums[nums.length - k+i];}',
      id: 2
    },
    {
      text: ' k = k % nums.length;',
      id: 3
    },
    {
      text: 'public void rotate(int[] nums, int k) {',
      id: 4
    },
    {
      text: 'for (int i = k; i &lt; nums.length; i++){',
      id: 5
    },
    {
      text: 'System.arraycopy( result, 0, nums, 0, nums.length ); }',
      id: 6
    },
    {
      text: 'int j = 0;',
      id: 7
    },
    {
      text: 'if (k &gt; nums.length)',
      id: 8
    },
    {
      text: ' result[i] = nums[j];\n j++; }',
      id: 9
    },
    {
      text: ' int[] result = new int[nums.length];}',
      id: 10
    }],
  win: false
};

export const bubbleSort = {
  instruction: 'Drag and drop the blocks to build the bubble sort method',
  correctOrder: [7, 4, 5, 2, 1, 8, 6, 3],
  blocks: [
    {
      text: ' if (numbers[j - 1] > numbers[j]) {',
      id: 1
    },
    {
      text: ' for (int j = 1; j < (n - i); j++) {',
      id: 2
    },
    {
      text: ' numbers[j] = temp;}}}}',
      id: 3
    },
    {
      text: ' int n = numbers.length;\n int temp = 0;',
      id: 4
    },
    {
      text: ' for (int i = 0; i < n; i++) {',
      id: 5
    },
    {
      text: ' numbers[j - 1] = numbers[j];',
      id: 6
    },
    {
      text: 'public static void bubbleSort(int[] numbers) {',
      id: 7
    },

    {
      text: ' temp = numbers[j - 1];',
      id: 8
    }],
  win: false
};




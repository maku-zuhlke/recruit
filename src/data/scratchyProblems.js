export const a = {
  instruction: 'Solve the fibonacci challenge.',
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

export const b = {
  instruction: 'Rotate an array of n elements to the right by k steps.\n For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4]. How many different ways do you know to solve this problem?',
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




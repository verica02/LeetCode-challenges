class Solution {
    
public:
    int arr[31][1001];
    int mod = 1000000007;
    
    int numRollsToTarget(int n, int k, int target)
    {
        long long sum = 0;
        
        if (arr[0][0] != -1)
            {
                 memset(arr, -1, sizeof(arr));
            }
           
        if (target < 0 || n < 0 || (n == 0 && target != 0) || k * n < target)
            {
                return (0);
            }
            
        if (!target && !n)
            {
                 return (1);
            }
           
        if (arr[n][target] != -1)
            {
                return (arr[n][target]);
            }
            
        for (int i = 1; i <= k; i++)
        {
            int s = numRollsToTarget(n - 1, k, target - i);
            sum = (sum + s) % mod;
        }
        
        arr[n][target] = sum;
        
        
        return (sum);
    }
};
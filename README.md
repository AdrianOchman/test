int fibonacci(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    int prev1 = 0, prev2 = 1, result = 0;
    for (int i = 2; i <= n; ++i) {
        result = prev1 + prev2;
        prev1 = prev2;
        prev2 = result;
    }
    return result;
}


int fibonacci(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

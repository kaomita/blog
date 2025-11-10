---
title: Least Common Multiple

date: 2025-11-09
category:
  - algorithm
tag:
  - skill

---

**Definition**:
The **common multiple** of two or more integers is a number that is a multiple of all of them. Among these, the smallest positive common multiple is called the **Least Common Multiple (LCM)**.
For integers `a` and `b`, the least common multiple is denoted as `[a, b]` or `lcm(a, b)`.

## Formula

We can use the **Greatest Common Divisor (GCD)** to compute the **Least Common Multiple**.

For any two positive integers `a` and `b`:
$$
LCM(a, b) = \frac{a \times b}{GCD(a, b)}
$$

For multiple numbers, the LCM can be found iteratively:
$$
LCM(a_1, a_2, a_3, \ldots, a_n)
= LCM(\ldots(LCM(LCM(a_1, a_2), a_3)\ldots), a_n)
$$

## Algorithm Implementation

### When Integers Are Small

Range of Java data types:

| Data Type        | Memory (Bytes) | Exact Range                 | Approx. Value                        |
| :--------------- | :------------- | :-------------------------- | :----------------------------------- |
| **`int`**        | 4              | $-2^{31}$ to $2^{31} - 1$   | $\approx \pm 2.15 \times 10^9$       |
| **`long`**       | 8              | $-2^{63}$ to $2^{63} - 1$   | $\approx \pm 9.22 \times 10^{18}$    |
| **`BigInteger`** | Variable       | **Theoretically Unlimited** | Limited only by **available memory** |

When the values are within $-2^{63}$ to $2^{63} - 1$, use `long` for calculation:

```java
import java.util.*;

public class Main {
    // Compute Greatest Common Divisor (Euclidean Algorithm)
    public static long gcd(long a, long b) {
        while (b != 0) {
            long temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    // Compute Least Common Multiple
    public static long lcm(long a, long b) {
        return a / gcd(a, b) * b; // divide first to prevent overflow
    }

    // Compute LCM of an array
    public static long lcmOfArray(long[] nums) {
        long res = nums[0];
        for (int i = 1; i < nums.length; i++) {
            res = lcm(res, nums[i]);
        }
        return res;
    }
}
```

### When Integers Are Large

When the values exceed the range of $-2^{63}$ to $2^{63} - 1$, use `BigInteger` for calculation:

```java
import java.math.BigInteger;

public class BigLCM {
    public static BigInteger lcm(BigInteger a, BigInteger b) {
        return a.multiply(b).divide(a.gcd(b));
    }

    public static BigInteger lcmOfArray(BigInteger[] nums) {
        BigInteger res = nums[0];
        for (int i = 1; i < nums.length; i++) {
            res = lcm(res, nums[i]);
        }
        return res;
    }
}
```

---
title: 最小公倍数
# icon: server
# sidebar: false
date: 2025-11-09
category:
  - 算法
tag:
  - 技巧
---

**定义**：两个或多个整数公有的倍数叫做它们的公倍数，其中除0以外最小的一个公倍数就叫做这几个整数的**最小公倍数（LCM, Least Common Multiple）**。整数`a`，`b`的最小公倍数记为`[a，b]`或者`lcm(a,b)`。

## 公式求解
利用最大公约(GCD)数来求最小公倍数
对于任意两个正整数`a`和 `b`：
$$
LCM(a, b) = \frac{a \times b}{GCD(a, b)}
$$
对于多个数，可以使用迭代法：
$$
LCM(a_1, a_2, a_3, \ldots, a_n)
= LCM(\ldots(LCM(LCM(a_1, a_2), a_3)\ldots), a_n)
$$

## 算法实现
### 整数较小时
Java的数据类型范围如下：
| 数据类型 | 占用空间 (字节) | 确切范围 | 近似值 |
| :--- | :--- | :--- | :--- |
| **`int`** | 4 | $-2^{31}$ 到 $2^{31} - 1$ | $\approx \pm 2.15 \times 10^9$ |
| **`long`** | 8 | $-2^{63}$ 到 $2^{63} - 1$ | $\approx \pm 9.22 \times 10^{18}$ |
| **`BigInteger`** | 可变 | **理论上无限大** | 仅受限于**可用内存** |

当数值在$-2^{63}$ 到 $2^{63} - 1$范围内，使用`long`计算：
```java
import java.util.*;

public class Main {
    // 求最大公约数（欧几里得算法）
    public static long gcd(long a, long b) {
        while (b != 0) {
            long temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    // 求最小公倍数
    public static long lcm(long a, long b) {
        return a / gcd(a, b) * b; // 先除后乘防止溢出
    }

    // 求一组数的最小公倍数
    public static long lcmOfArray(long[] nums) {
        long res = nums[0];
        for (int i = 1; i < nums.length; i++) {
            res = lcm(res, nums[i]);
        }
        return res;
    }
}
```
### 整数较大时
当数值chaochu超出$-2^{63}$ 到 $2^{63} - 1$范围，使用`BigInteger`计算：
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
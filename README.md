# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$
e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots
$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

---

Answer:

The repeated work in the original version of the $e$ calculation code is in the recursive calls. If looking at the recursion tree for both of the recursive versions, `e()` and `factorial()`, some of the same recursive calls end up being executed multiple times. For example, to calculate `e(10)`, `e(2)` is going to need to be evaluated many times. `factorial(2)` is going to need to be evaluated even more times.

The worst-case runtime of the new algorithm is $\Theta(n^2)$, which is pretty easy to determine.

The complexity for `factorial_alt()` is linear, because it starts at `i = 1` with `prod = 1`, and it increments up to _n_, multiplying the product by _i_ each time.

The same logic applies to `e_alt()`, as well; however, instead of multiplying each _i_ value to a product variable, it is adding something to a sum. `e_alt()` is linear in terms of sum operations, but each sum operation is also doing linear work.

---

**I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.**

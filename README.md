# TypeScript Merge Function

This is a TypeScript project that implements a `merge` function to merge two sorted arrays without using any built-in sorting functions. The project also includes unit tests to ensure the correctness of the `merge` function.

## Getting Started

### Prerequisites

To run this project, you need to have Node.js and npm (Node Package Manager) installed on your machine. You can download and install Node.js from the official website: [https://nodejs.org/](https://nodejs.org/)

### Installing Dependencies

To install the project dependencies, run the following command in the project's root directory:

```bash
npm install
```

### Executing Code

To execute the code interactively, run the following command:

```bash
npm run execute
```

The `npm run execute` command will use `ts-node` to execute the `index.ts` script located in the `src` directory. The script will prompt you to enter two sorted arrays, and then it will call the `merge` function from `merge.ts` to merge the input arrays. The merged array will be displayed in the console as the output.

#### Input Format

The script expects the user to provide two sorted arrays as input. Each array should be entered as a space-separated list of numbers.

For example:

```bash
Enter sorted array collection1 (space-separated numbers): 1 6 7 11
Enter sorted array collection2 (space-separated numbers): 2 5 10 13
```

The merge function expects that the input arrays are already sorted, so be careful to insert the integers within each array in ascending order.

#### Output

The script will run the `merge` function to combine the two input arrays when you supply them, and it will then display the merged array in the console. For instance:

```bash
Output: [1, 2, 5, 6, 7, 10, 11, 13]
```

### Running the Tests

To run the unit tests for the `merge` function, use the following command:

```bash
npm test
```

This will execute the Jest test runner and display the test results in the console.

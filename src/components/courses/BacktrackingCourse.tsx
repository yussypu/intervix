const BacktrackingCourse = () => {
    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold text-white mb-4'>Introduction to Backtracking</h2>
            <p className='text-lg text-white mb-4'>
                Backtracking is a problem-solving technique used to find all (or some) solutions to a problem by exploring all possible options and undoing choices that fail to meet the criteria. It’s a depth-first approach that incrementally builds candidates for solutions and abandons a candidate as soon as it is determined to be invalid.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Basic Concepts</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Decision Tree:</strong> A tree where each node represents a decision or choice. The tree is explored recursively to find solutions.</li>
                <li><strong>Backtracking:</strong> The process of exploring a branch of the decision tree, and if it leads to a solution, it’s kept; otherwise, it’s undone (backtracked).</li>
                <li><strong>Pruning:</strong> The technique of cutting off branches in the decision tree that cannot possibly lead to a solution, thus improving efficiency.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Backtracking Technique</h3>
            <ol className='text-lg text-white mb-6 list-decimal pl-6'>
                <li><strong>Choose:</strong> Make a choice or decision.</li>
                <li><strong>Explore:</strong> Recursively explore the choices by moving to the next step.</li>
                <li><strong>Unchoose:</strong> Undo the previous choice if it leads to a dead end or invalid solution.</li>
            </ol>

            <h3 className='text-xl font-bold text-white mb-4'>Common Backtracking Problems</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>N-Queens Problem:</strong> Place N queens on an N x N chessboard such that no two queens threaten each other.</li>
                <li><strong>Subset Sum Problem:</strong> Find subsets of a set that sum up to a specific target value.</li>
                <li><strong>Sudoku Solver:</strong> Solve a Sudoku puzzle by filling in the empty cells to ensure all rows, columns, and subgrids contain numbers 1 to 9 without repetition.</li>
                <li><strong>Permutations:</strong> Generate all possible permutations of a set of elements.</li>
                <li><strong>Combinations:</strong> Find all possible combinations of a set of elements given a specific size.</li>
                <li><strong>Word Search:</strong> Search for a word in a 2D grid of characters.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Example Problem: N-Queens</h3>
            <p className='text-lg text-white mb-4'>
                The N-Queens problem requires placing N queens on an N x N chessboard so that no two queens attack each other. This involves placing queens such that no two queens share the same row, column, or diagonal.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function solveNQueens(N) {
    let solutions = [];
    let board = Array.from({ length: N }, () => Array(N).fill(0));
    backtrack(board, 0, N, solutions);
    return solutions;
}

function backtrack(board, row, N, solutions) {
    if (row === N) {
        solutions.push(board.map(row => row.slice()));
        return;
    }

    for (let col = 0; col < N; col++) {
        if (isValid(board, row, col, N)) {
            board[row][col] = 1;
            backtrack(board, row + 1, N, solutions);
            board[row][col] = 0;
        }
    }
}

function isValid(board, row, col, N) {
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 1) return false;
    }
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 1) return false;
    }
    for (let i = row, j = col; i >= 0 && j < N; i--, j++) {
        if (board[i][j] === 1) return false;
    }
    return true;
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Example Problem: Sudoku Solver</h3>
            <p className='text-lg text-white mb-4'>
                The Sudoku Solver problem involves filling a 9x9 grid such that every row, column, and 3x3 subgrid contains digits from 1 to 9 without repetition.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function solveSudoku(board) {
    backtrack(board);
}

function backtrack(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (backtrack(board)) {
                            return true;
                        }
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num || board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === num) {
            return false;
        }
    }
    return true;
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Example Problem: Permutations</h3>
            <p className='text-lg text-white mb-4'>
                The Permutations problem involves generating all possible arrangements of a set of elements.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function permute(nums) {
    let results = [];
    backtrack(nums, [], results);
    return results;
}

function backtrack(nums, path, results) {
    if (path.length === nums.length) {
        results.push(path.slice());
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (path.includes(nums[i])) continue;
        path.push(nums[i]);
        backtrack(nums, path, results);
        path.pop();
    }
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Example Problem: Combinations</h3>
            <p className='text-lg text-white mb-4'>
                The Combinations problem involves finding all possible combinations of a set of elements given a specific size.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function combine(n, k) {
    let results = [];
    backtrack(1, n, k, [], results);
    return results;
}

function backtrack(start, n, k, path, results) {
    if (path.length === k) {
        results.push(path.slice());
        return;
    }

    for (let i = start; i <= n; i++) {
        path.push(i);
        backtrack(i + 1, n, k, path, results);
        path.pop();
    }
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Example Problem: Word Search</h3>
            <p className='text-lg text-white mb-4'>
                The Word Search problem involves searching for a word in a 2D grid of characters. The word can be formed by moving horizontally or vertically.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function exist(board, word) {
    let rows = board.length;
    let cols = board[0].length;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (backtrack(board, word, row, col, 0)) {
                return true;
            }
        }
    }

    return false;
}

function backtrack(board, word, row, col, index) {
    if (index === word.length) return true;
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[index]) {
        return false;
    }

    let temp = board[row][col];
    board[row][col] = '#';  // Mark as visited

    let found = backtrack(board, word, row + 1, col, index + 1) ||
                backtrack(board, word, row - 1, col, index + 1) ||
                backtrack(board, word, row, col + 1, index + 1) ||
                backtrack(board, word, row, col - 1, index + 1);

    board[row][col] = temp;  // Unmark
    return found;
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Applications of Backtracking</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Constraint Satisfaction Problems:</strong> Scheduling, puzzles, and optimization problems.</li>
                <li><strong>Game Theory:</strong> Solving combinatorial games, pathfinding, and decision-making problems.</li>
                <li><strong>Optimization:</strong> Finding optimal solutions among many possible choices.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Complexity Analysis</h3>
            <p className='text-lg text-white mb-4'>
                The time complexity of backtracking algorithms can be exponential in the worst case, as they may explore all possible solutions. However, pruning techniques and constraints can significantly reduce the number of explored solutions. The space complexity typically depends on the depth of the recursion tree and the size of the solution set.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Conclusion</h3>
            <p className='text-lg text-white mb-4'>
                Backtracking is a powerful technique for solving complex problems by exploring all possible solutions in a systematic way. Mastery of backtracking and its optimization through pruning and constraint management is crucial for effectively tackling a wide range of computational problems.
            </p>
        </div>
    );
};

export default BacktrackingCourse;

const StacksCourse = () => {
	return (
		<div className='p-6'>
			<h2 className='text-2xl font-bold text-white mb-4'>Introduction to Stacks</h2>
			<p className='text-lg text-white mb-4'>
				Stacks are a fundamental data structure in computer science, following the Last In, First Out (LIFO) principle. They are widely used in various applications such as:
			</p>
			<ul className='text-lg text-white mb-6 list-disc pl-6'>
				<li><strong>Function Calls:</strong> Stacks are used to manage function calls in programming languages.</li>
				<li><strong>Expression Evaluation:</strong> They play a key role in evaluating arithmetic expressions.</li>
				<li><strong>Undo Mechanism:</strong> Stacks support undo operations in software applications.</li>
				<li><strong>Backtracking:</strong> Stacks are essential in algorithms involving backtracking, like solving mazes.</li>
			</ul>

			<h3 className='text-xl font-bold text-white mb-4'>Common Operations on Stacks</h3>
			<p className='text-lg text-white mb-4'>
				Stacks support several key operations:
			</p>
			<ul className='text-lg text-white list-disc pl-6'>
				<li><strong>Push:</strong> Adding an element to the top of the stack.</li>
				<li><strong>Pop:</strong> Removing the top element from the stack.</li>
				<li><strong>Peek/Top:</strong> Viewing the top element without removing it.</li>
				<li><strong>isEmpty:</strong> Checking whether the stack is empty.</li>
			</ul>

			<h3 className='text-xl font-bold text-white mb-4'>Stack Implementation in C++</h3>
			<p className='text-lg text-white mb-4'>
				Let's look at how stacks can be implemented and used in C++:
			</p>

			<h4 className='text-lg font-bold text-white mb-2'>1. Basic Stack Operations</h4>
			<p className='text-lg text-white mb-4'>
				Here’s how to implement the basic operations in a stack:
			</p>
			<pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
				<code>
					{`#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> s;
    s.push(10); // Push operation
    s.push(20);
    cout << s.top() << endl; // Peek operation: Output will be 20
    s.pop(); // Pop operation
    cout << s.top() << endl; // Output will be 10
    return 0;
}`}
				</code>
			</pre>

			<h4 className='text-lg font-bold text-white mb-2'>2. Checking if Stack is Empty</h4>
			<p className='text-lg text-white mb-4'>
				Before performing operations like pop or peek, it's important to check if the stack is empty:
			</p>
			<pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
				<code>
					{`if (s.empty()) {
    cout << "Stack is empty" << endl;
} else {
    cout << "Stack is not empty" << endl;
}`}
				</code>
			</pre>

			<h4 className='text-lg font-bold text-white mb-2'>3. Stack Example: Balancing Parentheses</h4>
			<p className='text-lg text-white mb-4'>
				Stacks can be used to check if the parentheses in an expression are balanced:
			</p>
			<pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
				<code>
					{`bool isBalanced(string expr) {
    stack<char> s;
    for (char ch : expr) {
        if (ch == '(' || ch == '{' || ch == '[') {
            s.push(ch);
        } else {
            if (s.empty()) return false;
            char top = s.top();
            if ((ch == ')' && top == '(') ||
                (ch == '}' && top == '{') ||
                (ch == ']' && top == '[')) {
                s.pop();
            } else {
                return false;
            }
        }
    }
    return s.empty();
}`}
				</code>
			</pre>

			<h4 className='text-lg font-bold text-white mb-2'>4. Stack Example: Reverse a String</h4>
			<p className='text-lg text-white mb-4'>
				Stacks can also be used to reverse a string:
			</p>
			<pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
				<code>
					{`string reverseString(string str) {
    stack<char> s;
    for (char ch : str) {
        s.push(ch);
    }
    string reversed = "";
    while (!s.empty()) {
        reversed += s.top();
        s.pop();
    }
    return reversed;
}`}
				</code>
			</pre>

			<h4 className='text-lg font-bold text-white mb-2'>Conclusion</h4>
			<p className='text-lg text-white mb-4'>
				Stacks are a versatile data structure that underpins many important algorithms and processes in computer science. Mastering stacks will equip you with essential problem-solving tools.
			</p>
		</div>
	);
};

export default StacksCourse;

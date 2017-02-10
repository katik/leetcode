/**
 * @param {string} input
 * @return {number}
 * @test: input = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
 */
var lengthLongestPath = function(input) {
    class Stack {
        constructor() {
            this.els = [];
        }

        pop() {
            this.els.splice(this.els.length - 1, 1);
        }

        push(e) {
            this.els.push(e);
        }

        top() {
            return this.els[this.els.length - 1] || 0;
        }

        size() {
            return this.els.length;
        }
    }

    let counter = 0;
    let fileFlag = false;
    let level = 1;
    let stack = new Stack();
    let max = 0;
    for (let i = 0; i < input.length; i++) {
        let s = input.charAt(i);

        if (s == "\n") {
            let newLevel = calLevel(input, i);
            if (newLevel > level) {
                if (stack.size()) {
                    counter = stack.top() + counter;
                }
                stack.push(counter);
            }

			if (fileFlag) {
                if (counter + level - 1 + stack.top() > max) {
                    max = counter + stack.top() + level - 1;
                }
                fileFlag = false;
            }

            while (newLevel <= level - 1) {
                stack.pop();
                level--;
            }

            level = newLevel;

            counter = 0;
            i = i - 1 + level;
        } else {
            if (s == '.') {
                fileFlag = true;
            }
            counter++;
        }

        if(i == input.length - 1){
        	if (fileFlag) {
                if (counter + level - 1 + stack.top() > max) {
                    max = counter + stack.top() + level - 1;
                }
                fileFlag = false;
            }
        }
    }

    function calLevel(input, i) {
        if (input.charAt(i) != '\n') {
            return;
        }
        let j = i + 1;
        while (input.charAt(j) == "\t") {
            j++;
        }

        return (j - i);
    }

    return max;

};

console.log(lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"));

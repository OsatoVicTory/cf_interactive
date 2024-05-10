const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const g = main();
g.next();
rl.on('line', (input) => {
    input.split('\n').forEach(s => s.trim() && g.next(s));
});


function alph() { return 'abcdefghijklmnopqrstuvwxyz'; }
function Alph() { return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; }
const max = (x, y) => x >= y ? x : y;
const min = (x, y) => x <= y ? x : y;
const abs = (x) => x < 0 ? x * (-1) : x;
function GCD(a, b) {
  if (b == 0) return a;
  return GCD(b, a % b);
}

function rd(arr, type = 0) {
    if(!type) return arr;
    const res = arr.split(' ').map(Number);
    if(res.length > 1) return res;
    return re[0];
}

/****    HOW IT WORKS     ***/ 
/*
1st: testcases, t receives first line input
2nd: for i from 1...t:
        q receives 1st line input of testcase i
        [n, m] receives 2nd line ,,     ,,    ,,
        res receives response we get after we asked from console
        .
        .
        .
        last variable receives nth line of testcase i
*/
/****    HOW IT WORKS     ***/

function* main() {
    const t = yield 1;
    for(let i=1;i<=t;i++) {
        const q = rd(yield 1);
        const [n, m] = rd(yield 1, 1);
        const res = yield *ask();
        console.log(q, `t log ${n}, ${m}`);
    }
    process.exit(0);
}

function* ask(...args) {
    console.log(args.join(' '));
    return yield 1;
};

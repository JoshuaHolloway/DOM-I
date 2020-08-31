print('hello from main-3.js');

const x = [1, 2, 3, 4];
const x2 = [1, 2, 3, 4];

const y = [];
x.forEach((elem, idx) => {

    if(x2[idx] >= 3)
        y.push(elem);
});
print(y);

let z = [];
z = x.filter(function(elem, idx) {
    return x2[idx] >= 3 ? elem : null;
});
print(z);
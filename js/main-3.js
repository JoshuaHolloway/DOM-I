print('hello from main-3.js');

const x = [1, 2, 3, 4];

const y = [];
x.forEach((elem) => {

    if(elem >= 3)
        y.push(elem);
});
print(y);

let z = [];
z = x.filter(function(elem) {
    return elem >= 3;
});
print(z);
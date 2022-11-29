// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(catName) {
    return cats.push(catName);
}

function destructivelyPrependCat(catName) {
    return cats.unshift(catName);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(catName) {
    const newCats = [...cats, catName];
    return newCats;
}

function prependCat(catName) {
    const newCats = [catName, ...cats];
    return newCats;
}

function removeLastCat() {
    const newCats = cats.slice(0, 2);
    return newCats;
}

function removeFirstCat() {
    const newCats = cats.slice(1, 3);
    return newCats;
}

function copy2D (arr) {
    return Array.prototype.reduce.call(arr, (acc, curr) => (acc.push([...curr]), acc), []);
}
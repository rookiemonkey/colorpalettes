function arrayMove(array, from, to) {
    if (process.env.NODE_ENV !== 'production') {
        if (typeof console !== 'undefined') {
            console.warn("Deprecation warning: arrayMove will no longer be exported by 'react-sortable-hoc' in the next major release. Please install the `array-move` package locally instead. https://www.npmjs.com/package/array-move");
        }
    }

    array = array.slice();
    array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
    return array;
}

export default arrayMove;
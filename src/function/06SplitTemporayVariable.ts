function demo(_height: number, _width: number) {
    let temp: number = _height + _width;
    console.log(temp);
    temp = _height * _width;
    console.log(temp);
}

// ======>
function demoV2(_height: number, _width: number) {
    let perimeter: number = _height + _width;
    console.log(perimeter);
    let area: number = _height * _width;
    console.log(area);
}

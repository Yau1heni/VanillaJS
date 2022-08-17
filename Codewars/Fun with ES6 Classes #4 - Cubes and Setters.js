class Cube {
    constructor(length) {
        this.length = length;
    }
    get surfaceArea() {
        return (this.length ** 2) * 6
    }
    get volume() {
        return this.length ** 3
    }
    set surfaceArea(x) {
        this.length = Math.sqrt(x / 6)
        
    }
    set volume(x) {
        this.length = Math.cbrt(x);
    }
}
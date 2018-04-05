function returnThis() {
	if (typeof this === "undefined") return "undefined";
	return this;
}

var a = returnThis;
var b = returnThis;

export { a, b };

export const that = this;
export const returnThisArrow = () => this;
export const returnThisMember = () => this.a;

export class C {
	constructor() {
		this.x = "bar";
	}
	foo() {
		return this.x;
	}
	bar(x = this.x) {
		return x;
	}
}

export const extendThisClass = () => {
	return class extends this.Buffer {};
};

export function D() {
	this.prop = () => "ok";
}

// See https://github.com/webpack/webpack/issues/6379
export const E = {
	x: "bar",
	foo(x = this.x) {
		return x;
	}
};

// See https://github.com/webpack/webpack/issues/6967
export const F = (function() {
  return this;
}.call("ok"));

export default returnThis;

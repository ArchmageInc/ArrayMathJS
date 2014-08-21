describe("ArrayMathJS",function(){
    describe("Sum",function(){
        it("Can add elements of a numeric array",function(){
            var foo = [1,2,3,4];
            expect(foo.sum()).toBe(10);
        });
        it("Can add elements of an array containing non-numeric values",function(){
            var foo = [1,2,"a",4];
            expect(foo.sum()).toBe(7);
        });
    });

    describe("Product",function(){
        it("Can multiply elements of a numeric array",function(){
            var foo = [1,2,3,4];
            expect(foo.product()).toBe(24);
        });
        it("Can multiply elements of an array containing non-numeric values",function(){
            var foo = [1,2,"a",4];
            expect(foo.product()).toBe(8);
        });
    });

    describe("Cross Sum",function(){
        it("Can produce an array with the sum of the elements from another numeric array",function(){
            var foo = [1,2,3,4];
            var bar = [4,3,2,1];
            expect(foo.crossSum(bar)).toEqual([5,5,5,5]);
        });
        it("Can produce an array with the sum of the elements from another, longer numeric array",function(){
            var foo = [1,2,3,4];
            var bar = [1,2,3,4,5];
            expect(foo.crossSum(bar)).toEqual([2,4,6,8]);
        });
        it("Can produce an array with the sum of the elements from another, shorter numeric array",function(){
            var foo = [1,2,3,4];
            var bar = [1,2,3];
            expect(foo.crossSum(bar)).toEqual([2,4,6,4]);
        });
        it("Can produce an array with the sum of the elements from more than one numeric array of different sizes",function(){
            var foo     = [1,2,3,4];
            var bar     = [1,2,3];
            var foobar  = [1,2,3,4,5];
            expect(foo.crossSum(bar,foobar)).toEqual([3,6,9,8]);
        });
        it("Can produce an array with the sum of the elements from another array containing non-numeric values",function(){
            var foo     = [1,2,3];
            var bar     = [1,"a",3];
            expect(foo.crossSum(bar)).toEqual([2,2,6]);
        });
        it("Can produce an array with the sum of the numeric elements from another array containing non-numeric values",function(){
            var foo     = ["a",2,3];
            var bar     = [1,"a",3];
            expect(foo.crossSum(bar)).toEqual([2,6]);
        });
    });

    describe("Cross Product",function(){
        it("Can produce an array with the product of the elements from another numeric array",function(){
            var foo = [1,2,3,4];
            var bar = [4,3,2,1];
            expect(foo.crossProduct(bar)).toEqual([4,6,6,4]);
        });
        it("Can produce an array with the product of the elements from another, longer numeric array",function(){
            var foo = [1,2,3,4];
            var bar = [1,2,3,4,5];
            expect(foo.crossProduct(bar)).toEqual([1,4,9,16]);
        });
        it("Can produce an array with the product of the elements from another, shorter numeric array",function(){
            var foo = [1,2,3,4];
            var bar = [1,2,3];
            expect(foo.crossProduct(bar)).toEqual([1,4,9,4]);
        });
        it("Can produce an array with the product of the elements from more than one numeric array of different sizes",function(){
            var foo     = [1,2,3,4];
            var bar     = [1,2,3];
            var foobar  = [1,2,3,4,5];
            expect(foo.crossProduct(bar,foobar)).toEqual([1,8,27,16]);
        });
        it("Can produce an array with the product of the elements from another array containing non-numeric values",function(){
            var foo     = [1,2,3];
            var bar     = [1,"a",3];
            expect(foo.crossProduct(bar)).toEqual([1,2,9]);
        });
        it("Can produce an array with the product of the numeric elements from another array containing non-numeric values",function(){
            var foo     = ["a",2,3];
            var bar     = [1,"a",3];
            expect(foo.crossProduct(bar)).toEqual([2,9]);
        });
    });

    describe("Product Sum",function(){
        it("Can sum the cross product of another numeric array",function(){
            var foo = [1,2,3,4];
            var bar = [4,3,2,1];
            expect(foo.productSum(bar)).toBe(20);
        });
        it("Can sum the cross product of another, longer numeric array",function(){
            var foo = [1,2,3,4];
            var bar = [1,2,3,4,5];
            expect(foo.productSum(bar)).toBe(30);
        });
        it("Can sum the cross product of another, shorter numeric array",function(){
            var foo = [1,2,3,4];
            var bar = [1,2,3];
            expect(foo.productSum(bar)).toBe(18);
        });
        it("Can sum the cross product of more that one numeric array of different sizes",function(){
            var foo     = [1,2,3,4];
            var bar     = [1,2,3];
            var foobar  = [1,2,3,4,5];
            expect(foo.productSum(bar,foobar)).toBe(52);
        });
        it("Can sum the cross product of another array containing non-numeric values",function(){
            var foo     = [1,2,3];
            var bar     = [1,"a",3];
            expect(foo.productSum(bar)).toBe(12);
        });
        it("Can sum the cross product of the numeric elements from another array containing non-numeric values",function(){
            var foo     = ["a",2,3];
            var bar     = [1,"a",3];
            expect(foo.productSum(bar)).toBe(11);
        });
    });

    describe("Max",function(){
        it("Can return the maximum value of a numeric array",function(){
            var foo = [1,2,3,4];
            expect(foo.max()).toBe(4);
        });
        it("Will return NaN for arrays containing non-numeric values",function(){
            var foo = [1,2,3,"a"];
            expect(isNaN(foo.max())).toBe(true);
        });
    });

    describe("Min",function(){
        it("Can return the minimum value of a numeric array",function(){
            var foo = [1,2,3,4];
            expect(foo.min()).toBe(1);
        });
        it("Will return NaN for arrays containing non-numeric values",function(){
            var foo = [1,2,3,"a"];
            expect(isNaN(foo.min())).toBe(true);
        });
    });
});
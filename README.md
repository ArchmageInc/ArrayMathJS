ArrayMathJS
===========

A JavaScript library implementing mathematical methods on arrays

###Array.prototype.sum()###
*Return Value:* number

####Parameters####
none

Implements summation to the array. This method uses the native reduce method if it is available.

####Examples####

```JavaScript
var foo = [1,2,3,4];
console.log(foo.sum());  // will output 10 (1 + 2 + 3 + 4)
```

```JavaScript
var foo = [1,2,"a",4];
console.log(foo.sum());  // will output 7 (1 + 2 + 4)
```

###Array.prototype.product()###
*Return Value:* number

####Parameters####
none

Implements product to the array. This method uses the native reduce method if it is available.

####Examples####

```JavaScript
var foo = [1,2,3,4];
console.log(foo.product());  // will output 24
```

```JavaScript
var foo = [1,2,"a",4];
console.log(foo.product());  // will output 8 (1 * 2 * 4)
```

###Array.prototype.crossSum`([x[,y[,z[,...]]]])`###
*Return Value:* array

####Parameters####
**x,y,z,...**
arrays

Returns an array of elements which have been added together. The source array is used for the length: meaning any arrays
passed as parameters with a length longer than the source array, those elements will not be included in the cross sum.

####Examples####

```JavaScript
var foo = [1,2,3,4];
var bar = [4,3,2,1];
console.log(foo.crossSum(bar));  // will output [5,5,5,5] (1+4 , 2+3 , 3+2 , 4+1)
```

```JavaScript
var foo = [1,2,3,4];
var bar = [1,2,3,4,5];
console.log(foo.crossSum(bar));  // will output [2,4,6,8] (1+1 , 2+2 , 3+3 , 4+4)
```

```JavaScript
var foo = [1,2,3,4];
var bar = [1,2,3];
console.log(foo.crossSum(bar));  // will output [2,4,6,4] (1+1 , 2+2 , 3+3 , 4)
```

```JavaScript
var foo     = [1,2,3,4];
var bar     = [1,2,3];
var foobar  = [1,2,3,4,5];
console.log(foo.crossSum(bar,foobar)); // will output [3,6,9,8] (1+1+1 , 2+2+2 , 3+3+3 , 4+4)
```

```JavaScript
var foo     = [1,2,3];
var bar     = [1,"a",3];
console.log(foo.crossSum(bar)); // will output [2,2,6] (1+1 , 2 , 3+3)
```

```JavaScript
var foo     = ["a",2,3];
var bar     = [1,"a",3];
console.log(foo.crossSum(bar)); // will output [2,6] (2 , 3+3)
```

###Array.prototype.crossProduct`([x[,y[,z[,...]]]])`###
*Return Value:* array

####Parameters####
**x,y,z,...**
arrays

Returns an array of elements which have been multiplied together. The source array is used for the length: meaning any arrays
passed as parameters with a length longer than the source array, those elements will not be included in the cross product.

####Examples####

```JavaScript
var foo = [1,2,3,4];
var bar = [4,3,2,1];
console.log(foo.crossProduct(bar));  // will output [4,6,6,4] (1*4 , 2*3 , 3*2 , 4*1)
```

```JavaScript
var foo = [1,2,3,4];
var bar = [1,2,3,4,5];
console.log(foo.crossProduct(bar));  // will output [1,4,9,16] (1*1 , 2*2 , 3*3 , 4*4)
```

```JavaScript
var foo = [1,2,3,4];
var bar = [1,2,3];
console.log(foo.crossProduct(bar));  // will output [1,4,9,4] (1*1 , 2*2 , 3*3 , 4)
```

```JavaScript
var foo     = [1,2,3,4];
var bar     = [1,2,3];
var foobar  = [1,2,3,4,5];
console.log(foo.crossProduct(bar,foobar)); // will output [1,8,27,16] (1*1*1 , 2*2*2 , 3*3*3 , 4*4)
```

```JavaScript
var foo     = [1,2,3];
var bar     = [1,"a",3];
console.log(foo.crossProduct(bar)); // will output [1,2,9] (1*1 , 2 , 3*3)
```

```JavaScript
var foo     = ["a",2,3];
var bar     = [1,"a",3];
console.log(foo.crossProduct(bar)); // will output [2,9] (2 , 3*3)
```

###Array.prototype.productSum([x[,y[,z[,...]]]])###
*Return Value:* number

####Parameters####
**x,y,z,...**
arrays

Implements a sum of the product of one or more numerical arrays. The source array is used for the length: meaning any arrays
passed as parameters with a length longer than the source array, those elements will not be included in the product sum.

This is the same as calling array1.crossProduct.apply(array1,array2).sum()

####Examples####

```JavaScript
var foo = [1,2,3,4];
var bar = [4,3,2,1];
console.log(foo.productSum(bar));  // will output 20 (1*4 + 2*3 + 3*2 + 4*1)
```

```JavaScript
var foo = [1,2,3,4];
var bar = [1,2,3,4,5];
console.log(foo.productSum(bar));  // will output 30 (1*1 + 2*2 + 3*3 + 4*4)
```

```JavaScript
var foo = [1,2,3,4];
var bar = [1,2,3];
console.log(foo.productSum(bar));  // will output 18 (1*1 + 2*2 + 3*3 + 4)
```

```JavaScript
var foo     = [1,2,3,4];
var bar     = [1,2,3];
var foobar  = [1,2,3,4,5];
console.log(foo.productSum(bar,foobar)); // will output 52 (1*1*1 + 2*2*2 + 3*3*3 + 4*4)
```

```JavaScript
var foo     = [1,2,3];
var bar     = [1,"a",3];
console.log(foo.productSum(bar)); // will output 12 (1*1 + 2 + 3*3)
```

```JavaScript
var foo     = ["a",2,3];
var bar     = [1,"a",3];
console.log(foo.productSum(bar)); // will output 11 (2 + 3*3)
```

###Array.prototype.max()###
*Return Value:* number

####Parameters####
none

This is an implementation of Math.max.apply for the array. Be aware of non-numeric elements.

####Examples####

```JavaScript
var foo = [1,2,3,4];
console.log(foo.max());  // will output 4
```

```JavaScript
var foo = [1,2,3,"a"];
console.log(foo.max());  // will output NaN
```

###Array.prototype.min()###
*Return Value:* number

####Parameters####
none

This is an implementation of Math.min.apply for the array. Be aware of non-numeric elements.

####Examples####

```JavaScript
var foo = [1,2,3,4];
console.log(foo.min());  // will output 1
```

```JavaScript
var foo = [1,2,3,"a"];
console.log(foo.min());  // will output NaN
```
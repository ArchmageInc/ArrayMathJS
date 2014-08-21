(function(){
    var extendPrototype =   function(object,name,method){
        if(Object.defineProperty){
            Object.defineProperty(object,name,{
               configurable:    false,
               enumerable:      false,
               value:           method,
               writable:        false
            });
        }else{
            object[name]    =   method; 
        }
    };
    var applyMath   =   function(){
        if(!Array.prototype.sum){
            var sum =   function(){
                if(this.reduce){
                    return this.reduce(function(Vp,Vc,i,A){
                        if(isNaN(Vc)){
                            return Vp;
                        }
                        return Vp+Number(Vc);
                    },0);
                }
                var total   =   0;
                for(var i=0;i<this.length;i++){
                    if(isNaN(this[i])){
                        continue;
                    }
                    total   +=  Number(this[i]);
                }
                return total;
            };
            extendPrototype(Array.prototype,'sum',sum);
        }
        if(!Array.prototype.product){
            var product =   function(){
                if(this.reduce){
                    return this.reduce(function(Vp,Vc,i,A){
                        if(isNaN(Vc)){
                            return Vp;
                        }
                        return Vp*Vc;
                    },this.length ? 1 : 0);
                }
                var total   =   1;
                for(var i=0;i<this.length;i++){
                    if(isNaN(this[i])){
                        continue;
                    }
                    total   *=  Number(this[i]);
                }
                return total;
            };
            extendPrototype(Array.prototype,'product',product);
        }
        
        if(!Array.prototype.crossProduct){
            var crossProduct = function(){
                if(!arguments.length){
                    return this.slice(0);
                }
                var totals   =   [];
                for(var i=0;i<this.length;i++){
                    if(isNaN(this[i])){
                        continue;
                    }
                    var total   =   Number(this[i]);
                    for(var a=0;a<arguments.length;a++){
                        if(Object.prototype.toString.call(arguments[a])==='[object Array]' && !isNaN(arguments[a][i])){
                            total   *=  Number(arguments[a][i]);
                        }
                    }
                    totals.push(total);
                }
                return totals;
                
            };
            extendPrototype(Array.prototype,'crossProduct',crossProduct);
        }
        if(!Array.prototype.crossSum){
            var crossSum = function(){
                if(!arguments.length){
                    return this.slice(0);
                }
                var totals   =   [];
                for(var i=0;i<this.length;i++){
                    if(isNaN(this[i])){
                        continue;
                    }
                    var total   =   Number(this[i]);
                    for(var a=0;a<arguments.length;a++){
                        if(Object.prototype.toString.call(arguments[a])==='[object Array]' && !isNaN(arguments[a][i])){
                            total   +=  Number(arguments[a][i]);
                        }
                    }
                    totals.push(total);
                }
                return totals;
                
            };
            extendPrototype(Array.prototype,'crossSum',crossSum);
        }
        
        if(!Array.prototype.productSum){
            var productSum  =   function(){
                if(!arguments.length){
                    return this.sum();
                }
                
                return this.crossProduct.apply(this,arguments).sum();
            };
            extendPrototype(Array.prototype,'productSum',productSum);
        }
        
        if(!Array.prototype.max){
            var max =   function(){
                return Math.max.apply(null,this);
            };
            extendPrototype(Array.prototype,'max',max);
        }
        
        if(!Array.prototype.min){
            var min =   function(){
                return Math.min.apply(null,this);
            };
            extendPrototype(Array.prototype,'min',min);
        }
        
        return Array;
    };
    if(typeof define==="function"){
        define(applyMath);
    }else{
        applyMath();
    }
})();
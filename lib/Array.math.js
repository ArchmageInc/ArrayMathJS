(function(){
    var applyMath   =   function(){
        if(!Array.prototype.sum){
            Array.prototype.sum =   function(){
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
        }
        if(!Array.prototype.product){
            Array.prototype.product =   function(){
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
        }
        
        if(!Array.prototype.crossProduct){
            Array.prototype.crossProduct = function(){
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
        }
        if(!Array.prototype.crossSum){
            Array.prototype.crossSum = function(){
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
        }
        
        if(!Array.prototype.productSum){
            Array.prototype.productSum  =   function(){
                if(!arguments.length){
                    return this.sum();
                }
                
                return this.crossProduct.apply(this,arguments).sum();
            };
        }
        
        if(!Array.prototype.max){
            Array.prototype.max =   function(){
                return Math.max.apply(null,this);
            };
        }
        
        if(!Array.prototype.min){
            Array.prototype.min =   function(){
                return Math.min.apply(null,this);
            };
        }
        
        return Array;
    };
    if(typeof define==="function"){
        define(applyMath);
    }else{
        applyMath();
    }
})();
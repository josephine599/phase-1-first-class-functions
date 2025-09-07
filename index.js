function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function namedFunction(){
        return "I am named";
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("I'm anonymous!");
    };
}
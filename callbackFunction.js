setTimeout( function(){ 
    console.log("start")}, 3000 );

console.log("end");
console.log(typeof( "hello" ));

console.log(typeof( function() {console.log("Hello")}));

var exampleFunction = function(message){
    console.log( message );
};
exampleFunction( "Hello from exampleFunction" );

function parentFunction( callback ) {
    callback( "information from the parent function" );
}

parentFunction( function(message) {
    console.log( message );
});

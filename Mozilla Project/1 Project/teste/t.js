var fruts = ['banana', 'laranja', ' limao'];

fruts.shift();
fruts.splice(1,1,'uva');

for(var i = 0; i < fruts.length; i++ ){
    document.write(fruts[i]);
}
function solve(commands) {
    let result = [];
    let startNumber =  0;
    commands.forEach(element => {
        startNumber ++;
        switch(element) {
            case 'add':
                result.push(startNumber);
            break;
            case 'remove':
                result.pop();
                break;
            
        }
    });
    let output = result.length ? result.join('\n') : "Empty";
   
    console.log(output);
    // console.log("-------------");
}

solve(['add', 
'add', 
'add', 
'add']
);
solve(['add', 
'add', 
'remove', 
'add', 
'add']
);
solve(['remove', 
'remove', 
'remove']
);
function solve(input) {
    let meetings = {};
    for (const elements of input) {
        let [day, name] = elements.split(' ');
        if(!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`)
        }else {
            console.log(`Conflict on ${day}!`)
        }
    }
    for (const key in meetings) {
      console.log(`${key} -> ${meetings[key]}`);
    }
}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);
solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);
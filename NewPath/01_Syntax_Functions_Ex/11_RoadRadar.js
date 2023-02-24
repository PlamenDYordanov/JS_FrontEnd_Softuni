function solve(speed, area) {
   
    switch(area) {
        case 'motorway':
            if(speed > 130) {
                let diff = speed - 130;
                let status = "";
                if(diff <= 20) {
                    status = "speeding"
                }else if (diff >20 && diff <= 40) {
                    status = "excessive speeding"
                }else {
                    status = "reckless driving"
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 130 - ${status}`)
            }else {
                console.log(`Driving ${speed} km/h in a 130 zone`)
            }
            break;
            case 'interstate':
                if(speed > 90) {
                    let diff = speed - 90;
                    let status = "";
                    if(diff <= 20) {
                        status = "speeding"
                    }else if (diff >20 && diff <= 40) {
                        status = "excessive speeding"
                    }else {
                        status = "reckless driving"
                    }
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of 90 - ${status}`)
                }else {
                    console.log(`Driving ${speed} km/h in a 90 zone`)
                }
                break;
                case 'city':
                if(speed > 50) {
                    let diff = speed - 50;
                    let status = "";
                    if(diff <= 20) {
                        status = "speeding"
                    }else if (diff >20 && diff <= 40) {
                        status = "excessive speeding"
                    }else {
                        status = "reckless driving"
                    }
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of 50 - ${status}`)
                }else {
                    console.log(`Driving ${speed} km/h in a 50 zone`)
                }
                break;
                case 'residential':
                    if(speed > 20) {
                        let diff = speed - 20;
                        let status = "";
                        if(diff <= 20) {
                            status = "speeding"
                        }else if (diff >20 && diff <= 40) {
                            status = "excessive speeding"
                        }else {
                            status = "reckless driving"
                        }
                        console.log(`The speed is ${diff} km/h faster than the allowed speed of 20 - ${status}`)
                    }else {
                        console.log(`Driving ${speed} km/h in a 20 zone`)
                    }
                    break;

    }
}
solve(40, "city");
solve(21, "residential");
solve(120, "interstate");
solve(200, "motorway");
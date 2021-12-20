// declare function showAlert(info: string): void;
// declare function someLaterCode(found: string): void;

// const blackList = ['foo', 'bar'];

// function foundMiscreant(people: string[]) {
//     for (let person of people) {
//         if (blackList.indexOf(person) !== -1) {
//             showAlert('warning');
//             return person;
//         }
//     }
//     return '';
// }

// function checkSecurity(people: string[]) {
//     const found = foundMiscreant(people);
//     someLaterCode(found);
// }

declare function showAlert(info: string): void;
declare function someLaterCode(found: string): void;

const blackList = ['foo', 'bar'];

function foundMiscreant(people: string[]) {
    for (let person of people) {
        if (blackList.indexOf(person) !== -1) {
            return person;
        }
    }
    return '';
}

function sendAlert(people: string[]) {
    if (foundMiscreant(people) !== '') showAlert('warning');
}

function checkSecurity(people: string[]) {
    sendAlert(people);
    const found = foundMiscreant(people);
    someLaterCode(found);
}

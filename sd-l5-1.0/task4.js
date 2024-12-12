export class FriendAge {
    constructor (name, year, month, day){
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    returnAge () {
        let today = new Date();
        let birthday = new Date(this.year, this.month, this.day);
        let age = today.getFullYear() - birthday.getFullYear();
        return `${this.name} is ${age} today!`;
    }    
}
let friend = new FriendAge ('amalia','2002','02','09');
console.log(friend.returnAge());
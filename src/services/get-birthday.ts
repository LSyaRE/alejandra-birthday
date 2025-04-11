export class GetBirthday {
    private _birthday: Date;
    private _nextBirthday: Date;

    constructor() {
        this._birthday = this.fetchBirthday();
        this._nextBirthday = this.fetchNextBirthday();
    }

    get nextBirthday(): Date {
        return this._nextBirthday;
    }

    private fetchBirthday(): Date {
        // Simulate fetching birthday from an API or database
        return new Date("2010-04-18T00:00:00");
    }
    
    private fetchNextBirthday(): Date {
        const actualYear = new Date();
        const today = new Date();
        actualYear.setDate(this._birthday.getDate());
        actualYear.setMonth(this._birthday.getMonth());

        if(today.getDate() > actualYear.getDate() && today.getMonth() >= actualYear.getMonth()){
            actualYear.setFullYear(today.getFullYear() + 1);
        }
        
        return actualYear;
    }

    public getBirthdayMessage(): string {
        const today = new Date();
        const birthday = this._birthday;
        let age = today.getFullYear() - birthday.getFullYear();
        const monthDiff = today.getMonth() - birthday.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }
        return `¡Feliz cumpleaños! Tienes ${age} años.`;
    }

    public isBirthday(): boolean {
        const today = new Date();
        return this._birthday.getDate() == today.getDate() && this._birthday.getMonth() == today.getMonth();
    }

}
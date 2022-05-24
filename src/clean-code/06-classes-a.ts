(() => {
    type gender = 'male' | 'female'

    class Person {
        constructor(public name: string, public gender: gender, public birthDate: Date) {}
    }

    class User extends Person {
        public lastAccess: Date
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: gender,
            birthDate: Date){

            super(name, gender, birthDate)
            this.lastAccess = new Date()
        }

        checkCredentials() {
        return true
    }   

    }

    class UserSettings extends User {
        constructor(
            public workingDirectory : string,
            public lastOpenFolder   : string,
            email                   : string,
            role                    : string,
            name                    : string,
            gender                  : gender,
            birthDate               : Date
        ){
            super(email, role, name, gender, birthDate)
        }
    }

    const userSettings = new UserSettings(
        'usr/home',
        '/home',
        'ander.er985@ŋmail.com',
        'admin',
        'anderson',
        'male',
        new Date('2000-04-16')
    )

    console.log(userSettings, userSettings.checkCredentials())
    
})()
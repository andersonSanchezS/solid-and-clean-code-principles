(() => {
    type gender = 'male' | 'female'

    interface PersonProps {
        name      : string, 
        gender    : gender,
        birthDate : Date
    }

    class Person {

        public name     : string 
        public gender   : gender
        public birthDate: Date

        constructor({ name, gender, birthDate }:PersonProps) {
            this.name      = name
            this.gender    = gender
            this.birthDate = birthDate
        }
    }

    interface UserProps {
        email     : string
        role      : string
        name      : string,
        gender    : gender,
        birthDate : Date,
    }

    class User extends Person {
        public email     : string
        public role      : string
        public lastAccess: Date
        
        constructor({ name, gender, birthDate, email, role }:UserProps) {

            super({ name, gender, birthDate })
            
            this.email = email
            this.role  = role
            this.lastAccess = new Date()
        }

        checkCredentials() {
        return true
    }   

    }

    interface UserSettingsProps {
            workingDirectory        : string,
            lastOpenFolder          : string,
            email                   : string,
            role                    : string,
            name                    : string,
            gender                  : gender,
            birthDate               : Date
    }

    class UserSettings extends User {
        public workingDirectory : string
        public lastOpenFolder   : string

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthDate 
        }:UserSettingsProps
        ){
            super({ name, gender, birthDate,  email, role })

            this.workingDirectory = workingDirectory
            this.lastOpenFolder   = lastOpenFolder
        }
    }

    const userSettings = new UserSettings({
        workingDirectory : 'usr/home',
        lastOpenFolder : '/home',
        email : 'ander.er985@ŋmail.com',
        role : 'admin',
        name : 'anderson',
        gender : 'male',
        birthDate : new Date('2000-04-16')
    })

    console.log(userSettings, userSettings.checkCredentials())
    
})()
// Aplicando el principio de responsabilidad unica

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
    }

    class User {

        public email     : string
        public role      : string
        public lastAccess: Date
        
        constructor({ email, role }:UserProps) {

            this.email = email
            this.role  = role
            this.lastAccess = new Date()
                
        }

        checkCredentials() {
        return true
    }   

    }

    interface SettingsProps {
            workingDirectory        : string,
            lastOpenFolder          : string,
    }

    class Settings {
        public workingDirectory : string
        public lastOpenFolder   : string

        constructor({ workingDirectory, lastOpenFolder }:SettingsProps) {

            this.workingDirectory = workingDirectory
            this.lastOpenFolder   = lastOpenFolder
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

    class UserSettings {

        public person   : Person
        public user     : User
        public settings : Settings

        constructor({
            name,
            gender,
            birthDate,
            email,
            role,
            workingDirectory,
            lastOpenFolder
        }:UserSettingsProps) {
            this.person   = new Person({ name,gender,birthDate })
            this.user     = new User({ email, role })
            this.settings = new Settings({ workingDirectory, lastOpenFolder })
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

    console.log(userSettings, userSettings.user.checkCredentials())
    
})()
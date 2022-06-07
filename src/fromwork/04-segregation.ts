interface bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface SwimmingBird {
    swim(): void;
}

interface runningBird {
    run(): void;
}


class Tucan implements bird , FlyingBird{

    public fly(): void {
        console.log("I'm flying!");
    }

    public eat(): void {
        console.log("I'm eating!");
    }

    public run(): void {
        console.log("I'm running!");
    }
}

class colibri implements bird , FlyingBird{

    public fly(): void {
        console.log("I'm flying!");
    }

    public eat(): void {
        console.log("I'm eating!");
    }

    public run(): void {
        console.log("I'm running!");
    }
}

class avestruz implements bird , runningBird{
public fly(): void {
        console.log("I'm flying!");
    }

    public eat(): void {
        console.log("I'm eating!");
    }

    public run(): void {
        console.log("I'm running!");
    }
}

class pinguino implements bird, SwimmingBird {
public fly(): void {
        console.log("I'm flying!");
    }

    public eat(): void {
        console.log("I'm eating!");
    }

    public run(): void {
        console.log("I'm running!");
    }

    public swim(): void {
        console.log("I'm swimming!");
    }
}
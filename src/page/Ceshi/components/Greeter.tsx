import React from 'react'

export default class Greeter {
    greeting: number;
    constructor(message: number) {
        this.greeting = 1;
    }
    greet() {
        // return "Hello, " + this.greeting;
        console.log(this.greeting);
        this.greeting++
    }
}
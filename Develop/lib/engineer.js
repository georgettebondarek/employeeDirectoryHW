const fs = require("fs");
const inquirer = require("inquirer");
let Employee = require("./employee");

class Engineer extends Employee{
    constructor(firstname,lastname,id,email,github){
        super(firstname,lastname,id,email);
        this.github = github;
    };
    getGithub() {
        return this.github;
    };
    getRole() { 
        return 'Engineer';
    };
}    

module.exports = Engineer;
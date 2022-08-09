const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, managerId) {
        super(name, id , email);
        this.managerId = managerId;
    }

    getRole () {
        return 'Manager';
    }
};

module.exports = Manager;
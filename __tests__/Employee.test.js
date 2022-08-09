const Employee = require('../lib/Employee');

test('Creates an Employee object', () => {
    const employee = new Employee('Groot', 42069, 'therealgroot69@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Employee name', () => {
    const employee = new Employee('Groot', 42069, 'therealgroot69@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('Employee ID', () => {
    const employee = new Employee('Groot', 42069, 'therealgroot69@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('Employee Email', () => {
    const employee = new Employee('Groot', 42069, 'therealgroot69@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Employee Role', () => {
    const employee = new Employee('Groot', 42069, 'therealgroot69@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});
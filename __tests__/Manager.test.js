const Manager = require('../lib/Manager');

test('Manager Object', () => {
    const manager = new Manager('Groot', 42069, 'therealgroot69@gmail.com', 530);

    expect(manager.managerId).toEqual(expect.any(Number));
});

test('Employee Role', () => {
    const manager = new Manager('Groot', 42069, 'therealgroot69@gmail.com', 530);

    expect(manager.getRole()).toEqual('Manager');
});
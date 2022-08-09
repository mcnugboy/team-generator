const Engineer = require('../lib/Engineer');

test('Engineer object', () => {
    const engineer = new Engineer('Groot', 42069, 'therealgroot69@gmail.com', 'mcnugboy');

    expect(engineer.github).toEqual(expect.any(String));
});

test('Engineer GitHub', () => {
    const engineer = new Engineer('Groot', 42069, 'therealgroot69@gmail.com', 'mcnugboy');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Employee Role', () => {
    const engineer = new Engineer('Groot', 42069, 'therealgroot69@gmail.com', 'mcnugboy');

    expect(engineer.getRole()).toEqual('Engineer');
});
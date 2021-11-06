const users = [
    {id: 1, name: 'Jonas', isMale: true },
    {id: 2, name: 'Petras', isMale: true },
    {id: 3, name: 'Paulius', isMale: true },
    {id: 4, name: 'Ona', isMale: false }
];

const filteredUsers = users.filter( user => user.isMale === false);
const mappedUsers = users.map(user => ({
    id: user.id,
    name: user.name,
    isFemale: !user.isMale
}));

console.log('-- Sukurti masyvą (Array) --');
console.log(users);
console.log('-- Išfiltruoti masyvą pagala parametrą isMale --');
console.log(filteredUsers);
console.log('-- Panaudoti map ir sukurti naują masyvą --');
console.log(mappedUsers);
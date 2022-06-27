interface User  extends Admin{
    name: string;
    age: number;
    occupation?: string;
}

interface Admin{
    role?: string;
}

export type Person = unknown;

export const persons: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age} occupation = ${user.occupation} and role ${user.role}`);
    console.log(`___________________________________________________________________________________________________________________`)
    console.log()
}

persons.forEach(logPerson);
enum Role {
    Admin = "ADMIN",
    Editor = "EDITOR",
    User = "USER"
}
type GeoLocation = [number, number];
interface User {
    readonly id: number;
    username: string;
    role: Role;
    userLocation: GeoLocation;
    skills: string[];
}

const Users: User[] = [
    {id: 1, username: "Umut", role: Role.Admin, userLocation: [40.7128, -74.0060], skills: ["JavaScript", "TypeScript"]},
    {id: 2, username: "Ahmet", role: Role.Editor, userLocation: [34.0522, -118.2437], skills: ["HTML", "CSS"]},
    {id: 3, username: "Mehmet", role: Role.User, userLocation: [51.5074, -0.1278], skills: ["Python", "Django"]}
];
for (const user of Users) {
    console.log(`Username: ${user.username}`);
    console.log(`Skills: ${user.skills[0]}`);
    console.log(`Location: (${user.userLocation[0]}, ${user.userLocation[1]})`);
    console.log("--------------------");
}
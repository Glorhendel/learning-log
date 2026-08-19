function crateProfile(
    username: string,
    userAge: number,
    isActive: boolean,
    explanation?: string): {username: string; userAge: number; isActive: boolean; explanation?: string }
    {
        return {username: username,
        userAge: userAge,
        isActive: isActive,
        explanation: explanation};
    }
    const profil1 = crateProfile("Umut", 30, true, "Merhaba TypeScript dünyası");
    const profil2 = crateProfile("Ahmet", 25, false);
    
    console.log(profil1);
    console.log(profil2);
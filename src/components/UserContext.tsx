import { createContext, useState, ReactNode } from 'react';

type UserContextType = {
    userData: {
        name: string;
        email: string;
        username: string;
        pfp: string | null;
    };
    setUserData: (data: any) => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        username: '',
        pfp: null
    });

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};
import { createContext, useState, ReactNode } from 'react';

// Define the shape of user data
interface UserData {
    name?: string;
    email?: string;
    username?: string;
    pfp?: string | null;
}

// Define the context type
export interface UserContextType {
    userData: UserData;
    setUserData: (data: UserData) => void;
}

// Create context with default values
export const UserContext = createContext<UserContextType>({
    userData: {},
    setUserData: () => { }
});

// Create provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [userData, setUserData] = useState<UserData>({});

    const updateUserData = (newData: UserData) => {
        setUserData(prevData => ({
            ...prevData,
            ...newData
        }));
    };

    return (
        <UserContext.Provider value={{ userData, setUserData: updateUserData }}>
            {children}
        </UserContext.Provider>
    );
};
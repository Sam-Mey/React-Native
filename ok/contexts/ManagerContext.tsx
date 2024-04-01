// ManagerContext.tsx

import React, { createContext, useContext, useState } from 'react';

interface NumberDataContextType {
    selectedNumbers: number[];
    setSelectedNumbers: React.Dispatch<React.SetStateAction<number[]>>;
    handleSubmit: (selectedNumbers: number[]) => void; // 添加 handleSubmit 属性
    handleNumberPress: (number: number) => void;

}

const NumberDataContext = createContext<NumberDataContextType | undefined>(undefined);

export const NumberDataProvider: React.FC<any> = ({ children }) => {
    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

    const handleNumberPress = (number: number) => {
        setSelectedNumbers(prevSelectedNumbers => [...prevSelectedNumbers, number]);
    };

    const handleSubmit = (selectedNumbers: number[]) => {
        console.log('Submitting selected numbers:', selectedNumbers);
        // Your submit logic here
    };

    const contextValue: NumberDataContextType = {
        selectedNumbers,
        setSelectedNumbers,
        handleSubmit, // 设置 handleSubmit 属性
        handleNumberPress,

    };

    return (
        <NumberDataContext.Provider value={contextValue}>
            {children}
        </NumberDataContext.Provider>
    );
};

export const useNumberDataContext = () => {
    const context = useContext(NumberDataContext);
    if (!context) {
        throw new Error('useNumberDataContext must be used within a NumberDataProvider');
    }
    return context;
};

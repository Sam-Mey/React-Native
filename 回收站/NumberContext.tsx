// NumberContext.tsx
import React, { createContext, useContext, useState } from 'react';

// 定义上下文
interface NumberContextType {
    selectedNumbers: number[];
    setSelectedNumbers: React.Dispatch<React.SetStateAction<number[]>>;
    handleNumberSelect: (number: number) => void;
}

const NumberContext = createContext<NumberContextType | undefined>(undefined);

// 提供上下文的组件
export const NumberProvider: React.FC<any> = ({ children }) => {
    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

    const handleNumberSelect = (number: number) => {
        if (selectedNumbers.includes(number)) {
            setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
        } else {
            setSelectedNumbers([...selectedNumbers, number]);
        }
    };

    return (
        <NumberContext.Provider value={{ selectedNumbers, setSelectedNumbers, handleNumberSelect }}>
            {children}
        </NumberContext.Provider>
    );
};

// 自定义钩子，用于在子组件中访问上下文
export const useNumberContext = () => {
    const context = useContext(NumberContext);
    if (!context) {
        throw new Error('useNumberContext must be used within a NumberProvider');
    }
    return context;
};

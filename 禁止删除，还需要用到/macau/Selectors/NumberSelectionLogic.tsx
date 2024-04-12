// import { useEffect, useState } from 'react';

// const NumberSelectionLogic = () => {
//     const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
//     const minSelectedCountToShow = 2;

//     const handleNumberSelect = (number: number) => {
//         setSelectedNumbers(prevSelectedNumbers => {
//             if (prevSelectedNumbers.includes(number)) {
//                 return prevSelectedNumbers.filter((n) => n !== number);
//             } else {
//                 return [...prevSelectedNumbers, number];
//             }
//         });
//     };

//     useEffect(() => {
//         console.log('Selected numbers:', selectedNumbers);
//     }, [selectedNumbers]);

//     const shouldShowSubmitButton = selectedNumbers.length >= minSelectedCountToShow;

//     return { selectedNumbers, handleNumberSelect, shouldShowSubmitButton };
// };

// export default NumberSelectionLogic;

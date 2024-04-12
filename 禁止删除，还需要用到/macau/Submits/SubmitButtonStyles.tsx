// SubmitButtonStyles.ts

import { StyleSheet } from 'react-native';

export const submitButtonStyles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },
    submitButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
    },
    submitButtonText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        marginHorizontal: 5,
        height: 40,
        width: 80,
        fontSize: 14,
        color: '#fff',
        left: -10,
    },
    bottomButtonContainer: {
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    selectedButton: {
        backgroundColor: 'green',
    },
    numberButtonKey: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        padding: 10,
        marginHorizontal: 3,
        borderRadius: 360,
        width: 40,
        height: 40,
    },
    numberButtonText: {
        color: 'white',
        fontSize: 12,
        position: 'absolute',
        zIndex: 1,
    },
    //模态框
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明背景
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        color: 'orangered',
    },
    saveButton: {
        backgroundColor: '#007bff',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    saveButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    editButton: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});

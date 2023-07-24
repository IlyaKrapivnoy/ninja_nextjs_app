export const cutAfterEleventhNumber = (inputString) => {
    const maxLength = 14;
    const cleanedString = inputString.replace(/[^0-9-]/g, '');

    if (cleanedString.length <= maxLength) {
        return cleanedString;
    } else {
        return cleanedString.substring(0, maxLength);
    }
};

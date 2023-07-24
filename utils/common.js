export const cutAfterEleventhNumber = (inputString) => {
    const maxLength = 14;
    const cleanedString = inputString.replace(/[^0-9-]/g, '');

    return cleanedString.length <= maxLength
        ? cleanedString
        : cleanedString.substring(0, maxLength);
};

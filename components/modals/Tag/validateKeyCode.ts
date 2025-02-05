export const validateKeyCode = (keyCode: string): boolean => {
    const regex = /^[a-zA-Z0-9]+$/;

    return regex.test(keyCode);
};

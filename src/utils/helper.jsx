
export const afterSometime = (fire, time = 1000) => {
    setTimeout(() => {
        fire();
    }, time);
}

export const capitalize = (word) => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
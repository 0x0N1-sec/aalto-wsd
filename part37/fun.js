const hello = () => {
    console.log("Hello world!");
};

const greeting = (who = "John Doe") => {
    return `Hello ${who}!`;
};

export { greeting, hello };
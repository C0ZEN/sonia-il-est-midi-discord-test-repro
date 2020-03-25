import { getWelcomeMessage } from "./get-welcome-message";

const username = "Marco Polo";
const welcomeMessage: string = getWelcomeMessage(username);

console.log(welcomeMessage);

const getRandomHue = () => Math.floor(Math.random() * 255);
const getRandomColor = () => `rgba(${getRandomHue()}, ${getRandomHue()}, ${getRandomHue()}, 1)`;
export default getRandomColor;
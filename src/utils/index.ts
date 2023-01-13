const timestamp = () => Math.floor(Date.now() / 1000);
const dateToTimestamp = (date: Date) => Math.floor(date.getTime() / 1000);

export { timestamp, dateToTimestamp };

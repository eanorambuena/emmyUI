export const path = (to) => (strings, ...values) => {
    return `${to}/${String.raw(strings, ...values)}`;
}
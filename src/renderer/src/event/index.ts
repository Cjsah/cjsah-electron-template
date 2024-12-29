const resizeEvents: Map<string, () => void> = new Map();

window.addEventListener('resize', () => {
  resizeEvents.forEach(event => event());
});

export const addResizeEvent = (name: string, event: () => void) => {
  resizeEvents.set(name, event);
};

export const removeResizeEvent = (name: string) => {
  resizeEvents.delete(name);
};

export default (currentScreen = { name: 'Games Dashboard' }, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return action.payload;
    default:
      return currentScreen;
  }
};

// Navigation helper functions
export const navigationHelpers = {
  // Helper to navigate with type safety
  navigateToScreen: (screenName: string, params?: any) => {
    // Implementation would use actual navigation ref
    console.log(`Navigating to ${screenName}`, params);
  },

  // Helper to go back
  goBack: () => {
    // Implementation would use actual navigation ref
    console.log('Going back');
  },

  // Helper to reset navigation stack
  resetToScreen: (screenName: string) => {
    // Implementation would reset navigation stack
    console.log(`Resetting to ${screenName}`);
  },
};
// App-wide constants
export const constants = {
  // Navigation
  SCREENS: {
    HOME: 'Home',
    UPLOAD: 'Upload',
    PREVIEW: 'Preview',
    RESULT: 'Result',
  } as const,

  // Storage Keys
  STORAGE_KEYS: {
    USER_TOKEN: '@user_token',
    USER_PROFILE: '@user_profile',
    APP_SETTINGS: '@app_settings',
    FOOD_ANALYSIS_HISTORY: '@food_analysis_history',
  } as const,

  // Validation Rules
  VALIDATION: {
    MIN_PASSWORD_LENGTH: 8,
    MAX_IMAGE_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  } as const,

  // UI Constants
  UI: {
    ANIMATION_DURATION: 300,
    TOAST_DURATION: 3000,
    DEBOUNCE_DELAY: 500,
  } as const,

  // Error Messages
  ERRORS: {
    NETWORK_ERROR: 'Network connection failed',
    UPLOAD_FAILED: 'Failed to upload image',
    ANALYSIS_FAILED: 'Failed to analyze food',
    INVALID_IMAGE: 'Please select a valid image',
  } as const,
} as const;
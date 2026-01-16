// Environment configuration
export const env = {
  // API Configuration
  API_BASE_URL: __DEV__
    ? 'http://localhost:3000/api'
    : 'https://api.foodai.com',

  // Feature Flags
  ENABLE_ANALYTICS: __DEV__ ? false : true,
  ENABLE_PUSH_NOTIFICATIONS: true,
  ENABLE_OFFLINE_MODE: true,

  // Third-party Keys (would be loaded from .env file in production)
  ANALYTICS_KEY: 'your-analytics-key',
  PUSH_NOTIFICATION_KEY: 'your-push-key',

  // App Configuration
  APP_NAME: 'FoodAI Mobile',
  APP_VERSION: '1.0.0',

  // Image Upload Configuration
  MAX_IMAGE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
} as const;
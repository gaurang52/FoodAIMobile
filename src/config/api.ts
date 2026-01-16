import {env} from './env';

export const apiConfig = {
  // Base configuration
  baseURL: env.API_BASE_URL,
  timeout: 30000, // 30 seconds

  // Headers
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },

  // Endpoints
  endpoints: {
    // Authentication
    auth: {
      login: '/auth/login',
      logout: '/auth/logout',
      refresh: '/auth/refresh',
    },

    // Food Analysis
    foodAnalysis: {
      upload: '/food-analysis/upload',
      analyze: '/food-analysis/analyze',
      history: '/food-analysis/history',
    },

    // User
    user: {
      profile: '/user/profile',
      preferences: '/user/preferences',
    },
  },

  // Retry configuration
  retry: {
    attempts: 3,
    delay: 1000, // 1 second
  },
} as const;
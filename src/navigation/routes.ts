import {lazy} from 'react';

// Lazy load screens to reduce initial bundle size and decouple navigation from features
export const screens = {
  Home: lazy(() => import('../features/foodAnalysis/screens/HomeScreen')),
  Upload: lazy(() => import('../features/foodAnalysis/screens/UploadScreen')),
  Preview: lazy(() => import('../features/foodAnalysis/screens/PreviewScreen')),
  Result: lazy(() => import('../features/foodAnalysis/screens/ResultScreen')),
};
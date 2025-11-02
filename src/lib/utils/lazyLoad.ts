import { lazy } from 'react';

export const LazySpeedChecker = lazy(() => import('../../components/Interactive/WebsiteSpeedChecker'));
export const LazyROICalculator = lazy(() => import('../../components/Conversion/ROICalculator'));
export const LazyAIDemo = lazy(() => import('../../components/Interactive/AIDemo'));


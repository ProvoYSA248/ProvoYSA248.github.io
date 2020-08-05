/// <reference types="react-scripts" />

declare module "react-loading-screen" {
  const LoadingScreen: React.FC<{
    loading: boolean;
    bgColor?: string;
    spinnerColor?: string;
    textColor?: string;
    logoSrc?: string;
    text?: string;
  }>;
  export default LoadingScreen;
}

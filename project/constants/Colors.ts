export const Colors = {
  // Primary colors
  primary: {
    100: '#E6F5FF',
    200: '#BFDFFF',
    300: '#80BFFF',
    400: '#4D9FFF',
    500: '#1A7FFF', // Main primary color
    600: '#0066E6',
    700: '#004CB3',
    800: '#003380',
    900: '#00194D',
  },
  
  // Secondary colors
  secondary: {
    100: '#E6F9F7',
    200: '#B3EDE6',
    300: '#80E0D6',
    400: '#4DD4C5',
    500: '#19C8B5', // Main secondary color
    600: '#129F90',
    700: '#0C766C',
    800: '#064D47',
    900: '#032423',
  },
  
  // Accent colors
  accent: {
    100: '#FFF2E6',
    200: '#FFD9B3',
    300: '#FFBF80',
    400: '#FFA64D',
    500: '#FF8C1A', // Main accent color
    600: '#E67300',
    700: '#B35900',
    800: '#804000',
    900: '#4D2600',
  },
  
  // Success colors
  success: {
    100: '#E8F7E8',
    200: '#BFE6BF',
    300: '#95D495',
    400: '#6CC36C',
    500: '#42B142', // Main success color
    600: '#338A33',
    700: '#256825',
    800: '#184518',
    900: '#0B220B',
  },
  
  // Warning colors
  warning: {
    100: '#FFF9E6',
    200: '#FFEDBA',
    300: '#FFE18F',
    400: '#FFD564',
    500: '#FFC938', // Main warning color
    600: '#FFBC0A',
    700: '#E0A000',
    800: '#B38000',
    900: '#664900',
  },
  
  // Error colors
  error: {
    100: '#FFEBEB',
    200: '#FFCCCC',
    300: '#FF9999',
    400: '#FF6666',
    500: '#FF3333', // Main error color
    600: '#FF0000',
    700: '#CC0000',
    800: '#990000',
    900: '#660000',
  },
  
  // Neutral colors
  neutral: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617',
  },
  
  // Theme specific colors
  dark: {
    background: '#0F172A',
    card: '#1E293B',
    text: '#F8FAFC',
    tabBar: '#0F172A',
    border: '#334155',
  },
  
  light: {
    background: '#F8FAFC',
    card: '#FFFFFF',
    text: '#0F172A',
    tabBar: '#FFFFFF',
    border: '#E2E8F0',
  }
};

// Navigation theme colors
export const navigationTheme = {
  dark: {
    primary: Colors.primary[500],
    background: Colors.dark.background,
    card: Colors.dark.card,
    text: Colors.dark.text,
    border: Colors.dark.border,
    notification: Colors.accent[500],
  },
  light: {
    primary: Colors.primary[600],
    background: Colors.light.background,
    card: Colors.light.card,
    text: Colors.light.text,
    border: Colors.light.border,
    notification: Colors.accent[600],
  }
};
interface UserDefaults {
  colorThemeOverride?: 'dark' | 'light';
}

declare function getUserSettings(): UserDefaults;

// ---cut---
const settings = getUserSettings();
settings.colorThemeOverride = 'dark';
settings.colorThemeOverride = 'light';

// But not:
// settings.colorThemeOverride = undefined;

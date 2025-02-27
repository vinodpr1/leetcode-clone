import { atom } from "recoil";

export const chooseLanguageToggle = atom<boolean>({
  key: "chooseLanguageToggle", // Unique key for the atom
  default: false, // Initially closed
});

export const chooseThemeToggle = atom<boolean>({
  key: "chooseThemeToggle", // Unique key for the atom
  default: false, // Initially closed
});

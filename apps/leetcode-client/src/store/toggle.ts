import { atom } from "recoil";

export const chooseLanguageToggle = atom<boolean>({
  key: "chooseLanguageToggle",
  default: false,
});

export const chooseThemeToggle = atom<boolean>({
  key: "chooseThemeToggle",
  default: false,
});

export const activeOutputModal = atom<boolean>({
  key: "activeOutputModal",
  default: false,
});

export const submissionResponse = atom<string>({
  key: "activeOutputModal2",
  default: "",
});

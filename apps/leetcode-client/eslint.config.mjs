import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Add custom rules here
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Disable unused variable warnings
      "react-hooks/rules-of-hooks": "off", // Disable React Hooks rules
      "react-hooks/exhaustive-deps": "off", // Disable exhaustive deps warnings (optional)
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
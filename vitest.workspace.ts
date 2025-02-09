/// <reference types="@vitest/browser/providers/playwright" />
import { defineWorkspace } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineWorkspace([
  { plugins: [react()] },
  {
    test: {
      name: "unit",
      environment: "node",
      setupFiles: ["./tests/setup-tests.ts"],
      include: ["**/__tests__/unit/**/*.{test,spec}.ts"],
      exclude: [
        "**/__tests__/browser/**/*.{test,spec}.{ts,tsx}",
        "**/tests/e2e/**/*.{test,spec}.{ts,tsx}",
      ],
    },
  },
  {
    test: {
      name: "browser",
      browser: {
        enabled: true,
        instances: [{ browser: "chromium" }],
      },
      setupFiles: ["./tests/setup-tests.ts"],
      include: ["**/__tests__/browser/**/*.{test,spec}.ts"],
      exclude: [
        "**/__tests__/unit/**/*.{test,spec}.{ts,tsx}",
        "**/tests/e2e/**/*.{test,spec}.{ts,tsx}",
      ],
    },
  },
]);

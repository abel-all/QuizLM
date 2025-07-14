import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["./src"],
  testMatch: ["**/*.spec.ts"],
};
export default config;

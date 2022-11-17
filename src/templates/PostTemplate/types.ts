/* eslint-disable no-unused-vars */
export enum LanguagesEnum {
  typescript = "typescript",
  javascript = "javascript"
}

export type LanguagesTypes = keyof typeof LanguagesEnum

export const languages = ["javascript", "typescript"]

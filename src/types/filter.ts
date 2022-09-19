import { LanguageEnum, StatusEnum } from "./course";

export type FilterType = {
    text: string | undefined
    status: StatusEnum | undefined
    language: LanguageEnum | undefined
}

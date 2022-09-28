import { LanguageEnum, StatusEnum } from "./course";

export type FilterType = {
    text: string | null
    status: StatusEnum | null
    language: LanguageEnum | null
}

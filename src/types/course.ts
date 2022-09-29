export type RateType = {
    stars: number
    amount: number
}

export enum LanguageEnum {
    EN = 'English',
    ES = 'Spanish',
    CH = 'Chinese',
    FR = 'French',
    PR = 'Portuguese',
    RU = 'Russian'
}

// ex: ['EN', 'ES', 'CH', 'FR', ...]
export const AvailableLanguage = Object.keys(LanguageEnum);

export type TeacherType = {
    name: string
    title: string
    profileImageUrl: string
}

export type LectureType = {
    name: string
    durationInSeconds: number
    description: string
}

export type ContentType = {
    lecturesAmount: number
    lecturesMinutes: number
    lectures: Array<LectureType>
}

export enum StatusEnum {
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED',
    NOT_STARTED = 'NOT_STARTED'
}

export enum LevelEnum {
    ALL = 'ALL',
    BEGINNER = 'BEGINNER',
    INTERMEDIATE = 'INTERMEDIATE',
    ADVANCED = 'ADVANCED'
}

export type CourseType = {
    id: number
    name: string
    description: string
    fullDescription: string
    rate: RateType
    level: LevelEnum
    language: LanguageEnum
    courseImageUrl: string
    introMediaUrl: string
    teacher: TeacherType
    content: ContentType
    status: StatusEnum
}

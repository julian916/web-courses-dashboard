export type RateType = {
    stars: number
    amount: number
}

export enum LanguageEnum {
    EN = 'EN',
    ES = 'ES',
    CH = 'CH',
    FR = 'FR'
}

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

export type CourseType = {
    name: string
    description: string
    rate: RateType
    level: string
    language: LanguageEnum
    courseImageUrl: string
    introMediaUrl: string
    teacher: TeacherType
    content: ContentType
    status: StatusEnum
}

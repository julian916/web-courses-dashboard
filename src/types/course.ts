export type RateType = {
    stars: number
    amount: number
}

export enum LanguageEnum {
    // Need <any> for being able to retrieve key from value
    EN = <any>'English',
    ES = <any>'Spanish',
    CH = <any>'Chinese',
    FR = <any>'French'
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
    rate: RateType
    level: LevelEnum
    language: LanguageEnum
    courseImageUrl: string
    introMediaUrl: string
    teacher: TeacherType
    content: ContentType
    status: StatusEnum
}

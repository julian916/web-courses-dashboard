import { FilterType } from "../types/filter";
import { getCoursesCall } from "./utils/utils";
import { CourseType } from "../types/course";

export const getCourses = async (filters: FilterType) : Promise<Array<CourseType>> => {
  const { text, status, language } = filters;

  return await getCoursesCall(text, status, language);
};

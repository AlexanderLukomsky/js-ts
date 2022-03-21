import { studentType } from "../02obj/obj"

export const sum = (a: number, b: number) => a + b
sum(sum(1, 3), sum(1, 3))

export const addSkill = (student: studentType, skill: string) => {
    // student.technologies.unshift({ id: new Date().getTime(), title: skill, isDone: true })
    // return student
    return { ...student, technologies: [{ id: new Date().getTime(), title: skill, isDone: true }, ...student.technologies] }
}
import { student } from './../02obj/obj';
import { addSkill, sum } from "./03ffo"


test.skip('sum should be correct', () => {
    expect(sum(sum(1, 2), sum(1, 3))).toBe(7)
})
test.skip('add new skill for student', () => {
    const newStudent = addSkill(student, 'super-skill')
    expect(newStudent.technologies[0].title).toBe('super-skill')
    expect(newStudent.technologies[0].id > 1647010171431).toBe(true)
    expect(newStudent.technologies[0].isDone).toBe(true)
    expect(newStudent.technologies.length).toBe(6)
    expect(student.technologies.length).toBe(5)
})

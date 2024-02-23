export interface Course {
    code: string;
    name: string;
    letterGrade: string;
    gradePoint: number;
    creditHours: number;
    type: string;
}

export interface Semester {
    name: string;
    gpa: number;
    totalGpa: number;
    totalCreditsAttempt: number;
    totalCreditsEarned: number;
}

// export enum LetterGrade {
    // pass= 'pass',
    // fail= 'fail',
    // incomplete= 'incomplete',
// }

// export enum Type {
    // pass= 'pass',
    // fail= 'fail',
    // incomplete= 'incomplete',
// }
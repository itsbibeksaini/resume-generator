import type { DynamicFieldProps } from "./DynamicField";

type ResumeSection = {
    rows: DynamicFieldProps[][]
    header: string
}

export const RESUME_SECTIONS: ResumeSection[] = [{
    header:'Person & Contact Information',
    rows: [[
        {
        id:'txt-firstname',
        name:'firstname',
        type: "text",
        label:'First Name',
        value:'',
        col: 3
    },{
        id:'txt-lastname',
        name:'lastname',
        type: "text",
        label:'Last Name',
        value:'',
        col: 3
    }
    ]]
}]

export const serialiseValues = (resumeSection: ResumeSection[]):Record<string, string> => {
    const result: Record<string, string> = {};

  resumeSection.forEach(section => {
    section.rows.forEach(row => {
      row.forEach(field => {
        result[field.name] = field.value;
      });
    });
  });

  return result
}
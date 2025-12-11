import { faCalendar, faClipboardList, faFolderOpen, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import type { Section } from "../renderers/SectionRenderer";

export const PROJECT_DETAILS: Section = {
    header: '',
    rows: [{
        subSection: false,
        fields: [
            {
                id: 'txt-projectName',
                name: 'projectName',
                type: "text",
                label: 'Project name',
                placeholder: 'Enter project name',
                col: 6,
                required: true,
                icon: faFolderOpen
            },
            {
                id: 'txt-subtitle',
                name: 'subtitle',
                type: "text",
                label: 'Subtitle',
                placeholder: 'Enter subtitle',
                col: 6,
                required: true,
                icon: faMicrochip
            }
        ]
    }, {
        subSection: false,
        fields: [
            {
                id: 'txt-startDate',
                name: 'startDate',
                type: "date-picker",
                label: 'Start date',
                col: 6,
                required: true,
                icon: faCalendar
            },
            {
                id: 'txt-endDate',
                name: 'endDate',
                type: "date-picker",
                label: 'End date',
                col: 6,
                required: true,
                icon: faCalendar
            }
        ]
    }, {
        subSection: false,
        fields: [
            {
                id: 'txt-projectDescription',
                name: 'projectDescription',
                type: "text",
                label: 'Project description',
                placeholder: 'Enter project description',
                col: 12,
                required: true,
                icon: faClipboardList,
                multiValue: true,
                multiValueOptions: {
                    placeholder: 'No project description added.',
                    view: 'timeline'
                }
            }
        ]
    }, {
        subSection: false,
        fields: [
            {
                id: 'txt-technologiesUsed',
                name: 'technologiesUsed',
                type: "text",
                label: 'Technologies used',
                placeholder: 'Enter technologies used to build the project',
                col: 12,
                required: true,
                icon: faMicrochip,
                multiValue: true,
                multiValueOptions: {
                    placeholder: 'No technologies added.',
                    view: 'tags'
                }
            }
        ]
    }]
}
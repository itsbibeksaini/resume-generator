import template1 from '../../assets/template-thumbnails/template1.png';

export type Template = {
    id: string;
    name: string;
    description: string;
    thumbnail: string; 
    route: string;
    isSelected: boolean;
}


export const TEMPLATES: Template[] = [
    {
        id: 'template-1',
        name: 'Modern Professional',
        description: 'A clean and modern template with a professional look.',
        thumbnail: template1,
        route: '/template1',
        isSelected: true,
    },{
        id: 'template-2',
        name: 'Modern Professional',
        description: 'A clean and modern template with a professional look.',
        thumbnail: template1,
        route: '/template2',
        isSelected: false,
    }
]
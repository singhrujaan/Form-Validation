import * as Yup from "yup";


export const validationSchema=Yup.object({
    username:Yup.string('needs to be a character')
    .required('required field')
    .max(10,'maximum 10 characters allowed'),
    email:Yup.string('fields required')
        .email()
        .required('required field'),
    level:Yup.string('string')
    .required('fields required'),

    skill:Yup.string('string')
    .required('fields required'),

    workExp:Yup.string('string')
    .required('fields required'),

    frontend:Yup.string().when('skill',{
        is:(skill)=>skill==='Frontend',
        then:Yup.string().required('required field')
    }),
    // .required('fields required'),

    backend:Yup.string().when('skill',{
        is:(skill)=>skill==='Backend',
        then:Yup.string().required('required field')
    }),
    // .required('fields required'),


    midLevel:Yup.string().when('workExp',{
        is:(workExp)=>workExp==='Mid-Level',
        then:Yup.string().required('required field')
    }),
    // .required('fields required'),


    seniorLevel:Yup.string().when('workExp',{
        is:(workExp)=>workExp==='Senior-Level',
        then:Yup.string().required('required field')
    }),
    // .required('fields required'),
    facebook:Yup.string()
        .matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!')
        .required('Please enter website'),
})




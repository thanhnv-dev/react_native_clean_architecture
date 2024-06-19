import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string()
        .required('Required')
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
});

const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string()
        .required('Required')
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref('password')],
        'Passwords must match',
    ),
    firstName: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .min(2, 'Too short')
        .max(15, 'Too long')
        .required('Required'),
    lastName: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .min(2, 'Too short')
        .max(15, 'Too long')
        .required('Required'),
});

export {SignInSchema, SignUpSchema};

import { useFormik } from 'formik';
import validationSchema  from './validations';

function Signup() {
    const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfim: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema,
    });

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />

                {errors.email && touched.email && (<div className='error'>{errors.email}</div>)}
                <br />
                <br />
                <label>Password</label>
                <input name="password" onChange={handleChange} onBlur={handleBlur}  value={values.password} />
                {errors.password && touched.password && (<div className='error'>{errors.password}</div>)}
                <br />
                <br />
                <label>Confirm Password </label>
                <input name="passwordConfim" onChange={handleChange} onBlur={handleBlur}  value={values.passwordConfim} />
                {errors.passwordConfim && touched.passwordConfim && (<div className='error'>{errors.passwordConfim}</div>)}
                <br />
                <br />

                <br />
                <br />


                <button type="submit">Submit</button>
                <br />
                <br />
                <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}

export default Signup
import { useFormik } from 'formik'
import * as Yup from 'yup'

const userInfo = {
   email: 'haha@gmail.com',
   password: '1234',
}

const validationSchema = Yup.object({
   email: Yup.string().email('Invalid email address').required('Required'),
   password: Yup.string().required('Required'),
})

function LoginPage() {
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validateOnChange: false,
      validateOnBlur: false,
      validationSchema,
      onSubmit: (values) => {
         if (values.email != userInfo.email) {
            alert('Email is wrong')
         } else if (values.password != userInfo.password) {
            alert('Password is wrong')
         } else {
            alert("Congrates!!! You're passed")
         }
      },
   })

   const onHint = () => {
      alert(JSON.stringify(userInfo, null, 2))
   }

   return (
      <div className='flex flex-col justify-center items-center h-screen'>
         <form onSubmit={formik.handleSubmit}>
            <div className='flex flex-col justify-between w-80 h-60'>
               <div className='flex flex-col w-full'>
                  <label htmlFor='email'>Email</label>
                  <input
                     id='email'
                     name='email'
                     type='text'
                     onChange={formik.handleChange}
                     value={formik.values.email}
                     className='border-b-2 border-black outline-none'
                  />
                  {formik.errors.email ? (
                     <div className='text-red-500'>{formik.errors.email}</div>
                  ) : null}
               </div>
               <div className='flex flex-col w-full'>
                  <label htmlFor='password'>Password</label>
                  <input
                     id='password'
                     name='password'
                     type='password'
                     onChange={formik.handleChange}
                     value={formik.values.password}
                     className='border-b-2 border-black outline-none'
                  />
                  {formik.errors.password ? (
                     <div className='text-red-500'>{formik.errors.password}</div>
                  ) : null}
               </div>
               <button
                  type='button'
                  className='border-2 px-2 py-1 rounded-md border-black'
                  onClick={onHint}
               >
                  Hint
               </button>
               <button type='submit' className='border-2 px-2 py-1 rounded-md border-black'>
                  Login
               </button>
            </div>
         </form>
      </div>
   )
}

export default LoginPage

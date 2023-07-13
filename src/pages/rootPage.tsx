import { Link } from 'react-router-dom'

function RootPage() {
   return (
      <div className='flex justify-center items-center h-screen flex-col'>
         <h1 className='font-bold my-2'>📌 Here are the list of items. 📌</h1>
         <div>
            <ul>
               <li>
                  <Link to='/counter'>Counter</Link>
               </li>
               <li>
                  <Link to='/countries'>Country List</Link>
               </li>
               <li>
                  <Link to='/login'>Login</Link>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default RootPage

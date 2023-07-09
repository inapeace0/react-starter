import { useAppSelector, useAppDispatch } from '@/hooks/hooks'
import { decrement, increment } from '@/redux/counter/counterSlice'

function App() {
   // The `state` arg is correctly typed as `RootState` already
   const count = useAppSelector((state) => state.counter.value)
   const dispatch = useAppDispatch()

   return (
      <div className='flex justify-center items-center h-screen'>
         <button
            aria-label='Increment value'
            className='border-2 m-2 p-2 border-black rounded-md'
            onClick={() => dispatch(increment())}
         >
            Increment
         </button>
         <span className='p-2 m-2 w-10 text-center'>{count}</span>
         <button
            aria-label='Decrement value'
            className='border-2 m-2 p-2 border-black rounded-md'
            onClick={() => dispatch(decrement())}
         >
            Decrement
         </button>
      </div>
   )
}

export default App

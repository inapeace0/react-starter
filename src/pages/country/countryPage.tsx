import { useQuery } from '@tanstack/react-query'

interface CountryType {
   name: {
      common: string
      official: string
   }
   region: string
   timezones: string[]
}

const fetchCountries = (): Promise<CountryType[]> => fetch('https://restcountries.com/v3.1/all').then((res) => res.json())

function CountryPage() {
   const { isLoading, isError, error, data } = useQuery<CountryType[], Error>({
      queryKey: ['countries'],
      queryFn: fetchCountries,
   })

   if (isLoading) {
      return <span>Loading...</span>
   }

   if (isError) {
      return <span>Error: {error.message}</span>
   }

   return (
      <div className='bg-slate-800 text-white'>
         <table className='table-auto border-separate border-spacing-2 border-slate-500 bg-slate-800'>
            <thead>
               <tr>
                  <th className='border-2 border-slate-600 p-1'>No</th>
                  <th className='border-2 border-slate-600 p-1'>Name</th>
                  <th className='border-2 border-slate-600 p-1'>Official Name</th>
                  <th className='border-2 border-slate-600 p-1'>Region</th>
                  <th className='border-2 border-slate-600 p-1'>Timezone</th>
               </tr>
            </thead>
            <tbody>
               {data.map((country: CountryType, index: number) => (
                  <tr key={index}>
                     <td className='border-2 border-slate-700 p-1'>{index + 1}</td>
                     <td className='border-2 border-slate-700 p-1'>{country.name.common}</td>
                     <td className='border-2 border-slate-700 p-1'>{country.name.official}</td>
                     <td className='border-2 border-slate-700 p-1'>{country.region}</td>
                     <td className='border-2 border-slate-700 p-1'>{country.timezones[0]}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default CountryPage

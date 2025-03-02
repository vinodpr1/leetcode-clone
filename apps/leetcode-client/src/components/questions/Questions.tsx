import { CircleCheckBig, FileCode } from 'lucide-react'
import React from 'react'

const Questions = () => {
  return ( 
    <div className='px-8 h-48 w-full'>
      <table className="table-auto w-full">
  <thead>
    <tr className="text-gray-200 uppercase text-sm leading-normal border-b border-gray-700">
      <th className="py-3 px-6 text-left font-semibold">Status</th>
      <th className="py-3 px-6 text-left font-semibold">Description</th>
      <th className="py-3 px-6 text-left font-semibold">Solution</th>
      <th className="py-3 px-6 text-left font-semibold">Difficulty</th>
    </tr>
  </thead>
  <tbody className="text-gray-400 text-sm">
     {
      Array.from({length:20}).map((_, index)=>{
        return(
          <tr key={index} className=" hover:bg-hover_global transition-all duration-300">
          <td className="py-3 px-6">
             <CircleCheckBig className="h-4 w-4 text-green-500" />
          </td>
          <td className="py-3 px-6">
            <span>Merge Two 2D Arrays by Summing Values</span>
          </td>
          <td className="py-3 px-6">
              <FileCode className="h-4 w-4 text-green-500" />
          </td>
          <td className="py-3 px-6">
             <span>Easy</span>
          </td>
        </tr>
     
        )
      })
     }
  </tbody>
</table>
       {/* <div classNameName='grid grid-cols-8'>
          <div classNameName='col-span-1 border'>
            <h3>Status</h3>
            <div>
              <CircleCheckBig classNameName="h-4 w-4 text-green-500" />
            </div>
          </div>
          <div classNameName='col-span-4 border'>
            <h3>Title</h3>
            <span>Merge Two 2D Arrays by Summing Values</span>
          </div>
          <div classNameName='col-span-1 border'>
            <h3>Solution</h3>
            <div>
              <FileCode classNameName="h-4 w-4 text-green-500" />
            </div>
          </div>
          <div classNameName='col-span-1 border'>
            <h3>Difficulty</h3>
            <span>Easy</span>
          </div>
       </div> */}
    </div>
  )
}

export default Questions
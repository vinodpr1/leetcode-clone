import { CircleCheckBig, FileCode } from 'lucide-react'
import React from 'react'

const Questions = () => {
  return ( 
   
<div className="mx-auto w-full border border-pink-600">
  <div className='border border-yellow-600 flex justify-between'>
    <div className="text-gray-200 uppercase text-sm leading-normal border-b border-gray-700">
      <th className="py-3 px-6 text-left font-semibold">Status</th>
      <th className="py-3 px-6 text-left font-semibold">Description</th>
      <th className="py-3 px-6 text-left font-semibold">Solution</th>
      <th className="py-3 px-6 text-left font-semibold">Difficulty</th>
    </div>
  </div>
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
</div>
  )
}

export default Questions
import React from "react"

import note from "assets/note.svg"

interface IProps {
  className: string
}

export const Appointments: React.FC<IProps> = ({ className }) => {
  return (
    <>
      <div className={`flex ${className}`}>
        <div className='flex bg-gray-100 p-2'>
          <button className='text-blue-600 text-xs text-center rounded-md bg-white py-2 px-8'>
            Upcoming Appointment
          </button>
          <button className='text-gray-600 text-xs text-center rounded-md py-2 px-8'>
            Past Appointment
          </button>
          <button className='text-gray-600 text-xs text-center rounded-md py-2 px-8'>
            Medical Records
          </button>
        </div>
      </div>
      <div className='bg-gray-100 mt-8'>
        <div className='border-b flex justify-between py-4 px-8 items-center'>
          <div>Root Canal Treatment</div>
          <button className='bg-white p-2 text-gray-600'>
            Root Canal Treatment
          </button>
        </div>
        <div className='pt-5 pb-8 px-8 space-y-4'>
          <div className='bg-white grid p-5 grid-cols-11'>
            <div className='border-r col-span-2'>
              <div className='font-bold text-2xl'>26 Nov '19</div>
              <div className='text-xs text-gray-600'>09.00 - 10.00</div>
            </div>
            <div className='border-r col-span-3 pl-8'>
              <div className='text-xs text-gray-600'>Treatment</div>
              <div className='text-lg'>Open Access</div>
            </div>
            <div className='grid grid-cols-3 col-span-6 pl-8'>
              <div>
                <div className='text-xs text-gray-600'>Dentist</div>
                <div className='text-lg'>Drg. Adam H.</div>
              </div>
              <div>
                <div className='text-xs text-gray-600'>Nurse</div>
                <div className='text-lg'>Jessicamila</div>
              </div>
              <div className='flex items-center'>
                <img
                  src={note}
                  alt='note'
                  width={15}
                  className='fill-blue-500'
                />
                <div className='text-blue-500'> Note</div>
              </div>
            </div>
          </div>
          <div className='bg-white grid p-5 grid-cols-11'>
            <div className='border-r col-span-2'>
              <div className='font-bold text-2xl'>12 Nov '19</div>
              <div className='text-xs text-gray-600'>09.00 - 10.00</div>
            </div>
            <div className='border-r col-span-3 pl-8'>
              <div className='text-xs text-gray-600'>Treatment</div>
              <div className='text-lg'>Root Canal</div>
            </div>
            <div className='grid grid-cols-3 col-span-6 pl-8'>
              <div>
                <div className='text-xs text-gray-600'>Dentist</div>
                <div className='text-lg'>Drg. Adam H.</div>
              </div>
              <div>
                <div className='text-xs text-gray-600'>Nurse</div>
                <div className='text-lg'>Jessicamila</div>
              </div>
              <div className='flex items-center'>
                <img
                  src={note}
                  alt='note'
                  width={15}
                  className='fill-blue-500'
                />
                <div className='text-blue-500'> Note</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

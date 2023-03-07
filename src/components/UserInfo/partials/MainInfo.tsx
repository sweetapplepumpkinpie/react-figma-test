import { TUser } from ".."

interface IProps {
  user: TUser
}

export const MainInfo: React.FC<IProps> = ({ user }) => {
  return (
    <div className='grid grid-cols-4 gap-4 px-5'>
      <div className='mb-4'>
        <div className='text-xs text-gray-600 mb-2'>Gender</div>
        <div className='pb-4 border-b'>{user.gender}</div>
      </div>
      <div className='mb-4'>
        <div className='text-xs text-gray-600 mb-2'>Birthday</div>
        <div className='pb-4 border-b'>{user.birthday}</div>
      </div>
      <div className='mb-4'>
        <div className='text-xs text-gray-600 mb-2'>Phone Number</div>
        <div className='pb-4 border-b'>{user.phone}</div>
      </div>
      <div className='mb-4'>
        <div className='text-xs text-gray-600 mb-2'>Registered Date</div>
        <div className='pb-4 border-b'>{user.registered_at}</div>
      </div>
      <div className='mb-4'>
        <div className='text-xs text-gray-600 mb-2'>Street Address</div>
        <div className='pb-4 border-b'>{user.address}</div>
      </div>
      <div className='mb-4'>
        <div className='text-xs text-gray-600 mb-2'>City</div>
        <div className='pb-4 border-b'>{user.city}</div>
      </div>
      <div className='mb-4'>
        <div className='text-xs text-gray-600 mb-2'>Zip Code</div>
        <div className='pb-4 border-b'>{user.code}</div>
      </div>
      <div className='mb-4'>
        <div className='text-xs text-gray-600 mb-2'>Member Status</div>
        <div className='pb-4 border-b'>{user.status}</div>
      </div>
    </div>
  )
}

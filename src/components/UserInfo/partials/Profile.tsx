import avatar from "assets/avatar.svg"
import { TUser } from ".."

interface IProps {
  user: TUser
}

export const Profile: React.FC<IProps> = ({ user }) => {
  return (
    <>
      <div className='flex flex-col items-center space-y-5'>
        <div>
          <img src={avatar} alt='avatar' />
        </div>
        <div className='text-center'>
          <div className='text-2xl font-bold'>{user.name}</div>
          <div className='text-gray-600 text-xs'>{user.email}</div>
        </div>
        <div className='grid grid-cols-2 w-full px-8'>
          <div className='border-r flex flex-col items-center'>
            <div className='font-medium text-sm'>{user.post}</div>
            <div className='text-gray-600 text-xs'>Post</div>
          </div>
          <div className='flex flex-col items-center border-l'>
            <div className='font-medium text-sm'>{user.upcoming}</div>
            <div className='text-gray-600 text-xs'>Upcoming</div>
          </div>
        </div>
      </div>
      <button className='mt-12 text-center border w-full rounded-md p-2 font-medium'>
        Send Message
      </button>
    </>
  )
}

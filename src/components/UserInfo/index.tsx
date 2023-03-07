import { Files } from "./partials/Files"
import { MainInfo } from "./partials/MainInfo"
import { Profile } from "./partials/Profile"
import { Appointments } from "./partials/Appointments"

export type TUser = {
  name: string
  email: string
  post: string
  upcoming: string
  gender: string
  address: string
  city: string
  code: string
  status: string
  registered_at: string
  phone: string
  birthday: string
}
const user = {
  name: "Diane Cooper",
  email: "diane.cooper@example.com",
  post: "15",
  upcoming: "02",
  gender: "FEMALE",
  address: "JL. Diponegoro No. 21",
  city: "Cilacap",
  code: "655849",
  status: "Active Member",
  registered_at: "Feb 24th, 1997",
  phone: "(239) 555 -0108",
  birthday: "Feb 24th, 1997",
}

export const UserInfo = () => {
  return (
    <div className='flex pr-6 w-full'>
      <div className='w-64 pt-8 px-5'>
        <Profile user={user} />
        <Files className='mt-16' />
      </div>
      <div className='px-4 pt-16 w-full'>
        <MainInfo user={user} />
        <Appointments className='mt-6' />
      </div>
    </div>
  )
}

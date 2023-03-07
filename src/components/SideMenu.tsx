import logo from "assets/logo.svg"
import plus from "assets/plus.svg"
import user from "assets/user.svg"
import folder from "assets/folder.svg"
import upload from "assets/upload.svg"
import file from "assets/file.svg"
import setting from "assets/setting.svg"
import logout from "assets/logout.svg"

const menuItems = [
  { label: "NEW", icon: plus },
  { label: "PATIENT", icon: user },
  { label: "FOLDER", icon: folder },
  { label: "UPLOAD", icon: upload },
  { label: "REPORT", icon: file },
  { label: "SETTING", icon: setting },
  { label: "LOGOUT", icon: logout },
]

export const SideMenu = () => {
  return (
    <div className='w-[85px] h-screen border-r'>
      <div className='bg-[#29B712] flex justify-center items-center h-[71px]'>
        <img src={logo} alt='logo' className='mr-3 mb-2' />
      </div>
      <div className='space-y-12 mt-4 pt-4'>
        {menuItems.map((item) => {
          return (
            <div
              key={`menu-${item.label}`}
              className='flex flex-col items-center cursor-pointer text-gray-400 hover:text-gray-700'
            >
              <img src={item.icon} alt={item.label} />
              <div className='text-xs mt-3'>{item.label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

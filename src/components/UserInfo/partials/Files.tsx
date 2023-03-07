import note from "assets/note.svg"

interface IProps {
  className: string
}

const files = [
  "Check Up Results.pdf",
  "Check Up Results.pdf",
  "Medical Prescription.pdf",
  "Dental X-Ray Result.pdf",
]

export const Files: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className='text-lg mb-8 px-2'>Files / Downloads</div>
      <div className='space-y-2'>
        {files.map((file, index) => {
          return (
            <div
              key={`file-${index}`}
              className='flex bg-gray-100 px-5 py-4 text-xs'
            >
              <img src={note} alt={file} />
              <div className='ml-4'>{file}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

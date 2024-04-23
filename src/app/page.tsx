import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className='w-screen h-screen bg-white flex justify-center item-center'>
      <canvas 
        width={750}
        height={750}
        className='border border-black rounded-md'
      />
    </div>
  )
}

export default page
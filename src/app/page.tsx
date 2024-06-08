import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My website',
  description: 'This is the home page'
}

const page = () => {
  return (
    <div>
      <h3 className="home space-y-12 text-5xl font-extrabold dark:text-white">Hi!! Welcome to my page<small className="ms-2 font-semibold text-gray-500 dark:text-gray-400 text-xl">Roberto Morales</small></h3>
    </div>
  )
}

export default page
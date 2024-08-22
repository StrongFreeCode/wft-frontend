import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen text-center flex flex-col justify-center items-center'>
      <h2>Not Found</h2>
      
      <p>Could not find requested resource</p>
      <Link href="/" className='text-blue-500'>Return Home</Link>
    </div>
  )
}
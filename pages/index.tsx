import type { NextPage } from 'next'
import Link from 'next/link'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <Link href="/about">About</Link>
      <Hero/>
    </div>
  )
}

export default Home

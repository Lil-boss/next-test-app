import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'

const Home: NextPage = () => {
  const router = useRouter()
  const {productId,reviewId} = router.query
  return (
    <div>
      <Navbar/>
      <Link href="/about">About</Link>
      <br />
      <Link href="/product">Product</Link>
      <br />
      <Link href="/product/[productId]" as={`/product/${4}`}>Product By id</Link>
      <br />
      <Link href="/product/[productId]/review/[reviewId]" as={`/product/${4}/review/${4}`}>Product id by product review</Link>
      <Hero/>
    </div>
  )
}

export default Home

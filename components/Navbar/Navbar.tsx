import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      <Link href="/about">About</Link>
      <br />
      <Link href="/product">Product</Link>
      <br />
      <Link href="/product/[productId]" as={`/product/${4}`}>
        Product By id
      </Link>
      <br />
      <Link
        href="/product/[productId]/review/[reviewId]"
        as={`/product/${4}/review/${4}`}
      >
        Product review by product id
      </Link>
    </div>
  );
};

export default Navbar;

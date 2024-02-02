'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Product } from '@/payload-types'

// import { useCart } from '@/hooks/use-cart'

const AddToCartButton = ({ product }: { product: Product }) => {
  // const { addItem } = useCart()
  const [isSuccess, SetIsSuccess] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      SetIsSuccess(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isSuccess])

  return (
    <Button
      onClick={() => {
        // addItem(product)
        SetIsSuccess(true)
      }}
      size='lg'
      className='w-full'
    >
      {isSuccess ? 'Added!' : 'Add to Cart'}
    </Button>
  )
}

export default AddToCartButton

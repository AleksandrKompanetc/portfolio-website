import Image from 'next/image'
import React from 'react'

interface Props {
  name: string
  role: string
  image: string
}

const ClientReview = ({name,role,image}: Props) => {
  return (
    <div className='flex flex-col text-center justify-center'>
      <Image src={image} alt={name} width={100} height={100} objectFit='contain' className='mx-auto'/>
    </div>
  )
}

export default ClientReview
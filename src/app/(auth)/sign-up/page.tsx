'use client'

import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from '@/lib/validators/account-crdentials-validators'
import { Button, buttonVariants } from '@/components/ui/button'

import { ArrowRight } from 'lucide-react'
import { Icons } from '@/components/Icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  })

  const onsubmit = ({ email, password }: TAuthCredentialsValidator) => {
    // send to server
    console.log(email, password)
  }

  return (
    <>
      <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col items-center space-y-2 text-center'>
            <Icons.logo className='h-20 w-20' />
            <h1 className='text-2xl font-semibold tracking-tighter'>
              Sign in to your account
            </h1>

            <Link
              className={buttonVariants({
                variant: 'link',
                className: 'gap-1.5',
              })}
              href='/sign-up'
            >
              Don&apos;t have an account?
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>

          {/* sign up form */}
          <div className='grid gap-6'>
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className='grid gap-2'>
                <div className='grid gap-1 py-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    className={cn({
                      'focus-visible:ring-red-500': errors.email,
                    })}
                    placeholder='your@example.com'
                    {...register('email')}
                  />
                </div>

                <div className='grid gap-1 py-2'>
                  <Label htmlFor='Password'>Password</Label>
                  <Input
                    className={cn({
                      'focus-visible:ring-red-500': errors.password,
                    })}
                    type='password'
                    placeholder='Password'
                    {...register('password')}
                  />
                </div>

                <Button>Sigin in</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page

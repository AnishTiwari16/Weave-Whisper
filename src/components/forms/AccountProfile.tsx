'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { formSchema } from '@/lib/validations/user';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const AccountProfile = () => {
  //defining form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profile_photo: '',
      name: '',
      username: '',
      bio: '',
    },
  });
  // const handleImage = (
  //   e: ChangeEvent,
  //   fieldChange: (value: string) => void
  // ) => {
  //   e.preventDefault();
  // };
  // const handleOnSubmit = (values: z.infer<typeof formSchema>) => {
  //   console.log(values);
  // };
  return (
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(handleOnSubmit)}
        className='space-y-8'
      >
        <FormField
          control={form.control}
          name='profile_photo'
          render={({ field }) => (
            <FormItem className='flex items-center gap-4'>
              <FormLabel>
                {field.value ? (
                  <Image
                    src={field.value}
                    alt='profile photo'
                    height={96}
                    width={96}
                    priority
                    className='rounded-full object-contain'
                  />
                ) : (
                  <Image
                    src='/assets/profile.svg'
                    alt='profile photo'
                    height={24}
                    width={24}
                    className='object-contain'
                  />
                )}
              </FormLabel>
              <FormControl className='text-base-semibold flex-1 text-gray-200'>
                <Input
                  type='file'
                  accept='image/*'
                  placeholder='Upload a photo'
                  // onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className='text-[#121417]'
                  type='text'
                  placeholder='Elon musk'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  className='text-[#121417]'
                  placeholder='Elon musk'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Tell us a little bit about yourself'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full bg-[#877EFF]' type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AccountProfile;

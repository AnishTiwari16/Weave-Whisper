'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React, { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { useUploadThing } from '@/lib/uploadthing';
import { isBase64Image } from '@/lib/utils';
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
interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
}
const AccountProfile = ({ user }: Props) => {
  const [files, setFiles] = React.useState<File[]>([]);
  const { startUpload } = useUploadThing('media');
  //defining form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profile_photo: user?.image || '',
      name: user?.name || '',
      username: user?.username || '',
      bio: user?.bio || '',
    },
  });
  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));
      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || '';
        fieldChange(imageDataUrl);
      };
      fileReader.readAsDataURL(file);
    }
  };
  const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {
    const blob = values.profile_photo;
    const hasImageChanged = isBase64Image(blob);
    if (hasImageChanged) {
      //reuploading image
      const imgRes = await startUpload(files);
      if (imgRes && imgRes[0].url) {
        values.profile_photo = imgRes[0].url;
      }
    }
    //TODO: update user profile
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='profile_photo'
          render={({ field }) => (
            <FormItem className='flex items-center gap-4'>
              <FormLabel
                className={`${
                  field.value ? 'p-5' : 'p-10'
                } mr-0 rounded-full bg-[#1F1F22] text-white md:mr-5`}
              >
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
                    height={35}
                    width={35}
                    className='object-contain'
                  />
                )}
              </FormLabel>

              <FormControl className='text-base-semibold text-gray-200'>
                <Input
                  type='file'
                  accept='image/*'
                  placeholder='Upload a photo'
                  className='bg-transparent'
                  onChange={(e) => handleImage(e, field.onChange)}
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
                  className='bg-transparent'
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
                  className='bg-transparent'
                  placeholder='elon_musk'
                  type='text'
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
                  className='resize-none bg-transparent'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='w-full bg-[#877EFF] hover:bg-[#877EFF]'
          type='submit'
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AccountProfile;

'use client';

import { useIpContext } from '@/lib/hooks';
import { ValidateIPAddress } from '@/lib/utils';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function SearchForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { dispatch } = useIpContext();

  const onSubmit = async (data: FieldValues) => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch({ type: 'isLoading' });

    if (data.length == 0) {
      toast.error('IP Address or Domain is required');
    }
    // validations
    if (!ValidateIPAddress(data.search)) {
      toast.error('Invalid IP address. Please try again.');
      return;
    }

    // API call
    const BASE_API_URL = 'https://geo.ipify.org/api/v2/country,city?';
    const API_KEY = process.env.NEXT_PUBLIC_IP_GEOLOCATION_API_SECRET_KEY;

    const response = await fetch(
      `${BASE_API_URL}apiKey=${API_KEY}&ipAddress=${data.search}`
    );
    if (!response.ok) {
      toast.error('Invalid IP address. Please try again.');
      return;
    }
    const responseData = await response.json();

    dispatch({ type: 'ipData/searched', payload: responseData });

    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-full max-w-md mx-auto'
      >
        <input
          {...register('search', {
            required: 'IP Address or Domain is required',
            // Ver mas validaciones
          })}
          className='h-full rounded-l-lg p-4 focus:outline-none flex-1 '
          placeholder='Search for any IP address or domain'
        />
        <button className='bg-veryDarkGray h-full w-[32px] flex justify-center items-center rounded-r-lg'>
          <ChevronRightIcon className='text-white text-2xl' />
        </button>
      </form>
      {/* ver como mostramos el error */}
      {errors.search && (
        <p className='text-red-500 bg-white'>{`${errors.search.message}`}</p>
      )}
    </>
  );
}

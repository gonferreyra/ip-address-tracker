'use client';

import { useIpContext } from '@/lib/hooks';
import { ValidateIPAddress } from '@/lib/utils';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form';

import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { searchSchema, TSearchSchema } from '@/lib/types';

export default function SearchForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<TSearchSchema>({
    resolver: zodResolver(searchSchema),
  });
  const { dispatch } = useIpContext();

  const onSubmit = async (data: TSearchSchema) => {
    dispatch({ type: 'isLoading' });

    // validations
    if (data.search.length == 0) {
      toast.error('IP Address is required');
    }

    if (!ValidateIPAddress(data.search)) {
      toast.error('Invalid IP address. Please try again.');
      dispatch({
        type: 'rejected',
        payload: 'Invalid IP address, failed on IpValidation',
      });
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
      dispatch({ type: 'rejected', payload: 'Invalid IP address' });
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
          {...register('search')}
          className='h-full rounded-l-lg p-4 focus:outline-none flex-1 cursor-pointer'
          placeholder='Search for any IP address'
        />
        <button
          className='bg-veryDarkGray h-full w-[32px] flex justify-center items-center rounded-r-lg'
          disabled={isSubmitting}
        >
          <ChevronRightIcon className='text-white text-2xl' />
        </button>
      </form>
      {errors.search && (
        <p className='text-red-500'>** {`${errors.search.message}`}</p>
      )}
    </>
  );
}

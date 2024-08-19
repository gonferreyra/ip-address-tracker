'use client';

import { IpAddressObject } from '@/lib/interfaces';
import { createContext, Dispatch, useEffect, useReducer } from 'react';
import { ipReducer } from './ipReducer';
import { ReducerActions } from './ipReducer';

type State = {
  isLoading: boolean;
  error: string;
  ipData: IpAddressObject | null;
};

const INITIAL_STATE: State = {
  isLoading: true,
  error: '',
  ipData: null,
};

type IpContextStore = {
  dispatch: Dispatch<ReducerActions>;
  isLoading: boolean;
  ipData: IpAddressObject | null;
};

export const IpContext = createContext<IpContextStore | null>(null);

export default function IpContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ isLoading, ipData }, dispatch] = useReducer(
    ipReducer,
    INITIAL_STATE
  );
  const baseUrl = 'https://geo.ipify.org/api/v2/country,city?';
  const API_KEY = process.env.NEXT_PUBLIC_IP_GEOLOCATION_API_SECRET_KEY;

  useEffect(() => {
    if (ipData) return;
    dispatch({ type: 'isLoading' });
    const fetchIpData = async () => {
      try {
        const resp = await fetch(`${baseUrl}apiKey=${API_KEY}`);
        const data = await resp.json();
        dispatch({ type: 'ipData/loaded', payload: data });
      } catch (error) {
        dispatch({
          type: 'rejected',
          payload: 'There was an error fetching the data',
        });
      }
    };
    fetchIpData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IpContext.Provider value={{ dispatch, isLoading, ipData }}>
      {children}
    </IpContext.Provider>
  );
}

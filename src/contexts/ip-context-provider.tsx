'use client';

import { IpAddressObject } from '@/lib/interfaces';
import {
  createContext,
  Dispatch,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { ipReducer } from './ipReducer';
import { ReducerActions } from './ipReducer';

type State = {
  isLoading: boolean;
  error: string;
  isSearching: boolean;
  ipData: IpAddressObject | null;
  searchedData: IpAddressObject | null;
};

const INITIAL_STATE: State = {
  isLoading: true,
  error: '',
  isSearching: false,
  ipData: {
    ip: '186.13.122.150',
    location: {
      country: 'AR',
      region: 'Bailaso Bolo',
      city: 'Córdoba',
      lat: -31.4135,
      lng: -64.18105,
      postalCode: '',
      timezone: '-03:00',
      geonameId: 3860259,
    },
    as: {
      asn: 19037,
      name: 'AMX Argentina S.A.',
      route: '186.13.120.0/22',
      domain: 'http://www.claro.com.ar',
      type: 'Cable/DSL/ISP',
    },
    isp: 'AMX Argentina',
  },
  searchedData: null,
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
  const [{ isLoading, isSearching, ipData, searchedData }, dispatch] =
    useReducer(ipReducer, INITIAL_STATE);
  const baseUrl = 'https://geo.ipify.org/api/v2/country,city?';
  const API_KEY = process.env.NEXT_PUBLIC_IP_GEOLOCATION_API_SECRET_KEY;

  useEffect(() => {
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
  }, [API_KEY]);

  return (
    <IpContext.Provider value={{ dispatch, isLoading, ipData }}>
      {children}
    </IpContext.Provider>
  );
}

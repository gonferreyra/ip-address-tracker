import { IpAddressObject } from '@/lib/interfaces';

type State = {
  isLoading: boolean;
  error: string;
  ipData: IpAddressObject | null;
};

export type ReducerActions =
  | { type: 'isLoading' }
  | { type: 'rejected'; payload: string }
  | { type: 'ipData/loaded'; payload: IpAddressObject }
  | { type: 'ipData/searched'; payload: IpAddressObject };

export const ipReducer = (state: State, action: ReducerActions) => {
  switch (action.type) {
    case 'isLoading':
      return { ...state, isLoading: true };
    case 'rejected':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'ipData/loaded':
      return {
        ...state,
        isLoading: false,
        ipData: action.payload,
      };
    case 'ipData/searched':
      return {
        ...state,
        isLoading: false,
        ipData: action.payload,
      };
    default:
      return state;
  }
};

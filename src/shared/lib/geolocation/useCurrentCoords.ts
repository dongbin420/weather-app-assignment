import { useCallback, useEffect, useState } from 'react';
import type { LocationState } from './types';
import { mapGeoErrorToMessage } from './messages';

const TIMEOUT_MS = 8000;
const MAXIMUM_AGE_MS = 60_000;
const ENABLE_HIGH_ACCURACY = true;

export const useCurrentCoords = () => {
  const [state, setState] = useState<LocationState>({ status: 'idle' });

  const request = useCallback(() => {
    if (!navigator.geolocation) {
      setState({
        status: 'error',
        message: '이 브라우저는 위치 기능을 지원하지 않습니다.',
      });
      return;
    }

    setState({
      status: 'loading',
      message: '현재 위치를 가져오는 중입니다…',
    });

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setState({
          status: 'success',
          coords: {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          },
        });
      },
      (err) => {
        const message = mapGeoErrorToMessage(err);
        setState({
          status: err.code === err.PERMISSION_DENIED ? 'denied' : 'error',
          message,
        });
      },
      {
        enableHighAccuracy: ENABLE_HIGH_ACCURACY,
        timeout: TIMEOUT_MS,
        maximumAge: MAXIMUM_AGE_MS,
      },
    );
  }, []);

  // effect 내에서 request가 즉시 실행되면서, 외부 시스템과의 동기화 없이 setState를 바로 실행하는 것을
  // 리액트는 싫어하기 때문에(린터 경고), effect 실행 후에 타이머가 setState 실행을 담당하도록 함.
  useEffect(() => {
    const id = window.setTimeout(() => {
      request();
    }, 0);

    return () => window.clearTimeout(id);
  }, [request]);

  return {
    ...state,
    request,
    isIdle: state.status === 'idle',
    isLoading: state.status === 'loading',
    isSuccess: state.status === 'success',
    isDenied: state.status === 'denied',
    isError: state.status === 'error',
  };
};

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { isAuthToken } from 'utils/auth';
import { loadUser } from 'store/actions';
import HypnosisLoading from 'components/hypnosis-loading';

interface IProps{
  children: JSX.Element
}

export const AuthWrapper = ({ children }: IProps) => {
  const router = useRouter();
  const authStore = useAppSelector((state)=>state.authReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isAuthToken()) {
      const check = dispatch(loadUser());
        if (!check) {
          router.push('/login');
        }
    }
  }, []);


  /* show loading indicator while the auth provider is still initializing */
  if (authStore.authLoading) {
    return <HypnosisLoading/>;
  }
  // if auth initialized with a valid user show protected page
  if (authStore.isAuthenticated && authStore.user) {
    return <>{children}</>;
  }


  /* otherwise don't return anything, will do a redirect from useEffect */
  return null;
};

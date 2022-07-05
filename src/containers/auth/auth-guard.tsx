import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { isAuthToken } from 'utils/auth';
import { loadUser } from 'store/actions';
import HypnosisLoading from 'components/hypnosis-loading';

export const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();
  const authStore = useAppSelector((state)=>state.authReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isAuthToken()) {
      const check = async () => {
        console.log('check');
        const res = await dispatch(loadUser());
        if (!res) {
          router.push('/login');
        }
      }
      check();
    }
  }, []);

  /* show loading indicator while the auth provider is still initializing */
  if (authStore.authLoading) {
    return <HypnosisLoading/>;
  }
  console.log(authStore.isAuthenticated, authStore.user);
  // if auth initialized with a valid user show protected page
  if (authStore.isAuthenticated && authStore.user) {
    return <>{children}</>;
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null;
};

import { useEffect, useState } from 'react';
import { getProfile } from '@/api/profile';
import { useAppDispatch, useAppSelector } from '@/store';
import { profileActions, profileSelectors } from '@/store/profile';
import { tokenSelectors } from '@/store/token';

export const useProfile = () => {
  const token = useAppSelector(tokenSelectors.get);
  const profile = useAppSelector(profileSelectors.get);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(!profile);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token && !profile) {
      const fetchProfile = async () => {
        setLoading(true);

        try {
          const profile = await getProfile();
          dispatch(profileActions.set(profile));

          setError(null);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchProfile();
    }
  }, [token, profile, dispatch]);

  return { profile, loading, error };
};

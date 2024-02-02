import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store';
import { tokenSelectors } from '@/store/token';

export const useLoginNavigate = () => {
  const token = useAppSelector(tokenSelectors.get);

  const location = useLocation();
  const navigate = useNavigate();
  if (token && location.state?.from) setTimeout(() => navigate(location.state?.from));
};

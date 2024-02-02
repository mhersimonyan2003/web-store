import React from 'react';
import { ProfileForm } from '@/components';
import { CircularProgress } from '@mui/material';
import { useProfile } from '@/hooks';

export const ProfileSection: React.FC = () => {
  const { profile, loading, error } = useProfile();

  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;

  const profileFormData = { name: profile.name };

  return <ProfileForm data={profileFormData} />;
};

import { useMutation } from '@tanstack/react-query';
import { getRecommendations } from './recommendationService';

export const useRecommendations = () => {
  return useMutation({
    mutationFn: getRecommendations,
  });
};

import type { RecommendationRequest, RecommendationResult } from '@/types/recommendation';
import axiosInstance from './axiosInstance';

export const getRecommendations = async (
  payload: RecommendationRequest
): Promise<RecommendationResult> => {
  const response = await axiosInstance.post<RecommendationResult>('/recommend/', payload);
  return response.data;
};

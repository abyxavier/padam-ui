export interface RecommendationRequest {
    movie: string;
}

export interface RecommendedMovie {
    movie: string;
    reason: string;
}

export interface RecommendationResult {
    movie_list: RecommendedMovie[];
}
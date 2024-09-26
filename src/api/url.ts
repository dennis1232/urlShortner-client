import { post } from './axios';
const BASE_URL = process.env.BASE_URL || 'http://localhost:5001';

interface CreateShortUrlParams {
    longUrl: string;
    expiresInDays?: number;
}

interface ShortUrlResponse {
    shortUrl: string;
    longUrl: string;
    clicks: number;
    expiresAt?: string;
}

export const createShortUrl = async ({ longUrl, expiresInDays }: CreateShortUrlParams): Promise<ShortUrlResponse | null> => {
    const response = await post(`${BASE_URL}/shorten`, {
        longUrl,
        expiresInDays
    });
    console.log(response);


    return response as ShortUrlResponse;

};

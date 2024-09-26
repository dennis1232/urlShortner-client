import React, { useState } from 'react';
import { AxiosError } from 'axios';
import { createShortUrl } from '../api/url';
import UrlForm from './UrlForm';
import ShortUrlDisplay from './ShortUrlDisplay';
import Analytics from './Analytics';

const UrlShortener: React.FC = () => {
    const [longUrl, setLongUrl] = useState('');
    const [expiresInDays, setExpiresInDays] = useState<number | ''>('');
    const [shortUrl, setShortUrl] = useState('');
    const [clicks, setClicks] = useState(0);
    const [error, setError] = useState('');
    const [showAnalytics, setShowAnalytics] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setShortUrl('');
        setError('');
        setShowAnalytics(false);

        try {
            const response = await createShortUrl({
                longUrl,
                expiresInDays: expiresInDays ? parseInt(String(expiresInDays)) : undefined,
            });

            if (response?.shortUrl) {
                setShortUrl(response?.shortUrl);
                setClicks(response?.clicks);
            }
        } catch (err) {
            const error = err as AxiosError;
            if (error.response && error.response.status === 404) {
                setError('The short URL you entered does not exist.');
            } else {
                setError('Error creating short URL. Please make sure the URL is valid.');
            }
            console.error(err);
        }
    };

    const handleToggleAnalytics = () => {
        setShowAnalytics(!showAnalytics);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">URL Shortener</h1>

                <UrlForm
                    longUrl={longUrl}
                    setLongUrl={setLongUrl}
                    expiresInDays={expiresInDays}
                    setExpiresInDays={setExpiresInDays}
                    handleSubmit={handleSubmit}
                />

                {shortUrl && (
                    <ShortUrlDisplay
                        shortUrl={shortUrl}
                        showAnalytics={showAnalytics}
                        handleToggleAnalytics={handleToggleAnalytics}
                    />
                )}

                {showAnalytics && <Analytics clicks={clicks} />}

                {error && <p className="mt-6 text-center text-red-600">{error}</p>}
            </div>
        </div>
    );
};

export default UrlShortener;

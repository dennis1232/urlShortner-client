import React from 'react';

interface ShortUrlDisplayProps {
    shortUrl: string;
    showAnalytics: boolean;
    handleToggleAnalytics: () => void;
}

const ShortUrlDisplay: React.FC<ShortUrlDisplayProps> = ({ shortUrl, showAnalytics, handleToggleAnalytics }) => {
    return (
        <div className="mt-6 p-4 bg-green-100 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-green-800">Shortened URL</h2>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                {shortUrl}
            </a>

            <button
                onClick={handleToggleAnalytics}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                {showAnalytics ? 'Hide Analytics' : 'Show Analytics'}
            </button>
        </div>
    );
};

export default ShortUrlDisplay;

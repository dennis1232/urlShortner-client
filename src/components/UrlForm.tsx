import React from 'react';

interface UrlFormProps {
    longUrl: string;
    setLongUrl: (url: string) => void;
    expiresInDays: number | '';
    setExpiresInDays: (days: number | '') => void;
    handleSubmit: (e: React.FormEvent) => void;
}

const UrlForm: React.FC<UrlFormProps> = ({ longUrl, setLongUrl, expiresInDays, setExpiresInDays, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="longUrl" className="block text-sm font-medium text-gray-700">
                    Enter a long URL
                </label>
                <input
                    type="text"
                    id="longUrl"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="https://example.com"
                    required
                />
            </div>

            <div>
                <label htmlFor="expiresInDays" className="block text-sm font-medium text-gray-700">
                    Expire in (days)
                </label>
                <select
                    id="expiresInDays"
                    value={expiresInDays}
                    onChange={(e) => setExpiresInDays(e.target.value ? parseInt(e.target.value) : '')}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="">Never expire</option>
                    <option value="1">1 day</option>
                    <option value="7">7 days</option>
                    <option value="30">30 days</option>
                    <option value="90">90 days</option>
                </select>
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                    Shorten URL
                </button>
            </div>
        </form>
    );
};

export default UrlForm;

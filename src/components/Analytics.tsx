import React from 'react';

interface AnalyticsProps {
    clicks: number;
}

const Analytics: React.FC<AnalyticsProps> = ({ clicks }) => {
    return (
        <div className="mt-4 p-4 bg-yellow-100 rounded-lg text-center">
            <h2 className="text-lg font-semibold text-yellow-800">Analytics</h2>
            <p className="text-yellow-700">Clicks: {clicks}</p>
        </div>
    );
};

export default Analytics;

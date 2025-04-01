'use client';
import Graph from '../Graph';

const data = [
    { name: 'JSCMP', Value: 3 },
    { name: 'Node JS', Value: 1 },
];

export default function HeroGraph() {
    return (
        <div className="w-1/2">
            <h1 className="text-xl font-semibold mb-4">Performance Comparison</h1>
            <Graph data={data} />
        </div>
    );
} 
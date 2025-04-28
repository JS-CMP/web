'use client';
import Graph, {DataPoint} from '../Graph';

const data: DataPoint[] = [
    { name: 'JSCMP', Value:  0.31},
    { name: 'Node JS', Value: 1 },
];

export default function HeroGraph() {
    return (
        <div className="w-1/2">
            <h1 className="text-xl font-semibold mb-4">Performance Comparison</h1>
            <Graph data={data} />
            <div className='w-full text-right opacity-20 underline'>
                <a href='https://docs.google.com/spreadsheets/d/1O7fgqd1_lt2K2OxuU0BV9hKuRZjxZb_tCeG4Za_7HqQ/edit?usp=sharing' target='blank' className=''>Benchmark</a>
            </div>
        </div>
    );
}
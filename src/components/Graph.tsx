'use client';
import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export interface DataPoint {
  name: string;
  Value: number;
}

interface GraphProps {
  data: DataPoint[];
}

const Graph: React.FC<GraphProps> = ({ data }) => {
  return (
    <div className="w-full aspect-[4/3]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
        <XAxis
          dataKey="name"
          label={{
            position: 'bottom',
            fontSize: 14,
            fill: '#888',
          }}
        />
        <YAxis
          label={{
            value: 'Time',
            offset: 20,
            position: 'insideTopLeft',
            fontSize: 14,
            fill: '#888',
          }}
        />
          <Tooltip />
          <Bar dataKey="Value" fill="#F0C417" barSize={100}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;

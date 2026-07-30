import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-neutral-light bg-white px-3 py-2 shadow-lg">
      <p className="font-body text-xs font-semibold text-navy">{label}</p>
      <p className="font-body text-xs text-charcoal/70">
        {payload[0].value.toLocaleString()} sqft
      </p>
    </div>
  )
}

function FloorPlanChart({ floorPlan, height = 260 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={floorPlan} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
        <CartesianGrid stroke="#E8E6E0" vertical={false} />
        <XAxis
          dataKey="floor"
          tick={{ fill: '#1A1A1A', fontSize: 12, fontFamily: 'Poppins' }}
          tickLine={false}
          axisLine={{ stroke: '#D9D6CE' }}
        />
        <YAxis
          tick={{ fill: '#1A1A1A', fontSize: 12, fontFamily: 'Poppins' }}
          tickLine={false}
          axisLine={false}
          width={56}
        />
        <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(201,162,39,0.08)' }} />
        <Bar dataKey="area" fill="#C9A227" radius={[6, 6, 0, 0]} maxBarSize={64} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default FloorPlanChart

import React, { useState } from 'react';
import { 
  AreaChart, Area, ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

const IndianLandLossVisualization = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  
  // Data from our analysis
  const timelineData = [
    {year: 1800, allotmentAcres: 414974, feePatentLosses: 102076, percentLost: 24.6},
    {year: 1854, allotmentAcres: 418479, feePatentLosses: 102837, percentLost: 24.6},
    {year: 1873, allotmentAcres: 440564, feePatentLosses: 107216, percentLost: 24.3},
    {year: 1882, allotmentAcres: 675763, feePatentLosses: 310659, percentLost: 46.0},
    {year: 1883, allotmentAcres: 1123133, feePatentLosses: 399075, percentLost: 35.5},
    {year: 1884, allotmentAcres: 1127850, feePatentLosses: 402831, percentLost: 35.7},
    {year: 1885, allotmentAcres: 1132823, feePatentLosses: 404865, percentLost: 35.7},
    {year: 1887, allotmentAcres: 1984549, feePatentLosses: 779885, percentLost: 39.3},
    {year: 1888, allotmentAcres: 1988744, feePatentLosses: 782743, percentLost: 39.4},
    {year: 1889, allotmentAcres: 2188162, feePatentLosses: 869056, percentLost: 39.7},
    {year: 1890, allotmentAcres: 2472894, feePatentLosses: 995142, percentLost: 40.2},
    {year: 1891, allotmentAcres: 3430634, feePatentLosses: 1715006, percentLost: 50.0},
    {year: 1892, allotmentAcres: 3824906, feePatentLosses: 1997118, percentLost: 52.2},
    {year: 1893, allotmentAcres: 4025174, feePatentLosses: 2113504, percentLost: 52.5},
    {year: 1894, allotmentAcres: 4363803, feePatentLosses: 2391630, percentLost: 54.8},
    {year: 1895, allotmentAcres: 4496452, feePatentLosses: 2467396, percentLost: 54.9},
    {year: 1896, allotmentAcres: 4512645, feePatentLosses: 2474674, percentLost: 54.8},
    {year: 1897, allotmentAcres: 4513944, feePatentLosses: 2474704, percentLost: 54.8},
    {year: 1898, allotmentAcres: 22182639, feePatentLosses: 17587720, percentLost: 79.3},
    {year: 1899, allotmentAcres: 22466854, feePatentLosses: 17734829, percentLost: 78.9},
    {year: 1900, allotmentAcres: 23373484, feePatentLosses: 18524544, percentLost: 79.3},
    {year: 1901, allotmentAcres: 24187833, feePatentLosses: 18788863, percentLost: 77.7},
    {year: 1902, allotmentAcres: 24537238, feePatentLosses: 18853705, percentLost: 76.8},
    {year: 1903, allotmentAcres: 24651954, feePatentLosses: 18896995, percentLost: 76.7},
    {year: 1904, allotmentAcres: 27075969, feePatentLosses: 19569133, percentLost: 72.3},
    {year: 1905, allotmentAcres: 28559557, feePatentLosses: 20095873, percentLost: 70.4},
    {year: 1906, allotmentAcres: 31381881, feePatentLosses: 21526390, percentLost: 68.6},
    {year: 1907, allotmentAcres: 33875008, feePatentLosses: 21777581, percentLost: 64.3},
    {year: 1908, allotmentAcres: 35314524, feePatentLosses: 22442321, percentLost: 63.5},
    {year: 1909, allotmentAcres: 35417093, feePatentLosses: 22482820, percentLost: 63.5},
    {year: 1910, allotmentAcres: 36091870, feePatentLosses: 22535046, percentLost: 62.4},
    {year: 1912, allotmentAcres: 36102438, feePatentLosses: 22535046, percentLost: 62.4},
    {year: 1913, allotmentAcres: 37569653, feePatentLosses: 22815898, percentLost: 60.7},
    {year: 1914, allotmentAcres: 37916924, feePatentLosses: 22851582, percentLost: 60.3},
    {year: 1915, allotmentAcres: 37926721, feePatentLosses: 22851596, percentLost: 60.3},
    {year: 1919, allotmentAcres: 37938691, feePatentLosses: 22851596, percentLost: 60.2},
    {year: 1921, allotmentAcres: 39900311, feePatentLosses: 23149656, percentLost: 58.0},
    {year: 1922, allotmentAcres: 39908996, feePatentLosses: 23149786, percentLost: 58.0},
    {year: 1925, allotmentAcres: 39913351, feePatentLosses: 23149786, percentLost: 58.0},
    {year: 1928, allotmentAcres: 39914891, feePatentLosses: 23149786, percentLost: 58.0},
    {year: 1929, allotmentAcres: 39915325, feePatentLosses: 23149786, percentLost: 58.0},
    {year: 1932, allotmentAcres: 40148445, feePatentLosses: 23149786, percentLost: 57.7},
    {year: 1934, allotmentAcres: 40772333, feePatentLosses: 23224082, percentLost: 57.0}
  ];
  
  // Data for the pie chart showing loss categories
  const lossCategories = [
    { name: 'Ceded to Government', value: 38259109, percentage: 43.5 },
    { name: 'Opened to Settlement', value: 22694658, percentage: 25.8 },
    { name: 'Fee Patent Losses', value: 23224082, percentage: 26.4 },
    { name: 'Miscellaneous Losses', value: 3739729, percentage: 4.3 }
  ];
  
  // Top agencies with fee patent losses
  const topAgencies = [
    { agency: 'Five Civilized Tribes', feePatentLosses: 14244163, percentageLost: 73.4 },
    { agency: 'Osage', feePatentLosses: 1029236, percentageLost: 70.0 },
    { agency: 'Rosebud', feePatentLosses: 868853, percentageLost: 26.9 },
    { agency: 'White Earth', feePatentLosses: 666519, percentageLost: 93.9 },
    { agency: 'Flathead', feePatentLosses: 664372, percentageLost: 53.2 },
    { agency: 'Pine Ridge', feePatentLosses: 655390, percentageLost: 24.1 },
    { agency: 'Cheyenne and Arapaho', feePatentLosses: 356601, percentageLost: 8.3 },
    { agency: 'Cheyenne River', feePatentLosses: 344627, percentageLost: 12.3 },
    { agency: 'Fort Peck', feePatentLosses: 296918, percentageLost: 14.2 },
    { agency: 'Standing Rock', feePatentLosses: 295571, percentageLost: 18.3 }
  ];
  
  // Overall land statistics
  const overallStats = {
    originalArea: 130562277,
    acquisitionSince: 9109312,
    totalLandBase: 139671589,
    currentIndianLand: 51539606,
    totalLoss: 88131983,
    lossPercentage: 63.1
  };
  
  // Format large numbers for display
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };
  
  // Colors for pie chart and other visualizations
  const COLORS = ['#8884d8', '#82ca9d', '#ff8042', '#ffc658', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  // Filter timelineData to focus on the Allotment Era (1887-1934)
  const allotmentEraData = timelineData.filter(item => item.year >= 1887 && item.year <= 1934);
  
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-2">The Disappearance of Native American Lands</h1>
      <h2 className="text-xl text-gray-600 text-center mb-6">Tracking the Loss of 88 Million Acres (1887-1934)</h2>
      
      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
          <p className="text-lg font-semibold text-blue-800">Original Land Base</p>
          <p className="text-3xl font-bold text-blue-600">{formatNumber(overallStats.originalArea)}</p>
          <p className="text-sm text-gray-600">acres</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-center">
          <p className="text-lg font-semibold text-red-800">Total Land Lost</p>
          <p className="text-3xl font-bold text-red-600">{formatNumber(overallStats.totalLoss)}</p>
          <p className="text-sm text-gray-600">acres ({overallStats.lossPercentage}%)</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-center">
          <p className="text-lg font-semibold text-orange-800">Fee Patent Losses</p>
          <p className="text-3xl font-bold text-orange-600">{formatNumber(23224082)}</p>
          <p className="text-sm text-gray-600">acres (26.4% of total loss)</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center">
          <p className="text-lg font-semibold text-green-800">Remaining Land</p>
          <p className="text-3xl font-bold text-green-600">{formatNumber(overallStats.currentIndianLand)}</p>
          <p className="text-sm text-gray-600">acres (36.9% of original)</p>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
              activeTab === 'timeline'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Timeline of Loss
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`px-4 py-2 text-sm font-medium border-t border-b ${
              activeTab === 'categories'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Loss Categories
          </button>
          <button
            onClick={() => setActiveTab('feepatent')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
              activeTab === 'feepatent'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            Fee Patent Impact
          </button>
        </div>
      </div>
      
      {/* Timeline View */}
      {activeTab === 'timeline' && (
        <div>
          <h3 className="text-xl font-semibold mb-3 text-center">Timeline of Native American Land Loss (1887-1934)</h3>
          <div className="h-96 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={allotmentEraData}
                margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: '#666' }}
                  tickCount={10}
                />
                <YAxis 
                  yAxisId="left" 
                  tick={{ fill: '#666' }}
                  tickFormatter={(value) => formatNumber(value)}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right" 
                  domain={[0, 100]} 
                  tick={{ fill: '#666' }}
                />
                <Tooltip 
                  formatter={(value, name) => {
                    if (name === 'percentLost') return [`${value.toFixed(1)}%`, 'Lost via Fee Patent (%)'];
                    return [formatNumber(value), name === 'allotmentAcres' ? 'Total Allotment' : 'Fee Patent Losses'];
                  }}
                />
                <Legend />
                <Area 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="allotmentAcres" 
                  name="Total Allotment Acres"
                  fill="#8884d8" 
                  stroke="#8884d8"
                  fillOpacity={0.3}
                />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="feePatentLosses"
                  name="Fee Patent Losses"
                  fill="#ff8042"
                  stroke="#ff8042"
                  fillOpacity={0.6}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="percentLost"
                  name="% of Allotment Lost"
                  stroke="#ff0000"
                  strokeWidth={2}
                  dot={{ r: 2 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="text-sm text-gray-600 mb-8">
            <p className="italic text-center">
              This chart shows the cumulative total of land allotted to individual Native Americans (purple area) 
              and the portion lost through fee patents (orange area). The red line shows the percentage of allotted land lost.
            </p>
            <p className="mt-2 text-center">
              Note the dramatic spike in 1898 when allotments to the Five Civilized Tribes began,
              followed by massive land loss through fee patents.
            </p>
          </div>
        </div>
      )}
      
      {/* Loss Categories View */}
      {activeTab === 'categories' && (
        <div>
          <h3 className="text-xl font-semibold mb-3 text-center">Categories of Native American Land Loss</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={lossCategories}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                  >
                    {lossCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => formatNumber(value)}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-lg font-semibold mb-2">How Native Lands Were Lost</h4>
              <p className="text-gray-700 mb-3">
                The 88 million acres of Native American land lost between 1887-1934 were dispersed through several mechanisms:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li><span className="font-semibold text-purple-600">Ceded to Government (43.5%)</span> - Lands surrendered to the U.S. government through treaties or agreements</li>
                <li><span className="font-semibold text-green-600">Opened to Settlement (25.8%)</span> - "Surplus" lands opened to non-Native settlement after allotment</li>
                <li><span className="font-semibold text-orange-600">Fee Patent Losses (26.4%)</span> - Land lost when allotments were converted to fee simple ownership and subsequently sold</li>
                <li><span className="font-semibold text-yellow-600">Miscellaneous Losses (4.3%)</span> - Other forms of land reduction including rights-of-way and government takings</li>
              </ul>
              <p className="italic text-sm text-gray-600">
                Fee patents were a critical tool in the dispossession of Native lands. Once an allotment was converted to fee simple status (removing trust protections), 
                the land could be sold or lost through tax foreclosure, often under dubious circumstances.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Fee Patent Impact View */}
      {activeTab === 'feepatent' && (
        <div>
          <h3 className="text-xl font-semibold mb-3 text-center">Fee Patent Impact by Agency/Reservation</h3>
          <div className="h-96 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={topAgencies}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  type="number" 
                  tick={{ fill: '#666' }}
                  tickFormatter={(value) => formatNumber(value)}
                />
                <YAxis 
                  type="category" 
                  dataKey="agency" 
                  tick={{ fill: '#666' }}
                  width={150}
                />
                <Tooltip 
                  formatter={(value, name) => {
                    if (name === 'percentageLost') return [`${value}%`, 'Percentage Lost'];
                    return [formatNumber(value), 'Acres Lost'];
                  }}
                />
                <Bar 
                  dataKey="feePatentLosses" 
                  name="Acres Lost via Fee Patent" 
                  fill="#ff8042" 
                  barSize={20}
                />
                <Line
                  dataKey="percentageLost"
                  name="Percentage of Original Land Lost"
                  stroke="#ff0000"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="text-sm text-gray-600 mb-6">
            <p className="italic text-center">
              This chart shows the top 10 agencies/reservations by land lost via fee patents. The bars show acres lost, while the red dots show the percentage of original reservation land lost.
            </p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold mb-2">The Fee Patent Crisis</h4>
            <p className="text-gray-700 mb-3">
              Fee patents were an especially devastating mechanism for Native American land loss during the Allotment Era. The 1887 Dawes Act and subsequent legislation 
              allowed for the conversion of trust allotments to fee simple ownership, removing trust protections and making the land alienable (able to be sold) and taxable.
            </p>
            <p className="text-gray-700 mb-3">
              Over 23 million acres—approximately 57% of all allotted land—was transferred out of Native hands through fee patents by 1934. The Five Civilized Tribes in Oklahoma 
              were particularly hard hit, losing over 14 million acres (73% of their land) through this process.
            </p>
            <p className="text-gray-700">
              The Indian Reorganization Act of 1934 finally put an end to allotment and fee patents, but by then the damage was done. Native land holdings had been reduced from 
              approximately 140 million acres to just 52 million acres—a 63% reduction in less than 50 years.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndianLandLossVisualization;

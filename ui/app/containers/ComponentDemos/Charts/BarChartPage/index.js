/*
  Get more info from:
  https://github.com/recharts/recharts/blob/master/demo/component/BarChart.js
*/

import React from 'react';
import { BarChart, Bar, Brush, Legend, Cell, CartesianGrid,
  Tooltip, ResponsiveContainer, XAxis, YAxis, ReferenceLine,
} from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';
import PageBase from '../../../../components/PageBase';
import { delayLoadingComponentTime } from '../../../../config';

let loadingTimeOut;

class BarChartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    loadingTimeOut = setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, delayLoadingComponentTime); // global delay, it simulates fetch data
  }

  componentWillUnmount() {
    clearTimeout(loadingTimeOut);
  }

  RenderLabel(chartProps) {
    const { x, y, textAnchor, key, value } = chartProps;

    if (x === +x && y === +y) {
      return (
        <text x={x} y={y} dy={-10} textAnchor={textAnchor} key={key}>
          {Object.prototype.toString.call(value) === '[object Array]' ? value[1] : value}
        </text>
      );
    }

    return null;
  }
  render() {
    const styles = {
      chartSize: {
        width: '100%',
        height: '500px',
      },
    };

    const colors = scaleOrdinal(schemeCategory10).range();

    const data01 = [
      { name: 'food', uv: 2000, pv: 2013, amt: 4500, time: 1, uvError: [100, 50], pvError: [110, 20] },
      { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, time: 2, uvError: 120, pvError: 50 },
      { name: 'storage', uv: 3200, pv: 1398, amt: 5000, time: 3, uvError: [120, 80], pvError: [200, 100] },
      { name: 'digital', uv: 2800, pv: 2800, amt: 4000, time: 4, uvError: 100, pvError: 30 },
    ];

    const data02 = [
      { name: '201102', uv: -6.11, pv: 0 },
      { name: '201103', uv: 0.39, pv: 0 },
      { name: '201104', uv: -1.37, pv: 0 },
      { name: '201105', uv: 1.16, pv: 0 },
      { name: '201106', uv: 1.29, pv: 0 },
      { name: '201107', uv: 0.09, pv: 0 },
      { name: '201108', uv: 0.53, pv: 0 },
      { name: '201109', uv: 2.52, pv: 0 },
      { name: '201110', uv: 0.79, pv: 0 },
      { name: '201111', uv: 2.94, pv: 0 },
      { name: '201112', uv: 4.3, pv: 0 },
      { name: '201201', uv: 7.41, pv: 14.21 },
      { name: '201202', uv: -7.1, pv: 13.01 },
      { name: '201203', uv: -1.17, pv: 11.26 },
      { name: '201204', uv: -1.86, pv: 10.7 },
      { name: '201205', uv: -0.16, pv: 9.26 },
      { name: '201206', uv: -1.25, pv: 6.53 },
      { name: '201207', uv: 0.22, pv: 6.66 },
      { name: '201208', uv: 0.72, pv: 6.86 },
      { name: '201209', uv: 1.82, pv: 6.12 },
      { name: '201210', uv: 1.64, pv: 7.02 },
      { name: '201211', uv: 3.16, pv: 7.25 },
      { name: '201212', uv: 1.31, pv: 4.17 },
      { name: '201301', uv: 2.91, pv: -0.19 },
      { name: '201302', uv: -0.47, pv: 6.94 },
      { name: '201303', uv: -4.15, pv: 3.71 },
      { name: '201304', uv: -1.82, pv: 3.76 },
      { name: '201305', uv: -0.93, pv: 2.95 },
      { name: '201306', uv: -0.99, pv: 3.22 },
      { name: '201307', uv: -0.52, pv: 2.46 },
      { name: '201308', uv: 1.54, pv: 3.3 },
      { name: '201309', uv: 2.05, pv: 3.54 },
      { name: '201310', uv: 0.7, pv: 2.58 },
      { name: '201311', uv: 2.25, pv: 1.59 },
      { name: '201312', uv: 3.59, pv: 3.92 },
      { name: '201401', uv: 3.63, pv: 4.64 },
      { name: '201402', uv: -4.91, pv: -0.02 },
      { name: '201403', uv: -2.66, pv: 1.54 },
      { name: '201404', uv: -1.50, pv: 1.86 },
      { name: '201405', uv: -0.19, pv: 2.62 },
      { name: '201406', uv: -0.22, pv: 3.42 },
      { name: '201407', uv: -0.58, pv: 3.35 },
      { name: '201408', uv: 0.89, pv: 2.69 },
      { name: '201409', uv: 2.22, pv: 2.86 },
      { name: '201410', uv: 0.61, pv: 2.77 },
      { name: '201411', uv: 2.37, pv: 2.97 },
      { name: '201412', uv: 3.06, pv: 2.41 },
      { name: '201501', uv: 1.07, pv: -0.13 },
      { name: '201502', uv: 4.04, pv: 9.27 },
      { name: '201503', uv: -5.14, pv: 6.48 },
      { name: '201504', uv: -1.69, pv: 6.28 },
      { name: '201505', uv: 0.51, pv: 7.03 },
      { name: '201506', uv: 1.03, pv: 8.37 },
      { name: '201507', uv: -1.14, pv: 7.76 },
      { name: '201508', uv: 0.53, pv: 7.38 },
      { name: '201509', uv: 1.51, pv: 6.63 },
      { name: '201510', uv: -0.16, pv: 5.81 },
      { name: '201511', uv: 3.27, pv: 6.74 },
    ];

    return (
      <PageBase
        title="BarChart Page"
        navigation="Application / Charts / BarChart Page"
        minHeight={1138}
        loading={this.state.loading}
      >
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <p style={{ marginLeft: 60, fontWeight: 500 }}>Simple PieChart</p>
            <div style={styles.chartSize}>
              <ResponsiveContainer>
                <BarChart
                  barGap={2}
                  barSize={6}
                  data={data02}
                  margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis tickCount={7} />
                  <Bar dataKey="uv" fill="#ff7300" />
                  <Bar dataKey="pv" fill="#387908" />
                  <Tooltip />
                  <CartesianGrid />
                  <Brush
                    dataKey="name"
                    height={30}
                  />
                  <ReferenceLine
                    type="horizontal"
                    value={0}
                    stroke="#666"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <p style={{ marginLeft: 60, fontWeight: 500 }}>PieChart donut</p>
            <div style={styles.chartSize}>
              <ResponsiveContainer>
                <BarChart
                  data={data01}
                >
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="a" />
                  <YAxis yAxisId="b" orientation="right" />
                  <Legend />
                  <Tooltip />
                  <CartesianGrid vertical={false} />
                  <Bar
                    yAxisId="a"
                    dataKey="uv"
                    label={this.RenderLabel}
                  >
                    {
                      data01.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[index % 20]}
                        />
                      ))
                    }
                  </Bar>
                  <Bar yAxisId="b" dataKey="pv" label>
                    {
                      data01.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[index % 20]}
                        />
                      ))
                    }
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <p style={{ marginLeft: 60, fontWeight: 500 }}>PieChart with two donut</p>
            <div style={styles.chartSize}>
              <ResponsiveContainer>
                <BarChart
                  data={data01}
                  layout="vertical"
                  maxBarSize={10}
                >
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <CartesianGrid horizontal={false} />
                  <Bar
                    dataKey="uv"
                    fill="#ff7300"
                    maxBarSize={15}
                    isAnimationActive={false}
                  />
                  <Bar
                    dataKey="pv"
                    fill="#387908"
                  />
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <p style={{ marginLeft: 60, fontWeight: 500 }}>PieChart with active shape on click</p>
            <div style={styles.chartSize}>
              <ResponsiveContainer>
                <BarChart data={data01}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <CartesianGrid vertical={false} />
                  <Bar
                    stackId="0"
                    dataKey="uv"
                    fill="#ff7300"
                    label={this.RenderLabel}
                  />
                  <Bar
                    stackId="0"
                    dataKey="pv"
                    fill="#387908"
                  />
                  <Bar
                    dataKey="amt"
                    fill="#387908"
                    label={this.RenderLabel}
                  />
                  <Legend layout="vertical" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </PageBase>
    );
  }
}

export default BarChartPage;

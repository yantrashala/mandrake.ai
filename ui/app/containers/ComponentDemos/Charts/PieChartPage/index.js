/*
  Get more info from:
  https://github.com/recharts/recharts/blob/master/demo/component/PieChart.js
*/

import React from 'react';
import { PieChart, Legend, Pie, Cell,
  Tooltip, ResponsiveContainer, Sector,
} from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';
import PageBase from '../../../../components/PageBase';
import { delayLoadingComponentTime } from '../../../../config';

let loadingTimeOut;

class PieChartPage extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      loading: true,
    };

    this.onPieEnter = this.onPieEnter.bind(this);
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

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
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
      { name: 'Group A', value: 400, v: 89 },
      { name: 'Group B', value: 300, v: 100 },
      { name: 'Group C', value: null, v: 200 },
      { name: 'Group D', value: 200, v: 20 },
      { name: 'Group E', value: 278, v: 40 },
      { name: 'Group F', value: 189, v: 60 },
    ];

    const data02 = [
      { name: 'Group A', value: 2400 },
      { name: 'Group B', value: 4567 },
      { name: 'Group C', value: 1398 },
      { name: 'Group D', value: 9800 },
      { name: 'Group E', value: 3908 },
      { name: 'Group F', value: 4800 },
    ];

    const renderLabelContent = (propsLabelContent) => {
      const { value, percent, x, y, midAngle } = propsLabelContent;

      return (
        <g transform={`translate(${x}, ${y})`} textAnchor={(midAngle < -90 || midAngle >= 90) ? 'end' : 'start'}>
          <text x={0} y={0}>{`Count: ${value}`}</text>
          <text x={0} y={20}>{`(Percent: ${(percent * 100).toFixed(2)}%)`}</text>
        </g>
      );
    };

    const renderActiveShape = (propsActiveShape) => {
      const RADIAN = Math.PI / 180;
      const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent } = propsActiveShape;
      const sin = Math.sin(-RADIAN * midAngle);
      const cos = Math.cos(-RADIAN * midAngle);
      const sx = cx + ((outerRadius + 10) * cos);
      const sy = cy + ((outerRadius + 10) * sin);
      const mx = cx + ((outerRadius + 30) * cos);
      const my = cy + ((outerRadius + 30) * sin);
      const ex = mx + ((cos >= 0 ? 1 : -1) * 22);
      const ey = my;
      const textAnchor = cos >= 0 ? 'start' : 'end';

      return (
        <g>
          <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
          <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
          />
          <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 6}
            outerRadius={outerRadius + 10}
            fill={fill}
          />
          <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
          <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
          <text x={ex + ((cos >= 0 ? 1 : -1) * 12)} y={ey} textAnchor={textAnchor} fill="#333">
            {`Count ${payload.value}`}
          </text>
          <text x={ex + ((cos >= 0 ? 1 : -1) * 12)} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
            {`(percent: ${(percent * 100).toFixed(2)}%)`}
          </text>
        </g>
      );
    };

    return (
      <PageBase
        title="PieChart Page"
        navigation="Application / Charts / PieChart Page"
        minHeight={1138}
        loading={this.state.loading}
      >
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <p style={{ marginLeft: 60, fontWeight: 500 }}>Simple PieChart</p>
            <div style={styles.chartSize}>
              <ResponsiveContainer>
                <PieChart>
                  <Legend />
                  <Pie
                    startAngle={180}
                    endAngle={0}
                    outerRadius={120}
                    label
                  >
                    {
                      data01.map((entry, index) => (
                        <Cell
                          key={`slice-${index}`}
                          name={entry.name}
                          value={entry.value}
                          fill={colors[index % 10]}
                        />
                      ))
                    }
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <p style={{ marginLeft: 60, fontWeight: 500 }}>PieChart donut</p>
            <div style={styles.chartSize}>
              <ResponsiveContainer>
                <PieChart>
                  <Legend />
                  <Pie
                    startAngle={180}
                    endAngle={-180}
                    innerRadius={60}
                    outerRadius={120}
                    label={renderLabelContent}
                  >
                    {
                      data02.map((entry, index) => (
                        <Cell
                          key={`slice-${index}`}
                          name={entry.name}
                          value={entry.value}
                          fill={colors[index % 10]}
                        />
                      ))
                    }
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <p style={{ marginLeft: 60, fontWeight: 500 }}>PieChart with two donut</p>
            <div style={styles.chartSize}>
              <ResponsiveContainer>
                <PieChart>
                  <Tooltip />
                  <Pie
                    data={data01}
                    innerRadius="25%"
                    outerRadius="40%"
                  >
                    {
                      data01.map((entry, index) => (
                        <Cell
                          key={`slice-${index}`}
                          name={entry.name}
                          value={entry.value}
                          fill={colors[index % 10]}
                        />
                      ))
                    }
                  </Pie>
                  <Pie
                    data={data01}
                    nameKey="name"
                    valueKey="v"
                    innerRadius="45%"
                    outerRadius="80%"
                  >
                    {
                      data01.map((entry, index) => (
                        <Cell
                          key={`slice-${index}`}
                          name={entry.name}
                          value={entry.value}
                          fill={colors[index % 10]}
                        />
                      ))
                    }
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <p style={{ marginLeft: 60, fontWeight: 500 }}>PieChart with active shape on click</p>
            <div style={styles.chartSize}>
              <ResponsiveContainer>
                <PieChart onClick={this.onPieEnter}>
                  <Pie
                    data={data01}
                    innerRadius="25%"
                    outerRadius="40%"
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                  >
                    {
                      data01.map((entry, index) => (
                        <Cell
                          key={`slice-${index}`}
                          name={entry.name}
                          value={entry.value}
                          fill={colors[index % 10]}
                        />
                      ))
                    }
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </PageBase>
    );
  }
}

export default PieChartPage;

/*
  Get more info from:
  https://github.com/recharts/recharts/blob/master/demo/component/LineChart.js
*/

import React from 'react';
import { LineChart, Line, XAxis, YAxis,
  Tooltip, CartesianGrid, ResponsiveContainer,
} from 'recharts';
import PageBase from '../../../../components/PageBase';
import { delayLoadingComponentTime } from '../../../../config';

let loadingTimeOut;

class LineChartPage extends React.Component {
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

  render() {
    const styles = {
      chartSize: {
        width: '100%',
        height: '500px',
      },
    };

    const data01 = [
      { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
      { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
      { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
      { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
      { name: 'Page E', uv: 278, pv: 3908, amt: 2400, uvError: 28 },
      { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
      { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
      { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
      { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
      { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
    ];

    const data02 = [
      { day: '05-01', weather: 'sunny' },
      { day: '05-02', weather: 'sunny' },
      { day: '05-03', weather: 'cloudy' },
      { day: '05-04', weather: 'rain' },
      { day: '05-05', weather: 'rain' },
      { day: '05-06', weather: 'cloudy' },
      { day: '05-07', weather: 'cloudy' },
      { day: '05-08', weather: 'sunny' },
      { day: '05-09', weather: 'sunny' },
    ];

    return (
      <PageBase
        title="LineChart Page"
        navigation="Application / Charts / LineChart Page"
        minHeight={1138}
        loading={this.state.loading}
      >
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <p style={{ marginLeft: 60, fontWeight: 500 }}>LineChart with three y-axes</p>
            <div style={styles.chartSize}>
              <ResponsiveContainer>
                <LineChart
                  width={600}
                  height={400} data={data01}
                >
                  <YAxis type={'number'} yAxisId={0} ticks={[0, 250]} />
                  <YAxis type={'number'} orientation={'right'} yAxisId={1} />
                  <YAxis type={'number'} orientation={'right'} yAxisId={2} />
                  <XAxis dataKey={'name'} />
                  <Tooltip position={{ y: 200 }} />
                  <CartesianGrid stroke={'#f5f5f5'} />
                  <Line dataKey={'uv'} stroke={'#ff7300'} strokeWidth={2} yAxisId={0} />
                  <Line dataKey={'pv'} stroke={'#387908'} strokeWidth={2} yAxisId={1} />
                  <Line dataKey={'amt'} stroke={'#38abc8'} strokeWidth={2} yAxisId={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <p style={{ marginLeft: 25, fontWeight: 500 }}>LineChart of vertical layout</p>
            <div style={styles.chartSize}>
              <ResponsiveContainer>
                <LineChart
                  width={400} height={400} data={data01} layout={'vertical'}
                  margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                >
                  <YAxis type={'category'} dataKey={'name'} />
                  <XAxis type={'number'} xAxisId={0} orientation={'top'} />
                  <XAxis type={'number'} xAxisId={1} orientation={'bottom'} />
                  <Tooltip position={{ y: 200 }} />
                  <CartesianGrid stroke={'#f5f5f5'} />
                  <Line dataKey={'uv'} type="monotone" stroke={'#ff7300'} strokeWidth={2} xAxisId={0} />
                  <Line dataKey={'pv'} type="monotone" stroke={'#387908'} strokeWidth={2} xAxisId={1} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <p style={{ marginLeft: 60, fontWeight: 500 }}>LineChart of discrete values</p>
            <div style={styles.chartSize}>
              <ResponsiveContainer>
                <LineChart
                  width={400} height={400} data={data02}
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <XAxis dataKey="day" />
                  <YAxis type="category" />
                  <Tooltip />
                  <Line type="stepAfter" dataKey="weather" stroke="#ff7300" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <p style={{ marginLeft: 25, fontWeight: 500 }}>LineChart with two y-axes</p>
            <div style={styles.chartSize}>
              <ResponsiveContainer>
                <LineChart
                  width={400}
                  height={400}
                  data={data01}
                  margin={{ top: 10, bottom: 10, left: 30, right: 30 }}
                  onClick={this.handleClick}
                >
                  <XAxis dataKey={'name'} interval="preserveStartEnd" />
                  <Tooltip />
                  <CartesianGrid stroke={'#f5f5f5'} />
                  <Line type={'monotone'} dataKey={'uv'} stroke={'#ff7300'} yAxisId={0} activeDot={{ fill: '#ff7300', stroke: 'none' }} />
                  <Line type={'monotone'} dataKey={'pv'} stroke={'#387908'} yAxisId={1} activeDot={{ fill: '#387908', stroke: 'none', r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </PageBase>
    );
  }
}

export default LineChartPage;

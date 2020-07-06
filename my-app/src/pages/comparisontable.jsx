import React from 'react';

class ComparisonTable extends React.Component {
    invisibleDefault(data) {
        if (data === '') {
            return '';
        } else {
            return '$' + data;
        }
    }
    render() {
        return(
            <div>
              <h1 id="heading"> Chart Data </h1>
              <div className="comparisonRow">
                  <div className="comparisonLeft">{this.invisibleDefault(this.props.firstCity.all_time_average)}</div>
                  <div className="comparisonCentre">All Time Average</div>
                  <div className="comparisonRight">{this.invisibleDefault(this.props.secondCity.all_time_average)}</div>
              </div>
              <hr className = "chartDataLine" />
              <div className="comparisonRow">
                  <div className="comparisonLeft">{this.invisibleDefault(this.props.firstCity.all_time_high)}</div>
                  <div className="comparisonCentre">All Time High</div>
                  <div className="comparisonRight">{this.invisibleDefault(this.props.secondCity.all_time_high)}</div>
              </div>
              <hr className = "chartDataLine" />
              <div className="comparisonRow">
                  <div className="comparisonLeft">{this.invisibleDefault(this.props.firstCity.all_time_low)}</div>
                  <div className="comparisonCentre">All Time Low</div>
                  <div className="comparisonRight">{this.invisibleDefault(this.props.secondCity.all_time_low)}</div>
              </div>
              <hr className = "chartDataLine" />
              <div> All Time Price Range: ${ this.props.firstCity.all_time_low } - ${ this.props.firstCity.all_time_high } </div><hr className = "chartDataLine" />
              <div> This Month's Average: ${ this.props.firstCity.monthly_average }</div><hr className = "chartDataLine" />
              <div> This Month's High: ${ this.props.firstCity.monthly_high }</div><hr className = "chartDataLine" />
              <div> This Month's Low: ${ this.props.firstCity.monthly_low }</div><hr className = "chartDataLine" />
              <div> This Month's Price Range: ${ this.props.firstCity.monthly_low } - ${ this.props.firstCity.monthly_high }</div>
            </div>
        );
    }
}

export default ComparisonTable;
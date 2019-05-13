import React, { Component } from 'react'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

const groups = [{ id: 1, title: 'Duarte' }, { id: 2, title: 'Rafa' }, { id: 3, title: 'Di' }, { id: 4, title: 'Marinho' }, { id: 5, title: 'Bau' }]
const minTime = moment().add(0, 'hours').valueOf()
const maxTime = moment().add(10, 'days').valueOf()
const items = [
  {
    id: 1,
    group: 1,
    title: 'staff 1',
    // stackItems: true,
    // height: 30,
    canChangeGroup: true,
    canMove: true,
    style: {
      backgroundColor: 'black'
    },
    // sidebarWidth: 200,
    traditionalZoom: true,
    color: 'rgb(158, 14, 6) !important',
    selectedBgColor: 'rgba(225, 166, 244, 1)',
    bgColor : 'rgba(225, 166, 244, 0.6)',
    // itemTouchSendsClick: true,
    start_time: moment().add(0, 'hour'),    
    end_time: moment().add(1, 'hour'),
    timeSteps: {
      minute: 30,
      // hour: 1,
    }
  },
  {
    id: 2,
    group: 2,
    title: 'staff 2',
    canChangeGroup: true,
    start_time: moment().add(-1.21, 'hour'),    
    end_time: moment().add(-0.27, 'hour')
    },
  {
    id: 3,
    group: 3,
    title: 'staff 3',
    canChangeGroup: true,
    start_time: moment().add(-1.21, 'hour'),    
    end_time: moment().add(-0.27, 'hour')
    },
  {
    id: 4,
    group: 4,
    title: 'staff 4',
    canChangeGroup: true,
    start_time: moment().add(-1.21, 'hour'),    
    end_time: moment().add(-0.27, 'hour')
    },
  {
    id: 5,
    group: 5,
    title: 'staff 5',
    canChangeGroup: true,
    start_time: moment().add(-1.21, 'hour'),    
    end_time: moment().add(-0.27, 'hour')
    },
]

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dates: new Date(),
    }
  }

  function (visibleTimeStart, visibleTimeEnd, updateScroll) {
    if (visibleTimeStart < minTime && visibleTimeEnd > maxTime) {
      updateScroll(minTime, maxTime)
    } else if (visibleTimeStart < minTime) {
      updateScroll(minTime, minTime + (visibleTimeEnd - visibleTimeStart))
    } else if (visibleTimeEnd > maxTime) {
      updateScroll(maxTime - (visibleTimeEnd - visibleTimeStart), maxTime)
    } else {
      updateScroll(visibleTimeStart, visibleTimeEnd)
    }
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="App">
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={moment().add(-1, 'hour')}
          defaultTimeEnd={moment().add(6, 'hour')}
        />
      </div>
    );
  }
}
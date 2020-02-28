// import React, { Component } from "react";
// import Calendar from 'react_google_calendar'
// import {momentLocalizer } from 'react-big-calendar'

// import moment from 'moment'

// const localizer = momentLocalizer(moment)

// const calendar_configuration = {
//     api_key: "984750752217-p2ivs93i5jmro8dbrclji8vsuhpb1u8h.apps.googleusercontent.com",
//     calendars: [
//       {
//         name: 'demo',
//         url: 'exampleURL@group.calendar.google.com'
//       }
//     ],
//     dailyRecurrence: 700,
//     weeklyRecurrence: 500,
//     monthlyRecurrence: 20
// }

// export default class CalendarP extends Component {
//     constructor(props) {
//       super(props)
//         this.state = {
//           events: []
//         }
//     }

//     render = () =>
//       <div>
//         <Calendar
//           events={this.state.events}
//           localizer={localizer}
//           config={calendar_configuration} />
//       </div>
// }
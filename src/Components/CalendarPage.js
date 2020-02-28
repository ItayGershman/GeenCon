import React, { Component } from "react";
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

export default class CalendarPage extends Component {
    constructor(props) {
        super(props);
        this.preventSet = false;
        this.state = {
            myEvents: []
        };
        
        mobiscroll.util.getJson('https://trial.mobiscroll.com/events/', (events) => {
            this.setState({ myEvents: events });
        }, 'jsonp');
    }
    
    onPageChange = (event, inst) => {
        this.preventSet = true;
        this.navigate(this.refs.monthCal.instance, event.firstDay);
    }
    
    onSetDate = (event, inst) => {
         if (!this.preventSet && this.refs.dayCal != undefined) {
             console.log(this.refs.dayCal);
            this.navigate(this.refs.dayCal.instance, event.date);
         }
        this.preventSet = false;
    }
    
    navigate = (inst, val) => {
        if (inst) {
            inst.navigate(val);
        }
    }

    render () {
        return (
            <div className="mbsc-grid md-demo-synchronized-views">
                <div className="mbsc-row mbsc-no-padding">
                    {/* <div className="mbsc-col-md-4 mbsc-col-12">
                        <mobiscroll.Eventcalendar
                            theme="ios" 
                            themeVariant="light"
                            ref="monthCal"
                            display="inline"
                            view={{
                                calendar: { type: 'month' }
                            }}
                            data={this.state.myEvents}
                            onSetDate={this.onSetDate}
                        />
                    </div> */}
                    <div className="mbsc-col-md-8 mbsc-col-12 md-col-right">
                        <mobiscroll.Eventcalendar
                            theme="ios" 
                            themeVariant="light"
                            ref="dayCal"
                            display="inline"
                            view={{
                                eventList: { type: 'day' }
                            }}
                            data={this.state.myEvents}
                            onPageChange={this.onPageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }    
}
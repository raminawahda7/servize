import React from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel, ResourcesDirective, ResourceDirective, GroupModel, DragAndDrop, Resize, TimelineViews } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

// import { render } from '@testing-library/react';
// import './Schedule.css';
// import { Data } from '@syncfusion/ej2-react-grids';


function Schedule() {
    // public render() {

    const localData = {
        dataSource: [{
            // Id: Number,
            // Subject: String,
            EndTime: new Date(2019, 0, 11, 6, 30),
            StartTime: new Date(2019, 0, 11, 4, 0),
            // ResourceID: Number
        }]
    };

    // const groupData = {
    //     resources: ['Resources']
    // };
    // const remoteData = new DataManager({
    //     url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    //     adaptor: new WebApiAdaptor,
    //     crossDomain: true
    // });

    return (
        <ScheduleComponent height='550px' currentView='Month' selectedDate={new Date(2019, 0, 11)} eventSettings={localData} >
            {/* <ResourcesDirective>
                <ResourceDirective field='ResourceID' title='ResourceName' name="Resources">

                </ResourceDirective>
            </ResourcesDirective> */}
            <Inject services={[Day, Week, Month, DragAndDrop, Resize, TimelineViews]} />
            {/* <style lang="scss">
                @import "ej2-vue-buttons/styles/material.scss";
</style> */}
        </ScheduleComponent>
    )
}

export default Schedule;

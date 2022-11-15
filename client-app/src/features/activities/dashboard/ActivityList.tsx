import { observer } from "mobx-react-lite";
import { Fragment } from "react";
import { Header } from "semantic-ui-react";
import { useStore } from "../../../stores/store";
import ActivitiyListItem from "./ActivityListItem";


export default observer(function ActivityList() {

  
    const {activityStore} = useStore();
    const {groupedActivities } = activityStore;


  return (
    <>
      {groupedActivities.map(([group,activities])=> (
        <Fragment key={group}>
          <Header sub color='teal'>
            {group}
          </Header>

        {activities.map((activity) => (
            <ActivitiyListItem key={activity.id} activity={activity} />
        ))}
 
        </Fragment>
      ))}
    </>
  );
})

import React, { Fragment, useContext, useEffect } from "react";
import GoalItem from "./GoalItem";
import Spinner from "../layout/Spinner";
import GoalContext from "../../context/goal/goalContext";

const Goals = () => {
  const goalContext = useContext(GoalContext);

  const {
    goals,
    
    getGoals,
    
    loading
  } = goalContext;

  useEffect(() => {
    (async function() {
      await getGoals();
      
    })();
    
  }, []);

  if (goals !== null && goals.length === 0 && !loading) {
    return <h4>No goals found</h4>;
  }

  return (
    <Fragment>
      {goals !== null && !loading ? (
        <table>
          <colgroup>
            <col style={{ width: "15%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "25%" }} className='hide-sm' />
            <col style={{ width: "11%" }} />
            <col style={{ width: "14%" }} />
          </colgroup>

          <thead>
            <tr>
              
              <th className='hide-sm'>Goal Description:</th>
              <th>Edit Goal:</th>
              <th>Delete Goal:</th>
            </tr>
          </thead>
          <tbody>
            { goals.map(goal => (
                  <GoalItem key={goal._id} goal={goal} />
                ))}
          </tbody>
        </table>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Goals;

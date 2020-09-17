//Shows spending by category, lets the user look historically TODO: discuss if this should be represented against a budget
import Loading from '../../common/LoadingComponent';
import React, { useState, useEffect } from 'react';
import CategorizedPlot from './CategorizedPlot';
import DateForm from '../../common/DateForm';
import axios from 'axios';

const CategorizedPlotWrapper = props => {
  const [cData, setCData] = useState();
  const setChosenMonth = m => {
    setCData(prev => {
      return prev.map(cm => {
        if (cm.name === m) {
          cm.visible = true;
        } else {
          cm.visible = false;
        }
        return cm;
      });
    });
  };
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/categories/graph')
      .then(response => {
        setCData(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {cData ? (
        <>
          <CategorizedPlot className="cat-plot" data={cData} />
          {props.showDate ? (
            <DateForm
              allMonths={cData.map(m => m.name)}
              setChosenMonth={setChosenMonth}
            />
          ) : null}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CategorizedPlotWrapper;

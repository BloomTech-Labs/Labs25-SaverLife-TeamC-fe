//Shows spending by category, lets the user look historically TODO: discuss if this should be represented against a budget
import Loading from '../../common/LoadingComponent';
import React, { useState, useEffect } from 'react';
import CategorizedPlot from './CategorizedPlot';
import DateForm from '../../common/DateForm';
import axios from 'axios';

const CategorizedPlotWrapper = props => {
  const { height, width } = props;
  const [cData, setCData] = useState();
  const getCurrentMonth = () => {
    for (const d of cData) {
      if (d.visible === true) {
        return d.name;
      }
    }
    return '';
  };
  const setChosenMonth = m => {
    console.log(m);
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
    console.log(cData);
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
          <CategorizedPlot
            className="cat-plot"
            data={cData}
            height={height}
            width={width}
          />
          {props.showDate ? (
            <DateForm
              allMonths={cData.map(m => m.name)}
              setChosenMonth={setChosenMonth}
              currentMonth={getCurrentMonth()}
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

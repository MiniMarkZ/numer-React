import React from "react";

const Mytable = (props) => {

  const propsname = Object.keys(props);
  const dataArray = Object.values(props);

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">{propsname[0]}</th>
            <th scope="col">{propsname[1]}</th>
            <th scope="col">{propsname[2]}</th>
            <th scope="col">{propsname[3]}</th>
            <th scope="col">{propsname[4]}</th>
          </tr>
        </thead>
        <tbody>
          {dataArray[0].map((x, index) => {
            return (
              <tr key={index}>
                <th scope="row">{dataArray[0][index]}</th>
                <td>{dataArray[1][index]}</td>
                <td>{dataArray[2][index]}</td>
                <td>{dataArray[3][index]}</td>
                <td>{dataArray[4][index]} %</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <style>{`
        tbody td {
          text-align: left;
        }
      `}</style>
    </div>
  );
};

export default Mytable;

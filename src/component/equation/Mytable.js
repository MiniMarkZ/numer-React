import React from "react";

const Mytable = (props) => {

  const propsname = Object.keys(props);
  const dataArray = Object.values(props);
  console.log("sasd",propsname[5])

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            {propsname[0] &&<th scope="col">{propsname[0]}</th>}
            {propsname[1] &&<th scope="col">{propsname[1]}</th>}
            {propsname[2] &&<th scope="col">{propsname[2]}</th>}
            {propsname[3] &&<th scope="col">{propsname[3]}</th>}
            {propsname[4] &&<th scope="col">{propsname[4]}</th>}
            {propsname[5] &&<th scope="col">{propsname[5]}</th>}
          </tr>
        </thead>
        <tbody>
          {dataArray[0].map((x, index) => {
            return (
              <tr key={index}>
                {dataArray[0] &&<th scope="row">{dataArray[0][index]}</th>}
                {dataArray[1] &&<td>{dataArray[1][index].toFixed(5)}</td>}
                {dataArray[2] &&<td>{dataArray[2][index].toFixed(5)}</td>}
                {dataArray[3] &&<td>{dataArray[3][index].toFixed(5)}</td>}
                {dataArray[4] &&<td>{dataArray[4][index].toFixed(5)}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Mytable;

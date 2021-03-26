import React, {useMemo} from 'react'
import {useTable, useBlockLayout} from "react-table"
import {use, useSticky} from "react-table-sticky"


const Table = ({data, columns}) => {

    //   const data = useMemo(() => game, [game])
    //   const columns = useMemo(() =>  cols, [])
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      footerGroups,
      rows,
      prepareRow
    } = useTable({
      columns,
      data,
    }, useBlockLayout, useSticky);
  
    return (
      <div {...getTableProps()} className="table sticky" style={{ width: 1000, height: 500 }}>
      <div className="header">
        {headerGroups.map((headerGroup) => (
          <div {...headerGroup.getHeaderGroupProps()} className="tr">
            {headerGroup.headers.map((column) => (
              <div {...column.getHeaderProps()} className="th">
                {column.render('Header')}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div {...getTableBodyProps()} className="body">
        {rows.map((row) => {
          prepareRow(row);
          return (
            <div {...row.getRowProps()} className="tr">
              {row.cells.map((cell) => (
                <div {...cell.getCellProps()} className="td">
                  {cell.render('Cell')}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="footer">
        {footerGroups.map((footerGroup) => (
          <div {...footerGroup.getHeaderGroupProps()} className="tr">
            {footerGroup.headers.map((column) => (
              <div {...column.getHeaderProps()} className="td">
                {column.render('Footer')}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    )
}
export default Table





// const Table = ({data, columns}) => {

//   //   const data = useMemo(() => game, [game])
//   //   const columns = useMemo(() =>  cols, [])

//     const tableInstance = useTable({ columns, data }, useBlockLayout, useSticky)

//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       rows,
//       prepareRow,
//     } = tableInstance

//     const footerGroups = headerGroups.slice().reverse();
//   return (
//       <table className="table-auto table sticky" cellPadding={4} cellSpacing={2} {...getTableProps()}>
//    <thead className="header">
//      {
//      headerGroups.map(headerGroup => (
//        <tr className="tr"{...headerGroup.getHeaderGroupProps()}>
//          {
//          headerGroup.headers.map(column => (
//            <th className="text-lg bg-gray-800 px-4 th" {...column.getHeaderProps()}>
//              {
//              column.render('Header')}
//            </th>
//          ))}
//        </tr>
//      ))}
//    </thead>
//    <tbody className="body" {...getTableBodyProps()}>
//      {
//      rows.map(row => {
 
//        prepareRow(row)
//        return (
   
//          <tr className={`cells tr`} {...row.getRowProps()}>
//            {
//            row.cells.map(cell => {
      
//              return (
//                <td className="td" {...cell.getCellProps()}>
//                  {cell.render('Cell')}
//                </td>
//              )
//            })}
//          </tr>
//        )
//      })}
//    </tbody>
//  </table>
//   )
// }
// export default Table
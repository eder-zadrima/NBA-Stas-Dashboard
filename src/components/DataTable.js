import React from "react"
import {useTable, useBlockLayout} from "react-table"

const DataTable = ({data, columns}) => {

  const tableInstance = useTable({ columns, data }, useBlockLayout)

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = tableInstance
  return (
      <table className="table-auto table sticky" cellPadding={4} cellSpacing={2} {...getTableProps()}>
   <thead className="header">
     {
     headerGroups.map(headerGroup => (
       <tr className="tr"{...headerGroup.getHeaderGroupProps()}>
         {
         headerGroup.headers.map(column => (
           <th className="text-lg bg-gray-800 px-4 th" {...column.getHeaderProps()}>
             {
             column.render('Header')}
           </th>
         ))}
       </tr>
     ))}
   </thead>
   <tbody className="body" {...getTableBodyProps()}>
     {
     rows.map(row => {
 
       prepareRow(row)
       return (
   
         <tr className={`cells tr`} {...row.getRowProps()}>
           {
           row.cells.map(cell => {
      
             return (
               <td className="td" {...cell.getCellProps()}>
                 {cell.render('Cell')}
               </td>
             )
           })}
         </tr>
       )
     })}
   </tbody>
 </table>
  )
}
export default DataTable
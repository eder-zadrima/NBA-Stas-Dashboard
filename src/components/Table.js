import React, {useMemo} from 'react'
import {useTable} from "react-table"
import {columns} from "../data/columns"
const Table = ({data}) => {
 


      const tData = useMemo(() => data, [])
      const tCols = useMemo(() =>  columns, [])

    const tableInstance = useTable({columns: tCols, data:tData})
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance
 
    return (
        <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) =>(
                <tr className="cells"{...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map( column => (
                              <th{...column.getHeaderGroupProps()}>{column.render("Header")}</th>
                    ))}
                  
                </tr>
            ))}
            
        </thead>
        <tbody {...getTableBodyProps()}>
            <tr></tr>
        </tbody>
            {rows.map((row) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return <td{...cell.getCellProps()}>{cell.render("Cell")}</td>
                })}
                    </tr>
                )
                })}
        </table>
    )
}
export default Table

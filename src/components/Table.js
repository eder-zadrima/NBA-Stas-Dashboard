import React, {memo} from 'react'
import {useTable, useBlockLayout} from "react-table"
import {useSticky} from "react-table-sticky"


const Table = memo(({data, columns}) => {
 console.log(`rendered: table`)
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
      <div {...getTableProps()} className="table sticky">
      <div className="header">
        {headerGroups.map((headerGroup) => (
          <div {...headerGroup.getHeaderGroupProps()} className="tr text-white bg-gray-800">
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
            <div {...row.getRowProps()} className="tr cells">
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
})
export default Table


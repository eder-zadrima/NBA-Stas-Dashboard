import React from 'react'

const DataTable = ({data}) => {
      if (!data) {
        return <pre>Loading...</pre>;
      }
    const columns = data[0] && Object.keys(data[0])
    return (
        <table className="table-auto" cellPadding={1} cellSpacing={1}>
        <thead>
            <tr>{columns.map((heading) => <th className="text-lg bg-white">{heading}</th>)}</tr>
        </thead>
        <tbody>
            {data.map(row => (
                <tr className={`cells`}>
                    {columns.map((column, i) => (
                        <td >{row[column]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
            
        </table>
    )
}

export default DataTable

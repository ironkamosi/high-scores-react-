
const TableBody = ({ scores }) => {
  return(
  <table class="table table-hover table-dark">
      <tbody>
        {scores.map((scoreData) => {
          return (
            <tr>
              <td>
                {scoreData.n} {scoreData.s}
              </td>
            </tr>
          );
        })}
    </tbody>
    </table>
  )
}

export default TableBody;
        {/* <th scope="row"></th> */}

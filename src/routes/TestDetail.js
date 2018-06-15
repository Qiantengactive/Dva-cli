import React from 'react'
import { connect } from 'dva'
import TestDetail from '../components/TestDetail'

// export default connect(state => state)(() => <TestDetail />);
export default connect(state => state)(
  ({ testDetailModel: tableData, dispatch }) => (
    <TestDetail tableData={tableData} dispatch={dispatch} />
  )
)

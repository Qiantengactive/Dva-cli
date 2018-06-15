import React from 'react'
import * as styles from './TestDetail.less'
import { Button, Table, Modal, Input, Icon, Row, Col } from 'antd'
const { Column } = Table

const TestDetail = ({ tableData, dispatch }) => {
  return (
    <div className={styles['TestDetail']}>
      <Button
        className={styles['TestDetailBtn']}
        onClick={() => {
          dispatch({
            type: 'testDetailModel/setState',
            payload: {
              visible: true,
              businessType: '',
              businessID: '',
              cost: '',
              description: '元/分钟',
              detail: '',
              key: ''
            }
          })
        }}
      >
        新增
      </Button>
      <Table
        className={styles['table-wrapper']}
        bordered
        dataSource={tableData.dataSource}
      >
        <Column title="业务类型" dataIndex="businessType" key="businessType" />
        <Column title="业务编码" dataIndex="businessID" key="businessID" />
        <Column title="费率" dataIndex="cost" key="cost" />
        <Column title="费率描述" dataIndex="description" key="description" />
        <Column title="通话详单" dataIndex="detail" key="detail" />
        <Column
          title="操作"
          dataIndex="operate"
          key="operate"
          render={(text, record) => (
            <span className={styles['tableIconColor']}>
              <Icon
                className={styles['tableIconColorFirst']}
                type="edit"
                onClick={() => {
                  dispatch({
                    type: 'testDetailModel/setState',
                    payload: {
                      key: record.key,
                      fixVisible: true,
                      businessType: record.businessType,
                      businessID: record.businessID,
                      cost: record.cost,
                      description: record.description,
                      detail: record.detail
                    }
                  })
                }}
              />
              <Icon
                type="delete"
                onClick={() => {
                  dispatch({
                    type: 'testDetailModel/delete',
                    payload: { key: record.key }
                  })
                }}
              />
            </span>
          )}
        />
      </Table>
      {/* 弹窗 */}
      <Modal
        className={styles['addModal']}
        title="新增"
        visible={tableData.visible}
        onOk={() => {
          dispatch({
            type: 'testDetailModel/addTableInfo'
          })
        }}
        onCancel={() =>
          dispatch({
            type: 'testDetailModel/setState',
            payload: { visible: false }
          })
        }
      >
        <p>
          业务类型:<Input
            value={tableData.businessType}
            placeholder="业务类型"
            onChange={e => {
              dispatch({
                type: 'testDetailModel/setState',
                payload: { businessType: e.target.value }
              })
            }}
          />
        </p>
        <p>
          业务编码:<Input
            value={tableData.businessID}
            placeholder="业务编码"
            onChange={e => {
              dispatch({
                type: 'testDetailModel/setState',
                payload: { businessID: e.target.value }
              })
            }}
          />
        </p>
        <p>
          计费类型：<Input
            value={tableData.detail}
            placeholder="计费类型"
            onChange={e => {
              dispatch({
                type: 'testDetailModel/setState',
                payload: { detail: e.target.value }
              })
            }}
          />
        </p>
        <Row>
          <Col span={18}>
            费率：<Input
              value={tableData.cost}
              placeholder="费率"
              onChange={e => {
                dispatch({
                  type: 'testDetailModel/setState',
                  payload: { cost: e.target.value }
                })
              }}
            />
          </Col>
          <Col span={6}>
            <Input
              value={tableData.description}
              placeholder="费率"
              onChange={e => {
                dispatch({
                  type: 'testDetailModel/setState',
                  payload: { description: e.target.value }
                })
              }}
            />
          </Col>
        </Row>
      </Modal>
      {/* 修改信息 */}
      <Modal
        title="修改"
        visible={tableData.fixVisible}
        onOk={() => {
          dispatch({
            type: 'testDetailModel/fixTableInfo'
          })
        }}
        onCancel={() =>
          dispatch({
            type: 'testDetailModel/setState',
            payload: { fixVisible: false }
          })
        }
      >
        <p>
          业务类型:<Input
            value={tableData.businessType}
            placeholder="业务类型"
            onChange={e => {
              dispatch({
                type: 'testDetailModel/setState',
                payload: { businessType: e.target.value }
              })
            }}
          />
        </p>
        <p>
          业务编码:<Input
            value={tableData.businessID}
            placeholder="业务编码"
            onChange={e => {
              dispatch({
                type: 'testDetailModel/setState',
                payload: { businessID: e.target.value }
              })
            }}
          />
        </p>
        <p>
          计费类型：<Input
            value={tableData.detail}
            placeholder="计费类型"
            onChange={e => {
              dispatch({
                type: 'testDetailModel/setState',
                payload: { detail: e.target.value }
              })
            }}
          />
        </p>
        <Row>
          <Col span={18}>
            费率：<Input
              value={tableData.cost}
              placeholder="费率"
              onChange={e => {
                dispatch({
                  type: 'testDetailModel/setState',
                  payload: { cost: e.target.value }
                })
              }}
            />
          </Col>
          <Col span={6}>
            <Input
              value={tableData.description}
              placeholder="费率"
              onChange={e => {
                dispatch({
                  type: 'testDetailModel/setState',
                  payload: { description: e.target.value }
                })
              }}
            />
          </Col>
        </Row>
        {/* <p>
          费率：<Input
            value={tableData.cost}
            placeholder="费率"
            onChange={e => {
              dispatch({
                type: 'testDetailModel/setState',
                payload: { cost: e.target.value }
              })
            }}
          />
          <Input
            value={tableData.description}
            onChange={e => {
              dispatch({
                type: 'testDetailModel/setState',
                payload: { description: e.target.value }
              })
            }}
          />
        </p> */}
      </Modal>
    </div>
  )
}

TestDetail.propTypes = {}

export default TestDetail

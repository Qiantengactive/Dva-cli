import React from 'react'
import * as styles from './Layout.less'
import { Menu as AntMenu, Icon } from 'antd'
import { Link } from 'dva/router'
import { APP_PATH } from '../../utils/constant'

export default ({ layout, dispatch }) => {
  return (
    <div className={styles['menu']}>
      <div className={styles['collopen']}>
        <Icon
          className="trigger"
          type={layout.menuMode === 'vertical' ? 'menu-unfold' : 'menu-fold'}
          onClick={() =>
            dispatch({
              type: 'layout/setState',
              payload: {
                menuMode: layout.menuMode === 'vertical' ? 'inline' : 'vertical'
              }
            })
          }
        />
      </div>
      <AntMenu theme="dark" mode={layout.menuMode} defaultSelectedKeys={['2']}>
        <AntMenu.Item key="1">
          <Link to={APP_PATH.example}>
            <Icon type="user" />
            <span
              className={
                (layout.menuMode !== 'inline' && styles['nav-text']) ||
                undefined
              }
            >
              企业信息
            </span>
          </Link>
        </AntMenu.Item>
        <AntMenu.Item key="2">
          <Link to={'/main/test'}>
            <Icon type="video-camera" />
            <span
              className={
                (layout.menuMode !== 'inline' && styles['nav-text']) ||
                undefined
              }
            >
              企业账单汇总
            </span>
          </Link>
        </AntMenu.Item>
        <AntMenu.Item key="3">
          <Link to={'/main/detail'}>
            <Icon type="video-camera" />
            <span
              className={
                (layout.menuMode !== 'inline' && styles['nav-text']) ||
                undefined
              }
            >
              账单详情
            </span>
          </Link>
        </AntMenu.Item>
        <AntMenu.Item key="4">
          <Icon type="upload" />
          <span
            className={
              (layout.menuMode !== 'inline' && styles['nav-text']) || undefined
            }
          >
            费率配置
          </span>
        </AntMenu.Item>
      </AntMenu>
    </div>
  )
}

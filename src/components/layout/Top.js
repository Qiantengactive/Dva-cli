import React from 'react'
import * as styles from './Layout.less'
import { Icon, Menu, Dropdown } from 'antd'
import { Link } from 'dva/router'

export default ({ layout, dispatch }) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <span
          onClick={() => dispatch({ type: 'i18n/setLocale', locale: 'zh_CN' })}
        >
          中文
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={() => dispatch({ type: 'i18n/setLocale', locale: 'en_US' })}
        >
          英文
        </span>
      </Menu.Item>
      <Menu.Item>
        <Link to="/">退出</Link>
      </Menu.Item>
    </Menu>
  )
  return (
    <div className={styles['topBgCol']}>
      威思客计费服务
      {/* <Icon
        className="trigger"
        type={layout.menuMode === 'vertical' ? 'menu-unfold' : 'menu-fold'}
        onClick={() => dispatch({type: 'layout/setState', payload: {menuMode: layout.menuMode === 'vertical'? 'inline' : 'vertical'}})}
      />icon */}
      <span className={styles['topAdmin']}>
        <Dropdown overlay={menu}>
          <span className="ant-dropdown-link">
            <Icon type="user" className={styles['topAdminFirstIcon']} />admin
          </span>
        </Dropdown>
      </span>
    </div>
  )
}

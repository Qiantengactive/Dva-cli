export const table = {
  dataSource: [
    {
      key: '1',
      businessType: '多方通话',
      businessID: 'talkv2',
      cost: '0.3',
      description: '元/分钟',
      detail: '按量'
    },
    {
      key: '2',
      businessType: '语音通知',
      businessID: 'vocie',
      cost: '0.3',
      description: '元/分钟',
      detail: '按量'
    }
  ],
  columns: [
    {
      title: '业务类型',
      dataIndex: 'businessType',
      key: 'businessType'
    },
    {
      title: '业务编码',
      dataIndex: 'businessID',
      key: 'businessID'
    },
    {
      title: '费率',
      dataIndex: 'cost',
      key: 'cost'
    },
    {
      title: '费率描述',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: '通话详单',
      dataIndex: 'detail',
      key: 'detail'
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate'
    }
  ]
}

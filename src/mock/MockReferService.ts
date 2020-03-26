import Mock from 'mockjs'

const companies = ['Facebook', 'Google', 'Linkedin', 'Amazon', 'Databricks', 'BrixLabs']
const status = ['processing', 'rejected', 'referred']

Mock.mock(/\/refers\?userId=\S*&page=\d*/, 'get', {
  success: true,
  message: '成功获取数据',
  content: {
    'refers|10': [{
      'id|+1': 1,
      postTitle: '@CSENTENCE',
      postUrl: "@URL",
      'company|1': companies,
      'status|1': status,
      updatedDate: "@date('yyyy年MM月dd日')",
      referer: '@CNAME'
    }],
    totalPages: 60
  }
})

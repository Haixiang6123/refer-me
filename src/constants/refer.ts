export const REFER_FIELDS = [
  // 必填
  {value: 'name', label: '姓名'},
  {value: 'email', label: '邮箱'},
  {value: 'experience', label: '工作经验'},
  // 选填
  {value: 'referLinks', label: '内推链接'},
  {value: 'phone', label: '电话'},
  {value: 'intro', label: '个人简介'},
  {value: 'thirdPersonIntro', label: '第三人称介绍'},
  {value: 'leetCodeUrl', label: 'LeetCode链接'},
  {value: 'resumeUrl', label: '简历链接'},
]

export const REFER_FIELDS_MAPPER = {
  name: '姓名',
  email: '邮箱',
  experience: '工作经验',
  referLinks: '内推链接',
  phone: '电话',
  intro: '个人简介',
  thirdPersonIntro: '第三人称介绍',
  leetCodeUrl: 'LeetCode链接',
  resumeUrl: '简历链接'
}

export const REQUIRED_REFER_FIELD_VALUES = [
  'name', 'email', 'experience', 'referLinks'
]

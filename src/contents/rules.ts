export const ADD_JOB_RULES = {
  company: [
    {required: true, message: '请输入公司名', trigger: 'blur'},
  ]
}

export const LOGIN_RULES = {
  email: [
    {required: true, message: '请输入邮箱', trigger: 'blur'},
    {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {type: 'string', min: 6, message: '密码至少6位以上', trigger: 'blur'}
  ]
}

export const REGISTER_RULES = {
  email: [
    {required: true, message: '请输入邮箱', trigger: 'blur'},
    {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {type: 'string', min: 6, message: '密码至少6位以上', trigger: 'blur'}
  ]
}

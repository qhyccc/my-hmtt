<template>
  <div>
     <van-nav-bar title="黑马头条 - 登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="formLogin.mobile"
        type="tel"
        label="手机号"
        placeholder="请输入手机号"
        required
        :rules="[{ required: true, message: '请填写手机号', trigger: 'onChange', pattern: /^1[3456789]\d{9}$/  }]"
      />
      <van-field
        v-model="formLogin.code"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        :rules="[{ required: true, message: '请填写密码', trigger: 'onChange', pattern: /^\d{6}$/ }]"
      />
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit"
        :loading="isLoading" loading-text="正在登录" :disabled="isLoading">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginAPI } from '@/api'
import { Notify } from 'vant'
import { setToken } from '@/utils/token.js'
export default {
  name: 'Login',
  data () {
    return {
      formLogin: {
        mobile: '13888888888',
        code: '246810' // 默认只能用246810后台规定了
      },
      isLoading: false
    }
  },
  methods: {
    async onSubmit () {
      this.isLoading = true
      try {
        const res = await loginAPI(this.formLogin)
        console.log(res)
        Notify({ type: 'success', message: '登录成功' })
        setToken(res.data.data.token)
      } catch (err) {
        Notify({ type: 'danger', message: '账号或密码错误' })
      }
      this.isLoading = false
    }
  }
}
</script>

<style lang="less" scoped>

</style>

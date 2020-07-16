<!--
 * @Author: wangchaoxu
 * @Date: 2020-05-13 17:08:39
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-16 14:51:54
 * @Description:
 -->
<template>
  <div class="login-con">
    <div class="titlebox">
      <p class="name">尾矿库智能防护系统</p>
      <p class="English">WEIKUANGKU INTELLIGENT PROTECTION SYSTEM</p>
    </div>
    <div class="login-center">
      <el-form :rules="rules" ref="login" class="login" :model="form">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入账号">
            <template slot="prepend">
              <img src="../assets/images/user.png" alt="" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="passworld">
          <el-input :type="passw" v-model="form.passworld" placeholder="请输入密码" @keyup.enter.native="submitForm()">
            <template slot="prepend">
              <img src="../assets/images/pass.png" alt="" />
            </template>
            <template slot="suffix">
              <i class="iconfont" :class="passworldIcon" @click="showPass" style="display:inlint-block;line-height:52px;"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox label="记住密码" class="white" v-model="rememberPassword"></el-checkbox>
        </el-form-item>
        <el-form-item>
          <p class="primary login-btn" @click="submitForm()">登录</p>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api';
export default {
  name: 'Login',
  data() {
    return {
      passworldIcon: 'icon-icon-test1',
      showPassword: true,
      passw: 'password',
      rememberPassword: false,
      form: {
        username: 'admin',
        passworld: 'admin'
      },
      rules: {
        username: [{ required: true, message: '请输入用户名' }],
        passworld: [{ required: true, message: '请输入用户名' }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.login.validate(valid => {
        if (valid) {
          if (this.form.username == 'admin' && this.form.passworld == 'admin') {
            this.$router.push('/index');
          } else {
            this.$message.error('账号或密码错误,请核实后登陆');
            return false;
          }
        } else {
          this.$message.error('请输入账号和密码');
          return false;
        }
      });
    },
    //密码的隐藏和显示
    showPass() {
      //点击图标是密码隐藏或显示
      if (this.passworldIcon == 'icon-icon-test1') {
        this.passworldIcon = 'icon-xianshi';
        this.passw = 'text';
        //更换图标
      } else {
        this.passworldIcon = 'icon-icon-test1';
        this.passw = 'password';
      }
    }
  }
};
</script>

<style scoped lang="less">
.login-con {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('~@/assets/images/login_bg.png') no-repeat;
  background-size: cover;
  background-position: 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // 登录顶部显示文字
  .titlebox {
    font-size: 50px;
    p.name {
      margin: 0;
      line-height: 10px;
      letter-spacing: 3px;
      color: #eee;
      font-size: 50px;
    }
    .English {
      font-size: 20px;
      background: linear-gradient(to right, #c742ff, #68a1ff);
      -webkit-background-clip: text;
      color: transparent;
      display: inline-block;
    }
  }
  ::v-deep {
    .login-center {
      width: 45%;
      height: 70%;
      margin-top: 2%;
      background: url('~@/assets/images/login_bg2.png') no-repeat center center;
      background-size: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .login {
        width: 60%;
        height: 50%;
        .el-input {
          background-color: #0b154c !important;
          border: 1px solid #264d84;
          border-radius: 5px;

          .el-input__inner {
            height: 50px;
            border-left: none;
            border: 0;
            color: #ddd;
          }
          .el-input-group__prepend {
            border: 0;
          }
        }
      }
      .el-form {
        * {
          background-color: rgba(0, 0, 0, 0);
        }
        .el-form-item:nth-child(3) {
          display: flex;
          justify-content: flex-start;
        }
        .el-form-item:nth-child(4) {
          height: 50px;
          .el-form-item__content {
            height: 100%;
            line-height: 50px;
            .el-button--primary {
              height: 100%;
              width: 100%;
              background: -webkit-linear-gradient(to left, #c742ff, #1453d1);
              background-clip: text;
            }
          }
        }
        .login-btn {
          height: 100%;
          width: 100%;
          font-size: 28px;
          text-indent: 20px;
          letter-spacing: 30px;
          background: linear-gradient(to left, #c742ff, #1453d1);
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
          color: #ddd;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

<template>
    <div id="app">
        <vue-particles
            id="tsparticles"
            url="http://foo.bar/particles.json"
        />

        <vue-particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :particlesLoaded="particlesLoaded"
            :options="{
                    background: {
                        color: {
                            value: '#2d3a4b'
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 10,
                                opacity: 0.8,
                                size: 10
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce'
                            },
                            random: false,
                            speed: 1,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 4, max: 5 },
                        }
                    },
                    detectRetina: true
                }"
        />
        <div class="fromContainer">
            <h1 style="color: white;">噜噜噜噜</h1>
            <el-form
            ref="LoginFormRef"
            :model="LoginForm"
            status-icon
            :rules="Loginrules"
            label-width="80px"
            class="demo-ruleForm"
            >   
    <el-form-item label="用户名" prop="username">
      <el-input v-model="LoginForm.username" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="LoginForm.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">登录</el-button>
    </el-form-item>
  </el-form>
        </div>
    </div>
</template>

<script setup> 
import {reactive,ref} from 'vue'
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.


const LoginForm = reactive({
    username:"",
    password:""
})//表单绑定的响应对象


const Loginrules = reactive({
    username:[
        {
            required:true,message:"请输入用户名",trigger:"blur"
        }
    ],
    password:[
    {
            required:true,message:"请输入密码",trigger:"blur"
    }       
    ]
})
const LoginFormRef = ref() //表单引入对象

const particlesInit = async engine => {
    //await loadFull(engine);
    await loadSlim(engine);
};

const submitForm = ()=>{
    console.log('登录')
    localStorage.getItem('111')
}

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};
</script>
<style lang="scss" scoped>
.fromContainer{
    width: 500px;
    height: 300px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: rgba($color: #000000, $alpha: 0.5);
    text-align: center;
    padding: 20px;
}

::v-deep .el-form-item__label{
    color: white;
}
</style>
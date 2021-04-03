<template>
  <div class="vuetify-demo-page">
    <div class="form-container">
      <fom-generator-vue
        v-model="fields"
        :components="$utils.FORM.vuetify"
        :schema="formConfig"
        :onSubmit="submitHandler"
        :disabled="loading"
        class="form"
      >    
        <template v-slot:header>
          <div class="header-container">
            <h2 class="form-heading">Login to see blogs</h2>
          </div>
          
        <v-alert
          v-if="loginFail"
          border="bottom"
          color="red lighten-2"
          dark
        >
          Invalid login credentials. Try again
        </v-alert>
        </template>
        <template v-slot:footer>
          <div class="action-container">
            <v-btn small dark color="cyan" :loading="loading" type="submit">Next</v-btn>
          </div>
        </template>
      </fom-generator-vue>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ['notAuthenticated'],
  components: {
    FomGeneratorVue: () => import("form-generator-vue"),
  },
  data() {
    return {
      loading: false,
      loginFail: false,
      fields: {}
    };
  },
  computed: {
    FormRules: () => FormRules,
    isDev: () => false,
    formConfig() {
      return {
        fields: [
          {
            model: "user",
            props: {
              label: "Username or email",
              outlined: true,
              dense: true,
              required: true
            },
            // validator: ()=> !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.fields.values.email) && 'Invalid email'
          },
          [
            {
              model: "password",
              hide: false,
              type: this.showPassword ? "text" : "password",
              props: {
                label: "Password",
                outlined: true,
                dense: true,
                required: true
              },
              // validator: () => !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(this.fields.values.password) && `Password must be a combination of at least 6 alphanumeric 
              //   and special character(s) (e.g. '~','!','@','#','$','%', etc.)`,
            },
          ],
        ],
      };
    },
  },
  methods: {
    async submitHandler() {
      const {loginApi} = require('@/userApi');
      this.loading = true;
      try {
        const {success,token} = await loginApi(this.fields.values.user, this.fields.values.password);
        if(success) {
          this.$store.dispatch('auth/setToken', token);
          this.$router.replace('/blogs');
        }
      } catch(e) {
        this.loginFail = true;
        console.log(e);
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss">
.vuetify-demo-page {
  padding: 90px 12px 24px !important;
  @media only screen and(min-width: 450px) {
    padding: 36px 28px 24px;
  }
  .form-container {
    width: 100%;
    display: flex;
    justify-content: center;
    .form {
      width: 100%;
      @media only screen and(min-width: 600px) {
        max-width: 448px;
        .generated-form__body__row {
          display: flex;
          &__col {
            flex: 1;
            &:nth-child(even) {
              margin-left: 16px;
            }
          }
        }
      }
      @media only screen and(min-width: 900px) {
        max-width: 748px;
      }
      .header-container {
        .form-heading {
          margin-bottom: 20px;
        }
      }
      .username-after-container,
      .email-after-container {
        .field-desc {
          font-size: 12px;
          margin: -15px 10px 30px !important;
        }
        .field-change {
          margin: -20px 0px 40px !important;
          color: #1a73e8;
          font-weight: 600;
          cursor: pointer;
        }
      }
      .action-container {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
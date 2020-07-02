<template>
  <div class="enter">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 mx-auto">
          <form @submit.prevent="submitHandler" novalidate>
            <div class="form-group">
              <label for="email">Email</label>
              <input @blur='$v.email.$touch()'
                type="text"
                id="email"
                class="form-control"
                v-model.trim="$v.email.$model"
                :class="{
                  'is-invalid':$v.email.$error
                }"
              />
              
              <small class='helper-text-invalid' id="emailHelp"
              v-if="$v.email.$dirty && !$v.email.required">
                Поле Email не должно быть пустым
              </small>
              <small class='helper-text-invalid'
              v-else-if="$v.email.$dirty && !$v.email.email">
                Введите корректный Email
              </small>
            </div>
            <div class="form-group">
              <label for="password">Пароль</label>
              <input @blur='$v.password.$touch()'
                type="password"
                class="form-control"
                id="password"
                v-model.trim="$v.password.$model"
                :class="{
                  'is-invalid':$v.password.$error
                }"
              />
              <small class='helper-text-invalid' id="passwordHelp"
              v-if="$v.password.$dirty && !$v.password.required">
                Введите пароль
              </small>
              <small class='helper-text-invalid' id="passwordHelp"
              v-else-if="$v.password.$dirty && !$v.password.minLength">
              Не менее 6 символов
                
              </small>
              <small class='helper-text-invalid' id="passwordHelp"
              v-else-if="$v.password.$dirty && !$v.password.alphaNum">
              Пароль может содержать только цифры и буквы!
                
              </small>
            </div>
            <button type="submit" class="btn btn-primary"
            :disabled='disabledBtn'
          
            >Войти</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { email, required, minLength, alphaNum } from "vuelidate/lib/validators";

export default {
  name: "enter",
  components: {
    
  },
  data: () => ({
    email: "",
    password: "",
  }),
  validations: {
    email: { email, required },
    password: { required,
    minLength: minLength(6),
    alphaNum,
     },
  },
  computed:{
    disabledBtn(){
      return this.$v.email.$invalid ||
      this.$v.password.$invalid
    },

  },
  methods: {
    
    submitHandler() {
      this.$router.push('/home')
      // console.log('Регистрация!')
      // if (this.$v.invalid) {
      //   this.$v.$touch();
        
      //   return;
      //   this.$router.push('/home')
      // }
      
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin-top: 3%;
}
</style>

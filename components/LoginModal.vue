<template>
  <SfModal
    v-e2e="'login-modal'"
    :visible="isLoginModalOpen"
    class="modal"
    @close="toggleLoginModal"
  >
    <template #modal-bar>
      <SfBar
        class="sf-modal__bar smartphone-only"
        :close="true"
        :title="isLogin ? 'Log in' : 'Sign in'"
        @click:close="toggleLoginModal"
      />
    </template>
    <transition name="sf-fade" mode="out-in">
      <div v-if="isLogin">
        <ValidationObserver v-slot="{ handleSubmit }" key="log-in">
          <form class="form" @submit.prevent="handleSubmit(handleLogin)">
            <ValidationProvider rules="required|email" v-slot="{ errors }">
              <SfInput
                v-e2e="'login-modal-email'"
                v-model="form.username"
                :valid="!errors[0]"
                :errorMessage="errors[0]"
                name="email"
                label="Your email"
                class="form__element"
              />
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <SfInput
                v-e2e="'login-modal-password'"
                v-model="form.password"
                :valid="!errors[0]"
                :errorMessage="errors[0]"
                name="password"
                label="Password"
                type="password"
                class="form__element"
              />
            </ValidationProvider>
            <SfCheckbox
              v-e2e="'login-modal-remember-me'"
              v-model="rememberMe"
              name="remember-me"
              label="Remember me"
              class="form__element checkbox"
            />
            <div v-if="error.login">
              {{ error.login }}
            </div>
            <SfButton v-e2e="'login-modal-submit'"
              type="submit"
              class="sf-button--full-width form__button"
              :disabled="loading"
            >
              <SfLoader :class="{ loader: loading }" :loading="loading">
                <div>{{ $t('Login') }}</div>
              </SfLoader>
            </SfButton>
          </form>
        </ValidationObserver>
        <div class="action">
          <SfButton class="sf-button--text">
            {{ $t('Forgotten password?') }}
          </SfButton>
        </div>
        <div class="signup-buttons">
     <SfButton class="color-light active-btn">
    <a href="#" class="google-signup">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"></path><path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"></path><path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"></path><path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"></path></g></svg>
        Google
    </a>
     </SfButton>
  <div>
      <SfButton class="color-light active-btn">
    <div id="fb-root"></div>
    <a href="#" class="facebook-signup" @click.prevent="loginWithFacebook">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#3578E5"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
      Facebook
    </a>
      </SfButton>
  </div>
  </div>
        <div class="bottom">
          <p class="bottom__paragraph">{{ $t('No account') }}</p>
          <SfButton class="sf-button--text" @click="setIsLoginValue(false)">
            {{ $t('Register today') }}
          </SfButton>
        </div>
      </div>
      <div v-else class="form">
        <ValidationObserver v-slot="{ handleSubmit }" key="sign-up">
          <form class="form" @submit.prevent="handleSubmit(handleRegister)" autocomplete="off">
            <ValidationProvider rules="required|email" v-slot="{ errors }">
              <SfInput
                v-e2e="'login-modal-email'"
                v-model="form.email"
                :valid="!errors[0]"
                :errorMessage="errors[0]"
                name="email"
                label="Your email"
                class="form__element"
              />
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <SfInput
                v-e2e="'login-modal-firstName'"
                v-model="form.firstName"
                :valid="!errors[0]"
                :errorMessage="errors[0]"
                name="first-name"
                label="First Name"
                class="form__element"
              />
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <SfInput
                v-e2e="'login-modal-lastName'"
                v-model="form.lastName"
                :valid="!errors[0]"
                :errorMessage="errors[0]"
                name="last-name"
                label="Last Name"
                class="form__element"
              />
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <SfInput
                v-e2e="'login-modal-password'"
                v-model="form.password"
                :valid="!errors[0]"
                :errorMessage="errors[0]"
                name="password"
                label="Password"
                type="password"
                class="form__element"
              />
            </ValidationProvider>
            <ValidationProvider :rules="{ required: { allowFalse: false } }" v-slot="{ errors }">
              <SfCheckbox
                v-e2e="'login-modal-create-account'"
                v-model="createAccount"
                :valid="!errors[0]"
                :errorMessage="errors[0]"
                name="create-account"
                label="I want to create an account"
                class="form__element"
              />
            </ValidationProvider>
            <div v-if="error.register">
              {{ error.register }}
            </div>
            <SfButton
              v-e2e="'login-modal-submit'"
              type="submit"
              class="sf-button--full-width form__button"
              :disabled="loading"
            >
              <SfLoader :class="{ loader: loading }" :loading="loading">
                <div>{{ $t('Create an account') }}</div>
              </SfLoader>
            </SfButton>
          </form>
        </ValidationObserver> <br/>
        <div class="signup-buttons">
     <SfButton class="color-light active-btn">
    <a href="#" class="google-signup">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"></path><path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"></path><path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"></path><path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"></path></g></svg>
        Google
    </a>
     </SfButton>
  <div>
      <SfButton class="color-light active-btn">
    <div id="fb-root"></div>
    <a href="#" class="facebook-signup" @click.prevent="loginWithFacebook">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#3578E5"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
      Facebook
    </a>
      </SfButton>
  </div>
  </div>
        <div class="action">
          {{ $t('or') }}
          <SfButton v-e2e="'login-modal-login-to-your-account'" class="sf-button--text" @click="setIsLoginValue(true)">
            {{ $t('login in to your account') }}
          </SfButton>
        </div>
       
      </div>
       
    </transition>
  </SfModal>
</template>
<script>
import { ref, watch, reactive } from '@vue/composition-api';
import { SfModal, SfInput, SfButton, SfCheckbox, SfLoader, SfAlert, SfBar } from '@storefront-ui/vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { useUser,userGetters } from '@vsf-enterprise/commercetools';
import { useUiState } from '~/composables';
import { useVSFContext } from '@vue-storefront/core';



extend('email', {
  ...email,
  message: 'Invalid email'
});

extend('required', {
  ...required,
  message: 'This field is required'
});

export default {
  name: 'LoginModal',
  components: {
    SfModal,
    SfInput,
    SfButton,
    SfCheckbox,
    SfLoader,
    SfAlert,
    ValidationProvider,
    ValidationObserver,
    SfBar
  },
  setup() {
    const { isLoginModalOpen, toggleLoginModal } = useUiState();
    const form = ref({});
    const isLogin = ref(false);
    const createAccount = ref(false);
    const rememberMe = ref(false);
    const { register, login,user,  loading, error: userError } = useUser();
    const { $ct, $other ,app} = useVSFContext();
    
    const error = reactive({
      login: null,
      register: null
    });

    const resetErrorValues = () => {
      error.login = null;
      error.register = null;
    };

    watch(isLoginModalOpen, () => {
      if (isLoginModalOpen) {
        form.value = {};
        resetErrorValues();
      }
    });

    const setIsLoginValue = (value) => {
      resetErrorValues();      
      isLogin.value = value;
    };

    const handleForm = (fn,method) => async () => {
    
      resetErrorValues();
      await fn({ user: form.value });     
      
      const hasUserErrors = userError.value.register || userError.value.login;
      if(method=='login' && !hasUserErrors)
      {        
        var customer=await getcustomer();
        if(customer)
        {
         analytics.identify(customer.customerid,{
            firstname:customer.firstname,
            lastname:customer.lastname,
            email:customer.email
          });
        }        
      }
      if(method =='register')
      {
        analytics.track("User registered",{
            firstname:form.value.firstName,
            lastname:form.value.lastName,
            email:form.value.email
        });        
      }
      if (hasUserErrors) {
        error.login = userError.value.login?.message;
        error.register = userError.value.register?.message;
        return;
      }
      toggleLoginModal();
    };
    const getcustomer = async ()=>{
        const customQuery = { getFullProfile: 'get-me-full' }
        const { data } = await $ct.api.getMe({ customer: true }, customQuery);
        if(data.me.activeCart=null)
          return {customerid:null,email:data.me.customer.email,firstname:data.me.customer.firstName,lastname:data.me.customer.lastName};

      return {customerid:data.me.activeCart.customerId,email:data.me.customer.email,firstname:data.me.customer.firstName,lastname:data.me.customer.lastName};

    }
    const handleRegister = async () =>handleForm(register,'register')();

    const handleLogin = async () =>handleForm(login,'login')(); 

    return {
      form,
      user,
      error,
      userError,
      loading,
      isLogin,
      createAccount,
      rememberMe,
      isLoginModalOpen,
      toggleLoginModal,
      handleLogin,
      handleRegister,
      setIsLoginValue
    };
  }
};
</script>

<style lang="scss" scoped>

.modal {
  --modal-index: 3;
  --overlay-z-index: 3;
}
.form {
  margin-top: var(--spacer-sm);
  &__element {
    margin: 0 0 var(--spacer-xl) 0;
  }
}
.action {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
  font: var(--font-weight--light) var(--font-size--base) / 1.6 var(--font-family--secondary);
  & > * {
    margin: 0 0 0 var(--spacer-xs);
  }
}
.action {
  margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
}
.checkbox {
  margin-bottom: var(--spacer-2xl);
}
.bottom {
  text-align: center;
  margin-bottom: var(--spacer-lg);
  font-size: var(--h3-font-size);
  font-weight: var(--font-weight--semibold);
  font-family: var(--font-family--secondary);
  &__paragraph {
    color: var(--c-primary);
    margin: 0 0 var(--spacer-base) 0;
    @include for-desktop {
      margin: 0;
    }
  }
}
.signup-buttons{
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
}
.active-btn:active, .active-btn:focus{
    background-color: #e5f6ff !important;
}
</style>

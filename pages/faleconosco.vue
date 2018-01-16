<template>
  <v-layout column justify-center align-center>
    <div id="app">
      <v-app light>
        <v-content>
          <section>
            <h2 class="headline">Fale Conosco</h2>
            <v-form v-model="valid">
              <v-text-field
                label="Nome Completo"
                v-model="name"
                :rules="nameRules"
                required
              ></v-text-field>
              <v-text-field
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                label="Mensagem"
                v-model="message"
                :rules="messageRules"
                :counter="200"
                multi-line
                required
              ></v-text-field>
              <v-btn
                @click="submit"
                :disabled="!valid"
              >Enviar</v-btn>
            </v-form>
          </section>
        </v-content>
      </v-app>
    </div>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      valid: false,
      name: '',
      nameRules: [
        (v) => !!v || 'Nome é obrigatório',
        (v) => v.length > 4 || 'Nome deve ser maior que 4 caracteres'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail precisa ser válido'
      ],
      message: '',
      messageRules: [
        (v) => !!v || 'Mensagem é obrigatório',
        (v) => v.length > 4 || 'Mensage deve ser maior que 4 caracteres',
        (v) => v.length <= 200 || 'Mensage deve ser menor que 201 caracteres'
      ]
    }
  },
  methods: {
    submit () {
      var emailpack = encodeURI('subject=Contato do Site RotecRio.com.br&message=Nome: ' + this.name + '\nE-mail: ' + this.email + '\nMensagem: ' + this.message)
      this.$axios.$get('https://wt-1774728c569b6ce6d11bfc102e51ac7f-0.sandbox.auth0-extend.com/webtasks-nodejs-dev-main?' + emailpack).then(function (response) {
        if (response.message === 'email sent') {
          alert('E-mail enviado com sucesso, obrigado pelo contato.\nRetornaremos em breve.')
        }
      })
    }
  }
}
</script>
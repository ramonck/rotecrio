<template>
  <v-layout column justify-center align-center>
    <div id="app">
      <v-app light>
        <v-content>
          <section>
            <v-parallax :src="require('../assets/img/ti-financeiro.jpeg')" height="600">
              <v-layout
                column
                align-center
                justify-center
                class="red--text"
              >
                <img :src="require('../assets/img/logorotecrio.png')" alt="RotecRio">
                <h1 class="red--text mb-2 display-1 text-xs-center">Soluções em Tecnologia e Finanças</h1>
                <div class="subheading mb-3 text-xs-center">Serviços de Administração, Financeiro, Desenvolvimento de Software, Análise de Sistemas, CRM, Call Center.</div>
                <v-btn
                  class="blue lighten-2 mt-5"
                  dark
                  large
                  href="/faleconosco"
                >
                  Entre em Contato
                </v-btn>
              </v-layout>
            </v-parallax>
          </section>

          <section>
            <v-layout
              column
              wrap
              class="my-5"
              align-center
            >
              <v-flex xs12 md12 class="my-3">
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <h2 class="headline text-xs-center">Consultores de mercado com grande experiência em Administração, Finanças e Tecnologia da Informação</h2>
                  </v-card-title>
                  <v-card-text>
                    <span class="subheading">
                      Quer otimizar a sua empresa? Reduzir custos? Quer reduzir os seus custos de TI? Fazemos Gerenciamento e Desenvolvimento de software e Telecom sob medida.
                    </span>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12>
                <v-container grid-list-xl>
                  <v-layout row wrap align-center>
                    <v-flex xs12 md4>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="headline text-xs-center">Front-end</div>
                        </v-card-title>
                        <v-card-text>
                          Não é somente um design bonito, mas também o seu site está sendo feito no modo em que seu site é gerado estaticamente? Foi feita otimização para entregar um código minificado? Tem um bom tempo de resposta? É responsivo? e tudo isso conta para a o seu pagerank.
                          Como automizar este processo? Como melhorar a sua página ou o seu processo para chegar neste ponto? Nós temos a resposta. 
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md4>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="headline">Administração</div>
                        </v-card-title>
                        <v-card-text>
                          Faça a administração da sua empresa com foco em ajuste fiscal e contábil. Administração e Gestão através de Controladoria especializada com foco em métricas de produtividade.
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md4>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="headline text-xs-center">Cloud e Tecnologia</div>
                        </v-card-title>
                        <v-card-text>
                          Temos grande experiência em desenvolvimento de software e cloud-computing e também nas mais recentes tecnologias front-end. A nossa especialidade é tecnologia a favor de redução de custos e otimização de processos. Já colocaram a sua disposição uma solução em serveless computing? Não perca tempo e fale conosco.
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </section>

          <section>
            <v-container grid-list-xl>
              <v-layout row wrap justify-center class="my-5">
                <v-flex xs12 sm4>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Novos projetos com novas ferramentas</div>
                    </v-card-title>
                    <v-card-text>
                      Se você tem um novo projeto é sempre um bom momento para avaliar as novas tecnologias disponíveis para antigir o seu objetivo, usufrua de novas tecnologias que elas vão te entregar o melhor produto e o melhor processo possível dentro do melhor custo / benefício.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm4 offset-sm1>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Nossa localização</div>
                    </v-card-title>
                    <v-list class="transparent">
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon class="blue--text text--lighten-2">place</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Rio de Janeiro, RJ</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </section>

          <v-footer class="blue darken-2">
            <v-layout row wrap align-center>
              <v-flex xs12>
                <div class="white--text ml-3">
                  Feito com
                  <v-icon class="red--text">favorite</v-icon>
                </div>
              </v-flex>
            </v-layout>
          </v-footer>
        </v-content>
      </v-app>
    </div>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'RotecRio'
      }
    }
  }
</script>
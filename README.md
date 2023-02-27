
# Desafio Hand Talk

O desafio da Hand Talk consiste em cria uma aplicação Mobile em React Native que utilize os seguintes recursos do Firebase:
- Authentication
- Firestore ou Realtime Database


Condições
A aplicação deverá:

1. Utilizar React Native (Plataformas como Expo podem ser utilizadas);
2. Ter uma tela de autenticação com login e senha;
3. (Use Firebase Authentication) e pelo menos duas contas funcionais, os dados de autenticação das contas devem ser informados na hora da entrega);
4. Exibir uma tela contendo três objetos 3D que serão renderizados com THREE.js;
5. Exibir três campos para que o usuário possa inserir novas cores para os objetos, e um botão para aplicar essas cores em formato hexadecimal, i.e, notio ou por nome em inglês: red, blue, yellow.
6. Ao aplicar, as cores deverão ser salvas no banco de dados atrelado ao identificador do usuário (Use Firestore ou Realtime Database).
7. Sempre que o usuário abrir o aplicativo, caso existam cores diferentes atreladas a conta dele, elas deverão ser aplicadas aos respectivos objetos.


## Apresentação

<div align="center">
  <img
    width="400"
    src="https://github.com/Alex-dll/desafio-hand-talk/blob/main/assets/github/login.PNG?raw=true" 
    alt="Login" />
  <img
    width="400"
    src="https://github.com/Alex-dll/desafio-hand-talk/blob/main/assets/github/home.PNG?raw=true" 
    alt="Home" />
</div>

### Voce pode testar o APP usando o QRCode do seu respectivo SO no Aplicativo Expo ou Expo Go

<div align="center">
  <img
    width="400"
    src="https://github.com/Alex-dll/desafio-hand-talk/blob/main/assets/github/preview-ios.png?raw=true" 
    alt="IOS" />
  <img
    width="400"
    src="https://github.com/Alex-dll/desafio-hand-talk/blob/main/assets/github/preview-android.png?raw=true" 
    alt="Android" />
</div>

## Pré-requisitos para iniciar o projeto
Caso não tenha o seu ambiente de desenvolvimento em react native configurado verifique junto da [Documentação Oficial do React Native ](https://reactnative.dev/docs/environment-setup) e a [Documentação Oficial do Expo](https://docs.expo.dev/get-started/installation/) em como realizar a configuração do seu ambiente

Eu particularmente uso o [Guia De Ambiente React Native da Rocketseat](https://react-native.rocketseat.dev/)



## Rodando a aplicação

Clone esse repositorio

```bash
  git clone https://github.com/Alex-dll/desafio-hand-talk
```

Va para a pasta do projeto

```bash
  cd desafio-hand-talk
```

Instale as dependencias

```bash
  yarn | yarn install
```

Inicie a Aplicação

```bash
 yarn start | npx expo start
```
Agora basta ler o QRCode usando um dispositivo fisico ( Recomendo por conta da renderização dos objetos 3d) ou usar um emulador ( Recomendo o android pois o emulador de IOS tem vários problemas ao renderizar os objetos 3D e pode ser necessário reiniciar o app muitas vezes para o funcionamento correto ).



## Estrutura do projeto

```plaintext
.
├─ .github       # Contem o fluxo de CI para o EXPO EAS.
├─ assets        # Contem assets. e.q: icons, splashs, images etc...
.
├─ src              # Arquivos em geral do projeto
│   ├─ @types       # Contem os tipos e interfaces de implementações globais
│   ├─ assets       # Contem assets. e.q: logos e imagens usadas no APP...
│   ├─ components   # Contem os componentes globais do APP
│   ├─ config       # Arquivos de configuração do APP
│   ├─ constants    # Arquivos de constantes. e.q: Cores...
│   ├─ functions    # Funções de conexão com o Realtime Database
│   ├─ routes       # Definição de rotas do APP
│   ├─ screens      # As telas do APP
│   ├─ store        # Contem nos nossos estados globais e suas funções de set
│   ├─ types        # Tipos genericos
│   ├─ utils        # Contem funções de utilitarias e.q: Validadores...
.
.
├─ app.json       # Contem as definições do APP
├─ app.json       # Contem as inicializações do APP
├─ eas.json       # Contem as definições deploy do APP
.
.
└─ README.md
```

## Desafios encontrados
Durante o desenvolvimento do APP um dos principais pontos foi como utilizar a lib **Three.JS** da melhor forma ja que ela não funciona de forma nativa no React Native for conta do **Opengl**.

Olhando as bibliotecas e as formas de implementar a **Three.JS** resolvi usar a lib chamada [react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) ela abstrai algumas coisas deixando o nosso código mais limpo e de fácil manutenção ex:

 A implementação das funções a default no **Three.JS** são assim:
 ```javascript

	import * as THREE from 'three'

	const scene = new THREE.Scene() // Vira o componente <Canvas>

    const scene = new THREE.Group() // Vira <group>

	const mesh = new THREE.Mesh() // Vira o componente <mesh />
	const material = new THREE.MeshNormalMaterial() // Vira o componente <meshNormalMaterial />
	const geometry = new THREE.BoxGeometry(2, 2, 2) // Vira o componente <boxGeometry />

	mesh.material = material
	mesh.geometry = geometry

	group.add(mesh)
	scene.add(group)

```

Com a **react-three/fiber** podemos implementar de forma mais simples:

 ```javascript

	import { Canvas } from '@react-three/fiber'

	function MyApp() {
		return (
			<Canvas>
				<group>
					<mesh>
						<meshNormalMaterial color="red" />
						<boxGeometry args={[2, 2, 2]} />
					</mesh>
				</group>
			</Canvas>
		)
	}

```

Pelo motivo de clareza de código resolvi usar a **react-three/fiber**

Fora isso não tive muitos outros problemas, o app usa expo e conta com um fluxo de CI no github actions para em cada pull realizar o deploy de uma nova versão do APP para o expo EAS.

Como citado na etapa de ***Rodando a aplicação*** tive problemas com a renderização dos objetos 3D nos simuladores IOS, recomendo usar o dispositivo fisico ou o emulador de android para realizar os testes.

## Ferramentas utilizadas 🧰

- [x] typescript
- [x] react-native
- [x] expo
- [x] eslint
- [x] react-three/fiber
- [x] react-navigation
- [x] firebase
- [x] react-hook-form
- [x] yup
- [x] zustand

---

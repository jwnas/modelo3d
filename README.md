# 📱 Projeto RA - Avatar

Este projeto é uma aplicação de Realidade Aumentada (RA) baseada em navegador, que utiliza **A-Frame** e **AR.js** para exibir um modelo 3D interativo sobre um marcador físico (Hiro). O usuário pode visualizar o modelo em RA e interagir com ele por meio de gestos de toque na tela do celular.

---

## 🚀 Tecnologias Utilizadas

- [A-Frame 1.4.2](https://aframe.io/)
- [AR.js](https://github.com/AR-js-org/AR.js)
- [aframe-extras](https://github.com/n5ro/aframe-extras) (para animações GLTF)
- [arjs-gestures](https://github.com/fcor/arjs-gestures) (para gestos de toque em RA)

---

## 📂 Estrutura do Projeto

    projeto-ra/             
    ├── index.html # Página principal com cena AR         
    ├── modelos/ 
    │ └── Avatar.glb # Modelo 3D no formato GLB 

---

## 📸 Como Funciona

- Ao acessar a página, a câmera do dispositivo é ativada.
- Quando o marcador Hiro é detectado, o modelo 3D `Avatar.glb` é exibido.
- O usuário pode:
  - 🔁 Tocar no modelo para girá-lo 360° (`animation__tap`)
  - 🤏 Usar dois dedos para dar zoom
  - ✋ Arrastar com um dedo para mover o modelo
  - 🔄 Girar com dois dedos

---

## 📱 Como Testar

1. **Hospede o projeto em HTTPS** (ex: [Netlify](https://app.netlify.com/drop), Vercel, GitHub Pages)
2. Abra o link em um **dispositivo móvel com câmera**
3. Permita o acesso à câmera
4. Aponte para o **marcador Hiro** (você pode imprimir ou exibir [este marcador](https://upload.wikimedia.org/wikipedia/commons/4/48/Hiro_marker_ARjs.png))
5. Interaja com o modelo usando gestos

---

## 🛠️ Personalização

- Para trocar o modelo, substitua o arquivo `Avatar.glb` na pasta `modelos/`
- Para ajustar os gestos, edite os atributos do componente `gesture-handler` no `index.html`
- Para limitar zoom ou rotação, consulte a [documentação do arjs-gestures](https://github.com/fcor/arjs-gestures)

---

## 📄 Licença

Este projeto é livre para uso educacional e pessoal. Sinta-se à vontade para adaptar e expandir!

---

## 🙋‍♂️ Autor

Desenvolvido por **Jonas** 👨🏻‍💻

const products = [
  {
    id: 1,
    name: "Falda Midi",
    description:
      "Se hace en fibrana previamente lavada, muchas estampas y colores lisos disponibles! Con cintura elastizada.",
    price: 11300,
    description2: "",
    price2: 0,
    category: ["faldas"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149133359403058/Falda_Midi.jpg?ex=65497003&is=6536fb03&hm=9ff6925b4667b0997ffc9919db9b0c9c84c5906f368c18214ce04bc5f4682322&=&width=525&height=700",
    ],
    product_qty: 1,
  },
  {
    id: 2,
    name: "Top microtul",
    description: "Top hecho en microtul, muchos colores disponibles!",
    price: 8400,
    description2: "También se hace en mangas corta.",
    price2: 7700,
    category: ["tops"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149705391145010/Top_Microtul_Manga_Larga_1.jpg?ex=6549708b&is=6536fb8b&hm=0e538c10cb4fc023ed5efeaf50304e51515ff6192b8c721793fbaabbb43d758a&=&width=525&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149705873498203/Top_Microtul_Manga_Larga_2.jpg?ex=6549708b&is=6536fb8b&hm=fe525841ef381a6c82261fde28e1bfedf87d636e96ae40300723d2796daef5b9&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149706238406816/Top_Microtul_Manga_Larga_3.jpg?ex=6549708b&is=6536fb8b&hm=7489ce33888bf4830f43c35366ec9a3cda81eb6a5aa58e3f9ac32f83902210b5&=&width=526&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 3,
    name: "Falda Lea",
    description:
      "Se hace en gabardina, varios colores y estampas cuadrilles disponibles!",
    price: 9600,
    description2: "*Estampa de la foto no disponible!",
    price2: 0,
    category: ["faldas"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149106855583744/Falda_Lea_1.jpg?ex=65496ffd&is=6536fafd&hm=febdf50035721005ae44d9de0e00c9ac809bae659c5d32236703e6c8b2703b2c&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149107744768070/Falda_Lea_2.jpg?ex=65496ffd&is=6536fafd&hm=2b206a847b887b5cf65b9d464df3e2073e14fbbb3a4bd91c109fd3655c70dcef&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149108394897530/Falda_Lea_3.jpg?ex=65496ffd&is=6536fafd&hm=d5eec9fd4da6cb02e83d5ee09a283448eee33bc656e03edfd5cfaeea109ca2ea&=&width=501&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 4,
    name: "Falda Media Campana",
    description:
      "Se hace en fibrana previamente lavada, muchas estampas y colores lisos disponibles! Con cintura elastizada.",
    price: 8500,
    description2: "",
    price2: 0,
    category: ["faldas"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149136945516554/Falda_Media_Campana_1.jpg?ex=65497004&is=6536fb04&hm=60bcb4a8e1a0d1f4fc08ec5ef84436b431660e609910e3700f922fa4a8b96b90&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149137666953326/Falda_Media_Campana_2.jpg?ex=65497004&is=6536fb04&hm=ef6d901f1fe7fc4ce7b3257ab35c62122a8e4765cc12104bd4e0457d58b9986f&=&width=526&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 5,
    name: "Camisa Unisex",
    description:
      "La textura de la tela es MUY linda y cómoda, y los colores son hermosos. Talle aprox M/L pueden pedir las medidas ❤️",
    price: 15900,
    description2: "Camisa tipo crop precio alternativo",
    price2: 14400,
    category: ["camisas"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166148950240268328/Camisa_Corazones_1.jpg?ex=65496fd7&is=6536fad7&hm=67ba1b3f162e8328cdc915bc219b5ae89db000e2febf25714ca4c37b2a6e352d&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166148950881992827/Camisa_Corazones_2.jpg?ex=65496fd7&is=6536fad7&hm=59730df126fc3a3c8dd2268cb25f2b4909dcb808b0dc9d552079c36e047e7605&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166148951536312431/Camisa_Gatitos_1.jpg?ex=65496fd8&is=6536fad8&hm=9593ad750b60190245963ecfa9757ff72a91b93b6f629d612503202c1657b147&=&width=525&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166148952064786583/Camisa_Gatitos_2.jpg?ex=65496fd8&is=6536fad8&hm=d5bb8c6dbc7d99c392daff15204a1fa51ff2c8e8c4103c32d898f329244ffaae&=&width=673&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166148952631025694/Camisa_Gatitos_3.jpg?ex=65496fd8&is=6536fad8&hm=a722b5538423ad1f01b87fd152f46780d3601cb98b03163abba2c00642736768&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166148954270990346/Camisa_Honey_1.jpg?ex=65496fd8&is=6536fad8&hm=1d1d6189db0575311469a534c0d9f45c4a3fd6be00f1342fa04fb5c2c402ead0&=&width=695&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166148955441209344/Camisa_Honey_2.jpg?ex=65496fd8&is=6536fad8&hm=61a4e8cd3fa51e17d73e6e8e1c87c07b71e5a29c525fce8b191630e197fa1fc1&=&width=571&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166148956452028576/Camisas.jpg?ex=65496fd9&is=6536fad9&hm=829e06f735e1315d48c63a9d46da46c8ae91507e9460860e6966a43f51b75055&=&width=394&height=700",
    ],
    product_qty: 1,
  },
  {
    id: 6,
    name: "Falda Cuadrille",
    description: "Tela de gabardina elastizada! (Sin cierre)",
    price: 8000,
    description2: "",
    price2: 0,
    category: ["faldas"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166148998873239643/Falda_Cuadrille_1.jpg?ex=65496fe3&is=6536fae3&hm=918a56f4c9407dda852c7d16456b218fae64b343468807680f13085df40b29da&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166148999334608957/Falda_Cuadrille_2.jpg?ex=65496fe3&is=6536fae3&hm=4dca7de69025a40292d94c278e94d4d0d52d77f32e1a0d8a14a2250a896e64d9&=&width=394&height=700",
    ],
    product_qty: 1,
  },
  {
    id: 7,
    name: "Falda Cutie",
    description: "Falda semitableada por el frente en corte A.",
    price: 10000,
    description2: "Se hace en gabardina. Varios colores disponibles!",
    price2: 0,
    category: ["faldas"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149109187616778/Falda_Cutie_1.jpg?ex=65496ffd&is=6536fafd&hm=a969107788f9002eb633b4c5460fd8d2c80f84a1ab9ae5348a7546d9bebff74e&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149110143909919/Falda_Cutie_2.jpg?ex=65496ffd&is=6536fafd&hm=e1a7087d7d54c69673247e60ad00f5d66cc65477c2dc5289b321f006c3de994a&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149103965712424/Falda_Cutie_3.jpg?ex=65496ffc&is=6536fafc&hm=1a9ce501f7d266241d228663ad10aea769fe705ca8f7947f615c17a67aec630a&=&width=525&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149104963952730/Falda_Cutie_4.jpg?ex=65496ffc&is=6536fafc&hm=8cff81691b3b1051de9ce637392906f6bab5c1de1167489ab0532d07abbe1411&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149105865719877/Falda_Cutie_5.jpg?ex=65496ffc&is=6536fafc&hm=98f6fa48bdc3d6eb59919c2660a4980f9c7322667258d0a04668d5183cc8a1af&=&width=526&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 8,
    name: "Vestido Panda",
    description:
      "Vestido hecho en gabardina, el diseño lleva pinzas y hebillas metálicas, con un cinturón frontal que se ubica en el bajo busto.",
    price: 16600,
    description2: "Ideal para usar solo o con otras prendas por debajo!",
    price2: 0,
    category: ["vestidos"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149956206350447/Vestido_Panda_1.jpg?ex=654970c7&is=6536fbc7&hm=ea0516af397f52f20cf27399669a136453e1b3e7df4661a0d8a80f9afbbb92bf&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149957930201169/Vestido_Panda_4.jpg?ex=654970c7&is=6536fbc7&hm=8144276140a2506609d5168223a0d7a52813063f2887330bb9bf78dad36143c5&=&width=394&height=700",
    ],
    product_qty: 1,
  },
  {
    id: 9,
    name: "Falda Volados",
    description:
      "Se hace en fibrana previamente lavada, muchas estampas y colores lisos disponibles! Con cintura elastizada.",
    price: 9000,
    description2: "",
    price2: 0,
    category: ["faldas"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149134785446098/Falda_Volados_1.jpg?ex=65497003&is=6536fb03&hm=b7a260c7aacacf68dbf435144d723b20250fce17b60b0e20829891fd1ed5d010&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149135427178526/Falda_Volados_2.jpg?ex=65497003&is=6536fb03&hm=e6fe4d1c9d4c41c5e4a59ad14ae0ecc45c81ae4d15151d4602a81010e789c504&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149135951482940/Falda_Volados_3.jpg?ex=65497004&is=6536fb04&hm=4d732ecdb10d8dc242169d1bdd9036eff1fdf097ab5ff1a082b753ab9403347f&=&width=935&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149136475750490/Falda_Volados_4.jpg?ex=65497004&is=6536fb04&hm=07530533c25f3ba56e13996c586b63a3e48986ed621eed54781221992b8e4f3c&=&width=526&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 10,
    name: "Falda Tableada",
    description:
      "Falda tableada, puede hacerse en gabardina en varios colores!",
    price: 15000,
    description2: "",
    price2: 0,
    category: ["faldas"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149133921423480/Falda_Tableada.jpg?ex=65497003&is=6536fb03&hm=1b71c049bd7f63beb053b3b0cc37d7d5e4e57ba1e864b6effed06803013f6cd3&=&width=526&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 11,
    name: "Falda Cindy",
    description:
      "La falda Cindy es una falda de corte clásico, pensada para que puedas diseñarla como te guste, estampada, lisa, en gabardina o en jean!",
    price: 8200,
    description2: "",
    price2: 0,
    category: ["faldas"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166148991227011152/Falda_Cindy_1.jpg?ex=65496fe1&is=6536fae1&hm=7d8f884aa8fcc03cdc2d358025f85294f7ac84b6f65b7176790cc1356c90a1e6&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166148992422395954/Falda_Cindy_2.jpg?ex=65496fe1&is=6536fae1&hm=78b03aec0fbcb615e48988a9e748704a96a5d7e720bfd17876f14ce30fa7d795&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166148993575833763/Falda_Cindy_3.jpg?ex=65496fe2&is=6536fae2&hm=a7483c96c8bec1df75f1173e5d506ad489726a85fcbcdc7a0f84e6280de85336&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166148994469208184/Falda_Cindy_4.jpg?ex=65496fe2&is=6536fae2&hm=7d8c55c868041cf7974f505c52cac4312f3f0c8f4ef4baf7dc6f688fc4b201a2&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166148995471659128/Falda_Cindy_5.jpg?ex=65496fe2&is=6536fae2&hm=ea5540a4b5fb6befb4f8e3c2ded24782dabd6d54069e7897bbe980d8e70f29de&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166148996218241044/Falda_Cindy_6.jpg?ex=65496fe2&is=6536fae2&hm=c111bb23fba4fbcb17a85d78fd7c005bd707eeca0bd63bc7b81212b3084f43ae&=&width=542&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 12,
    name: "Falda Cindy Lana",
    description:
      "Esta falda es igual a la falda Cindy pero se hace en lana sintética",
    price: 9300,
    description2: "",
    price2: 0,
    category: ["faldas"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166148996901904434/Falda_Cindy_Lana_1.jpg?ex=65496fe2&is=6536fae2&hm=b1a85d392b6c44586a41202eda65aafd03fa31cddfa4884f7fb321e0959ab13d&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166148998135037982/Falda_Cindy_Lana_2.jpg?ex=65496fe3&is=6536fae3&hm=9d4f32ec70b9b3dba16edd577c2713172f6c64ac82f0ee46b9f955ecd32594e8&=&width=394&height=700",
    ],
    product_qty: 1,
  },
  {
    id: 13,
    name: "Remeras",
    description:
      "Remeras estampadas con diseños muy lindos! Medidas: Ancho: 63cm, Largo: 74cm",
    price: 3800,
    description2: "*Disponibles estampa de Gato, Drama Queen y Alien.",
    price2: 0,
    category: ["tops"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149273646280766/Remes.jpg?ex=65497024&is=6536fb24&hm=16cf6758a59efa37e3987403a764c26a215e69521f639f08e1b834a7caa4885d&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149272664817666/Reme_Gatito_1.jpg?ex=65497024&is=6536fb24&hm=6ac570fe2c25253f72f4f06ee72665b7c67141c1bce4226871b494a037520c8f&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149272991961139/Reme_Gatito_2.jpg?ex=65497024&is=6536fb24&hm=4ff2d34117a739ad9b65ead9732f74591c64eb6ddc8726c75164929127f7ef30&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149274065702972/Reme_Alien_1.jpg?ex=65497024&is=6536fb24&hm=9f768806d14bdc463c4be7a8debdc6d43cd4cbc798ebbbcfa4e10bd3ae4d0ded&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149274489339904/Reme_Alien_2.jpg?ex=65497025&is=6536fb25&hm=fdfb28399fb29005f78b0a91871bf68580f0d1796ad1b7b2d20d3f9ea8972580&=",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149274938126376/Reme_Drama_1.jpg?ex=65497025&is=6536fb25&hm=ee455e3b2102eb5ebbe606213c241fa2a3e97741c97f477960c0ebedce9ee8c4&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149275596623902/Reme_Drama_2.jpg?ex=65497025&is=6536fb25&hm=2b52bb1dcfec966d93704659049d67b5e20149914b5bba097823bbc874bd0d26&=&width=394&height=700",
    ],
    product_qty: 1,
  },
  {
    id: 14,
    name: "Blusa Peter",
    description:
      "Top hecho en fibrana previamente lavada, con cuello de batista y entretela para generar rigidez.",
    price: 8500,
    description2: "Se puede hacer en varios colores!",
    price2: 0,
    category: ["tops"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149737536294972/Top_Peter_1.jpg?ex=65497093&is=6536fb93&hm=42a8db93513ada64dfa3b2ed453d8fde4d1468db398b431840be78d0e3027c7d&=&width=576&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149738048004196/Top_Peter_2.jpg?ex=65497093&is=6536fb93&hm=a8f0603fbe7c4edc6427959f4420ce33d0b32c512daffbe88a59e94d7746ad9f&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149738496790548/Top_Peter_3.jpg?ex=65497093&is=6536fb93&hm=417113de89ed8957c30bd9ae7a284e3eb822a8d3fcf404e0a27e9d4e6fe2c137&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149738970751016/Top_Peter_4.jpg?ex=65497093&is=6536fb93&hm=4f8163d32ca30fbc131225631fd6c845f2387829585225c89ee386ba8107fb4a&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149739834781706/Top_Peter_5.jpg?ex=65497093&is=6536fb93&hm=596d3fafe7e85156aac2c726f1751420858b0a13abafeaa4b6cfad4347ccf55a&=&width=394&height=700",
    ],
    product_qty: 1,
  },
  {
    id: 15,
    name: "Vestido Peter",
    description: "Vestido hecho en lino, lleva bolsillos grandes por delante!",
    price: 16700,
    description2:
      "Es muy cómodo y lindo a la vista, puede hacerse en varios colores!",
    price2: 0,
    category: ["vestidos"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149958580326461/Vestido_Peter_1.jpg?ex=654970c8&is=6536fbc8&hm=6dae192a4c9de0b2c97f5b292fcebd9835816b1cb3bfda91721d0d14c3e24fe4&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149959041691728/Vestido_Peter_2.jpg?ex=654970c8&is=6536fbc8&hm=4291add7d742e264a1f763400a681615bafbada90b4f0ab2da9cf8e38ffcedc4&=&width=526&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 16,
    name: "Vestido Bengalina",
    description: "Vestido de bengalina al cuerpo, muy elastizado.",
    price: 9300,
    description2: "Puede hacerse en varios colores!",
    price2: 0,
    category: ["vestidos"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149878582345848/Vestido_Bengalina_1.jpg?ex=654970b5&is=6536fbb5&hm=71552a4d8d3036c761b1541e822de96a9829b5ae78c3e25b8e8be76347790538&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149873435955240/Vestido_Bengalina_2.jpg?ex=654970b3&is=6536fbb3&hm=5c3bd2d93db9a45de8b86a215d91003330aaf716b1dba90073439f55cfc28347&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149874853609582/Vestido_Bengalina_3.jpg?ex=654970b4&is=6536fbb4&hm=442638d99358d7fb11c4cdcd1856b20d0783fd980868b3b160f661c71a54d060&=&width=394&height=700",
    ],
    product_qty: 1,
  },
  {
    id: 17,
    name: "Top microtul ángeles",
    description:
      "Top hecho en microtul estampado, puede hacerse en manga larga y en manga corta.",
    price: 10000,
    description2: "Top microtul ángeles descripción 2",
    price2: 9000,
    category: ["tops"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149708180369488/Top_Microtul_Angeles.jpg?ex=6549708c&is=6536fb8c&hm=c567cbb3965c9819ddefc9351c8ab9e3744e6ba7b3199761d08511c950445f27&=&width=569&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 18,
    name: "Top microtul astral",
    description: "Descripción Top microtul astral",
    price: 10000,
    description2: "Top microtul astral descripción 2",
    price2: 9000,
    category: ["tops"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149703788929134/Top_Microtul_Astral.jpg?ex=6549708b&is=6536fb8b&hm=ae7525e8d3916e17bf59c024abcd8d40f66aabec000613c7e1f423e8cf3cfadf&=&width=637&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 19,
    name: "Top microtul dragones",
    description: "Descripción Top microtul dragones",
    price: 10000,
    description2: "Top microtul dragones descripción 2",
    price2: 9000,
    category: ["tops"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149704623599778/Top_Microtul_Dragones.jpg?ex=6549708b&is=6536fb8b&hm=8981adba08bc714d66a92462dc1e87dca3d3e80e9b6cb254f609b39ad83f2e52&=&width=585&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 20,
    name: "Top Panda",
    description:
      "Top hecho en gabardina, el diseño lleva pinzas y hebillas metálicas.",
    price: 7400,
    description2: "",
    price2: 0,
    category: ["tops"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149706813014067/Top_Panda_1.jpg?ex=6549708c&is=6536fb8c&hm=09ccd1dd42d37d91a6301b409420a94a0bfc7bc804945e0353cb5e1c4175cb26&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149707467333763/Top_Panda_2.jpg?ex=6549708c&is=6536fb8c&hm=c4eae72f34b01ea140b67d3ba44bcbf58966dbc984582293317ce85c976070ae&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149735934078997/Top_Panda_3.jpg?ex=65497093&is=6536fb93&hm=f0e619d60452f43d920ab26b244f17eb34882013ad1fb6a5634aec4075fa1790&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149737032982609/Top_Panda_4.jpg?ex=65497093&is=6536fb93&hm=8fbfdd1def9dfd22f1b44ef01228e0bd1ce5441dc377000bf85dba2f86cf5c94&=&width=394&height=700",
    ],
    product_qty: 1,
  },
  {
    id: 21,
    name: "Jardinero Over Marrón",
    description:
      "Jardinero Unisex, puede hacerse en gabardinas de varios colores o en jean!",
    price: 22500,
    description2:
      "Tiene 5 bolsillos funcionales, hebillas en los tirantes y viene con el cinturón al tono.",
    price2: 0,
    category: ["jardinero"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149209980948522/Jardinero_Over_Marron_1.jpg?ex=65497015&is=6536fb15&hm=934a6f77786c80e2c68c23220067e95301979b937df5e613ba43a44642cad51e&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149211071463555/Jardinero_Over_Marron_2.jpg?ex=65497015&is=6536fb15&hm=d22ed008ea0010583f38fb6a44b3bc3849ec0cbdd32101376aaf25f732e1bb1b&=&width=394&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149204582875166/Jardinero_Over_Marron_3.jpg?ex=65497014&is=6536fb14&hm=23aece7f2aea2e237a00285cac9c1065be0f16c07a40ece20d24fd449f8317dc&=&width=526&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 22,
    name: "Jardinero Over Negro",
    description:
      "Jardinero Unisex, puede hacerse en gabardinas de varios colores o en jean!",
    price: 22500,
    description2:
      "Tiene 5 bolsillos funcionales, hebillas en los tirantes y viene con el cinturón al tono.",
    price2: 0,
    category: ["jardinero"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149205895696445/Jardinero_Over_Negro_1.jpg?ex=65497014&is=6536fb14&hm=acfd8ff97761c178809bfb3d501f31a171828e71e49cfd40237337bb1c5f6d47&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149206956855458/Jardinero_Over_Negro_2.jpg?ex=65497014&is=6536fb14&hm=fe59ea12384e89efc7d26858727b722102b5763c0499a2fe3620ee260e9ee93c&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149207846043709/Jardinero_Over_Negro_4.jpg?ex=65497015&is=6536fb15&hm=39634e8a1a24552c315e8e12ac57e0b02b586a08fd2154b99fc53877c188483b&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149209112707112/Jardinero_Over_Negro_5.jpg?ex=65497015&is=6536fb15&hm=2fc23ca0ec236d69c10e64f75bc6d8676fd89103eff0bb51de804d42f37ac162&=&width=526&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 23,
    name: "Jardinero Over Jean",
    description:
      "Jardinero Unisex, puede hacerse en gabardinas de varios colores o en jean!",
    price: 22500,
    description2:
      "Tiene 5 bolsillos funcionales, hebillas en los tirantes y viene con el cinturón al tono.",
    price2: 0,
    category: ["jardinero"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149238439284777/Jardinero_Over_Jean_1.jpg?ex=6549701c&is=6536fb1c&hm=5c9aec75fee50aad9390aef1c5dc385b784b8c255b5f3ee632d4e48ab2a76576&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149240112824330/Jardinero_Over_Jean_2.jpg?ex=6549701c&is=6536fb1c&hm=39a4829eb332387ff525659a43661131c092f23269825ebb0ce71342b6cc48d9&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149241501130812/Jardinero_Over_Jean_3.jpg?ex=6549701d&is=6536fb1d&hm=bdbf237190a9d845f5fa17ec27619076a421636e0067f5b7bf7ddbe090703214&=&width=394&height=700",
    ],
    product_qty: 1,
  },
  {
    id: 24,
    name: "Vestido San Valentín",
    description:
      "Hecho en fibrana, tiene una caída preciosa con mucho peso por la cantidad de tela en las capas. Realmente no se llega a apreciar la calidad en fotos 🌿 (Al ser elastizado abarca muchos talles, elastiza un montón)",
    price: 15600,
    description2: "Manga larga precio alternativo",
    price2: 0,
    category: ["vestidos"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149959809257583/Vestido_San_Valentin_1.jpg?ex=654970c8&is=6536fbc8&hm=8536abfa3edb0c5d77aa6e3e67a6a46de238082fe0502b2787e4073515a6c10c&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149960274804756/Vestido_San_Valentin_2.jpg?ex=654970c8&is=6536fbc8&hm=49feedbfecad9e640e37afb1846e376b11f16e927dec044bffb55ef6618d8996&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149960916545576/Vestido_San_Valentin_3.jpg?ex=654970c8&is=6536fbc8&hm=38e3dc3750ecab3b86581817526dd19f11b26f0c7aec570d17156954698e313e&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149979430199388/Vestido_San_Valentin_5.jpg?ex=654970cd&is=6536fbcd&hm=28ec7f046e528cdf47b70ea1f3ad882dc5528e1bab1fb7e2e1f8e2b8def9db77&=&width=526&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 25,
    name: "Vestido San Valentín manga larga",
    description:
      "Hecho en fibrana, tiene una caída preciosa con mucho peso por la cantidad de tela en las capas. Realmente no se llega a apreciar la calidad en fotos 🌿 (Al ser elastizado abarca muchos talles, elastiza un montón)",
    price: 17100,
    description2: "Manga larga precio alternativo",
    price2: 0,
    category: ["vestidos"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149980524912660/Vestido_San_Valentin_Manga_Larga_1.jpg?ex=654970cd&is=6536fbcd&hm=6cfd6190a19e987711945e561ca7210246f7fdb2590f5769179099c507f91be2&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149980923375717/Vestido_San_Valentin_Manga_Larga_2.jpg?ex=654970cd&is=6536fbcd&hm=075f9944147066519d358d69c15c79a5c53a51944d3aaff0823388982c649e52&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149981401518160/Vestido_San_Valentin_Manga_Larga_3.jpg?ex=654970cd&is=6536fbcd&hm=8f01e4153feca849f05853c789be60f43e348772e1782e8232baa0957b17ab3b&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149982571733092/Vestido_San_Valentin_Manga_Larga_6.jpg?ex=654970cd&is=6536fbcd&hm=86effccd33389705fa922c13ac90a42f55e9dea91799b9f62a90685a2d4ff0c2&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149978662649856/Vestido_San_Valentin_Manga_Larga_7.jpg?ex=654970cc&is=6536fbcc&hm=912dbbe42bc6ca604203df36d7e7e986665cae1d291d25e92dc2d4a2d7bacd35&=&width=526&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 26,
    name: "Vestido Lexie",
    description: "Vestido hecho en corderoy!",
    price: 17800,
    description2:
      "Tiene cuello camisero y lleva un cierre funcional por todo el frente.",
    price2: 0,
    category: ["vestidos"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149875407261806/Vestido_Lexie_1.jpg?ex=654970b4&is=6536fbb4&hm=8245bd8f7d0aacebb209cb77e7623fabba8b637ec973334cd372ac1f4c256b9b&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149875868651571/Vestido_Lexie_2.jpg?ex=654970b4&is=6536fbb4&hm=3a56771a8c0e603f4935961bdf7e1b385d95afb92316ddfe73e8080134e897d6&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149876514553936/Vestido_Lexie_3.jpg?ex=654970b4&is=6536fbb4&hm=151a76a77576c65ea13a9dbf7c5f56873627f7c66c9efb86637618fdd35f359a&=&width=526&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 27,
    name: "Sweater Nubes",
    description: "El sweater Nube está hecho en piel de cordero bifaz.",
    price: 18500,
    description2: "Súper suavecito, cómodo, calentito y hermoso!",
    price2: 0,
    category: ["abrigos"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149655558627338/Sweater_Nube_1.jpg?ex=6549707f&is=6536fb7f&hm=ba98ab4528863c9140df83e1da5f8191d5bd4304d9917e65b7adca57b5108bf9&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149656057745428/Sweater_Nube_2.jpg?ex=65497080&is=6536fb80&hm=07c7e2398bffe8611369c574346f78fa88e82a406ef53cee263e27e87962cb78&=&width=541&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149656678506577/Sweater_Nube_3.jpg?ex=65497080&is=6536fb80&hm=6e842c198a0058cf40e59ae5819f76cf0cb5b9ba5e0fff4ee0687c09e7847bf6&=&width=394&height=700",
    ],
    product_qty: 1,
  },
  {
    id: 28,
    name: "Vestido Margot",
    description:
      "Vestido hecho en corderoy de terciopelo elastizado, de una calidad única.",
    price: 10900,
    description2: "Puede hacerse en otros colores!",
    price2: 0,
    category: ["vestidos"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149899969118248/Vestido_MArgot_1.jpg?ex=654970ba&is=6536fbba&hm=c55c0682d314ed0d0afc54f642d29f6b312d02b8d53e548db23a82dc61caf3d3&=&width=394&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149901051240499/Vestido_MArgot_2.jpg?ex=654970ba&is=6536fbba&hm=2738168296b092f981728aa276f406439bad8a5eeb01e9b0f0eec6b70230e9a7&=&width=394&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149898207502356/Vestido_MArgot_3.jpg?ex=654970b9&is=6536fbb9&hm=4e91db499dde307bf9dfefab41c91e98f74535faec345488b855d452a2c59048&=&width=394&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149899063144478/Vestido_MArgot_4.jpg?ex=654970b9&is=6536fbb9&hm=9a4c9906f9205f3d07506143dfa734c600ddbee9991ab513c38648bc2007f29e&=&width=526&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 29,
    name: "Vestido Atenea Celeste",
    description:
      "Vestido de diseño súper romántico! Mangas tipo farol. Largo midi, lleva cierre por la espalda y una abertura por el frente de la falda.",
    price: 16900,
    description2: "Puede hacerse en varios diseños estampados y colores lisos!",
    price2: 0,
    category: ["vestidos"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149799419072692/Vestido_Atenea_Celeste_1.jpg?ex=654970a2&is=6536fba2&hm=e931c44dd044f22f05c9ac6d1da07cffa180b62332142e5f2daedd2553d17d2f&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149799884632075/Vestido_Atenea_Celeste_2.jpg?ex=654970a2&is=6536fba2&hm=afab355a34b0196f91a48f8addd5dd5a0e19f246369e94b9b6ca5215c90f9c02&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149800325025872/Vestido_Atenea_Celeste_3.jpg?ex=654970a2&is=6536fba2&hm=ad1dd97d701899c02b40b28b41da2634901f4e24a0123799f5b696114c527677&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149800899661895/Vestido_Atenea_Celeste_4.jpg?ex=654970a2&is=6536fba2&hm=945d33fb419092873c1501738e0768c4a7835b494b151669e304dc4dcb019414&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149801461690428/Vestido_Atenea_Celeste_5.jpg?ex=654970a2&is=6536fba2&hm=3df372946ff21f72d8df8edc4d96b112b24ce8537f4dc05c40ee1ce5648178aa&=&width=525&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149801910472766/Vestido_Atenea_Celeste_6.jpg?ex=654970a2&is=6536fba2&hm=eb1c89cc0ff1aa28d0973c45ca47afa7b4aff2b487c93c4f296962d8c76da505&=&width=394&height=700",
    ],
    product_qty: 1,
  },
  {
    id: 30,
    name: "Vestido Atenea Flores",
    description:
      "Vestido de diseño súper romántico! Mangas tipo farol. Largo midi, lleva cierre por la espalda y una abertura por el frente de la falda.",
    price: 16900,
    description2: "Puede hacerse en varios diseños estampados y colores lisos!",
    price2: 0,
    category: ["vestidos"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149802451554344/Vestido_Atenea_Flores_1.jpg?ex=654970a2&is=6536fba2&hm=d6dfd20ae5bd5a3df1be8ec32763788b78ab263b74eedd237973c7995ca89dd9&=&width=394&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149803466567740/Vestido_Atenea_Flores_2.jpg?ex=654970a3&is=6536fba3&hm=1e2918edd529e5eff7126d721ac82cbd3998b40d1ea027f39f4aecbd340524db&=&width=394&height=700",
    ],
    product_qty: 1,
  },
  {
    id: 31,
    name: "Vestido Atenea Liso",
    description:
      "Vestido de diseño súper romántico! Mangas tipo farol. Largo midi, lleva cierre por la espalda y una abertura por el frente de la falda.",
    price: 16900,
    description2: "Puede hacerse en varios diseños estampados y colores lisos!",
    price2: 0,
    category: ["vestidos"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149804070539264/Vestido_Atenea_Negro_1.jpg?ex=654970a3&is=6536fba3&hm=9a6efd04e48d5ad94287c0df597169e2ef586a7ba4699a30632e6875c11f1df4&=&width=394&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149798718607410/Vestido_Atenea_Negro_2.jpg?ex=654970a2&is=6536fba2&hm=795a95736e48279bd590e13520015cd596d0c21069e525666eec3603d1d1e61b&=&width=394&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149826711392286/Vestido_Atenea_Negro_3.jpg?ex=654970a8&is=6536fba8&hm=611f197511d2b4f06a0aa25262baf0fd0315a1d01b2b7d6ea5a061c36c21a4bd&=&width=394&height=700",
    ],
    product_qty: 1,
  },
  {
    id: 32,
    name: "Vestido Atenea sin mangas",
    description:
      "Vestido de diseño súper romántico! Las tiras de este vestido se ajustan en el moño del escote. Largo midi, lleva cierre por la espalda y una abertura por el frente de la falda.",
    price: 15400,
    description2: "Puede hacerse en varios diseños estampados y colores lisos!",
    price2: 0,
    category: ["vestidos"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1166149827424419890/Vestido_Atenea_Sin_Mangas_1.jpg?ex=654970a8&is=6536fba8&hm=0f63fa25ad894071292bba2ccd28eda1c3fae829ed257a31c7ea4a48ef99f615&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149827797725304/Vestido_Atenea_Sin_Mangas_7.jpg?ex=654970a8&is=6536fba8&hm=e1a599d6d4843d906f4f56416aec746745bc614e8962c338da0623f162f5ade5&=&width=526&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149828284256286/Vestido_Atenea_Sin_Mangas_8.jpg?ex=654970a9&is=6536fba9&hm=1e6bb11bb37d98ada4f7ecda9bb8f7b397925e8a0ed9aa2ab5ffa679a3adcecd&=&width=394&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149828833706124/Vestido_Atenea_Sin_Mangas_9.jpg?ex=654970a9&is=6536fba9&hm=756c888f4686c495a6f9150abbd83eb124f3b984c1e8ed259da172bdef0016a5&=&width=525&height=700",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149829488029726/Vestido_Atenea_Sin_Mangas_10.jpg?ex=654970a9&is=6536fba9&hm=c2427dfa144f8f95eb8077802c9daa22d50cc78d339022b2014cc6ded32f2379&=&width=394&height=701",
      "https://media.discordapp.net/attachments/1149813754792513619/1166149830066835497/Vestido_Atenea_Sin_Mangas_11.jpg?ex=654970a9&is=6536fba9&hm=36bdb9908d0a495ad0cf83a1d834121e62215d0cf3c0e6312399e52ab4c57856&=&width=526&height=701",
    ],
    product_qty: 1,
  },
  {
    id: 33,
    name: "Vestido Sabrina",
    description:
      "Vestido confeccionado en gabardina, con recortes por el frente y por la espalda. Hermoso para usarse con remeras y topcitos abajo!.",
    price: 15200,
    description2: "Colores disponibles: Negro y marrón.",
    price2: 0,
    category: ["vestidos"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1179512203859218472/Vestido_Sabrina_1.jpg?ex=657a0d57&is=65679857&hm=d55200753d2da2c2be4020777d4f825b481f76363ae7a042786ac02147686bdf&=&format=webp&width=325&height=579",
      "https://media.discordapp.net/attachments/1149813754792513619/1179512204798722149/Vestido_Sabrina_2.jpg?ex=657a0d57&is=65679857&hm=b35ceb1fefa8d7773357d1957d41f038afaffe32a9b857d6d036d449b248331c&=&format=webp&width=325&height=579",
    ],
    product_qty: 1,
  },
  {
    id: 34,
    name: "Top Cassie",
    description:
      "Top con mangas farol, la cintura por el frente lleva entretela para darle mayor rigidez y cuerpo a la prenda!",
    price: 8100,
    description2:
      "Los tops de la foto son hechos en batista, pero tambien puede hacerse en fibrana. Varios colores y estampas!",
    price2: 0,
    category: ["tops"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1179512322528645232/Top_Cassie_1.jpg?ex=657a0d73&is=65679873&hm=62e47a47024b0ba14f93c10410abdb1889434393e344676ac2a2345f01e5539e&=&format=webp&width=325&height=579",
      "https://media.discordapp.net/attachments/1149813754792513619/1179512322914529321/Top_Cassie_2.jpg?ex=657a0d74&is=65679874&hm=1d0585a89cd8247041ae16d5334eba7151c2bd791e82d87ac6097c9e312e5028&=&format=webp&width=325&height=579",
      "https://media.discordapp.net/attachments/1149813754792513619/1179512323417841784/Top_Cassie_3.jpg?ex=657a0d74&is=65679874&hm=e713bb21e490ee29427b62a71d15b9dfee7b612938734e06899874bcd70ca928&=&format=webp&width=325&height=579",
      "https://media.discordapp.net/attachments/1149813754792513619/1179512323958902804/Top_Cassie_4.jpg?ex=657a0d74&is=65679874&hm=5e34d54df5d9a55bb4f0cc26331588c1cfb4c2de5a416d4caa9a394c361c596b&=&format=webp&width=325&height=578",
      "https://media.discordapp.net/attachments/1149813754792513619/1179512324772606042/Top_Cassie_5.jpg?ex=657a0d74&is=65679874&hm=e8f877358f7f121ae920d8b7fc20b48a693d666b1d501e1f99a93492c69f73d2&=&format=webp&width=325&height=579",
      "https://media.discordapp.net/attachments/1149813754792513619/1179512325619851420/Top_Cassie_6.jpg?ex=657a0d74&is=65679874&hm=a3177e3b85239e3f18fef89fa4ea0b8ef67d6dc50e776ee7f362eb893118df9b&=&format=webp&width=325&height=579",
    ],
    product_qty: 1,
  },
  {
    id: 35,
    name: "Falda Annie",
    description:
      "Hechas en gabardina rigida, faldas confeccionadas tipo libro con botones en ambos lados! Se hace a pedido y por talle.",
    price: 8700,
    description2:
      "Colores disponibles: Negro, verde militar, bordo, marron y mostaza.",
    price2: 0,
    category: ["faldas"],
    image: [
      "https://media.discordapp.net/attachments/1149813754792513619/1179512100947771452/Falda_Annie_1.jpg?ex=657a0d3f&is=6567983f&hm=dea5cf26f48e93bea0257f511d4f5200dcd013fd4e713f22f2fc555677e2646c&=&format=webp&width=434&height=579",
      "https://media.discordapp.net/attachments/1149813754792513619/1179512102042480781/Falda_Annie_2.jpg?ex=657a0d3f&is=6567983f&hm=8ea7ae1f01c5c9cde057adcf13aafb60c596acc4f868acacc9ed8b5262c14273&=&format=webp&width=434&height=579",
      "https://media.discordapp.net/attachments/1149813754792513619/1179512103258833046/Falda_Annie_3.jpg?ex=657a0d3f&is=6567983f&hm=077f46411bfa1c6bdf8894ee983b4c04d66690d6664f61b163a89d5d9ed5fc14&=&format=webp&width=325&height=578",
      "https://media.discordapp.net/attachments/1149813754792513619/1179512103871197285/Falda_Annie_4.jpg?ex=657a0d3f&is=6567983f&hm=54134cc342d5cff384ecf56cf233c08e5f2c73f51794d5a5413eb977dd6269d1&=&format=webp&width=326&height=579",
      "https://media.discordapp.net/attachments/1149813754792513619/1179512104391278673/Falda_Annie_5.jpg?ex=657a0d3f&is=6567983f&hm=86207f73cf95142d11d49d60d43b1a209c057ba0bebca3d29bb73f3fc19e5410&=&format=webp&width=326&height=579",
      "https://media.discordapp.net/attachments/1149813754792513619/1179512104919777451/Falda_Annie_6.jpg?ex=657a0d40&is=65679840&hm=673a966cdb0dda1afa612b5288ffdef3cb0d6a12c00aa453fd1c3e97f6d3f833&=&format=webp&width=325&height=579",
    ],
    product_qty: 1,
  }, 
];

const categories = [
  "tops",
  "faldas",
  "vestidos",
  "abrigos",
  "camisas",
  "jardineros",
];

module.exports = {
  products,
  categories,
};

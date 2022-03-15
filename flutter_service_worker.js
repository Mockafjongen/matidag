'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "128debdd5c76f13abe14db8a2cc156de",
".git/config": "19164d43f14b98040923661a0571b59c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6bd5d446aae2d4d73de9f2b4dfc48027",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "5af1c06a9ca39795d105835abf1ef775",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b2dc780cf65457ffde50a314e07cacac",
".git/logs/refs/heads/master": "b2dc780cf65457ffde50a314e07cacac",
".git/logs/refs/remotes/origin/master": "3fa48b8d42d74029cd6892aaaf34af3e",
".git/objects/02/56b1258c31affd425abb3171117e798d9d66ef": "0a2fbe7df482792c28f5d7100b9e40ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/ee1da46aad48da180625be12683deec4e54c0f": "6ad63c5fb649e64c4e4e71854e57b607",
".git/objects/07/5c9e5b313d60259f02906abaab428d8b081c48": "5d388017e4697d4d63131837a99287cd",
".git/objects/07/f8fc69643b678c349cb6de0ebebb6f880167b0": "928f12c9af14d651820de5afea469e44",
".git/objects/0c/c5a3530fd5e4f1462bb33bf554fa8ba7dcbd46": "87d210d5506f4fcaf434ea62390ef9a8",
".git/objects/10/fff0237d1a550c122e7380f3b7d5eb5c06c75b": "fd6735703e09a4a4b977ca942c8106c5",
".git/objects/12/2d4096428112b72efdb26b1355fdf33051a42b": "c4249467ae034f2dcbf4f7bfaf227d87",
".git/objects/13/fa15d1daf601a1dd9aaa7beca144103d2da864": "31030d4d7a3b300044ca11bc9d626cbe",
".git/objects/16/7defe8abd83055f93bdb5009db65f1d2c42e63": "26cff337a6ee17a6c5d175e1c64fb1bf",
".git/objects/16/a5ffdb349485c9bf01d626aeb1440c3c84b198": "f148de870c92f8b4a179d3f5b6cea49f",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/18/eab45d79fa54db815c8ca74297340b24a94d2e": "cf57740f02e700e7e234521026dfc861",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/18/fdf709884dbbd70f972d54a382791b355cde86": "50311e8a7a47d5aec20d86e2f773b862",
".git/objects/19/23cd59a9fac59dde9858e543ddc98484afd827": "a7a32d28de52602be68167da7452717a",
".git/objects/19/335d0e7ef6c6250c09b1ee2e629cafacef95c9": "f7e31bf71049ee57b3a5f63525382279",
".git/objects/1c/52874faabd78b8994dacc4d736fb4ad54e6798": "3d573ef003c3db99dd48bcb91a2dc17a",
".git/objects/1c/81d13d4a8070631b953e0bf568bd7bc9902d4a": "4b2fc7b60ac3e22961da225f235eacf7",
".git/objects/1d/90c64be83791a58aee46945b2f17f9087ebe61": "dde9ee41e9e6c86e5248876e4807d57f",
".git/objects/20/1999df9c912cf009d2476c3b28932ee6cee521": "ecbb9b1058b06e17441bc64c431f6b17",
".git/objects/21/15684941d8e4a95fe832281780248bfa74feb1": "5a0bd406935d500d86e2d2c4e0919d6a",
".git/objects/21/472ed37abdb3a091e04d33c12a2633c8fc73bb": "df1a9cf6da5bcd7afeec192de7a84454",
".git/objects/21/ba9e95f94f5376f9713048f5c5d8a6f3724f08": "9383745bfb431d56e36c37006a6ec999",
".git/objects/22/2c2c5704a6059b29bdc1a43e856b2bff4d6dda": "e45c432ac8831a23573675156a2d30aa",
".git/objects/22/9975fb1431b851d4556a655f3b5988b972e755": "8e39b2f21066d752f1555fd7ad249c69",
".git/objects/24/0517e2286f74f66608549001cb6c1b00c7d236": "f3f838df2cc8d3c0d64719b5133fa8c6",
".git/objects/24/5d3333a97cde1c1055e38ce53fa01f061d498c": "4b9b251c10df3043856cdb1af9e9b6dd",
".git/objects/24/6bc1ffb63e25b04423490bfcaf326660addd2c": "34dad2cdb991dc6105b59855b486940c",
".git/objects/26/9ad45daa75049d8617ef407d85f6fbcf2eab60": "0d7661d407390fdbd30fa1152b231770",
".git/objects/26/9f06aabf198bd863b3fd71208f086825c592e1": "0a3373ebd66a20abc6d2ef9ddc3a14a4",
".git/objects/27/9924ff094ea6d52885c2a2bb816ff85f9f4716": "0cf0d6f02ea5e27a0a1ea9d5bd531db7",
".git/objects/2a/3ce0ff3d547c0120956a2893bebc220ce4d377": "4b550eaf78c1935aa9fbc16a12a18fdf",
".git/objects/2a/99270fe4f343a80e7c364b644ac19e0cae3ef7": "bd1a87ea404e2948ed7e7639a011fd00",
".git/objects/2e/5becb12aaddf4383d936a3cd26f13762f6cc4e": "7beca62a81a8f8326acd9852815e3110",
".git/objects/2f/11ed9d187327e012316314f21adc468c149020": "c08bcd225a2b40ec13daa993449c3ef9",
".git/objects/32/3ab2014f580d622a8bbab78757fe04c7328a59": "7369714f56f73ac45a6141616e956a0a",
".git/objects/33/3ddf0bc0b4a5eb0de5c6e02bac2d217857fbfe": "0e28175dab713970deb3a54e54dd0aa6",
".git/objects/34/cff93aeb114dd5ddc1478262f99126016efa7c": "3f8861a11ce0b57a1dd6e32f4d19f1d8",
".git/objects/34/dc50a82559db24ed7f37c276bcf970e17a0bc8": "9dc1c6dca0f55b8e6843342ac0b5bb3d",
".git/objects/38/13f3fa681064f2d3a6e82e87d7bcab8da95e7a": "2fc293250dc8fd3481a3b23c8bb75ba1",
".git/objects/3b/8d3a2d294476f7eb257bda8db14c567e38f25c": "ee12ddb032c1e30ca571f029359ed7f2",
".git/objects/3b/ffbe830383794762cf44d5f4c64fd6bc07031a": "4d1510fcfa7e1467c75bfd36dc762598",
".git/objects/3c/8a157278c39821092e18d084be62db6f78538b": "5803267248338f9ef20c20e96ea85f69",
".git/objects/3d/fb8dbd807bcbef83106b1fdcea28b5ed680f08": "2599b14b6830f33a51ca9cc2ac4f72a4",
".git/objects/3f/69a5913c26b273eba059bfbe685be36d2790d2": "fca53dbd201f205657f2515fd2fe499a",
".git/objects/42/98673ee6e9cbe1273921ca9a87653a820e9808": "677d55a8f5ba8bdfa45ac9be975f7d66",
".git/objects/44/8c669cfd18df11a7255384d45a3aa459d4bc2e": "e8a00b689d04527dee31f9e33b420567",
".git/objects/44/a4c43aab06056e64ed2de13a3d92fb4d00b091": "2d4b21e9acbe1bf64b92ee758ad851cd",
".git/objects/45/8ca36af30502c13969134f5ab7fcd3b13f38d8": "86869df29e850d06352571e3c21425b5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/81b23f0fd8afb73d6a77d6cb67ff7d99828a6a": "80845f534f28415911c0fa2f3a3fbc57",
".git/objects/48/b8361d53bdd0f019d2dc56451e97683ff1126a": "dd1e5c7ffa38ebd2ce7a70e65b04dce6",
".git/objects/48/b90974caf59aa2c817ab6ec4eaebd4162dc269": "2df995ce759dfbc89c37b1d960835316",
".git/objects/48/d17b8cde451b898160d94a04e87f32df6cb189": "39683b26346371377619fbbd8847cf9a",
".git/objects/4b/6875d5dae81d5e2cd09b39ef87ae0f243ce3bf": "f1f2e7d7d64ef1e1b3b30195c303c61a",
".git/objects/4b/ffba53e9ba2c12e4c5248e9fc685f5df97d993": "1d0c1112496ed609b26a1193643499b4",
".git/objects/4c/bd45e129235c3224c5ee230eb011d87e5783f9": "b6284f8e0d16b21fdb9f79e15f834dc1",
".git/objects/4d/c30b811c2745afa4516e66f571d22a7faea6f3": "4b41be8df3e00e40d765ab1e181904d3",
".git/objects/4e/ca291e81bf84bd319b4da4d1294d9ed82d664c": "1e6a910a0bfde47975211c20090c2ed5",
".git/objects/50/420037201353dff5a4e49c60e208d01e072335": "d5f06a4982e47dca0ad3d3d8547f084a",
".git/objects/52/1e0c78b32119ff9d00605c1cdbf64cb1a070c4": "853ebc32a90044181c85259f4dd73d7a",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/195d5c167e33c5e7bf6374ac8c0f17fdbd057d": "cf8220df4c1c71d63f9e00edf2fa0b33",
".git/objects/53/64da26711516da9d2117116e97d45c652f2f6a": "72887d9c025870fdabefe58a8f6fed83",
".git/objects/54/cf89a489d8f77278f773134e29ef659cb0b0e5": "23355422cd74906cfc2f682d7f8c1987",
".git/objects/55/1d61b717ae191bddb9629254881bdf6832d2ce": "f0f3314b568bc1304fb546fadb4d7aab",
".git/objects/58/74bdce3e2cb99b179c7f4e9e96640e7b58c7b1": "4d592c85911a9cf25a07a3aa888c9eb7",
".git/objects/58/95b4732fe7aaa0f4ed355eefd6c41e8f943bfd": "5d535ec6f94cdd76ae8751c557be259e",
".git/objects/5a/12d8bde19871a438c47717ce7ffe218beb7ce8": "1acb6942eedbf117bb12a3f8a0510d16",
".git/objects/5b/a89c849e37e363eeb286afbf0cd771c4192230": "a6be20958bf37f07dee5adb42295ec6e",
".git/objects/5b/af4a6f197eb7d740b3e2d269700d7d76de41d1": "b019f3f589de7095cd698973d62875c9",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/5d/fc327e933dd5f606ae8d0b2da8d0c984380195": "a3cd472a70521d50e208ac8f982f87a2",
".git/objects/5f/0cba32b0218082d338d6d21240c8a726079a44": "c7d7bf932a571b748d3ad6c4e6899b45",
".git/objects/5f/1f7c80ddbf821ebed26156e7b3c55d5db48618": "6eac29d14a091c468098d2b501bacb74",
".git/objects/61/d7ec24b736f9b22c7e283936c5c70120942e57": "a6562a77a9ee831054122fd5d15515a4",
".git/objects/63/540443c21a04701b310a954974869048faa978": "f8d479d7d4beeab9590bcf6f25743e3a",
".git/objects/67/cf621df49be00255e6450c0744dd5542ddca58": "fd5b23a9017dba7487c8a801508ee3a1",
".git/objects/68/0ff6de9ed44587b9717ec1f5a9e207f365c4e0": "7915ab50bb6295f498fcf35673289e97",
".git/objects/68/8b8ba344664857346631938e712533d8aec317": "8aba9ecf02192ffbdd9a0b1d82520f1c",
".git/objects/68/d2728f422620fb7a8be321c31cda567910fd3f": "a05205de38b3f755bf5fa6038e64604f",
".git/objects/69/dfd6685a8054f08c9bd39c7e8606f7aff71d73": "571eb50e9403bff9d25022e36831553f",
".git/objects/6c/1af43169fc8d19be0822847a6a56e9fdcbab4e": "a85e6367d41e81f7f2528e29b72ac8ae",
".git/objects/6c/8758761d440fff3a2011366f44624be7ea22ad": "af800e3bfe5d878c3f292df3c44973a6",
".git/objects/6d/4ea2a394e243811d929db5d9943156c1ecdf4e": "faf188100b45d07622c839499d7d8e40",
".git/objects/6d/8dd53a607c90c9d9def7611c99717b6d935e67": "60944c5586f9a22252831ce74bcd46bf",
".git/objects/73/b7a794be619fe95af53164f185a36ef99fa68c": "3f830465b6ea28351635913e48535b99",
".git/objects/75/2dd10e2f253f68bd3161588e9344e1fb681788": "4ed4ea50f73a6e387eb3a7fe84340104",
".git/objects/75/491de2edd64be6fc611b38e849dbf974dff84f": "494bc5463c5d36097bc7b7fcfc7ec450",
".git/objects/75/746362020c74bb4b881fa21b9738eb830078dc": "061d7404d4f260fdb362fc7e4a41a156",
".git/objects/77/e36b090f0306652132c4a93133395a36b360ab": "7485f219d88e91ee09048edee8d07ef1",
".git/objects/78/1a8e11ccd5e7d554bb9a214561894e059b1ec1": "9135a8c4b15dad9885ffca69db988fb7",
".git/objects/78/6565f47cdb01e6662db73edeb1c50b7f928acb": "1e971536c1d4760de2503f97a546e12b",
".git/objects/78/741733188d8d2ea7834099e1408caed69567bf": "9f8a29489d48b57c2798f4dac3c78e76",
".git/objects/79/23017c606df749a6de5f38501c5eaff4ea134a": "585752a7c7b149639de67901f1b5f71c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/c0ba9a76011459917c1d3058d411d27c51d974": "84cf40282c7f4a0ec3bc85b26e298840",
".git/objects/7b/60a4fe63eba3a2bdc3da070046b6237aff6908": "fcb8aa66fbb0751f48a685282a70391e",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/81/1b8def388f5d9e40fff5b71e0becc74bf145f1": "4b32d8203bf364bd9765936802359a93",
".git/objects/82/8afee0abd9bb8a5b65195539cf7ac33f20472d": "62840f25719e4886a6c26036bbc10a61",
".git/objects/83/ef31111f9e871f301ce643cb87c5c9a6d6569c": "4c08474b8ae776d1d9f3ef6b1d0c902c",
".git/objects/87/ad2bae631ccd7ac9114ad435a26bead8aa3657": "991e6acdef9fcd2efbf9d25d919653d1",
".git/objects/88/400514064446f2afee9b99c692855002630e94": "ea49402267479ea7835ec12050bd093c",
".git/objects/88/95cd03065d257d8b502e2e1d0890aede15e0c0": "12acec151eeef278e7c0736fcad1a1fd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/0686b1e54f95dea643d568dca65aa61a53d0f8": "85de893cf9cb2e4ffbe48d6116da27ae",
".git/objects/8a/8ff39d8fd0ec11192d77d9e657ab3ac114bf10": "8f971cc16624cd19379474a114d44c4c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/96a3a4b9b085b2ccaa3d0d5d37fff6627ffbf0": "2ec5220804669c401a3c8ee38f397ac7",
".git/objects/8d/e164884425b767fdc06875b2261e351f0eef2e": "afd27e9286285fb1b8ff46a96bf8f876",
".git/objects/8e/53f22aa723c7a8536d9709168a5534729d3ceb": "aa615cc24d919554fd7261c637b693ec",
".git/objects/92/aa66c3273b00d299cb873de36e9dbb93ced8b9": "c808d8cb56cecb3561dd170623c90f1c",
".git/objects/94/f9ac48ce5b4c5a7a93752f4bfa7580414a091c": "18f98163d94549796d058382b45957ff",
".git/objects/95/0d231b67d9e08c5b91afcb0cbd6a50fe2f6a76": "b3daf2811ddbcce63843c9e34b686056",
".git/objects/97/96f942e523e691d2d57c39459f63826c34e980": "0b223862f8b11a95cfbd88050612e55e",
".git/objects/98/331c8eda0b2326237ed5bb29aeed1c0b8e972f": "90a5143c1ae3d114cad64539dbf1ce4e",
".git/objects/9f/d602eb711990eacc53caa8c2af12a11a3bc1ce": "12904b7494bfa60cc0dd88e00919e9b0",
".git/objects/a0/a819191d424bde3a22e2aea4fbeb2239661a33": "b7d2cabbd25b65b27dbaaf50e54846fb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/92e961595bef1141169d91ab28f9c3dbd4d914": "4829f908d065cbcd358bd6bfbf2ba076",
".git/objects/a4/05b5a5cf762f1e5a118a13e444d3a0282f617e": "95c58f2fa868ed588a2acd0244fa7792",
".git/objects/a4/9043079a00ef3316fde311140e6b2b1d397a3a": "9e75f583f0bc47e77510cfb64a93c171",
".git/objects/a5/899095d6e9c0b8dfeae966180ca472eeba7b83": "c858ea3a2aa30c25cf6263e5aa8c2db1",
".git/objects/a6/4db3f5b96e942bfc9ff9730d3d49e83ff1cff8": "ed138b8745c87bf51013c1dbf20ba425",
".git/objects/a6/6bc51eaba7a9ebb9f358d609277ed94f0e9955": "8d97929784f29d1bcf23cc9fcd748a7d",
".git/objects/a7/1cd8a132189778bf9acc1f435eee6c2f3d896c": "f49598dab3892840632bfde6bb75775b",
".git/objects/a7/701f1d8046e46bf1a4f40f11b968d969a3c723": "7d562dd23907f40c22800e30df30201b",
".git/objects/a8/0ca7f5c1ef270df208eb51fe3528f8a00d24e9": "47c50737c6fd359481cf3bd634c14a12",
".git/objects/a9/7319ef740a85701927994ff4df9f8eaf339de3": "509f619ecc5fac99d793d58516184568",
".git/objects/aa/385959fafe24d1b4213b2cc81096659acb2091": "29cc03551f0c83751301ce04d29c50fd",
".git/objects/aa/3ba334c2a14484c9c269742fc47f3a38bdb72b": "69996849d1effee28b345e75232f8706",
".git/objects/aa/697248f6bf2d9681802b74e9dd948c1daf6359": "2948f917c02685a70b4018a2a0b66ab4",
".git/objects/aa/dd634048b5f327386bebb0d75c7793941180b3": "88adc27c968b6377a600b904b3098f49",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/363c9dd5e080a2506a91f8d2a9a0bfbb62a438": "3e26efb9bde4a1a422ed3e53feeee456",
".git/objects/ac/f64f940cb910f63b4c1c769dd73b457e2c110f": "1b9b027635c100afb94441af0a241042",
".git/objects/af/3285490d09e5ee14058c89404a2adc72cb7c8d": "0301c5773fcd681ee5fc4a3524afb3c5",
".git/objects/af/5593b6c093cd0786ba397554ac4eeb8291eae9": "0ebe39afb1830a968fd2f6d7fa38126b",
".git/objects/af/cc81393f4a121ef04ea6b4c9066958584cab33": "e4e8a8b94d0083d361596d25d60b1290",
".git/objects/b1/8a3cc65b26fd7c2039c73cf1e780317fe8271c": "c992a724b4fab8b81a195e9214e6e608",
".git/objects/b5/c2c125761bdbdf4660bbe62cfefda89bf46084": "7db28d194487a04d2c406e846452b9bd",
".git/objects/b6/cb802cd276619e68118fe9a3d796c2e86290a5": "24cf08e15a178c461da040c2c936ad2e",
".git/objects/b7/2dc2d994501c75c2022f834e0dc9d219d56a82": "539be64ce4f005d857a8092151938f31",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/b94767fa4f9371ebb9f6170c8551b0be00a857": "7ef915f3397d02f9cc58618786553e38",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5e436b3c705f7b3e4c4729307aff472011a1ee": "b2deb6ece361c2180391233328fd16d1",
".git/objects/b9/fe1030a2867123773e98c20775d25c46253528": "a48e898b22f199b9d076c70441a95754",
".git/objects/bd/195f2b9b0d0535d0be220df734d0f4f4d65ad7": "ded7d6aedbdfc48ac9c1fb0271f2399c",
".git/objects/bd/1acfa5368019ca8a94a10d12a471bca89fd36b": "5ee8c764bf83a19b1caf5edec4d7d226",
".git/objects/bd/62882ecd06a6a8a56c0cae2df9fe9c240a1adc": "bb6efd4d7cc6af90927fd09a545161bf",
".git/objects/bd/6cc0d348d0cfda702dd996dbe51265176b7bd9": "3b3a7b333ab3459e2cc2f47cb5bda06b",
".git/objects/bd/c4db40fe757b190344efc5cbc443f3841419d8": "97a9f6adc77c2ee588674f9f13a900a5",
".git/objects/be/b7b641095a0349e3926bbb27b1576484fd55fa": "25295c22c85b57d341e1e01c0b46501f",
".git/objects/c2/e687003244606271008c798b04cf793cd9a7d9": "d343cefeb681063899df52329a9c92c8",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c6/1a2d3e9936f8c210d43a9f06c24469b79e9aa2": "80ad8c4310c69999bc9375cd16835b21",
".git/objects/c7/0e1eae5c80bb666229f9f50a8667e2b51c7c6b": "a837978bdd8699b8fe505033e952a481",
".git/objects/c7/197ce130e765d7fa806129bdb46425020283bd": "8a364591cefee95c9c1e612f3410ead2",
".git/objects/c7/80906dfe6b414647c8f9de30198a406c9f38b8": "56ae33f42737785f3c65857b8547a076",
".git/objects/c8/0ee032ec07cf01b443bc969c92a73a68cd1bf2": "409e8f9234348c7213075493b90237ca",
".git/objects/cb/3624b3b8c28896a8b28ec68a09c33e06f1ea4b": "d2f29c7ddea324f3cdb2065095b05943",
".git/objects/cb/806705b741aa456972b6bebf807df8c8e39a03": "fad58b1ec67dbb0461f9ee58cc151724",
".git/objects/cc/035c95c96d314476d4112fe07d594a32769418": "ca151cfdb50b2b2eb9c24290dd7dcfa4",
".git/objects/ce/78763755bb8a8b5d20c252ff4d887bf8a492e1": "e5c03abdfccc7743384beec332cb28cc",
".git/objects/d0/8c871b53ae43f194bddab457dfb148b0f326a3": "384839770515781341b77bf52c761766",
".git/objects/d1/8b83a85ecd37d47b15f2276853245686f534a6": "2c975e24ddc39e9438d54e6feb0d51cb",
".git/objects/d1/d229cd9a187e398e8c60d8fe59c9e824179099": "0f258e7dc4afe17485eef17b624cfdaf",
".git/objects/d2/9ececdcb73f0352497ec399eef61ad6e413ba7": "a038314209d3cc61f9d4ae956a1027ed",
".git/objects/d2/b168808a6315788af03be2053c86205f3df91d": "f963df73cff2673bac61a497ae18bf0b",
".git/objects/d3/1d70ddf2ed475533ed8dd13f0576cf17d531d2": "ca06c8df153d9911e786fd6c5d32c1d3",
".git/objects/d4/740304921e63e27913196037e9a0fc81596cc3": "5fe4334afbdf9ba84c23061dc63e474e",
".git/objects/d5/993f28eadaf9a10df4550bdba6775973e78025": "7e60912fd54cd7fa01c9d450ee79fbe8",
".git/objects/d6/77bf2037a4826601880ccfc5cb4a7c40c9c143": "0dbd232523cbd1ab97ef6b19ce3eb6ad",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a3a992c7719d2a710d43e8b8907750251b4c96": "055c25a9919e5bc4a74c190735175669",
".git/objects/d8/fe61c5956393e5d0f4258d2dd9b1078a4cc994": "9d70d99cc98f50e84f55750ec2a1b44d",
".git/objects/d9/12179ae730c1281466aa88543dd4f50e62c4cb": "3c53b4e4b9c1c096f4b29e642a928c21",
".git/objects/de/e5d6e620d2661aa1e1835518852f8d225c4cf0": "195b6f6ea185af633dc2386eaf56fc80",
".git/objects/de/e8927aafeb5d7cb0c31b6b36a6635c9c3439df": "6ad445b78439cb1f667187fe6dc3d983",
".git/objects/df/46dc48934c1b4eeb374c2b4b3b3e8683687eb7": "098fe0645e4126f1a742b5d4007fc735",
".git/objects/e0/1e79065b28d8a9bf9747143e5077fd6c5fd00b": "811dc0eba6d483343df6492f935cd3ec",
".git/objects/e0/f63b112aadaae017226e9ad32da268f53801f5": "f7a6431d7d9933a079d7bd004da56e84",
".git/objects/e1/e85c4f3a4af1bb2ff0939bd2f506aea4564c47": "0b4c58afafc5c9302f006ed543150c3f",
".git/objects/e1/fa3c5367dfc7813b22c1c7f00017ae789fee61": "27313cb6cd400a0de303212ff916b3aa",
".git/objects/e2/84371e4f528e726d905c2f390a48e9732421c3": "a22abd05439b101394b3e4d41b9d45e8",
".git/objects/e5/44c7d33ffe23bae67a0ba2932bae790b39e399": "8e4afe5b2cd03658c3dcc9a6b93245ed",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/7457cfcd84d33c5815ba448a7a2c2b4e6f11b4": "18e63af4f53e7645bd3e7c38f27e44ad",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/1a793ec6e8716880572cfd96209241c622502b": "7e54e6d8b8eb55f560260284b11a7f65",
".git/objects/ef/c184c6727ac31d617c6e6e6209f9631b748e0a": "f902377621ecb620563bb2fceecdac77",
".git/objects/ef/fe43c82c8a76e699903aa93a61cfe038b6c0b7": "149cb51d48707101ab2fc9e600c845b9",
".git/objects/f2/4f3827a79f1f3f1a53b79463aaa1ad4d47eac0": "fb991b361593de6f512e0eae637b3d30",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/objects/f3/5511e10cf019704acecf7a2f453dfa8f08dca6": "93d813873f16425863ff0c5cf337976a",
".git/objects/f4/0420e189633d48691eb2e608d0882aeab85cc1": "51e3405a81e8b68b09e6a32a1b9292f9",
".git/objects/f4/ea16585ad38f833bebf7885527b808d294430b": "75d84c283c7cd50ae80d1edad9651b77",
".git/objects/f5/456db1e2839e3656a51690d52fd48b5218c21f": "c58291d1ed60056f75c7a61c3c818acc",
".git/objects/f5/b4ea74a227939ed71ef8a238e5a5f34b0a7caf": "4d6f3982f8181708a0a4aab36ac4177b",
".git/objects/f8/5b91b8b89969c39f95db538c16761732208a2a": "800634cf977b10ac092e696b3cb7a19e",
".git/objects/fa/5eedf1bfe18ff74996db25ccc5cbc78fe3ac23": "ebf8341964807ab185e062bd1922913d",
".git/objects/fa/a7a4152163c91eea26c1b66ecb29f96e6aec75": "095329c8293043993c9d9c453bc310ff",
".git/objects/fa/e70f6e55bf907ec161468e50611d8288baf653": "2f0944bffa563f9b4b5d245904034229",
".git/objects/fd/4bc434bfba1d8aed9d95333cc4b673725e40ec": "e53e4b401e376b6ad859ebae20be06aa",
".git/objects/fd/92cc4e1580dda715b486170487287d2fe88427": "e93cc25311cd7e8d090f61cded3689d5",
".git/ORIG_HEAD": "d14b96e1353b70110de1f67e3f2abb09",
".git/refs/heads/master": "d14b96e1353b70110de1f67e3f2abb09",
".git/refs/remotes/origin/master": "d14b96e1353b70110de1f67e3f2abb09",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "04b2a3b4d1a172a6bc1eff2d083841a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"CNAME": "d8a647c2ce05da8896e53dd82990b4e4",
"favicon.png": "5bf68a35f2724027339ba96a5f3eef40",
"icons/Icon-192.png": "c5a6f5c1059ffd2a9b13681f7ae4d524",
"icons/Icon-512.png": "de910ee9de754bdbc83bdbe561660976",
"icons/Icon-maskable-192.png": "4135775ae854a686380595a332e5885d",
"icons/Icon-maskable-512.png": "efd781b221efe9930aa3267db70de53b",
"index.html": "a62ae18673737fe2ff711138e6f8e919",
"/": "926687c879d64a26cb359917940fb17d",
"main.dart.js": "ecc0e84f7d1fa0b4581b7117de1724d6",
"manifest.json": "3be1cad9e465490b2cfa048871e1803d",
"version.json": "20c63961510dea11143d4f9a62d42fef",
"web-app/.dart_tool/package_config.json": "4cd1e334938a567ffa4b42101df601d3",
"web-app/analysis_options.yaml": "4b0d64ad067e016bc28e60dfadff5e39",
"web-app/CHANGELOG.md": "19d0dec99e75de01080e55f1dc6bb9d5",
"web-app/pubspec.lock": "ae688fb9c8b63160b1fbace0bd671dd4",
"web-app/pubspec.yaml": "85803d0ecea57c6405ee99a499ec6fb8",
"web-app/README.md": "034d7efb63acccc716505976c60cff23",
"web-app/web/index.html": "926687c879d64a26cb359917940fb17d",
"web-app/web/main.dart": "98a8be0b277fdcfaa6ed6cfed74eb149",
"web-app/web/styles.css": "6464ffd83e0e9cf564bfeb0fec2dcbda"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

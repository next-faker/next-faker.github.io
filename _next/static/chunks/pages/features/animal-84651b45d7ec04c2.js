(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[588],{3460:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/animal",function(){return a(5022)}])},7845:function(n,e,a){"use strict";var t=a(5893);e.Z={github:"https://github.com/Bunlong/next-faker",docsRepositoryBase:"https://github.com/Bunlong/next-faker",titleSuffix:" \u2013 next-faker",logo:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"mr-2 font-extrabold hidden md:inline",children:"next-faker"}),(0,t.jsx)("span",{className:"text-gray-600 font-normal hidden md:inline",children:"React hook for generating fake data for testing and development."})]}),head:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,t.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,t.jsx)("meta",{name:"description",content:"next-faker: React hook for generating fake data for testing and development."}),(0,t.jsx)("meta",{name:"og:description",content:"next-faker: React hook for generating fake data for testing and development."}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.jsx)("meta",{name:"twitter:image",content:"/next-faker.png"}),(0,t.jsx)("meta",{name:"twitter:site:domain",content:"next-faker.github.io/"}),(0,t.jsx)("meta",{name:"twitter:url",content:"https://next-faker.github.io/"}),(0,t.jsx)("meta",{name:"og:title",content:"next-faker: React hook for generating fake data for testing and development."}),(0,t.jsx)("meta",{name:"og:image",content:"/next-faker.png"}),(0,t.jsx)("meta",{name:"apple-mobile-web-app-title",content:"next-faker"}),(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,t.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"})]}),search:!0,prevLinks:!0,nextLinks:!0,footer:!0,footerEditLink:"Edit this page on GitHub",footerText:(0,t.jsxs)(t.Fragment,{children:["MIT ",(new Date).getFullYear()," \xa9 next-faker"]}),unstable_faviconGlyph:"\ud83d\udc4b"}},5022:function(n,e,a){"use strict";a.r(e);a(7294);var t=a(2763),r=a(7829),i=a.n(r),l=a(3805),s=a(7845);function o(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},i=Object.keys(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var m=function(n){return(0,l.withSSG)(i()({filename:"animal.mdx",route:"/features/animal",meta:{},pageMap:[{name:"features",children:[{name:"address",route:"/features/address"},{name:"animal",route:"/features/animal"},{name:"color",route:"/features/color"},{name:"commerce",route:"/features/commerce"},{name:"company",route:"/features/company"},{name:"database",route:"/features/database"},{name:"meta.json",meta:{address:"Address",animal:"Animal",color:"Color",commerce:"Commerce",company:"Company",database:"Database"}}],route:"/features"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Getting Started",features:"API"}}]},s.Z))(n)};function u(n){var e=n.components,a=o(n,["components"]);return(0,t.kt)(m,Object.assign({components:e},a),(0,t.kt)("h1",null,"Animal"),(0,t.kt)("p",null,"Module to generate animal related entries."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Bear"),(0,t.kt)("li",{parentName:"ul"},"Bird"),(0,t.kt)("li",{parentName:"ul"},"Cat"),(0,t.kt)("li",{parentName:"ul"},"Cetacean"),(0,t.kt)("li",{parentName:"ul"},"Cow"),(0,t.kt)("li",{parentName:"ul"},"Crocodilia"),(0,t.kt)("li",{parentName:"ul"},"Dog"),(0,t.kt)("li",{parentName:"ul"},"Fish"),(0,t.kt)("li",{parentName:"ul"},"Horse"),(0,t.kt)("li",{parentName:"ul"},"Insect"),(0,t.kt)("li",{parentName:"ul"},"Lion"),(0,t.kt)("li",{parentName:"ul"},"Rabbit"),(0,t.kt)("li",{parentName:"ul"},"Snake"),(0,t.kt)("li",{parentName:"ul"},"Type")),(0,t.kt)("h2",null,"Bear"),(0,t.kt)("p",null,"Returns a random bear species."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"language-ts",parentName:"pre"},"// bear function\nanimal.bear(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { animal } = useFaker();\n\n// usage\nanimal.bear(); // => \"American black bear\"\nanimal.bear(); // 'Asian black bear'\n")),(0,t.kt)("h2",null,"Bird"),(0,t.kt)("p",null,"Returns a random bird species."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"language-ts",parentName:"pre"},"// bird function\nanimal.bird(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { animal } = useFaker();\n\n// usage\nanimal.bird(); // => \"Acorn Woodpecker\"\nanimal.bird(); // 'Buller's Shearwater'\n")),(0,t.kt)("h2",null,"Cat"),(0,t.kt)("p",null,"Returns a random cat breed."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"language-ts",parentName:"pre"},"// cat function\nanimal.cat(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { animal } = useFaker();\n\n// usage\nanimal.cat(); // => \"Norwegian Forest Cat\"\nanimal.cat(); // 'Singapura'\n")),(0,t.kt)("h2",null,"Cetacean"),(0,t.kt)("p",null,"Returns a random cetacean species."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"language-ts",parentName:"pre"},"// cetacean function\nanimal.cetacean(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { animal } = useFaker();\n\n// usage\nanimal.cetacean(); // => \"Fraser\u2019s Dolphin\"\nanimal.cetacean(); // 'Spinner Dolphin'\n")),(0,t.kt)("h2",null,"Cow"),(0,t.kt)("p",null,"Returns a random cow species."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"language-ts",parentName:"pre"},"// cow function\nanimal.cow(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { animal } = useFaker();\n\n// usage\nanimal.cow(); // => \"Kostroma cattle\"\nanimal.cow(); // 'Brava'\n")),(0,t.kt)("h2",null,"Crocodilia"),(0,t.kt)("p",null,"Returns a random crocodilian species."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"language-ts",parentName:"pre"},"// crocodilia function\nanimal.crocodilia(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { animal } = useFaker();\n\n// usage\nanimal.crocodilia(); // => \"Morelet\u2019s Crocodile\"\nanimal.crocodilia(); // 'Philippine Crocodile'\n")),(0,t.kt)("h2",null,"Dog"),(0,t.kt)("p",null,"Returns a random dog breed."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"language-ts",parentName:"pre"},"// dog function\nanimal.dog(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { animal } = useFaker();\n\n// usage\nanimal.dog(); // => \"Kuvasz\"\nanimal.dog(); // 'Irish Water Spaniel'\n")),(0,t.kt)("h2",null,"Fish"),(0,t.kt)("p",null,"Returns a random fish species."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"language-ts",parentName:"pre"},"// fish function\nanimal.fish(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { animal } = useFaker();\n\n// usage\nanimal.fish(); // => \"Hilsa shad\"\nanimal.fish(); // 'Mandarin fish'\n")),(0,t.kt)("h2",null,"Horse"),(0,t.kt)("p",null,"Returns a random horse breed."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"language-ts",parentName:"pre"},"// horse function\nanimal.horse(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { animal } = useFaker();\n\n// usage\nanimal.horse(); // => \"M'Par\"\nanimal.horse(); // 'Swedish Warmblood'\n")),(0,t.kt)("h2",null,"Insect"),(0,t.kt)("p",null,"Returns a random insect species."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"language-ts",parentName:"pre"},"// insect function\nanimal.insect(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { animal } = useFaker();\n\n// usage\nanimal.insect(); // => \"Mossyrose gall wasp\"\nanimal.insect(); // 'Pyramid ant'\n")),(0,t.kt)("h2",null,"Lion"),(0,t.kt)("p",null,"Returns a random lion species."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"language-ts",parentName:"pre"},"// lion function\nanimal.lion(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { animal } = useFaker();\n\n// usage\nanimal.lion(); // => \"Northeast Congo Lion\"\nanimal.lion(); // 'Northeast Congo Lion'\n")),(0,t.kt)("h2",null,"Rabbit"),(0,t.kt)("p",null,"Returns a random rabbit species."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"language-ts",parentName:"pre"},"// rabbit function\nanimal.rabbit(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { animal } = useFaker();\n\n// usage\nanimal.rabbit(); // => \"Havana\"\nanimal.rabbit(); // 'Florida White'\n")),(0,t.kt)("h2",null,"Snake"),(0,t.kt)("p",null,"Returns a random snake species."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"language-ts",parentName:"pre"},"// snake function\nanimal.snake(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { animal } = useFaker();\n\n// usage\nanimal.snake(); // => \"Selayer reticulated python\"\nanimal.snake(); // 'Eyelash viper'\n")),(0,t.kt)("h2",null,"Type"),(0,t.kt)("p",null,"Returns a random animal type."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"language-ts",parentName:"pre"},"// type function\nanimal.type(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { animal } = useFaker();\n\n// usage\nanimal.type(); // => \"crocodilia\"\nanimal.type(); // 'crocodilia'\n")))}u.isMDXComponent=!0,e.default=u}},function(n){n.O(0,[386,774,888,179],(function(){return e=3460,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
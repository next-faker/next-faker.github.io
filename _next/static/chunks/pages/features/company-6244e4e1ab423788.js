(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[990],{8296:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/company",function(){return t(7581)}])},7845:function(e,n,t){"use strict";var a=t(5893);n.Z={github:"https://github.com/Bunlong/next-faker",docsRepositoryBase:"https://github.com/Bunlong/next-faker",titleSuffix:" \u2013 next-faker",logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"mr-2 font-extrabold hidden md:inline",children:"next-faker"}),(0,a.jsx)("span",{className:"text-gray-600 font-normal hidden md:inline",children:"React hook for generating fake data for testing and development."})]}),head:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,a.jsx)("meta",{name:"description",content:"next-faker: React hook for generating fake data for testing and development."}),(0,a.jsx)("meta",{name:"og:description",content:"next-faker: React hook for generating fake data for testing and development."}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:image",content:"/next-faker.png"}),(0,a.jsx)("meta",{name:"twitter:site:domain",content:"next-faker.github.io/"}),(0,a.jsx)("meta",{name:"twitter:url",content:"https://next-faker.github.io/"}),(0,a.jsx)("meta",{name:"og:title",content:"next-faker: React hook for generating fake data for testing and development."}),(0,a.jsx)("meta",{name:"og:image",content:"/next-faker.png"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-title",content:"next-faker"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,a.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"})]}),search:!0,prevLinks:!0,nextLinks:!0,footer:!0,footerEditLink:"Edit this page on GitHub",footerText:(0,a.jsxs)(a.Fragment,{children:["MIT ",(new Date).getFullYear()," \xa9 next-faker"]}),unstable_faviconGlyph:"\ud83d\udc4b"}},7581:function(e,n,t){"use strict";t.r(n);t(7294);var a=t(2763),r=t(7829),o=t.n(r),s=t(3805),m=t(7845);function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=function(e){return(0,s.withSSG)(o()({filename:"company.mdx",route:"/features/company",meta:{},pageMap:[{name:"features",children:[{name:"address",route:"/features/address"},{name:"animal",route:"/features/animal"},{name:"color",route:"/features/color"},{name:"commerce",route:"/features/commerce"},{name:"company",route:"/features/company"},{name:"meta.json",meta:{address:"Address",animal:"Animal",color:"Color",commerce:"Commerce",company:"Company"}}],route:"/features"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Getting Started",features:"API"}}]},m.Z))(e)};function i(e){var n=e.components,t=p(e,["components"]);return(0,a.kt)(c,Object.assign({components:n},t),(0,a.kt)("h1",null,"Company"),(0,a.kt)("p",null,"Module to generate company related entries."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bs"),(0,a.kt)("li",{parentName:"ul"},"Bs Adjective"),(0,a.kt)("li",{parentName:"ul"},"Bs Buzz"),(0,a.kt)("li",{parentName:"ul"},"Bs Noun"),(0,a.kt)("li",{parentName:"ul"},"Catch Phrase"),(0,a.kt)("li",{parentName:"ul"},"Catch Phrase Adjective"),(0,a.kt)("li",{parentName:"ul"},"Catch Phrase Descriptor"),(0,a.kt)("li",{parentName:"ul"},"Catch Phrase Noun"),(0,a.kt)("li",{parentName:"ul"},"Company Name"),(0,a.kt)("li",{parentName:"ul"},"Company Suffix"),(0,a.kt)("li",{parentName:"ul"},"Suffixes")),(0,a.kt)("h2",null,"Bs"),(0,a.kt)("p",null,"Generates a random company bs phrase."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// bs function\ncompany.bs(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { company } = useFaker();\n\n// usage\ncompany.bs(); // => \"deliver distributed mindshare\"\ncompany.bs(); // 'cultivate synergistic e-markets'\n")),(0,a.kt)("h2",null,"Bs Adjective"),(0,a.kt)("p",null,"Returns a random company bs adjective."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// bsAdjective function\ncompany.bsAdjective(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { company } = useFaker();\n\n// usage\ncompany.bsAdjective(); // => \"real-time\"\ncompany.bsAdjective(); // 'one-to-one'\n")),(0,a.kt)("h2",null,"Bs Buzz"),(0,a.kt)("p",null,"Returns a random company bs buzz word."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// bsBuzz function\ncompany.bsBuzz(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { company } = useFaker();\n\n// usage\ncompany.bsBuzz(); // => \"deliver\"\ncompany.bsBuzz(); // 'empower'\n")),(0,a.kt)("h2",null,"Bs Noun"),(0,a.kt)("p",null,"Returns a random company bs noun."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// bsNoun function\ncompany.bsNoun(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { company } = useFaker();\n\n// usage\ncompany.bsNoun(); // => \"architectures\"\ncompany.bsNoun(); // 'paradigms'\n")),(0,a.kt)("h2",null,"Catch Phrase"),(0,a.kt)("p",null,"Generates a random business catch phrase."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// catchPhrase function\ncompany.catchPhrase(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { company } = useFaker();\n\n// usage\ncompany.catchPhrase(); // => \"Optimized maximized paradigm\"\ncompany.catchPhrase(); // 'Upgradable systematic flexibility'\n")),(0,a.kt)("h2",null,"Catch Phrase Adjective"),(0,a.kt)("p",null,"Returns a random catch phrase adjective."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// catchPhraseAdjective function\ncompany.catchPhraseAdjective(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { company } = useFaker();\n\n// usage\ncompany.catchPhraseAdjective(); // => \"Optimized\"\ncompany.catchPhraseAdjective(); // 'Multi-tiered'\n")),(0,a.kt)("h2",null,"Catch Phrase Descriptor"),(0,a.kt)("p",null,"Returns a random catch phrase descriptor."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// catchPhraseAdjective function\ncompany.catchPhraseDescriptor(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { company } = useFaker();\n\n// usage\ncompany.catchPhraseDescriptor(); // => \"intermediate\"\ncompany.catchPhraseDescriptor(); // 'composite'\n")),(0,a.kt)("h2",null,"Catch Phrase Noun"),(0,a.kt)("p",null,"Returns a random catch phrase noun."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// catchPhraseNoun function\ncompany.catchPhraseNoun(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { company } = useFaker();\n\n// usage\ncompany.catchPhraseNoun(); // => \"knowledge user\"\ncompany.catchPhraseNoun(); // 'leverage'\n")),(0,a.kt)("h2",null,"Company Name"),(0,a.kt)("p",null,"Generates a random company name."),(0,a.kt)("h3",null,"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{align:"left",parentName:"tr"},"Name"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Type"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Default"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"format?"),(0,a.kt)("td",{align:"left",parentName:"tr"},"number"),(0,a.kt)("td",{align:"left",parentName:"tr"}),(0,a.kt)("td",{align:"left",parentName:"tr"},"The optional format index used to select a format.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// companyName function\ncompany.companyName(format?: number): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { company } = useFaker();\n\n// usage\ncompany.companyName(); // => \"Medhurst - Ratke\"\ncompany.companyName(); // 'Zieme, Hauck and McClure'\n")),(0,a.kt)("h2",null,"Company Suffix"),(0,a.kt)("p",null,"Returns a random company suffix."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// companySuffix function\ncompany.companySuffix(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { company } = useFaker();\n\n// usage\ncompany.companySuffix(); // => \"LLC\"\ncompany.companySuffix(); // 'and Sons'\n")),(0,a.kt)("h2",null,"Suffixes"),(0,a.kt)("p",null,"Returns an array with possible company name suffixes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string[]"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// suffixes function\ncompany.suffixes(): string[]\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { company } = useFaker();\n\n// usage\ncompany.suffixes(); // => [\"Inc\",\"and Sons\",\"LLC\",\"Group\"]\ncompany.suffixes(); // [ 'Inc', 'and Sons', 'LLC', 'Group' ]\n")))}i.isMDXComponent=!0,n.default=i}},function(e){e.O(0,[386,774,888,179],(function(){return n=8296,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
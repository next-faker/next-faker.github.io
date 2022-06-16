(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{8187:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/address",function(){return n(4690)}])},7845:function(e,t,n){"use strict";var a=n(5893);t.Z={github:"https://github.com/Bunlong/next-faker",docsRepositoryBase:"https://github.com/Bunlong/next-faker",titleSuffix:" \u2013 next-faker",logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"mr-2 font-extrabold hidden md:inline",children:"next-faker"}),(0,a.jsx)("span",{className:"text-gray-600 font-normal hidden md:inline",children:"React hook for generating fake data for testing and development."})]}),head:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,a.jsx)("meta",{name:"description",content:"next-faker: React hook for generating fake data for testing and development."}),(0,a.jsx)("meta",{name:"og:description",content:"next-faker: React hook for generating fake data for testing and development."}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:image",content:"/next-faker.png"}),(0,a.jsx)("meta",{name:"twitter:site:domain",content:"next-faker.github.io/"}),(0,a.jsx)("meta",{name:"twitter:url",content:"https://next-faker.github.io/"}),(0,a.jsx)("meta",{name:"og:title",content:"next-faker: React hook for generating fake data for testing and development."}),(0,a.jsx)("meta",{name:"og:image",content:"/next-faker.png"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-title",content:"next-faker"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,a.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"})]}),search:!0,prevLinks:!0,nextLinks:!0,footer:!0,footerEditLink:"Edit this page on GitHub",footerText:(0,a.jsxs)(a.Fragment,{children:["MIT ",(new Date).getFullYear()," \xa9 next-faker"]}),unstable_faviconGlyph:"\ud83d\udc4b"}},4690:function(e,t,n){"use strict";n.r(t);n(7294);var a=n(2763),r=n(7829),l=n.n(r),s=n(3805),i=n(7845);function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=function(e){return(0,s.withSSG)(l()({filename:"address.mdx",route:"/features/address",meta:{},pageMap:[{name:"features",children:[{name:"address",route:"/features/address"},{name:"animal",route:"/features/animal"},{name:"meta.json",meta:{address:"Address",animal:"Animal"}}],route:"/features"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Getting Started",features:"API"}}]},i.Z))(e)};function m(e){var t=e.components,n=d(e,["components"]);return(0,a.kt)(o,Object.assign({components:t},n),(0,a.kt)("h1",null,"Address"),(0,a.kt)("p",null,"Module to generate addresses and locations."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Building Number"),(0,a.kt)("li",{parentName:"ul"},"Cardinal Direction"),(0,a.kt)("li",{parentName:"ul"},"City"),(0,a.kt)("li",{parentName:"ul"},"City Name"),(0,a.kt)("li",{parentName:"ul"},"City Prefix"),(0,a.kt)("li",{parentName:"ul"},"City Suffix"),(0,a.kt)("li",{parentName:"ul"},"Country"),(0,a.kt)("li",{parentName:"ul"},"Country Code"),(0,a.kt)("li",{parentName:"ul"},"County"),(0,a.kt)("li",{parentName:"ul"},"Direction"),(0,a.kt)("li",{parentName:"ul"},"Latitude"),(0,a.kt)("li",{parentName:"ul"},"Longitude"),(0,a.kt)("li",{parentName:"ul"},"Nearby GPSCoordinate"),(0,a.kt)("li",{parentName:"ul"},"Ordinal Direction"),(0,a.kt)("li",{parentName:"ul"},"Secondary Address"),(0,a.kt)("li",{parentName:"ul"},"State"),(0,a.kt)("li",{parentName:"ul"},"State Abbr"),(0,a.kt)("li",{parentName:"ul"},"Street"),(0,a.kt)("li",{parentName:"ul"},"Street Address"),(0,a.kt)("li",{parentName:"ul"},"Street Name"),(0,a.kt)("li",{parentName:"ul"},"Street Prefix"),(0,a.kt)("li",{parentName:"ul"},"Street Suffix"),(0,a.kt)("li",{parentName:"ul"},"Time Zone"),(0,a.kt)("li",{parentName:"ul"},"Zip Code"),(0,a.kt)("li",{parentName:"ul"},"Zip Code By State")),(0,a.kt)("h2",null,"Building Number"),(0,a.kt)("p",null,"Generates a random building number."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// buildingNumber function\naddress.buildingNumber(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.buildingNumber(); // => \"5786\"\naddress.buildingNumber(); // '379'\n")),(0,a.kt)("h2",null,"Cardinal Direction"),(0,a.kt)("p",null,"Returns a random cardinal direction (north, east, south, west)."),(0,a.kt)("h3",null,"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{align:"left",parentName:"tr"},"Name"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Type"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Default"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"useAbbr"),(0,a.kt)("td",{align:"left",parentName:"tr"},"boolean"),(0,a.kt)("td",{align:"left",parentName:"tr"},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{align:"left",parentName:"tr"},"If true this will return abbreviated directions (N, E, etc). Otherwise this will return the long name.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// cardinalDirection function\naddress.cardinalDirection(useAbbr: boolean = false): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.cardinalDirection(); // => \"South\"\naddress.cardinalDirection(); // 'North'\naddress.cardinalDirection(false); // 'South'\naddress.cardinalDirection(true); // 'N'\n")),(0,a.kt)("h2",null,"City"),(0,a.kt)("p",null,"Generates a random localized city name."),(0,a.kt)("h3",null,"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{align:"left",parentName:"tr"},"Name"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Type"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Default"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"format?"),(0,a.kt)("td",{align:"left",parentName:"tr"},"number | string"),(0,a.kt)("td",{align:"left",parentName:"tr"}),(0,a.kt)("td",{align:"left",parentName:"tr"},"The index of the format to use. Deprecated do not use.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// city function\naddress.city(format?: number | string): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.city(); // => \"Larrymouth\"\naddress.city(); // 'East Jarretmouth'\n")),(0,a.kt)("h2",null,"City Name"),(0,a.kt)("p",null,"Returns a random localized and existing city name."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// cityName function\naddress.cityName(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.cityName(); // => \"Menifee\"\naddress.cityName(); // 'San Rafael'\n")),(0,a.kt)("h2",null,"Country"),(0,a.kt)("p",null,"Returns a random country name."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// country function\naddress.country(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.country(); // => \"Malta\"\naddress.country(); // 'Greece'\n")),(0,a.kt)("h2",null,"Country Code"),(0,a.kt)("p",null,"Returns a random country code."),(0,a.kt)("h3",null,"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{align:"left",parentName:"tr"},"Name"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Type"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Default"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"alphaCode"),(0,a.kt)("td",{align:"left",parentName:"tr"},"'alpha-2' | 'alpha-3'"),(0,a.kt)("td",{align:"left",parentName:"tr"},(0,a.kt)("inlineCode",{parentName:"td"},"'alpha-2'")),(0,a.kt)("td",{align:"left",parentName:"tr"},"The code to return. Can be either ",(0,a.kt)("inlineCode",{parentName:"td"},"'alpha-2'")," (2 letter code) or ",(0,a.kt)("inlineCode",{parentName:"td"},"'alpha-3'")," (three letter code).")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// countryCode function\naddress.countryCode(alphaCode: 'alpha-2' | 'alpha-3' = 'alpha-2'): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.countryCode(); // => \"MA\"\naddress.countryCode(); // 'SJ'\naddress.countryCode('alpha-2'); // 'GA'\naddress.countryCode('alpha-3'); // 'TJK'\n")),(0,a.kt)("h2",null,"County"),(0,a.kt)("p",null,"Returns a random localized county."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// county function\naddress.county(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.county(); // => \"Borders\"\naddress.county(); // 'Cambridgeshire'\n")),(0,a.kt)("h2",null,"Direction"),(0,a.kt)("p",null,"Returns a random direction (cardinal and ordinal; northwest, east, etc)."),(0,a.kt)("h3",null,"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{align:"left",parentName:"tr"},"Name"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Type"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Default"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"useAbbr"),(0,a.kt)("td",{align:"left",parentName:"tr"},"boolean"),(0,a.kt)("td",{align:"left",parentName:"tr"},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{align:"left",parentName:"tr"},"If true this will return abbreviated directions (NW, E, etc). Otherwise this will return the long name.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// direction function\naddress.direction(useAbbr: boolean = false): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.direction(); // => \"Northeast\"\naddress.direction(); // 'Northeast'\naddress.direction(false); // 'South'\naddress.direction(true); // 'NE'\n")),(0,a.kt)("h2",null,"Latitude"),(0,a.kt)("p",null,"Generates a random latitude."),(0,a.kt)("h3",null,"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{align:"left",parentName:"tr"},"Name"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Type"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Default"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"max"),(0,a.kt)("td",{align:"left",parentName:"tr"},"number"),(0,a.kt)("td",{align:"left",parentName:"tr"},(0,a.kt)("inlineCode",{parentName:"td"},"90")),(0,a.kt)("td",{align:"left",parentName:"tr"},"The upper bound for the latitude to generate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"min"),(0,a.kt)("td",{align:"left",parentName:"tr"},"number"),(0,a.kt)("td",{align:"left",parentName:"tr"},(0,a.kt)("inlineCode",{parentName:"td"},"-90")),(0,a.kt)("td",{align:"left",parentName:"tr"},"The lower bound for the latitude to generate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"precision"),(0,a.kt)("td",{align:"left",parentName:"tr"},"number"),(0,a.kt)("td",{align:"left",parentName:"tr"},(0,a.kt)("inlineCode",{parentName:"td"},"4")),(0,a.kt)("td",{align:"left",parentName:"tr"},"The number of decimal points of precision for the latitude.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// latitude function\naddress.latitude(max: number = 90, min: number = -90, precision: number = 4): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.latitude(); // => \"8.7864\"\naddress.latitude(); // '-30.9501'\naddress.latitude(10, -10, 5); // '2.68452'\n")),(0,a.kt)("h2",null,"Longitude"),(0,a.kt)("p",null,"Generates a random longitude."),(0,a.kt)("h3",null,"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{align:"left",parentName:"tr"},"Name"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Type"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Default"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"max"),(0,a.kt)("td",{align:"left",parentName:"tr"},"number"),(0,a.kt)("td",{align:"left",parentName:"tr"},(0,a.kt)("inlineCode",{parentName:"td"},"180")),(0,a.kt)("td",{align:"left",parentName:"tr"},"The upper bound for the longitude to generate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"min"),(0,a.kt)("td",{align:"left",parentName:"tr"},"number"),(0,a.kt)("td",{align:"left",parentName:"tr"},(0,a.kt)("inlineCode",{parentName:"td"},"-180")),(0,a.kt)("td",{align:"left",parentName:"tr"},"The lower bound for the longitude to generate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"precision"),(0,a.kt)("td",{align:"left",parentName:"tr"},"number"),(0,a.kt)("td",{align:"left",parentName:"tr"},(0,a.kt)("inlineCode",{parentName:"td"},"4")),(0,a.kt)("td",{align:"left",parentName:"tr"},"The number of decimal points of precision for the longitude.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// longitude function\naddress.longitude(max: number = 180, min: number = -180, precision: number = 4): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.longitude(); // => \"17.5729\"\naddress.longitude(); // '-154.0226'\naddress.longitude(10, -10, 5); // '-4.03620'\n")),(0,a.kt)("h2",null,"Nearby GPSCoordinate"),(0,a.kt)("p",null,"Generates a random GPS coordinate within the specified radius from the given coordinate."),(0,a.kt)("h3",null,"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{align:"left",parentName:"tr"},"Name"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Type"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Default"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"coordinate?"),(0,a.kt)("td",{align:"left",parentName:"tr"},"[latitude: number, longitude: number]"),(0,a.kt)("td",{align:"left",parentName:"tr"}),(0,a.kt)("td",{align:"left",parentName:"tr"},"The original coordinate to get a new coordinate close to. If no coordinate is given, a random one will be chosen.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"radius"),(0,a.kt)("td",{align:"left",parentName:"tr"},"number"),(0,a.kt)("td",{align:"left",parentName:"tr"},(0,a.kt)("inlineCode",{parentName:"td"},"10")),(0,a.kt)("td",{align:"left",parentName:"tr"},"The maximum distance from the given coordinate to the new coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"isMetric"),(0,a.kt)("td",{align:"left",parentName:"tr"},"boolean"),(0,a.kt)("td",{align:"left",parentName:"tr"},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{align:"left",parentName:"tr"},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," assume the radius to be in kilometers. If ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," for miles.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// nearbyGPSCoordinate function\naddress.nearbyGPSCoordinate(coordinate?: [latitude: number, longitude: number], radius: number = 10, isMetric: boolean = false): [latitude: string, longitude: string]\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.nearbyGPSCoordinate(); // => [\"8.7864\",\"33.4241\"]\naddress.nearbyGPSCoordinate(); // [ '33.8475', '-170.5953' ]\naddress.nearbyGPSCoordinate([33, -170]); // [ '33.0165', '-170.0636' ]\naddress.nearbyGPSCoordinate([33, -170], 1000, true); // [ '37.9163', '-179.2408' ]\n")),(0,a.kt)("h2",null,"Ordinal Direction"),(0,a.kt)("p",null,"Returns a random ordinal direction (northwest, southeast, etc)."),(0,a.kt)("h3",null,"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{align:"left",parentName:"tr"},"Name"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Type"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Default"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"useAbbr"),(0,a.kt)("td",{align:"left",parentName:"tr"},"boolean"),(0,a.kt)("td",{align:"left",parentName:"tr"},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{align:"left",parentName:"tr"},"If true this will return abbreviated directions (NW, SE, etc). Otherwise this will return the long name.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// ordinalDirection function\naddress.ordinalDirection(useAbbr: boolean = false): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.ordinalDirection(); // => \"Southeast\"\naddress.ordinalDirection(); // 'Northeast'\naddress.ordinalDirection(false); // 'Northwest'\naddress.ordinalDirection(true); // 'NE'\n")),(0,a.kt)("h2",null,"Secondary Address"),(0,a.kt)("p",null,"Generates a random localized secondary address. This refers to a specific location at a given address such as an apartment or room number."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// secondaryAddress function\naddress.secondaryAddress(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.secondaryAddress(); // => \"Suite 578\"\naddress.secondaryAddress(); // 'Apt. 861'\n")),(0,a.kt)("h2",null,"State"),(0,a.kt)("p",null,"Returns a random localized state from this country."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// state function\naddress.state(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.state(); // => \"Nevada\"\naddress.state(); // 'Georgia'\n")),(0,a.kt)("h2",null,"State Abbr"),(0,a.kt)("p",null,"Returns a random localized state's abbreviated name from this country."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// stateAbbr function\naddress.stateAbbr(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.stateAbbr(); // => \"NV\"\naddress.stateAbbr(); // 'ND'\n")),(0,a.kt)("h2",null,"Street"),(0,a.kt)("p",null,"Generates a random localized street name."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// street function\naddress.street(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.street(); // => \"Medhurst Road\"\naddress.street(); // 'Schroeder Isle'\n")),(0,a.kt)("h2",null,"Street Address"),(0,a.kt)("p",null,"Generates a random localized street address."),(0,a.kt)("h3",null,"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{align:"left",parentName:"tr"},"Name"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Type"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Default"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"useFullAddress"),(0,a.kt)("td",{align:"left",parentName:"tr"},"boolean"),(0,a.kt)("td",{align:"left",parentName:"tr"},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{align:"left",parentName:"tr"},"When true this will generate a full address. Otherwise it will just generate a street address.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// streetAddress function\naddress.streetAddress(useFullAddress: boolean = false): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.streetAddress(); // => \"5786 Little Summit\"\naddress.streetAddress(); // '0917 O'Conner Estates'\naddress.streetAddress(false); // '34830 Erdman Hollow'\naddress.streetAddress(true); // '3393 Ronny Way Apt. 742'\n")),(0,a.kt)("h2",null,"Street Name"),(0,a.kt)("p",null,"Returns a random localized street name."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// streetName function\naddress.streetName(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.streetName(); // => \"Medhurst Road\"\naddress.streetName(); // 'Cavill Avenue'\n")),(0,a.kt)("h2",null,"Street Prefix"),(0,a.kt)("p",null,"Returns a random localized street prefix."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// streetPrefix function\naddress.streetPrefix(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.streetPrefix(); // => \"b\"\naddress.streetPrefix(); // 'Boame'\n")),(0,a.kt)("h2",null,"Street Suffix"),(0,a.kt)("p",null,"Returns a random localized street suffix."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// streetSuffix function\naddress.streetSuffix(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.streetSuffix(); // => \"Orchard\"\naddress.streetSuffix(); // 'Streets'\n")),(0,a.kt)("h2",null,"Time Zone"),(0,a.kt)("p",null,"Returns a random time zone."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// timeZone function\naddress.timeZone(): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.timeZone(); // => \"Asia/Riyadh\"\naddress.timeZone(); // 'Pacific/Guam'\n")),(0,a.kt)("h2",null,"Zip Code"),(0,a.kt)("p",null,"Generates random zip code from specified format. If format is not specified, the locale's zip format is used."),(0,a.kt)("h3",null,"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{align:"left",parentName:"tr"},"Name"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Type"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Default"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"format?"),(0,a.kt)("td",{align:"left",parentName:"tr"},"string"),(0,a.kt)("td",{align:"left",parentName:"tr"}),(0,a.kt)("td",{align:"left",parentName:"tr"},"The optional format used to generate the the zip code. By default, a random format is used from the locale zip formats.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// zipCode function\naddress.zipCode(format?: string): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.zipCode(); // => \"57868-5846\"\naddress.zipCode(); // '17839'\naddress.zipCode('####'); // '6925'\n")),(0,a.kt)("h2",null,"Zip Code By State"),(0,a.kt)("p",null,"Generates random zip code from state abbreviation. If state abbreviation is not specified, a random zip code is generated according to the locale's zip format. Only works for locales with postcode_by_state definition. If a locale does not have a postcode_by_state definition, a random zip code is generated according to the locale's zip format."),(0,a.kt)("h3",null,"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{align:"left",parentName:"tr"},"Name"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Type"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Default"),(0,a.kt)("th",{align:"left",parentName:"tr"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{align:"left",parentName:"tr"},"state"),(0,a.kt)("td",{align:"left",parentName:"tr"},"string"),(0,a.kt)("td",{align:"left",parentName:"tr"}),(0,a.kt)("td",{align:"left",parentName:"tr"},"The abbreviation of the state to generate the zip code for.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," string"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-ts",parentName:"pre"},"// zipCodeByState function\naddress.zipCodeByState(state: string): string\n\n// import\nimport { useFaker } from 'next-faker';\n\nconst { address } = useFaker();\n\n// usage\naddress.zipCodeByState(); // => \"57868-5846\"\naddress.zipCodeByState(\"AK\"); // '99595'\naddress.zipCodeByState(\"??\"); // '47683-9880'\n")))}m.isMDXComponent=!0,t.default=m}},function(e){e.O(0,[386,774,888,179],(function(){return t=8187,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
# Hovedrepo for deltahouse

Følg disse instruksene etter du har klonet repoet lokalt:
1. Installer [node.js](https://nodejs.org/en/) (bruk LTS ikke Current) 
2. Åpne et terminalvindu og sjekk at node er installert riktig ved å kjøre `node -v` som bør gi v16.13.2 og `npm -v` som bør gi 8.3.0
3. Bruk npm til å installere yarn ved bruk av terminalen: `npm install --global yarn` og sjekk at yarn er v1.22.x `yarn -v`
4. `yarn global add @gridsome/cli`for å installere gridsome globalt og sjekk at det funka med `gridsome -v`
5. naviger til mappa tmp-deltahouse i terminalen og kjør `yarn install` (ikke noe etter install)
6. Fra tmp-deltahouse, kjør `gridsome develop`om denne kjører som den skal, lages en lokal versjon av deltahouse som dere kan åpne i nettlesern 

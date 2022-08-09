<!-- Defines header and footer -->
<template>
  <div class="layout">
    <header id="top-header">
      <g-link to="/">
        <div>
          <g-image
            src="~/assets/img/delta.png"
            width="380vh"
            alt="delta logo"
          />
        </div>
        <div class="top-text">
          <h1>Delta</h1>
          <h2>linjeforeningen for matematikk og fysikk</h2>
        </div>
      </g-link>
    </header>
    <nav>
      <ul>
        <li><g-link to="/om-oss/">Om oss</g-link></li>
        <li><g-link to="/komiteer/">Komiteer</g-link></li>
        <li><g-link to="/kompendier/">Kompendier</g-link></li>
        <li><g-link to="/new-student/">Ny student</g-link></li>
        <li><g-link to="/div/">Annet</g-link></li>
      </ul>
    </nav>
    <div class="body">
      <slot />
    </div>
    <footer>
      <h4>Kontaktinfo</h4>
      <p>Post: NV-Fakultetet, Realfagbygget</p>
      <p>Høgskoleringen 5, 7491 Trondheim</p>
      <br />
      <p>Mail til styret: delta@delta.org.ntnu.no</p>
      <p>organisasjonsnummer: 996 510 352</p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
* {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  max-width: 100%;
}
html {
  font-size: 62.5%;
}
#top-header {
  font-size: 2.5vh;
  font-weight: 700;
  margin: 2rem 10vw;
}
#top-header a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
}
#top-header img {
  transition: transform 0.2s;
  }
#top-header img:hover {
  transform: scale(1.05);
  filter: brightness(0);
}
#top-header .top-text {
  margin: 0 0 0.5rem 5rem;
}
nav ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
nav li {
  margin: 0 .5vh;
}
nav li a {
  display: block;
  padding: .5vh;
}
nav li a:hover {
  background-color: #002500;
}
nav ul,
nav {
  list-style: none;
  background-color: #005500;
  color: white;
  font-size: 1.8vh;
  font-weight: 400;
}
a {
  text-decoration: none;
  color: inherit;
}

footer {
  text-align: center;
  line-height: 10px;
  margin: 40px 0 0 0;
  background-color: #005500;
  color: white;
  padding: 10px 0 30px 0;
}
footer p {
  font-size: 1.6em;
  line-height: 1.5em;
}
footer h4 {
  font-size: 1.6rem;
  line-height: 2.5rem;
}
</style>

:root {
  --primary-color: #ffd700;  /* Yellow */
  --secondary-color: #c0c0c0; /* Silver */
  --background-color: #000000; /* Black */
  --text-color: #ffffff;
  --card-bg: #1a1a1a;
  --hover-color: #fff700;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
  overflow-x: hidden;
}

#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: var(--background-color);
}

header, main, footer {
  position: relative;
  z-index: 2;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background-color: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid var(--secondary-color);
  backdrop-filter: blur(10px);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  display: flex;
  align-items: center;
}

.logo-gif {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--primary-color);
}

button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

button:hover {
  transform: translateY(-2px);
}

.login-btn {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.purchase-btn {
  background-color: var(--primary-color);
  color: black;
  font-weight: bold;
}

.announcement {
  text-align: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);  
  border: 1px solid rgba(255, 215, 0, 0.3);
  margin: 1rem auto;
  max-width: 800px;
  border-radius: 8px;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.1);
}

.announcement p {
  margin: 0.5rem 0;
}

.announcement a {
  color: #87CEEB;
  text-decoration: none;
  font-weight: bold;
}

.announcement a:hover {
  color: #6495ED;
}

.hero {
  text-align: center;
  padding: 8rem 2rem;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  position: relative;
  color: var(--text-color);
}

.hero h1 span {
  display: inline-block;
  opacity: 0.9;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  animation: colorFlow 5s linear infinite;  
  animation-play-state: paused;
}

@keyframes colorFlow {
  0% { color: #87CEEB; }  /* Light Blue */
  33% { color: #FFD700; }  /* Yellow */
  66% { color: #000000; }  /* Black */
  100% { color: #87CEEB; }  /* Back to Light Blue */
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-shadow: 0 0 10px rgba(128, 128, 128, 0.5); /* Grey glow */
  padding: 10px;
  position: relative;
}

.hero p::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 5px;
  background: transparent;
  border: 2px solid rgba(128, 128, 128, 0.3);
  filter: blur(4px);
  z-index: -1;
}

.emphasis-text {
  display: inline-block;
  font-weight: bold;
  position: relative;
}

.emphasis-text span {
  display: inline-block;
}

@keyframes metalicShine {
  0% { color: var(--primary-color); }    /* Gold */
  50% { color: var(--secondary-color); }  /* Silver */
  100% { color: var(--primary-color); }   /* Back to Gold */
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.faq {
  padding: 4rem 2rem;
  text-align: center;
  background: rgba(26, 26, 26, 0.5);
}

.faq h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--primary-color);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.faq-item {
  background: var(--card-bg);
  border: 1px solid var(--secondary-color);
  border-radius: 10px;
  padding: 2rem;
  text-align: left;
  transition: transform 0.3s ease;
}

.faq-item:hover {
  transform: translateY(-5px);
}

.faq-item h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.faq-item p {
  color: var(--text-color);
  opacity: 0.9;
}

footer {
  text-align: center;
  padding: 2rem;
  background-color: var(--card-bg);
  border-top: 1px solid var(--secondary-color);
  margin-top: 4rem;
}

@media (max-width: 768px) {
  nav {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }

  .logo-container {
    margin-bottom: 1rem;
  }

  .nav-links {
    flex-direction: column;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }

  .faq h2 {
    font-size: 2rem;
  }
}

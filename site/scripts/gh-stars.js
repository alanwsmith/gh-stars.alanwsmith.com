class GitHubStars extends HTMLElement {
  connectedCallback() {
    this.repo = this.getAttribute('repo')
    this.init()
  }

  async init() {
    await this.fetchJson(`https://api.github.com/repos/${this.repo}`)
    this.button = document.createElement("button")
    this.button.classList.add("gh-stars-button")
    this.appendChild(this.button)
    console.log(this.gitHubJson.stargazers_count)
  }

  async fetchJson(url) {
    let response = await fetch(url, {headers: {'Accept' : 'application/vnd.github.v3+json'}})
    if (!response.ok) {
      throw new Error('There was a problem getting the data')
    } else {
      this.gitHubJson = await response.json()
      // TODO: Figure out error handling here
    }
  }
}

customElements.define('gh-stars', GitHubStars)

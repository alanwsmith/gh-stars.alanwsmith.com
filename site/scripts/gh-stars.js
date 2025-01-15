class GitHubStars extends HTMLElement {
  connectedCallback() {
    this.repo = this.getAttribute('repo')
    this.init()
  }

  async init() {

    //await this.fetchJson(`https://api.github.com/repos/${this.repo}`)
    this.ghButton = document.createElement("button")
    this.ghButton.classList.add("gh-stars-button")
    this.appendChild(this.ghButton)
    //this.button.style = `margin: 0; background: yellow; height: 50px;`
    //this.wrapper = document.createElement("div")
    //this.wrapper.style = `background: red;`
    // //this.wrapper.style = `background: red; border: 1px solid blue; display: inline-block; margin: 0; padding: 0;`
    //// this.wrapper.style = `background: red; border: 1px solid blue; display: inline-block; margin: 0; padding: 0;`
   //// this.wrapper.appendChild(this.button)
    ////console.log(this.gitHubJson.stargazers_count)
    ////


  }

  async fetchJson(url) {

    // let response = await fetch(url, {headers: {'Accept' : 'application/vnd.github.v3+json'}})
    // if (!response.ok) {
    //   throw new Error('There was a problem getting the data')
    // } else {
    //   this.gitHubJson = await response.json()
    //   // TODO: Figure out error handling here
    // }

  }
}

customElements.define('gh-stars', GitHubStars)

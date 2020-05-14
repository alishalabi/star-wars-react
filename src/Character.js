import React, { Component } from 'react';

class Character extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: 1,
      charJson: {},
      charList: [],
      homeworldName: "",
     }
  }

  // async getData(category, id) {
  //   console.log("Getting data")
  //   const res = await fetch(`https://swapi.dev/api/${category}/${id}/`)
  //   const json = await res.json()
  //   this.setState({charJson: json})
  //   console.log(this.state.charJson.name)
  //   return
  // }

  async handleSubmit(e) {
    e.preventDefault()
    const category = "people"
    // const id = this.state.input
    const path = `https://swapi.dev/api/${category}/${this.state.input}/`
    const res = await fetch(path)
    let json = await res.json()
    const homeworldNameRes = await fetch(json.homeworld)
    const homeworldNameJson = await homeworldNameRes.json()
    console.log(homeworldNameJson.name)
    json.homeworld = homeworldNameJson.name
    this.setState({
      charJson: json,
      charList: this.state.charList.concat(json)
    })

  }

  renderCharacter() {
    if (!this.state.charJson.name) {
      return undefined
    }
    else {
      return (
        <div>
          <div>Name: {this.state.charJson.name}</div>
          <div>Height: {this.state.charJson.height}</div>
          <div>Mass: {this.state.charJson.mass}</div>
          <div>Hair Color: {this.state.charJson.hair_color}</div>
          <div>Eye Color: {this.state.charJson.eye_color}</div>
          <div>Homeworld: {this.state.charJson.homeworld}</div>
        </div>
      )
    }
  }

  renderList() {
    if (!this.state.charList) {
      return undefined
    }
    else {
      const charArray = this.state.charList.map((char) => {
        return (
          <div className="char-list">
            <div>Name: {this.state.charJson.name}</div>
            <div>Height: {this.state.charJson.height}</div>
            <div>Mass: {this.state.charJson.mass}</div>
            <div>Hair Color: {this.state.charJson.hair_color}</div>
            <div>Eye Color: {this.state.charJson.eye_color}</div>
            <div>Homeworld: {this.state.charJson.homeworld}</div>
          </div>
        )
      })
      return charArray
    }
  }

  render() {
    // this.getData("people", 1)
    return (
      <div className="char-div">
        <div className="char-single">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              value={this.state.input}
              type="number"
              onChange={e => this.setState({input: e.target.value})}
            />
            <button type="submit">Click Me</button>
          </form>
          {this.renderCharacter()}
        </div>
        <div>
          {this.renderList()}
        </div>

      </div>
    )
  }

}

export default Character;

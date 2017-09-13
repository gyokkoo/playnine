import $ from 'jquery'

const appKey = 'kid_SyxHK5U5W'

class KinveyRequester {
  static submitScore (name, lives, time) {
    return $.ajax({
      method: 'POST',
      url: `https://baas.kinvey.com/appdata/${appKey}/ranking`,
      data: JSON.stringify({name, lives, time}),
      contentType: 'application/json',
      headers: {
        'Authorization': 'Basic ' + window.btoa('player:player'),
        'Content-Type': 'application/json'
      }
    })
  }

  static getScores () {
    return $.ajax({
      method: 'GET',
      url: `https://baas.kinvey.com/appdata/${appKey}/ranking`,
      headers: {
        'Authorization': 'Basic ' + window.btoa('player:player'),
        'Content-Type': 'application/json'
      }
    })
  }
}

export default KinveyRequester

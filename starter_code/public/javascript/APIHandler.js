class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL + '/characters')
    // return this.instance.get('/characters') //THIS WOULD BE THE SAME AS THE LINE ABOVE
      .then(response => {
        console.log(response.data)
      })
  }

  getOneRegister (id) {
    axios.get(this.BASE_URL + '/characters/' + id)
      .then(response => {
        console.log(response.data)
      })
  }

  createOneRegister (name, occupation, weapon, cartoon) {
    let characterInfo =     {
      "name": name,
      "occupation": occupation,
      "weapon": weapon,
      "cartoon ": cartoon
    }
    axios.post(this.BASE_URL + '/characters/', characterInfo)
  }

  updateOneRegister () {

  }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL + '/characters/' + id)
  }
}

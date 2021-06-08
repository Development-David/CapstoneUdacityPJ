// import { handleSubmit } from "../src/client/js/formHandler"
import { getGeo } from "../src/client/js/getGeo"

describe("Testing the submit", () => {
  test("Testing getGeo() ", () => {
    return getGeo("http://api.geonames.org/searchJSON?formatted=true&name=JAPAN?key=","").then(data => {
      expect(data.status).toEqual(false)
    })
  })
})

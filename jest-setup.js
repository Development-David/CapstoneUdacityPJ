global.fetch = async (url, config) => {
  return {json: async () => { return {'status': false} } }
}
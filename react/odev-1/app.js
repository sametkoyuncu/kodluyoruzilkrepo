const { getData } = require('./service')
async function main() {
  try {
    const data = await getData(1)
    console.log(data)
  } catch (e) {
    console.log('Error: ', e)
  }
}
main()

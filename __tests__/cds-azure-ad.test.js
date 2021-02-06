describe('Azure AD and Azure AD B2C Custom-Defined Authentication for SAP CDS (CAP)', () => {
  describe('Basic Tests', () => {
    test('- can the library be instanciated', async () => {
      try {
        const cdsAzureAD = require('../index')
        console.log(typeof cdsAzureAD)
      } catch (error) {
        console.log(error)
      }
    })
  })
})

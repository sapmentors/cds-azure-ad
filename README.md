![npm version](https://img.shields.io/npm/v/cds-azure-ad)
![Package Build](https://github.com/sapmentors/cds-azure-ad/workflows/Node.js%20Package/badge.svg)

# cds-azure-ad - Azure AD and Azure AD B2C Custom-Defined Authentication for SAP CDS (CAP)

This package implements Azure AD and Azure AD B2C support of [Custom-Defined Authentication](https://cap.cloud.sap/docs/node.js/authentication#custom) for the [SAP Cloud Application Programming Model (CAP)](https://cap.cloud.sap/docs/). To achieve this, the packages uses [passport-azure-ad - Microsoft Azure Active Directory Passport.js Plug-In](https://github.com/AzureAD/passport-azure-ad).

## usage in your CAP project

Add this package to your [SAP Cloud Application Programming Model](https://cap.cloud.sap/docs/) project by running:

```bash
npm install cds-azure-ad
```

Then add this configuration to the cds section of your *package.json*:

```JSON
  "cds": {
    "requires": {
      "auth": {
        "impl": "cds-azure-ad"
      }
    }
  }
```

The configuration for the [passport-azure-ad BearerStrategy](https://github.com/AzureAD/passport-azure-ad#42-bearerstrategy) is provided via the following content in the file *default-env.json* the root folder of this project. The B2C tenant used here is the sample is a tenant provided by Microsoft which is used also for their examples. As this file might inlcude sensitive data it's not included in the git repository.

```json
{
  "VCAP_SERVICES": {
    "xsuaa": [
      {
        "name": "cap-azure-ad-b2c-uaa",
        "label": "azure-ad",
        "tags": [
          "azure-ad"
        ],
        "plan": "space",
        "credentials": {
          "identityMetadata": "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/B2C_1_SUSI/v2.0/.well-known/openid-configuration/",
          "clientID": "e760cab2-b9a1-4c0d-86fb-ff7084abd902",
          "policyName": "B2C_1_SUSI",
          "isB2C": true,
          "validateIssuer": true,
          "loggingLevel": "warn",
          "loggingNoPII": true,
          "passReqToCallback": false
        }
      }
    ]
  },
  "destinations": []
}
```

## Projects using cds-azure-ad

- [cap-azure-ad-b2c](https://github.com/gregorwolf/cap-azure-ad-b2c) – An example project with multiple deployment scenarios (SAP BTP Cloud Foundery, SAP BTP Kyma)


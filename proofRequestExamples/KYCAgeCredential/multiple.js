module.exports = {
  // birthday is before 2020 AND documentType is more than 6
  birthdayAndDocumentType: {
    id: 1,
    circuitId: "credentialAtomicQuerySigV2",
    query: {
      allowedIssuers: ["*"],
      type: "KYCAgeCredential",
      context:
        "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld",
      credentialSubject: {
        birthday: {
          $lt: 20200101,
        },
        documentType: {
          $gt: 6,
        },
      },
    },
  },
};

import { KeyPurpose, SignatureScheme, StackrConfig } from "@stackr/stackr-js";

// this file is generated by the deployment script
import * as deployment from "./deployment.json";

const stackrConfig: StackrConfig = {
  stackrApp: {
    appId: deployment.app_id,
    appInbox: deployment.app_inbox,
  },
  builder: {
    batchSize: 16,
    batchTime: 1000,
  },
  syncer: {
    slotTime: 1000,
    vulcanRPC: "http://vulcan.stf.xyz",
    L1RPC: "http://rpc.stf.xyz",
  },
  operator: {
    accounts: [
      {
        privateKey:
          "c5a8a261bce59d3854f4d1be18cc88833d1278457ec5902c3da51c1f9b62f3b1",
        purpose: KeyPurpose.BATCH,
        scheme: SignatureScheme.ECDSA,
      },
    ],
  },
  domain: {
    name: "Stackr MVP v0",
    version: "1",
    chainId: 69420,
    verifyingContract: deployment.app_inbox,
    salt: "0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  },
  datastore: {
    filePath: "./datastore",
  },
};

export { stackrConfig };

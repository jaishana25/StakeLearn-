# StakeLearn

StakeLearn is a decentralized Federated Learning protocol that leverages a Proof of Stake mechanism to establish economic security within the network. Built on a micro-rollup architecture, it enables verifiable off-chain computation for model training and ensures slashing conditions to mitigate malicious behavior in Federated Learning systems.



### Federated Learning and its Problems

Federated Learning is a privacy-preserving approach to training machine learning models across distributed data sources. Clients in the network train a shared model on local data and periodically share their updated model parameters with an aggregator, which computes a federated average to update the base model for subsequent training rounds.

In a federated network, it is crucial to ensure that clients train models honestly to improve overall accuracy. However, malicious clients can disrupt the network by providing inaccurate updates, reducing model accuracy. StakeLearn addresses this by implementing a Proof of Stake architecture that incentivizes honest behavior.



## Architecture of FLockChain

System Overview

User Request: Users specify model requirements, such as the desired accuracy and number of epochs.
Client Training: Clients with data train the model according to user requirements. Clients must stake a defined STAKE_AMOUNT into the StakingRegistry smart contract.
<br></br>
Aggregation & Slashing: The aggregator performs federated learning across the network. The SlashingManager disincentivizes malicious clients by slashing their stake if they provide poor or inaccurate updates.
Spam Resistance & Fees: Users pay an initial BASE_FEE for spam resistance. Once the model reaches the desired accuracy, additional fees are charged based on epochs and distributed to clients through the RewardManager.



### Micro-Rollup Architecture

StakeLearn employs a micro-rollup framework called Model Parameters Sharing (MPS) Chain to track and verify model parameters across training epochs. The rollup:

Maintains a verifiable history of parameter updates by each client.
Supports off-chain computation, allowing slashing conditions to be implemented efficiently.
The rollup’s State Transition Function checks model parameter correlations and flags malicious updates. Following each epoch, the aggregator invokes the SlashingManager to penalize flagged clients.

### Slashing Conditions

StakeLearn uses Krum, a robust function that scores clients by calculating the sum of squared distances between their model updates and others in the network. Clients with significant deviations from the majority are flagged, and, if determined malicious, have their stake slashed.

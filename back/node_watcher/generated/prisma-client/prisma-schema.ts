// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateBlockNumber {
  count: Int!
}

type AggregateEra {
  count: Int!
}

type AggregateNomination {
  count: Int!
}

type AggregateReward {
  count: Int!
}

type AggregateSession {
  count: Int!
}

type AggregateSlashing {
  count: Int!
}

type AggregateStake {
  count: Int!
}

type AggregateTotalIssuance {
  count: Int!
}

type AggregateValidator {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type BlockNumber {
  number: Int!
  authoredBy: String!
  startDateTime: DateTime!
  hash: String!
}

type BlockNumberConnection {
  pageInfo: PageInfo!
  edges: [BlockNumberEdge]!
  aggregate: AggregateBlockNumber!
}

input BlockNumberCreateInput {
  number: Int
  authoredBy: String!
  startDateTime: DateTime!
  hash: String!
}

input BlockNumberCreateOneInput {
  create: BlockNumberCreateInput
  connect: BlockNumberWhereUniqueInput
}

type BlockNumberEdge {
  node: BlockNumber!
  cursor: String!
}

enum BlockNumberOrderByInput {
  number_ASC
  number_DESC
  authoredBy_ASC
  authoredBy_DESC
  startDateTime_ASC
  startDateTime_DESC
  hash_ASC
  hash_DESC
}

type BlockNumberPreviousValues {
  number: Int!
  authoredBy: String!
  startDateTime: DateTime!
  hash: String!
}

type BlockNumberSubscriptionPayload {
  mutation: MutationType!
  node: BlockNumber
  updatedFields: [String!]
  previousValues: BlockNumberPreviousValues
}

input BlockNumberSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BlockNumberWhereInput
  AND: [BlockNumberSubscriptionWhereInput!]
  OR: [BlockNumberSubscriptionWhereInput!]
  NOT: [BlockNumberSubscriptionWhereInput!]
}

input BlockNumberUpdateDataInput {
  authoredBy: String
  startDateTime: DateTime
  hash: String
}

input BlockNumberUpdateInput {
  authoredBy: String
  startDateTime: DateTime
  hash: String
}

input BlockNumberUpdateManyMutationInput {
  authoredBy: String
  startDateTime: DateTime
  hash: String
}

input BlockNumberUpdateOneRequiredInput {
  create: BlockNumberCreateInput
  update: BlockNumberUpdateDataInput
  upsert: BlockNumberUpsertNestedInput
  connect: BlockNumberWhereUniqueInput
}

input BlockNumberUpsertNestedInput {
  update: BlockNumberUpdateDataInput!
  create: BlockNumberCreateInput!
}

input BlockNumberWhereInput {
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  authoredBy: String
  authoredBy_not: String
  authoredBy_in: [String!]
  authoredBy_not_in: [String!]
  authoredBy_lt: String
  authoredBy_lte: String
  authoredBy_gt: String
  authoredBy_gte: String
  authoredBy_contains: String
  authoredBy_not_contains: String
  authoredBy_starts_with: String
  authoredBy_not_starts_with: String
  authoredBy_ends_with: String
  authoredBy_not_ends_with: String
  startDateTime: DateTime
  startDateTime_not: DateTime
  startDateTime_in: [DateTime!]
  startDateTime_not_in: [DateTime!]
  startDateTime_lt: DateTime
  startDateTime_lte: DateTime
  startDateTime_gt: DateTime
  startDateTime_gte: DateTime
  hash: String
  hash_not: String
  hash_in: [String!]
  hash_not_in: [String!]
  hash_lt: String
  hash_lte: String
  hash_gt: String
  hash_gte: String
  hash_contains: String
  hash_not_contains: String
  hash_starts_with: String
  hash_not_starts_with: String
  hash_ends_with: String
  hash_not_ends_with: String
  AND: [BlockNumberWhereInput!]
  OR: [BlockNumberWhereInput!]
  NOT: [BlockNumberWhereInput!]
}

input BlockNumberWhereUniqueInput {
  number: Int
  hash: String
}

scalar DateTime

type Era {
  id: Int!
  startDateTime: DateTime!
  startSessionIndex: Session!
  sessions(where: SessionWhereInput, orderBy: SessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Session!]
  points: Int!
}

type EraConnection {
  pageInfo: PageInfo!
  edges: [EraEdge]!
  aggregate: AggregateEra!
}

input EraCreateInput {
  id: Int
  startDateTime: DateTime!
  startSessionIndex: SessionCreateOneInput!
  sessions: SessionCreateManyInput
  points: Int!
}

type EraEdge {
  node: Era!
  cursor: String!
}

enum EraOrderByInput {
  id_ASC
  id_DESC
  startDateTime_ASC
  startDateTime_DESC
  points_ASC
  points_DESC
}

type EraPreviousValues {
  id: Int!
  startDateTime: DateTime!
  points: Int!
}

type EraSubscriptionPayload {
  mutation: MutationType!
  node: Era
  updatedFields: [String!]
  previousValues: EraPreviousValues
}

input EraSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EraWhereInput
  AND: [EraSubscriptionWhereInput!]
  OR: [EraSubscriptionWhereInput!]
  NOT: [EraSubscriptionWhereInput!]
}

input EraUpdateInput {
  startDateTime: DateTime
  startSessionIndex: SessionUpdateOneRequiredInput
  sessions: SessionUpdateManyInput
  points: Int
}

input EraUpdateManyMutationInput {
  startDateTime: DateTime
  points: Int
}

input EraWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  startDateTime: DateTime
  startDateTime_not: DateTime
  startDateTime_in: [DateTime!]
  startDateTime_not_in: [DateTime!]
  startDateTime_lt: DateTime
  startDateTime_lte: DateTime
  startDateTime_gt: DateTime
  startDateTime_gte: DateTime
  startSessionIndex: SessionWhereInput
  sessions_every: SessionWhereInput
  sessions_some: SessionWhereInput
  sessions_none: SessionWhereInput
  points: Int
  points_not: Int
  points_in: [Int!]
  points_not_in: [Int!]
  points_lt: Int
  points_lte: Int
  points_gt: Int
  points_gte: Int
  AND: [EraWhereInput!]
  OR: [EraWhereInput!]
  NOT: [EraWhereInput!]
}

input EraWhereUniqueInput {
  id: Int
}

scalar Long

type Mutation {
  createBlockNumber(data: BlockNumberCreateInput!): BlockNumber!
  updateBlockNumber(data: BlockNumberUpdateInput!, where: BlockNumberWhereUniqueInput!): BlockNumber
  updateManyBlockNumbers(data: BlockNumberUpdateManyMutationInput!, where: BlockNumberWhereInput): BatchPayload!
  upsertBlockNumber(where: BlockNumberWhereUniqueInput!, create: BlockNumberCreateInput!, update: BlockNumberUpdateInput!): BlockNumber!
  deleteBlockNumber(where: BlockNumberWhereUniqueInput!): BlockNumber
  deleteManyBlockNumbers(where: BlockNumberWhereInput): BatchPayload!
  createEra(data: EraCreateInput!): Era!
  updateEra(data: EraUpdateInput!, where: EraWhereUniqueInput!): Era
  updateManyEras(data: EraUpdateManyMutationInput!, where: EraWhereInput): BatchPayload!
  upsertEra(where: EraWhereUniqueInput!, create: EraCreateInput!, update: EraUpdateInput!): Era!
  deleteEra(where: EraWhereUniqueInput!): Era
  deleteManyEras(where: EraWhereInput): BatchPayload!
  createNomination(data: NominationCreateInput!): Nomination!
  updateNomination(data: NominationUpdateInput!, where: NominationWhereUniqueInput!): Nomination
  updateManyNominations(data: NominationUpdateManyMutationInput!, where: NominationWhereInput): BatchPayload!
  upsertNomination(where: NominationWhereUniqueInput!, create: NominationCreateInput!, update: NominationUpdateInput!): Nomination!
  deleteNomination(where: NominationWhereUniqueInput!): Nomination
  deleteManyNominations(where: NominationWhereInput): BatchPayload!
  createReward(data: RewardCreateInput!): Reward!
  updateReward(data: RewardUpdateInput!, where: RewardWhereUniqueInput!): Reward
  updateManyRewards(data: RewardUpdateManyMutationInput!, where: RewardWhereInput): BatchPayload!
  upsertReward(where: RewardWhereUniqueInput!, create: RewardCreateInput!, update: RewardUpdateInput!): Reward!
  deleteReward(where: RewardWhereUniqueInput!): Reward
  deleteManyRewards(where: RewardWhereInput): BatchPayload!
  createSession(data: SessionCreateInput!): Session!
  updateSession(data: SessionUpdateInput!, where: SessionWhereUniqueInput!): Session
  upsertSession(where: SessionWhereUniqueInput!, create: SessionCreateInput!, update: SessionUpdateInput!): Session!
  deleteSession(where: SessionWhereUniqueInput!): Session
  deleteManySessions(where: SessionWhereInput): BatchPayload!
  createSlashing(data: SlashingCreateInput!): Slashing!
  updateSlashing(data: SlashingUpdateInput!, where: SlashingWhereUniqueInput!): Slashing
  updateManySlashings(data: SlashingUpdateManyMutationInput!, where: SlashingWhereInput): BatchPayload!
  upsertSlashing(where: SlashingWhereUniqueInput!, create: SlashingCreateInput!, update: SlashingUpdateInput!): Slashing!
  deleteSlashing(where: SlashingWhereUniqueInput!): Slashing
  deleteManySlashings(where: SlashingWhereInput): BatchPayload!
  createStake(data: StakeCreateInput!): Stake!
  updateStake(data: StakeUpdateInput!, where: StakeWhereUniqueInput!): Stake
  updateManyStakes(data: StakeUpdateManyMutationInput!, where: StakeWhereInput): BatchPayload!
  upsertStake(where: StakeWhereUniqueInput!, create: StakeCreateInput!, update: StakeUpdateInput!): Stake!
  deleteStake(where: StakeWhereUniqueInput!): Stake
  deleteManyStakes(where: StakeWhereInput): BatchPayload!
  createTotalIssuance(data: TotalIssuanceCreateInput!): TotalIssuance!
  updateTotalIssuance(data: TotalIssuanceUpdateInput!, where: TotalIssuanceWhereUniqueInput!): TotalIssuance
  updateManyTotalIssuances(data: TotalIssuanceUpdateManyMutationInput!, where: TotalIssuanceWhereInput): BatchPayload!
  upsertTotalIssuance(where: TotalIssuanceWhereUniqueInput!, create: TotalIssuanceCreateInput!, update: TotalIssuanceUpdateInput!): TotalIssuance!
  deleteTotalIssuance(where: TotalIssuanceWhereUniqueInput!): TotalIssuance
  deleteManyTotalIssuances(where: TotalIssuanceWhereInput): BatchPayload!
  createValidator(data: ValidatorCreateInput!): Validator!
  updateValidator(data: ValidatorUpdateInput!, where: ValidatorWhereUniqueInput!): Validator
  updateManyValidators(data: ValidatorUpdateManyMutationInput!, where: ValidatorWhereInput): BatchPayload!
  upsertValidator(where: ValidatorWhereUniqueInput!, create: ValidatorCreateInput!, update: ValidatorUpdateInput!): Validator!
  deleteValidator(where: ValidatorWhereUniqueInput!): Validator
  deleteManyValidators(where: ValidatorWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Nomination {
  id: ID!
  validatorController: String!
  validatorStash: String!
  nominatorController: String!
  nominatorStash: String!
  session: Session!
  bonded: Int!
}

type NominationConnection {
  pageInfo: PageInfo!
  edges: [NominationEdge]!
  aggregate: AggregateNomination!
}

input NominationCreateInput {
  id: ID
  validatorController: String!
  validatorStash: String!
  nominatorController: String!
  nominatorStash: String!
  session: SessionCreateOneInput!
  bonded: Int!
}

type NominationEdge {
  node: Nomination!
  cursor: String!
}

enum NominationOrderByInput {
  id_ASC
  id_DESC
  validatorController_ASC
  validatorController_DESC
  validatorStash_ASC
  validatorStash_DESC
  nominatorController_ASC
  nominatorController_DESC
  nominatorStash_ASC
  nominatorStash_DESC
  bonded_ASC
  bonded_DESC
}

type NominationPreviousValues {
  id: ID!
  validatorController: String!
  validatorStash: String!
  nominatorController: String!
  nominatorStash: String!
  bonded: Int!
}

type NominationSubscriptionPayload {
  mutation: MutationType!
  node: Nomination
  updatedFields: [String!]
  previousValues: NominationPreviousValues
}

input NominationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NominationWhereInput
  AND: [NominationSubscriptionWhereInput!]
  OR: [NominationSubscriptionWhereInput!]
  NOT: [NominationSubscriptionWhereInput!]
}

input NominationUpdateInput {
  validatorController: String
  validatorStash: String
  nominatorController: String
  nominatorStash: String
  session: SessionUpdateOneRequiredInput
  bonded: Int
}

input NominationUpdateManyMutationInput {
  validatorController: String
  validatorStash: String
  nominatorController: String
  nominatorStash: String
  bonded: Int
}

input NominationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  validatorController: String
  validatorController_not: String
  validatorController_in: [String!]
  validatorController_not_in: [String!]
  validatorController_lt: String
  validatorController_lte: String
  validatorController_gt: String
  validatorController_gte: String
  validatorController_contains: String
  validatorController_not_contains: String
  validatorController_starts_with: String
  validatorController_not_starts_with: String
  validatorController_ends_with: String
  validatorController_not_ends_with: String
  validatorStash: String
  validatorStash_not: String
  validatorStash_in: [String!]
  validatorStash_not_in: [String!]
  validatorStash_lt: String
  validatorStash_lte: String
  validatorStash_gt: String
  validatorStash_gte: String
  validatorStash_contains: String
  validatorStash_not_contains: String
  validatorStash_starts_with: String
  validatorStash_not_starts_with: String
  validatorStash_ends_with: String
  validatorStash_not_ends_with: String
  nominatorController: String
  nominatorController_not: String
  nominatorController_in: [String!]
  nominatorController_not_in: [String!]
  nominatorController_lt: String
  nominatorController_lte: String
  nominatorController_gt: String
  nominatorController_gte: String
  nominatorController_contains: String
  nominatorController_not_contains: String
  nominatorController_starts_with: String
  nominatorController_not_starts_with: String
  nominatorController_ends_with: String
  nominatorController_not_ends_with: String
  nominatorStash: String
  nominatorStash_not: String
  nominatorStash_in: [String!]
  nominatorStash_not_in: [String!]
  nominatorStash_lt: String
  nominatorStash_lte: String
  nominatorStash_gt: String
  nominatorStash_gte: String
  nominatorStash_contains: String
  nominatorStash_not_contains: String
  nominatorStash_starts_with: String
  nominatorStash_not_starts_with: String
  nominatorStash_ends_with: String
  nominatorStash_not_ends_with: String
  session: SessionWhereInput
  bonded: Int
  bonded_not: Int
  bonded_in: [Int!]
  bonded_not_in: [Int!]
  bonded_lt: Int
  bonded_lte: Int
  bonded_gt: Int
  bonded_gte: Int
  AND: [NominationWhereInput!]
  OR: [NominationWhereInput!]
  NOT: [NominationWhereInput!]
}

input NominationWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  blockNumber(where: BlockNumberWhereUniqueInput!): BlockNumber
  blockNumbers(where: BlockNumberWhereInput, orderBy: BlockNumberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BlockNumber]!
  blockNumbersConnection(where: BlockNumberWhereInput, orderBy: BlockNumberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BlockNumberConnection!
  era(where: EraWhereUniqueInput!): Era
  eras(where: EraWhereInput, orderBy: EraOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Era]!
  erasConnection(where: EraWhereInput, orderBy: EraOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EraConnection!
  nomination(where: NominationWhereUniqueInput!): Nomination
  nominations(where: NominationWhereInput, orderBy: NominationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Nomination]!
  nominationsConnection(where: NominationWhereInput, orderBy: NominationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NominationConnection!
  reward(where: RewardWhereUniqueInput!): Reward
  rewards(where: RewardWhereInput, orderBy: RewardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reward]!
  rewardsConnection(where: RewardWhereInput, orderBy: RewardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RewardConnection!
  session(where: SessionWhereUniqueInput!): Session
  sessions(where: SessionWhereInput, orderBy: SessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Session]!
  sessionsConnection(where: SessionWhereInput, orderBy: SessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SessionConnection!
  slashing(where: SlashingWhereUniqueInput!): Slashing
  slashings(where: SlashingWhereInput, orderBy: SlashingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Slashing]!
  slashingsConnection(where: SlashingWhereInput, orderBy: SlashingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SlashingConnection!
  stake(where: StakeWhereUniqueInput!): Stake
  stakes(where: StakeWhereInput, orderBy: StakeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stake]!
  stakesConnection(where: StakeWhereInput, orderBy: StakeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StakeConnection!
  totalIssuance(where: TotalIssuanceWhereUniqueInput!): TotalIssuance
  totalIssuances(where: TotalIssuanceWhereInput, orderBy: TotalIssuanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TotalIssuance]!
  totalIssuancesConnection(where: TotalIssuanceWhereInput, orderBy: TotalIssuanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TotalIssuanceConnection!
  validator(where: ValidatorWhereUniqueInput!): Validator
  validators(where: ValidatorWhereInput, orderBy: ValidatorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Validator]!
  validatorsConnection(where: ValidatorWhereInput, orderBy: ValidatorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ValidatorConnection!
  node(id: ID!): Node
}

type Reward {
  id: ID!
  amount: Int!
  authoredBlock: BlockNumber!
  recipients: [String!]!
}

type RewardConnection {
  pageInfo: PageInfo!
  edges: [RewardEdge]!
  aggregate: AggregateReward!
}

input RewardCreateInput {
  id: ID
  amount: Int!
  authoredBlock: BlockNumberCreateOneInput!
  recipients: RewardCreaterecipientsInput
}

input RewardCreaterecipientsInput {
  set: [String!]
}

type RewardEdge {
  node: Reward!
  cursor: String!
}

enum RewardOrderByInput {
  id_ASC
  id_DESC
  amount_ASC
  amount_DESC
}

type RewardPreviousValues {
  id: ID!
  amount: Int!
  recipients: [String!]!
}

type RewardSubscriptionPayload {
  mutation: MutationType!
  node: Reward
  updatedFields: [String!]
  previousValues: RewardPreviousValues
}

input RewardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RewardWhereInput
  AND: [RewardSubscriptionWhereInput!]
  OR: [RewardSubscriptionWhereInput!]
  NOT: [RewardSubscriptionWhereInput!]
}

input RewardUpdateInput {
  amount: Int
  authoredBlock: BlockNumberUpdateOneRequiredInput
  recipients: RewardUpdaterecipientsInput
}

input RewardUpdateManyMutationInput {
  amount: Int
  recipients: RewardUpdaterecipientsInput
}

input RewardUpdaterecipientsInput {
  set: [String!]
}

input RewardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  amount: Int
  amount_not: Int
  amount_in: [Int!]
  amount_not_in: [Int!]
  amount_lt: Int
  amount_lte: Int
  amount_gt: Int
  amount_gte: Int
  authoredBlock: BlockNumberWhereInput
  AND: [RewardWhereInput!]
  OR: [RewardWhereInput!]
  NOT: [RewardWhereInput!]
}

input RewardWhereUniqueInput {
  id: ID
}

type Session {
  id: Int!
  start: BlockNumber!
  end: BlockNumber!
}

type SessionConnection {
  pageInfo: PageInfo!
  edges: [SessionEdge]!
  aggregate: AggregateSession!
}

input SessionCreateInput {
  id: Int
  start: BlockNumberCreateOneInput!
  end: BlockNumberCreateOneInput!
}

input SessionCreateManyInput {
  create: [SessionCreateInput!]
  connect: [SessionWhereUniqueInput!]
}

input SessionCreateOneInput {
  create: SessionCreateInput
  connect: SessionWhereUniqueInput
}

type SessionEdge {
  node: Session!
  cursor: String!
}

enum SessionOrderByInput {
  id_ASC
  id_DESC
}

type SessionPreviousValues {
  id: Int!
}

input SessionScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  AND: [SessionScalarWhereInput!]
  OR: [SessionScalarWhereInput!]
  NOT: [SessionScalarWhereInput!]
}

type SessionSubscriptionPayload {
  mutation: MutationType!
  node: Session
  updatedFields: [String!]
  previousValues: SessionPreviousValues
}

input SessionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SessionWhereInput
  AND: [SessionSubscriptionWhereInput!]
  OR: [SessionSubscriptionWhereInput!]
  NOT: [SessionSubscriptionWhereInput!]
}

input SessionUpdateDataInput {
  start: BlockNumberUpdateOneRequiredInput
  end: BlockNumberUpdateOneRequiredInput
}

input SessionUpdateInput {
  start: BlockNumberUpdateOneRequiredInput
  end: BlockNumberUpdateOneRequiredInput
}

input SessionUpdateManyInput {
  create: [SessionCreateInput!]
  update: [SessionUpdateWithWhereUniqueNestedInput!]
  upsert: [SessionUpsertWithWhereUniqueNestedInput!]
  delete: [SessionWhereUniqueInput!]
  connect: [SessionWhereUniqueInput!]
  set: [SessionWhereUniqueInput!]
  disconnect: [SessionWhereUniqueInput!]
  deleteMany: [SessionScalarWhereInput!]
}

input SessionUpdateOneRequiredInput {
  create: SessionCreateInput
  update: SessionUpdateDataInput
  upsert: SessionUpsertNestedInput
  connect: SessionWhereUniqueInput
}

input SessionUpdateWithWhereUniqueNestedInput {
  where: SessionWhereUniqueInput!
  data: SessionUpdateDataInput!
}

input SessionUpsertNestedInput {
  update: SessionUpdateDataInput!
  create: SessionCreateInput!
}

input SessionUpsertWithWhereUniqueNestedInput {
  where: SessionWhereUniqueInput!
  update: SessionUpdateDataInput!
  create: SessionCreateInput!
}

input SessionWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  start: BlockNumberWhereInput
  end: BlockNumberWhereInput
  AND: [SessionWhereInput!]
  OR: [SessionWhereInput!]
  NOT: [SessionWhereInput!]
}

input SessionWhereUniqueInput {
  id: Int
}

type Slashing {
  id: ID!
  blockNumber: BlockNumber!
  reason: String!
  amount: Int!
}

type SlashingConnection {
  pageInfo: PageInfo!
  edges: [SlashingEdge]!
  aggregate: AggregateSlashing!
}

input SlashingCreateInput {
  id: ID
  blockNumber: BlockNumberCreateOneInput!
  reason: String!
  amount: Int!
}

type SlashingEdge {
  node: Slashing!
  cursor: String!
}

enum SlashingOrderByInput {
  id_ASC
  id_DESC
  reason_ASC
  reason_DESC
  amount_ASC
  amount_DESC
}

type SlashingPreviousValues {
  id: ID!
  reason: String!
  amount: Int!
}

type SlashingSubscriptionPayload {
  mutation: MutationType!
  node: Slashing
  updatedFields: [String!]
  previousValues: SlashingPreviousValues
}

input SlashingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SlashingWhereInput
  AND: [SlashingSubscriptionWhereInput!]
  OR: [SlashingSubscriptionWhereInput!]
  NOT: [SlashingSubscriptionWhereInput!]
}

input SlashingUpdateInput {
  blockNumber: BlockNumberUpdateOneRequiredInput
  reason: String
  amount: Int
}

input SlashingUpdateManyMutationInput {
  reason: String
  amount: Int
}

input SlashingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  blockNumber: BlockNumberWhereInput
  reason: String
  reason_not: String
  reason_in: [String!]
  reason_not_in: [String!]
  reason_lt: String
  reason_lte: String
  reason_gt: String
  reason_gte: String
  reason_contains: String
  reason_not_contains: String
  reason_starts_with: String
  reason_not_starts_with: String
  reason_ends_with: String
  reason_not_ends_with: String
  amount: Int
  amount_not: Int
  amount_in: [Int!]
  amount_not_in: [Int!]
  amount_lt: Int
  amount_lte: Int
  amount_gt: Int
  amount_gte: Int
  AND: [SlashingWhereInput!]
  OR: [SlashingWhereInput!]
  NOT: [SlashingWhereInput!]
}

input SlashingWhereUniqueInput {
  id: ID
}

type Stake {
  id: ID!
  blockNumber: BlockNumber!
  totalStake: Int!
}

type StakeConnection {
  pageInfo: PageInfo!
  edges: [StakeEdge]!
  aggregate: AggregateStake!
}

input StakeCreateInput {
  id: ID
  blockNumber: BlockNumberCreateOneInput!
  totalStake: Int!
}

type StakeEdge {
  node: Stake!
  cursor: String!
}

enum StakeOrderByInput {
  id_ASC
  id_DESC
  totalStake_ASC
  totalStake_DESC
}

type StakePreviousValues {
  id: ID!
  totalStake: Int!
}

type StakeSubscriptionPayload {
  mutation: MutationType!
  node: Stake
  updatedFields: [String!]
  previousValues: StakePreviousValues
}

input StakeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StakeWhereInput
  AND: [StakeSubscriptionWhereInput!]
  OR: [StakeSubscriptionWhereInput!]
  NOT: [StakeSubscriptionWhereInput!]
}

input StakeUpdateInput {
  blockNumber: BlockNumberUpdateOneRequiredInput
  totalStake: Int
}

input StakeUpdateManyMutationInput {
  totalStake: Int
}

input StakeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  blockNumber: BlockNumberWhereInput
  totalStake: Int
  totalStake_not: Int
  totalStake_in: [Int!]
  totalStake_not_in: [Int!]
  totalStake_lt: Int
  totalStake_lte: Int
  totalStake_gt: Int
  totalStake_gte: Int
  AND: [StakeWhereInput!]
  OR: [StakeWhereInput!]
  NOT: [StakeWhereInput!]
}

input StakeWhereUniqueInput {
  id: ID
}

type Subscription {
  blockNumber(where: BlockNumberSubscriptionWhereInput): BlockNumberSubscriptionPayload
  era(where: EraSubscriptionWhereInput): EraSubscriptionPayload
  nomination(where: NominationSubscriptionWhereInput): NominationSubscriptionPayload
  reward(where: RewardSubscriptionWhereInput): RewardSubscriptionPayload
  session(where: SessionSubscriptionWhereInput): SessionSubscriptionPayload
  slashing(where: SlashingSubscriptionWhereInput): SlashingSubscriptionPayload
  stake(where: StakeSubscriptionWhereInput): StakeSubscriptionPayload
  totalIssuance(where: TotalIssuanceSubscriptionWhereInput): TotalIssuanceSubscriptionPayload
  validator(where: ValidatorSubscriptionWhereInput): ValidatorSubscriptionPayload
}

type TotalIssuance {
  id: ID!
  blockNumber: BlockNumber!
  amount: Int!
}

type TotalIssuanceConnection {
  pageInfo: PageInfo!
  edges: [TotalIssuanceEdge]!
  aggregate: AggregateTotalIssuance!
}

input TotalIssuanceCreateInput {
  id: ID
  blockNumber: BlockNumberCreateOneInput!
  amount: Int!
}

type TotalIssuanceEdge {
  node: TotalIssuance!
  cursor: String!
}

enum TotalIssuanceOrderByInput {
  id_ASC
  id_DESC
  amount_ASC
  amount_DESC
}

type TotalIssuancePreviousValues {
  id: ID!
  amount: Int!
}

type TotalIssuanceSubscriptionPayload {
  mutation: MutationType!
  node: TotalIssuance
  updatedFields: [String!]
  previousValues: TotalIssuancePreviousValues
}

input TotalIssuanceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TotalIssuanceWhereInput
  AND: [TotalIssuanceSubscriptionWhereInput!]
  OR: [TotalIssuanceSubscriptionWhereInput!]
  NOT: [TotalIssuanceSubscriptionWhereInput!]
}

input TotalIssuanceUpdateInput {
  blockNumber: BlockNumberUpdateOneRequiredInput
  amount: Int
}

input TotalIssuanceUpdateManyMutationInput {
  amount: Int
}

input TotalIssuanceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  blockNumber: BlockNumberWhereInput
  amount: Int
  amount_not: Int
  amount_in: [Int!]
  amount_not_in: [Int!]
  amount_lt: Int
  amount_lte: Int
  amount_gt: Int
  amount_gte: Int
  AND: [TotalIssuanceWhereInput!]
  OR: [TotalIssuanceWhereInput!]
  NOT: [TotalIssuanceWhereInput!]
}

input TotalIssuanceWhereUniqueInput {
  id: ID
}

type Validator {
  id: ID!
  blockNumber: BlockNumber!
  controller: String!
  stash: String!
  preferences: String!
}

type ValidatorConnection {
  pageInfo: PageInfo!
  edges: [ValidatorEdge]!
  aggregate: AggregateValidator!
}

input ValidatorCreateInput {
  id: ID
  blockNumber: BlockNumberCreateOneInput!
  controller: String!
  stash: String!
  preferences: String!
}

type ValidatorEdge {
  node: Validator!
  cursor: String!
}

enum ValidatorOrderByInput {
  id_ASC
  id_DESC
  controller_ASC
  controller_DESC
  stash_ASC
  stash_DESC
  preferences_ASC
  preferences_DESC
}

type ValidatorPreviousValues {
  id: ID!
  controller: String!
  stash: String!
  preferences: String!
}

type ValidatorSubscriptionPayload {
  mutation: MutationType!
  node: Validator
  updatedFields: [String!]
  previousValues: ValidatorPreviousValues
}

input ValidatorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ValidatorWhereInput
  AND: [ValidatorSubscriptionWhereInput!]
  OR: [ValidatorSubscriptionWhereInput!]
  NOT: [ValidatorSubscriptionWhereInput!]
}

input ValidatorUpdateInput {
  blockNumber: BlockNumberUpdateOneRequiredInput
  controller: String
  stash: String
  preferences: String
}

input ValidatorUpdateManyMutationInput {
  controller: String
  stash: String
  preferences: String
}

input ValidatorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  blockNumber: BlockNumberWhereInput
  controller: String
  controller_not: String
  controller_in: [String!]
  controller_not_in: [String!]
  controller_lt: String
  controller_lte: String
  controller_gt: String
  controller_gte: String
  controller_contains: String
  controller_not_contains: String
  controller_starts_with: String
  controller_not_starts_with: String
  controller_ends_with: String
  controller_not_ends_with: String
  stash: String
  stash_not: String
  stash_in: [String!]
  stash_not_in: [String!]
  stash_lt: String
  stash_lte: String
  stash_gt: String
  stash_gte: String
  stash_contains: String
  stash_not_contains: String
  stash_starts_with: String
  stash_not_starts_with: String
  stash_ends_with: String
  stash_not_ends_with: String
  preferences: String
  preferences_not: String
  preferences_in: [String!]
  preferences_not_in: [String!]
  preferences_lt: String
  preferences_lte: String
  preferences_gt: String
  preferences_gte: String
  preferences_contains: String
  preferences_not_contains: String
  preferences_starts_with: String
  preferences_not_starts_with: String
  preferences_ends_with: String
  preferences_not_ends_with: String
  AND: [ValidatorWhereInput!]
  OR: [ValidatorWhereInput!]
  NOT: [ValidatorWhereInput!]
}

input ValidatorWhereUniqueInput {
  id: ID
}
`
/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AddResult = {
  chestNo: Scalars['String']['input'];
  mark?: InputMaybe<Scalars['Float']['input']>;
};

export type Candidate = {
  __typename?: 'Candidate';
  adno?: Maybe<Scalars['Float']['output']>;
  candidateProgrammes?: Maybe<Array<CandidateProgramme>>;
  category?: Maybe<Category>;
  chestNO?: Maybe<Scalars['String']['output']>;
  class?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dob?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  groupPoint?: Maybe<Scalars['Float']['output']>;
  /** Example field (placeholder) */
  id?: Maybe<Scalars['Int']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  individualPoint?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  substitutesNew?: Maybe<Array<Substitute>>;
  substitutesOld?: Maybe<Array<Substitute>>;
  team?: Maybe<Team>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CandidateProgramme = {
  __typename?: 'CandidateProgramme';
  candidate?: Maybe<Candidate>;
  candidatesOfGroup?: Maybe<Array<Candidate>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  grade?: Maybe<Grade>;
  id?: Maybe<Scalars['Int']['output']>;
  judge1?: Maybe<Scalars['Float']['output']>;
  judge2?: Maybe<Scalars['Float']['output']>;
  judge3?: Maybe<Scalars['Float']['output']>;
  judge4?: Maybe<Scalars['Float']['output']>;
  judge5?: Maybe<Scalars['Float']['output']>;
  judge6?: Maybe<Scalars['Float']['output']>;
  judge7?: Maybe<Scalars['Float']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  mark?: Maybe<Scalars['Float']['output']>;
  point?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Position>;
  programme?: Maybe<Programme>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Category = {
  __typename?: 'Category';
  candidates?: Maybe<Array<Candidate>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  credentials?: Maybe<Array<Credential>>;
  customSettings?: Maybe<Array<CustomSetting>>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  programmes?: Maybe<Array<Programme>>;
  section?: Maybe<Section>;
  settings?: Maybe<CategorySettings>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategorySettings = {
  __typename?: 'CategorySettings';
  category?: Maybe<Category>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isProgrammeListUpdatable: Scalars['Boolean']['output'];
  maxGroup?: Maybe<Scalars['Int']['output']>;
  maxNonStage?: Maybe<Scalars['Int']['output']>;
  maxOutDoor?: Maybe<Scalars['Int']['output']>;
  maxProgram?: Maybe<Scalars['Int']['output']>;
  maxSingle?: Maybe<Scalars['Int']['output']>;
  maxSports?: Maybe<Scalars['Int']['output']>;
  maxSportsGroup?: Maybe<Scalars['Int']['output']>;
  maxSportsSingle?: Maybe<Scalars['Int']['output']>;
  maxStage?: Maybe<Scalars['Int']['output']>;
  minGroup?: Maybe<Scalars['Int']['output']>;
  minNonStage?: Maybe<Scalars['Int']['output']>;
  minOutDoor?: Maybe<Scalars['Int']['output']>;
  minProgram?: Maybe<Scalars['Int']['output']>;
  minSingle?: Maybe<Scalars['Int']['output']>;
  minSports?: Maybe<Scalars['Int']['output']>;
  minSportsGroup?: Maybe<Scalars['Int']['output']>;
  minSportsSingle?: Maybe<Scalars['Int']['output']>;
  minStage?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreateCandidateInput = {
  adno?: InputMaybe<Scalars['Float']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  chestNO?: InputMaybe<Scalars['String']['input']>;
  class?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  gender: Gender;
  name: Scalars['String']['input'];
  team?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCandidateProgrammeInput = {
  candidatesOfGroup?: InputMaybe<Array<Scalars['String']['input']>>;
  chestNo: Scalars['String']['input'];
  programme_code: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
  section: Scalars['String']['input'];
};

export type CreateCategorySettingInput = {
  category: Scalars['String']['input'];
  maxGroup: Scalars['Int']['input'];
  maxNonStage?: InputMaybe<Scalars['Int']['input']>;
  maxOutDoor?: InputMaybe<Scalars['Int']['input']>;
  maxProgram: Scalars['Int']['input'];
  maxSingle: Scalars['Int']['input'];
  maxSports?: InputMaybe<Scalars['Int']['input']>;
  maxSportsGroup?: InputMaybe<Scalars['Int']['input']>;
  maxSportsSingle?: InputMaybe<Scalars['Int']['input']>;
  maxStage?: InputMaybe<Scalars['Int']['input']>;
  minGroup: Scalars['Int']['input'];
  minNonStage?: InputMaybe<Scalars['Int']['input']>;
  minOutDoor?: InputMaybe<Scalars['Int']['input']>;
  minProgram: Scalars['Int']['input'];
  minSingle: Scalars['Int']['input'];
  minSports?: InputMaybe<Scalars['Int']['input']>;
  minSportsGroup?: InputMaybe<Scalars['Int']['input']>;
  minSportsSingle?: InputMaybe<Scalars['Int']['input']>;
  minStage?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateCredentialInput = {
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  password: Scalars['String']['input'];
  roles: Roles;
  team?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type CreateCustomSettingInput = {
  category: Scalars['String']['input'];
  max: Scalars['Int']['input'];
  min: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  programs: Array<Scalars['String']['input']>;
};

export type CreateDetailInput = {
  coverId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  institution: Scalars['String']['input'];
  isMediaHave?: Scalars['Boolean']['input'];
  isSkillHave?: Scalars['Boolean']['input'];
  logoId: Scalars['String']['input'];
  motto: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateFeedInput = {
  content: Scalars['String']['input'];
  language: Language;
  name: Scalars['String']['input'];
};

export type CreateGradeInput = {
  name: Scalars['String']['input'];
  percentage: Scalars['Int']['input'];
  pointGroup: Scalars['Int']['input'];
  pointHouse: Scalars['Int']['input'];
  pointSingle: Scalars['Int']['input'];
};

export type CreateCandidatesInput = {
  inputs: Array<CreateCandidateInput>;
};

export type CreateJudgeInput = {
  judgeName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  programmeCode: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreatePositionInput = {
  name: Scalars['String']['input'];
  pointGroup: Scalars['Int']['input'];
  pointHouse: Scalars['Int']['input'];
  pointSingle: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};

export type CreateProgrammeInput = {
  candidateCount: Scalars['Int']['input'];
  category: Scalars['String']['input'];
  conceptNote: Scalars['String']['input'];
  date?: InputMaybe<Scalars['String']['input']>;
  duration: Scalars['Int']['input'];
  groupCount?: InputMaybe<Scalars['Int']['input']>;
  mode: Mode;
  model: Scalars['String']['input'];
  name: Scalars['String']['input'];
  programCode: Scalars['String']['input'];
  skill: Scalars['String']['input'];
  type: Type;
  venue?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateSchedule = {
  code: Scalars['String']['input'];
  date: Scalars['DateTime']['input'];
  venue?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateSectionInput = {
  name: Scalars['String']['input'];
};

export type CreateSkillInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  shortName: Scalars['String']['input'];
};

export type CreateSubstituteInput = {
  newCandidate: Scalars['String']['input'];
  oldCandidate: Scalars['String']['input'];
  programme: Scalars['String']['input'];
  reason: Scalars['String']['input'];
};

export type CreateTagInput = {
  name: Scalars['String']['input'];
};

export type CreateTeamInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  shortName: Scalars['String']['input'];
};

export type Credential = {
  __typename?: 'Credential';
  categories?: Maybe<Array<Category>>;
  id?: Maybe<Scalars['Int']['output']>;
  roles?: Maybe<Roles>;
  team?: Maybe<Team>;
  username?: Maybe<Scalars['String']['output']>;
};

export type CustomSetting = {
  __typename?: 'CustomSetting';
  category?: Maybe<Category>;
  /** Date of creation */
  createdAt: Scalars['DateTime']['output'];
  /** Example field (placeholder) */
  id: Scalars['Int']['output'];
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  programmes?: Maybe<Array<Programme>>;
  /** Date of last update */
  updatedAt: Scalars['DateTime']['output'];
};

export type Detail = {
  __typename?: 'Detail';
  coverId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  institution?: Maybe<Scalars['String']['output']>;
  isMediaHave: Scalars['Boolean']['output'];
  isMultipleResultAllowed: Scalars['Boolean']['output'];
  isResultReady: Scalars['Boolean']['output'];
  isSkillHave: Scalars['Boolean']['output'];
  logoId?: Maybe<Scalars['String']['output']>;
  motto?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Feed = {
  __typename?: 'Feed';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** Example field (placeholder) */
  id: Scalars['Int']['output'];
  language: Language;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Gallery = {
  __typename?: 'Gallery';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  imageId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tags?: Maybe<Array<Tag>>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type Grade = {
  __typename?: 'Grade';
  candidateProgramme?: Maybe<Array<CandidateProgramme>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  percentage?: Maybe<Scalars['Int']['output']>;
  pointGroup?: Maybe<Scalars['Int']['output']>;
  pointHouse?: Maybe<Scalars['Int']['output']>;
  pointSingle?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Judge = {
  __typename?: 'Judge';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  judgeName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  programme?: Maybe<Programme>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export enum Language {
  Arabic = 'ARABIC',
  Bengali = 'BENGALI',
  English = 'ENGLISH',
  French = 'FRENCH',
  Hindi = 'HINDI',
  Kannada = 'KANNADA',
  Malayalam = 'MALAYALAM',
  Spanish = 'SPANISH',
  Tamil = 'TAMIL',
  Telugu = 'TELUGU',
  Urdu = 'URDU'
}

export type LoginType = {
  __typename?: 'LoginType';
  admin: Credential;
  token: Scalars['String']['output'];
};

export enum Mode {
  NonStage = 'NON_STAGE',
  OutdoorStage = 'OUTDOOR_STAGE',
  Stage = 'STAGE'
}

export enum Models {
  Arts = 'Arts',
  Sports = 'Sports'
}

export enum Modes {
  NonStage = 'NON_STAGE',
  OutdoorStage = 'OUTDOOR_STAGE',
  Stage = 'STAGE'
}

export type Mutation = {
  __typename?: 'Mutation';
  addNormalResult: Array<CandidateProgramme>;
  approveJudgeResult: Array<CandidateProgramme>;
  approveSubstitute: Substitute;
  changeProgrammeListUpdatable: CategorySettings;
  createCandidate: Candidate;
  createCandidateProgramme: CandidateProgramme;
  createCategory: Category;
  createCategorySetting: CategorySettings;
  createCredential: Credential;
  createCustomSetting: CustomSetting;
  createDetail: Detail;
  createFeed: Feed;
  createGrade: Grade;
  createJudge: Judge;
  createManyCandidates: Array<Candidate>;
  createManyProgrammes: Array<Programme>;
  createPosition: Position;
  createProgramme: Programme;
  createSection: Section;
  createSkill: Skill;
  createSubstitute: Substitute;
  createTag: Tag;
  createTeam: Team;
  liveResult: Scalars['Int']['output'];
  login: LoginType;
  logout: Scalars['Boolean']['output'];
  publishResult: Programme;
  publishResults: Scalars['String']['output'];
  rejectSubstitute: Substitute;
  removeCandidate: Candidate;
  removeCandidateProgramme: CandidateProgramme;
  removeCategory: Category;
  removeCategorySetting: CategorySettings;
  removeCredential: Credential;
  removeCustomSetting: CustomSetting;
  removeFeed: Feed;
  removeGallery: Gallery;
  removeGrade: Grade;
  removeJudge: Judge;
  removePosition: Position;
  removeProgramme: Programme;
  removeSchedule: Programme;
  removeSection: Section;
  removeSkill: Skill;
  removeSubstitute: Substitute;
  removeTag: Tag;
  removeTeam: Team;
  setAnyIssue: Programme;
  setManySchedule: Array<Programme>;
  setSchedule: Programme;
  updateCandidate: Candidate;
  updateCandidateProgramme: CandidateProgramme;
  updateCategory: Category;
  updateCategorySetting: CategorySettings;
  updateCredential: Credential;
  updateCustomSetting: CustomSetting;
  updateDetail: Detail;
  updateFeed: Feed;
  updateGrade: Grade;
  updateJudge: Judge;
  updatePosition: Position;
  updateProgramme: Programme;
  updateSection: Section;
  updateSkill: Skill;
  updateSubstitute: Substitute;
  updateTag: Tag;
  updateTeam: Team;
  uploadMarkByJudge: Scalars['String']['output'];
};


export type MutationAddNormalResultArgs = {
  addResult: ArrayInput;
  programmeCode: Scalars['String']['input'];
};


export type MutationApproveJudgeResultArgs = {
  judgeName: Scalars['String']['input'];
  programmeCode: Scalars['String']['input'];
};


export type MutationApproveSubstituteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationChangeProgrammeListUpdatableArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateCandidateArgs = {
  createCandidateInput: CreateCandidateInput;
};


export type MutationCreateCandidateProgrammeArgs = {
  createCandidateProgrammeInput: CreateCandidateProgrammeInput;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreateCategorySettingArgs = {
  createCategorySettingInput: CreateCategorySettingInput;
};


export type MutationCreateCredentialArgs = {
  createCredentialInput: CreateCredentialInput;
};


export type MutationCreateCustomSettingArgs = {
  createCustomSettingInput: CreateCustomSettingInput;
};


export type MutationCreateDetailArgs = {
  createDetailInput: CreateDetailInput;
};


export type MutationCreateFeedArgs = {
  createFeedInput: CreateFeedInput;
};


export type MutationCreateGradeArgs = {
  createGradeInput: CreateGradeInput;
};


export type MutationCreateJudgeArgs = {
  createJudgeInput: CreateJudgeInput;
};


export type MutationCreateManyCandidatesArgs = {
  createCandidateInput: CreateCandidateInput;
};


export type MutationCreateManyProgrammesArgs = {
  createProgrammeInput: CreateProgrammeInput;
};


export type MutationCreatePositionArgs = {
  createPositionInput: CreatePositionInput;
};


export type MutationCreateProgrammeArgs = {
  createProgrammeInput: CreateProgrammeInput;
};


export type MutationCreateSectionArgs = {
  createSectionInput: CreateSectionInput;
};


export type MutationCreateSkillArgs = {
  createSkillInput: CreateSkillInput;
};


export type MutationCreateSubstituteArgs = {
  createSubstituteInput: CreateSubstituteInput;
};


export type MutationCreateTagArgs = {
  createTagInput: CreateTagInput;
};


export type MutationCreateTeamArgs = {
  createTeamInput: CreateTeamInput;
};


export type MutationLiveResultArgs = {
  programmeCode: Array<Scalars['String']['input']>;
  timeInSec: Scalars['Float']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationPublishResultArgs = {
  programmeCode: Scalars['String']['input'];
};


export type MutationPublishResultsArgs = {
  programmeCode: Array<Scalars['String']['input']>;
};


export type MutationRejectSubstituteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCandidateArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCandidateProgrammeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCategorySettingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCredentialArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCustomSettingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveFeedArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveGalleryArgs = {
  id: Scalars['Float']['input'];
};


export type MutationRemoveGradeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveJudgeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemovePositionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveProgrammeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveScheduleArgs = {
  code: Scalars['Int']['input'];
};


export type MutationRemoveSectionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveSkillArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveSubstituteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTagArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTeamArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSetAnyIssueArgs = {
  code: Scalars['String']['input'];
  issue: Scalars['Boolean']['input'];
};


export type MutationSetManyScheduleArgs = {
  createScheduleInput: Array<ScheduleCreate>;
};


export type MutationSetScheduleArgs = {
  createScheduleInput: CreateSchedule;
};


export type MutationUpdateCandidateArgs = {
  updateCandidateInput: UpdateCandidateInput;
};


export type MutationUpdateCandidateProgrammeArgs = {
  updateCandidateProgrammeInput: UpdateCandidateProgrammeInput;
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdateCategorySettingArgs = {
  updateCategorySettingInput: UpdateCategorySettingInput;
};


export type MutationUpdateCredentialArgs = {
  updateCredentialInput: UpdateCredentialInput;
};


export type MutationUpdateCustomSettingArgs = {
  updateCustomSettingInput: UpdateCustomSettingInput;
};


export type MutationUpdateDetailArgs = {
  updateDetailInput: UpdateDetailInput;
};


export type MutationUpdateFeedArgs = {
  updateFeedInput: UpdateFeedInput;
};


export type MutationUpdateGradeArgs = {
  updateGradeInput: UpdateGradeInput;
};


export type MutationUpdateJudgeArgs = {
  updateJudgeInput: UpdateJudgeInput;
};


export type MutationUpdatePositionArgs = {
  updatePositionInput: UpdatePositionInput;
};


export type MutationUpdateProgrammeArgs = {
  updateProgrammeInput: UpdateProgrammeInput;
};


export type MutationUpdateSectionArgs = {
  updateSectionInput: UpdateSectionInput;
};


export type MutationUpdateSkillArgs = {
  updateSkillInput: UpdateSkillInput;
};


export type MutationUpdateSubstituteArgs = {
  updateSubstituteInput: UpdateSubstituteInput;
};


export type MutationUpdateTagArgs = {
  updateTagInput: UpdateTagInput;
};


export type MutationUpdateTeamArgs = {
  updateTeamInput: UpdateTeamInput;
};


export type MutationUploadMarkByJudgeArgs = {
  addResult: ArrayInput;
  jugdeId: Scalars['Float']['input'];
  programmeCode: Scalars['String']['input'];
};

export type Position = {
  __typename?: 'Position';
  candidateProgramme?: Maybe<Array<CandidateProgramme>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pointGroup?: Maybe<Scalars['Int']['output']>;
  pointHouse?: Maybe<Scalars['Int']['output']>;
  pointSingle?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type Programme = {
  __typename?: 'Programme';
  anyIssue: Scalars['Boolean']['output'];
  candidateCount?: Maybe<Scalars['Int']['output']>;
  candidateProgramme?: Maybe<Array<CandidateProgramme>>;
  category?: Maybe<Category>;
  checkToReadNo?: Maybe<Scalars['Int']['output']>;
  conceptNote?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customSetting?: Maybe<CustomSetting>;
  date?: Maybe<Scalars['DateTime']['output']>;
  duration: Scalars['Int']['output'];
  groupCount?: Maybe<Scalars['Int']['output']>;
  /** Example field (placeholder) */
  id?: Maybe<Scalars['Int']['output']>;
  judges?: Maybe<Array<Judge>>;
  mode?: Maybe<Modes>;
  model?: Maybe<Models>;
  name?: Maybe<Scalars['String']['output']>;
  programCode?: Maybe<Scalars['String']['output']>;
  resultEntered: Scalars['Boolean']['output'];
  resultPublished: Scalars['Boolean']['output'];
  skill?: Maybe<Skill>;
  substitutes?: Maybe<Array<Substitute>>;
  totalMark?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Types>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  venue?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  candidate: Candidate;
  candidateProgramme: CandidateProgramme;
  candidateProgrammes: Array<CandidateProgramme>;
  candidates: Array<Candidate>;
  categories: Array<Category>;
  categoriesByNames: Array<Category>;
  category: Category;
  categorySetting: CategorySettings;
  categorySettings: Array<CategorySettings>;
  checkLoggedIn: Credential;
  credential: Credential;
  credentials: Array<Credential>;
  credentialsByRole: Array<Credential>;
  credentialsByTeam: Array<Credential>;
  customSetting: CustomSetting;
  customSettings: Array<CustomSetting>;
  details: Detail;
  feed: Feed;
  feeds: Array<Feed>;
  galleries: Array<Gallery>;
  gallery: Gallery;
  getCookieValue: Scalars['String']['output'];
  grade: Grade;
  grades: Array<Grade>;
  judge: Judge;
  judges: Array<Judge>;
  position: Position;
  positions: Array<Position>;
  programme: Programme;
  programmes: Array<Programme>;
  section: Section;
  sections: Array<Section>;
  skill: Skill;
  skills: Array<Skill>;
  substitute: Substitute;
  substitutes: Array<Substitute>;
  tag: Tag;
  tags: Array<Tag>;
  team: Team;
  teams: Array<Team>;
};


export type QueryCandidateArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCandidateProgrammeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCategorySettingArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCredentialArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCredentialsByRoleArgs = {
  role: Roles;
};


export type QueryCredentialsByTeamArgs = {
  team: Scalars['String']['input'];
};


export type QueryCustomSettingArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFeedArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGalleryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGradeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryJudgeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPositionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProgrammeArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySectionArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySkillArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySubstituteArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTagArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTeamArgs = {
  id: Scalars['Int']['input'];
};

export enum Roles {
  Admin = 'Admin',
  Controller = 'Controller',
  Judge = 'Judge',
  Media = 'Media',
  NormalUser = 'NormalUser',
  TeamManager = 'TeamManager'
}

export type ScheduleCreate = {
  inputs: Array<CreateSchedule>;
};

export type Section = {
  __typename?: 'Section';
  categories?: Maybe<Array<Category>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Skill = {
  __typename?: 'Skill';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  programmes?: Maybe<Array<Programme>>;
  shortName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Substitute = {
  __typename?: 'Substitute';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isAccepted?: Maybe<Scalars['Boolean']['output']>;
  isRejected?: Maybe<Scalars['Boolean']['output']>;
  newCandidate?: Maybe<Candidate>;
  oldCandidate?: Maybe<Candidate>;
  programme?: Maybe<Programme>;
  reason?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime']['output'];
  galleries: Array<Gallery>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Team = {
  __typename?: 'Team';
  GroupPoint?: Maybe<Scalars['Float']['output']>;
  HousePoint?: Maybe<Scalars['Float']['output']>;
  IndividualPoint?: Maybe<Scalars['Float']['output']>;
  candidates?: Maybe<Array<Candidate>>;
  chestNoSeries?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  credentials?: Maybe<Array<Credential>>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastResultPoint?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
  totalPoint?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum Type {
  Group = 'GROUP',
  House = 'HOUSE',
  Single = 'SINGLE'
}

export enum Types {
  Group = 'GROUP',
  House = 'HOUSE',
  Single = 'SINGLE'
}

export type UpdateCandidateInput = {
  adno?: InputMaybe<Scalars['Float']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  chestNO?: InputMaybe<Scalars['String']['input']>;
  class?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCandidateProgrammeInput = {
  candidatesOfGroup?: InputMaybe<Array<Scalars['String']['input']>>;
  chestNo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  programme_code?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategorySettingInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  maxGroup?: InputMaybe<Scalars['Int']['input']>;
  maxNonStage?: InputMaybe<Scalars['Int']['input']>;
  maxOutDoor?: InputMaybe<Scalars['Int']['input']>;
  maxProgram?: InputMaybe<Scalars['Int']['input']>;
  maxSingle?: InputMaybe<Scalars['Int']['input']>;
  maxSports?: InputMaybe<Scalars['Int']['input']>;
  maxSportsGroup?: InputMaybe<Scalars['Int']['input']>;
  maxSportsSingle?: InputMaybe<Scalars['Int']['input']>;
  maxStage?: InputMaybe<Scalars['Int']['input']>;
  minGroup?: InputMaybe<Scalars['Int']['input']>;
  minNonStage?: InputMaybe<Scalars['Int']['input']>;
  minOutDoor?: InputMaybe<Scalars['Int']['input']>;
  minProgram?: InputMaybe<Scalars['Int']['input']>;
  minSingle?: InputMaybe<Scalars['Int']['input']>;
  minSports?: InputMaybe<Scalars['Int']['input']>;
  minSportsGroup?: InputMaybe<Scalars['Int']['input']>;
  minSportsSingle?: InputMaybe<Scalars['Int']['input']>;
  minStage?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCredentialInput = {
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  id: Scalars['Int']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Roles>;
  team?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomSettingInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  programs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateDetailInput = {
  coverId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  institution?: InputMaybe<Scalars['String']['input']>;
  isMediaHave?: InputMaybe<Scalars['Boolean']['input']>;
  isSkillHave?: InputMaybe<Scalars['Boolean']['input']>;
  logoId?: InputMaybe<Scalars['String']['input']>;
  motto?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFeedInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  language?: InputMaybe<Language>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGradeInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  percentage?: InputMaybe<Scalars['Int']['input']>;
  pointGroup?: InputMaybe<Scalars['Int']['input']>;
  pointHouse?: InputMaybe<Scalars['Int']['input']>;
  pointSingle?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateJudgeInput = {
  id: Scalars['Int']['input'];
  judgeName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  programmeCode?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePositionInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  pointGroup?: InputMaybe<Scalars['Int']['input']>;
  pointHouse?: InputMaybe<Scalars['Int']['input']>;
  pointSingle?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateProgrammeInput = {
  candidateCount?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  conceptNote?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  groupCount?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  mode?: InputMaybe<Mode>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  programCode?: InputMaybe<Scalars['String']['input']>;
  skill?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Type>;
  venue?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSectionInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSkillInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  shortName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSubstituteInput = {
  id: Scalars['Int']['input'];
  newCandidate?: InputMaybe<Scalars['String']['input']>;
  oldCandidate?: InputMaybe<Scalars['String']['input']>;
  programme?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTagInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTeamInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  shortName?: InputMaybe<Scalars['String']['input']>;
};

export type ArrayInput = {
  inputs: Array<AddResult>;
};

export type CreateProgrammesInput = {
  inputs: Array<CreateProgrammeInput>;
};

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id?: number | null, name?: string | null }> };

export type GetOneCategoryQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetOneCategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', id?: number | null, name?: string | null, section?: { __typename?: 'Section', id?: number | null, name?: string | null } | null } };

export type AddCategoryMutationVariables = Exact<{
  name: Scalars['String']['input'];
  section: Scalars['String']['input'];
}>;


export type AddCategoryMutation = { __typename?: 'Mutation', createCategory: { __typename?: 'Category', id?: number | null, name?: string | null } };

export type EditCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  section: Scalars['String']['input'];
}>;


export type EditCategoryMutation = { __typename?: 'Mutation', updateCategory: { __typename?: 'Category', id?: number | null, name?: string | null } };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', removeCategory: { __typename: 'Category' } };

export type GetAllCredentialsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCredentialsQuery = { __typename?: 'Query', credentials: Array<{ __typename?: 'Credential', id?: number | null, username?: string | null, roles?: Roles | null }> };

export type GetOneCredentialQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetOneCredentialQuery = { __typename?: 'Query', credential: { __typename?: 'Credential', id?: number | null, username?: string | null, roles?: Roles | null, categories?: Array<{ __typename?: 'Category', name?: string | null, id?: number | null }> | null, team?: { __typename?: 'Team', name?: string | null, id?: number | null } | null } };

export type AddCredentialMutationVariables = Exact<{
  name: Scalars['String']['input'];
  categories: Array<Scalars['String']['input']> | Scalars['String']['input'];
  team: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roles: Roles;
}>;


export type AddCredentialMutation = { __typename?: 'Mutation', createCredential: { __typename?: 'Credential', id?: number | null, username?: string | null, roles?: Roles | null } };

export type EditCredentialMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  categories: Array<Scalars['String']['input']> | Scalars['String']['input'];
  team: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roles: Roles;
}>;


export type EditCredentialMutation = { __typename?: 'Mutation', updateCredential: { __typename?: 'Credential', id?: number | null, username?: string | null, roles?: Roles | null } };

export type DeleteCredentialMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCredentialMutation = { __typename?: 'Mutation', removeCredential: { __typename: 'Credential' } };

export type GetAllGradesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGradesQuery = { __typename?: 'Query', grades: Array<{ __typename?: 'Grade', id?: number | null, name?: string | null }> };

export type GetOneGradeQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetOneGradeQuery = { __typename?: 'Query', grade: { __typename?: 'Grade', id?: number | null, name?: string | null } };

export type AddGradeMutationVariables = Exact<{
  name: Scalars['String']['input'];
  percentage: Scalars['Int']['input'];
  pointGroup: Scalars['Int']['input'];
  pointHouse: Scalars['Int']['input'];
  pointSingle: Scalars['Int']['input'];
}>;


export type AddGradeMutation = { __typename?: 'Mutation', createGrade: { __typename?: 'Grade', id?: number | null, name?: string | null } };

export type EditGradeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  percentage: Scalars['Int']['input'];
  pointGroup: Scalars['Int']['input'];
  pointHouse: Scalars['Int']['input'];
  pointSingle: Scalars['Int']['input'];
}>;


export type EditGradeMutation = { __typename?: 'Mutation', updateGrade: { __typename?: 'Grade', id?: number | null, name?: string | null } };

export type DeleteGradeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteGradeMutation = { __typename?: 'Mutation', removeGrade: { __typename: 'Grade' } };

export type LoginUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginType', token: string, admin: { __typename?: 'Credential', username?: string | null, id?: number | null, roles?: Roles | null, categories?: Array<{ __typename?: 'Category', id?: number | null, name?: string | null }> | null, team?: { __typename?: 'Team', id?: number | null, name?: string | null } | null } } };

export type CheckLoggedInQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckLoggedInQuery = { __typename?: 'Query', checkLoggedIn: { __typename?: 'Credential', username?: string | null, id?: number | null, roles?: Roles | null, categories?: Array<{ __typename?: 'Category', id?: number | null, name?: string | null }> | null, team?: { __typename?: 'Team', id?: number | null, name?: string | null } | null } };

export type GetAdminsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminsQuery = { __typename?: 'Query', sections: Array<{ __typename?: 'Section', id?: number | null, name?: string | null }> };

export type GetAllPositionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPositionsQuery = { __typename?: 'Query', positions: Array<{ __typename?: 'Position', id?: number | null, name?: string | null }> };

export type GetOnePositionQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetOnePositionQuery = { __typename?: 'Query', position: { __typename?: 'Position', id?: number | null, name?: string | null, value?: number | null, pointGroup?: number | null, pointSingle?: number | null, pointHouse?: number | null } };

export type AddPositionMutationVariables = Exact<{
  name: Scalars['String']['input'];
  pointGroup: Scalars['Int']['input'];
  pointSingle: Scalars['Int']['input'];
  pointHouse: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
}>;


export type AddPositionMutation = { __typename?: 'Mutation', createPosition: { __typename?: 'Position', id?: number | null, name?: string | null } };

export type EditPositionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  pointGroup: Scalars['Int']['input'];
  pointSingle: Scalars['Int']['input'];
  pointHouse: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
}>;


export type EditPositionMutation = { __typename?: 'Mutation', updatePosition: { __typename?: 'Position', id?: number | null, name?: string | null } };

export type DeletePositionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeletePositionMutation = { __typename?: 'Mutation', removePosition: { __typename: 'Position' } };

export type GetAllSectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSectionsQuery = { __typename?: 'Query', sections: Array<{ __typename?: 'Section', id?: number | null, name?: string | null }> };

export type GetOneSectionQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetOneSectionQuery = { __typename?: 'Query', section: { __typename?: 'Section', id?: number | null, name?: string | null } };

export type AddSectionMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type AddSectionMutation = { __typename?: 'Mutation', createSection: { __typename?: 'Section', id?: number | null, name?: string | null } };

export type EditSectionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
}>;


export type EditSectionMutation = { __typename?: 'Mutation', updateSection: { __typename?: 'Section', id?: number | null, name?: string | null } };

export type DeleteSectionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteSectionMutation = { __typename?: 'Mutation', removeSection: { __typename: 'Section' } };

export type GetAllSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSkillsQuery = { __typename?: 'Query', skills: Array<{ __typename?: 'Skill', id?: number | null, name?: string | null }> };

export type GetOneSkillQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetOneSkillQuery = { __typename?: 'Query', skill: { __typename?: 'Skill', id?: number | null, name?: string | null, description?: string | null } };

export type AddSkillMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  shortName: Scalars['String']['input'];
}>;


export type AddSkillMutation = { __typename?: 'Mutation', createSkill: { __typename?: 'Skill', id?: number | null, name?: string | null } };

export type EditSkillMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  shortName: Scalars['String']['input'];
}>;


export type EditSkillMutation = { __typename?: 'Mutation', updateSkill: { __typename?: 'Skill', id?: number | null, name?: string | null } };

export type DeleteSkillMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteSkillMutation = { __typename?: 'Mutation', removeSkill: { __typename: 'Skill' } };

export type GetAllTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTeamsQuery = { __typename?: 'Query', teams: Array<{ __typename?: 'Team', id?: number | null, name?: string | null }> };

export type GetOneTeamQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetOneTeamQuery = { __typename?: 'Query', team: { __typename?: 'Team', id?: number | null, name?: string | null, description?: string | null, shortName?: string | null, totalPoint?: number | null } };

export type AddTeamMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  shortName: Scalars['String']['input'];
  color: Scalars['String']['input'];
}>;


export type AddTeamMutation = { __typename?: 'Mutation', createTeam: { __typename?: 'Team', id?: number | null, name?: string | null } };

export type EditTeamMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  shortName: Scalars['String']['input'];
  color: Scalars['String']['input'];
}>;


export type EditTeamMutation = { __typename?: 'Mutation', updateTeam: { __typename?: 'Team', id?: number | null, name?: string | null } };

export type DeleteTeamMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteTeamMutation = { __typename?: 'Mutation', removeTeam: { __typename: 'Team' } };


export const GetAllCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const GetOneCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOneCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetOneCategoryQuery, GetOneCategoryQueryVariables>;
export const AddCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"section"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCategoryInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"section"},"value":{"kind":"Variable","name":{"kind":"Name","value":"section"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AddCategoryMutation, AddCategoryMutationVariables>;
export const EditCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"section"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCategoryInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"section"},"value":{"kind":"Variable","name":{"kind":"Name","value":"section"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<EditCategoryMutation, EditCategoryMutationVariables>;
export const DeleteCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const GetAllCredentialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCredentials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"credentials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]} as unknown as DocumentNode<GetAllCredentialsQuery, GetAllCredentialsQueryVariables>;
export const GetOneCredentialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOneCredential"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"credential"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetOneCredentialQuery, GetOneCredentialQueryVariables>;
export const AddCredentialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCredential"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categories"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roles"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Roles"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCredential"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCredentialInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categories"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"team"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"roles"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roles"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]} as unknown as DocumentNode<AddCredentialMutation, AddCredentialMutationVariables>;
export const EditCredentialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditCredential"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categories"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roles"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Roles"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCredential"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCredentialInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categories"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"team"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"roles"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roles"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]} as unknown as DocumentNode<EditCredentialMutation, EditCredentialMutationVariables>;
export const DeleteCredentialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCredential"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCredential"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<DeleteCredentialMutation, DeleteCredentialMutationVariables>;
export const GetAllGradesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllGrades"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grades"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllGradesQuery, GetAllGradesQueryVariables>;
export const GetOneGradeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOneGrade"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetOneGradeQuery, GetOneGradeQueryVariables>;
export const AddGradeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddGrade"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"percentage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pointGroup"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pointHouse"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pointSingle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGrade"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createGradeInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"percentage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"percentage"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pointGroup"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pointGroup"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pointHouse"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pointHouse"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pointSingle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pointSingle"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AddGradeMutation, AddGradeMutationVariables>;
export const EditGradeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditGrade"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"percentage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pointGroup"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pointHouse"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pointSingle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateGrade"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateGradeInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"percentage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"percentage"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pointGroup"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pointGroup"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pointHouse"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pointHouse"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pointSingle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pointSingle"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<EditGradeMutation, EditGradeMutationVariables>;
export const DeleteGradeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteGrade"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeGrade"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<DeleteGradeMutation, DeleteGradeMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const CheckLoggedInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckLoggedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkLoggedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CheckLoggedInQuery, CheckLoggedInQueryVariables>;
export const GetAdminsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdmins"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAdminsQuery, GetAdminsQueryVariables>;
export const GetAllPositionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllPositionsQuery, GetAllPositionsQueryVariables>;
export const GetOnePositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOnePosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"pointGroup"}},{"kind":"Field","name":{"kind":"Name","value":"pointSingle"}},{"kind":"Field","name":{"kind":"Name","value":"pointHouse"}}]}}]}}]} as unknown as DocumentNode<GetOnePositionQuery, GetOnePositionQueryVariables>;
export const AddPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pointGroup"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pointSingle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pointHouse"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPositionInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pointGroup"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pointGroup"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pointSingle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pointSingle"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pointHouse"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pointHouse"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AddPositionMutation, AddPositionMutationVariables>;
export const EditPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pointGroup"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pointSingle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pointHouse"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updatePositionInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pointGroup"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pointGroup"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pointSingle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pointSingle"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pointHouse"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pointHouse"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<EditPositionMutation, EditPositionMutationVariables>;
export const DeletePositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removePosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<DeletePositionMutation, DeletePositionMutationVariables>;
export const GetAllSectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllSections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllSectionsQuery, GetAllSectionsQueryVariables>;
export const GetOneSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOneSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"section"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetOneSectionQuery, GetOneSectionQueryVariables>;
export const AddSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSectionInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AddSectionMutation, AddSectionMutationVariables>;
export const EditSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateSectionInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<EditSectionMutation, EditSectionMutationVariables>;
export const DeleteSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<DeleteSectionMutation, DeleteSectionMutationVariables>;
export const GetAllSkillsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllSkills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllSkillsQuery, GetAllSkillsQueryVariables>;
export const GetOneSkillDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOneSkill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetOneSkillQuery, GetOneSkillQueryVariables>;
export const AddSkillDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddSkill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shortName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSkill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSkillInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"shortName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shortName"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AddSkillMutation, AddSkillMutationVariables>;
export const EditSkillDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditSkill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shortName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSkill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateSkillInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"shortName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shortName"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<EditSkillMutation, EditSkillMutationVariables>;
export const DeleteSkillDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSkill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeSkill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<DeleteSkillMutation, DeleteSkillMutationVariables>;
export const GetAllTeamsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllTeamsQuery, GetAllTeamsQueryVariables>;
export const GetOneTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOneTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"totalPoint"}}]}}]}}]} as unknown as DocumentNode<GetOneTeamQuery, GetOneTeamQueryVariables>;
export const AddTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shortName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTeamInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"shortName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shortName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AddTeamMutation, AddTeamMutationVariables>;
export const EditTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shortName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateTeamInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"shortName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shortName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<EditTeamMutation, EditTeamMutationVariables>;
export const DeleteTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<DeleteTeamMutation, DeleteTeamMutationVariables>;

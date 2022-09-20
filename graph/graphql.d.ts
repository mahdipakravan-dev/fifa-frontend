import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateAccountDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateAccountOutputDto = {
  __typename?: 'CreateAccountOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateMatchInputDto = {
  awayTeamId: Scalars['String'];
  homeTeamId: Scalars['String'];
  locationName: Scalars['String'];
  stadiumName: Scalars['String'];
};

export type CreateMatchOutputDto = {
  __typename?: 'CreateMatchOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateTeamInputDto = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  awayTeam?: InputMaybe<Array<TeamInputType>>;
  description?: InputMaybe<Scalars['String']>;
  homeTeam?: InputMaybe<Array<TeamInputType>>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateTeamOutputDto = {
  __typename?: 'CreateTeamOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditAccountInputDto = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRole>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type EditAccountOutputDto = {
  __typename?: 'EditAccountOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type FindMatchInputDto = {
  awayTeam?: InputMaybe<TeamInputType>;
  homeTeam?: InputMaybe<TeamInputType>;
  locationName?: InputMaybe<Scalars['String']>;
  stadiumName?: InputMaybe<Scalars['String']>;
};

export type FindMatchOutputDto = {
  __typename?: 'FindMatchOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  pageNumber?: Maybe<Scalars['Float']>;
  results: Match;
  totalPages?: Maybe<Scalars['Float']>;
  totalResults?: Maybe<Scalars['Float']>;
};

export type FindMatchesInputDto = {
  awayTeam?: InputMaybe<TeamInputType>;
  homeTeam?: InputMaybe<TeamInputType>;
  locationName?: InputMaybe<Scalars['String']>;
  stadiumName?: InputMaybe<Scalars['String']>;
};

export type FindMatchesOutputDto = {
  __typename?: 'FindMatchesOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  pageNumber?: Maybe<Scalars['Float']>;
  results: Array<Match>;
  totalPages?: Maybe<Scalars['Float']>;
  totalResults?: Maybe<Scalars['Float']>;
};

export type FindTeamInputDto = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  awayTeam?: InputMaybe<Array<TeamInputType>>;
  description?: InputMaybe<Scalars['String']>;
  homeTeam?: InputMaybe<Array<TeamInputType>>;
  name?: InputMaybe<Scalars['String']>;
};

export type FindTeamOutputDto = {
  __typename?: 'FindTeamOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type LoginAccountDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutputDto = {
  __typename?: 'LoginOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Match = {
  __typename?: 'Match';
  awayTeam?: Maybe<Team>;
  homeTeam?: Maybe<Team>;
  locationName: Scalars['String'];
  stadiumName: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  account_edit: EditAccountOutputDto;
  account_login: LoginOutputDto;
  account_register: CreateAccountOutputDto;
  account_verify: VerifyAccountOutputDto;
  match_create: CreateMatchOutputDto;
  match_update: UpdateMatchOutputDto;
  team_create: CreateTeamOutputDto;
  team_update: UpdateTeamOutputDto;
};


export type MutationAccount_EditArgs = {
  input: EditAccountInputDto;
};


export type MutationAccount_LoginArgs = {
  input: LoginAccountDto;
};


export type MutationAccount_RegisterArgs = {
  input: CreateAccountDto;
};


export type MutationAccount_VerifyArgs = {
  input: VerifyAccountInputDto;
};


export type MutationMatch_CreateArgs = {
  input: CreateMatchInputDto;
};


export type MutationMatch_UpdateArgs = {
  input: UpdateMatchInputDto;
};


export type MutationTeam_CreateArgs = {
  input: CreateTeamInputDto;
};


export type MutationTeam_UpdateArgs = {
  input: UpdateTeamInputDto;
};

export type Query = {
  __typename?: 'Query';
  account: UserProfileOutputDto;
  match_read: FindMatchOutputDto;
  match_readMany: FindMatchesOutputDto;
  team_read: FindTeamOutputDto;
};


export type QueryAccountArgs = {
  userId: Scalars['Float'];
};


export type QueryMatch_ReadArgs = {
  input: FindMatchInputDto;
};


export type QueryMatch_ReadManyArgs = {
  input: FindMatchesInputDto;
};


export type QueryTeam_ReadArgs = {
  input: FindTeamInputDto;
};

export type Team = {
  __typename?: 'Team';
  avatarUrl: Scalars['String'];
  awayTeam: Array<Team>;
  description: Scalars['String'];
  homeTeam: Array<Team>;
  name: Scalars['String'];
};

export type TeamInputType = {
  avatarUrl: Scalars['String'];
  awayTeam: Array<TeamInputType>;
  description: Scalars['String'];
  homeTeam: Array<TeamInputType>;
  name: Scalars['String'];
};

export type UpdateMatchInputDto = {
  MatchId: Scalars['Float'];
  awayTeam?: InputMaybe<TeamInputType>;
  homeTeam?: InputMaybe<TeamInputType>;
  locationName?: InputMaybe<Scalars['String']>;
  stadiumName?: InputMaybe<Scalars['String']>;
};

export type UpdateMatchOutputDto = {
  __typename?: 'UpdateMatchOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateTeamInputDto = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  awayTeam?: InputMaybe<Array<TeamInputType>>;
  description?: InputMaybe<Scalars['String']>;
  homeTeam?: InputMaybe<Array<TeamInputType>>;
  name?: InputMaybe<Scalars['String']>;
  teamId: Scalars['Float'];
};

export type UpdateTeamOutputDto = {
  __typename?: 'UpdateTeamOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
  verified: Scalars['Boolean'];
};

export type UserProfileOutputDto = {
  __typename?: 'UserProfileOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export enum UserRole {
  Client = 'CLIENT'
}

export type VerifyAccountInputDto = {
  code: Scalars['String'];
};

export type VerifyAccountOutputDto = {
  __typename?: 'VerifyAccountOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

import { Ability } from "@casl/ability";

export enum Role {
    Example = "Example"
}

export type AppAbility = Ability<[string, string]>;

export type Permissions = Partial<Record<string, string>>;

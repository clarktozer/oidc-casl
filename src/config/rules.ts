import { Ability, AbilityBuilder } from "@casl/ability";
import { AppAbility, Role } from "./types";

export const defineRulesFor = (role: Role = Role.Example) => {
    const { can, build } = new AbilityBuilder<AppAbility>(Ability);

    switch (role) {
        case Role.Example:
            can("read", "somethingelse");
            break;
        default:
            can("read", "something");
            break;
    }

    return build();
};

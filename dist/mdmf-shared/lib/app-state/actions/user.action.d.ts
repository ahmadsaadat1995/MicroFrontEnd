import { User } from '../models/User';
/**
 * Action to add an user
 */
export declare class AddUser {
    payload: User;
    static readonly type = "[User] Add";
    constructor(payload: User);
}
/**
 * Action to remove an user
 */
export declare class RemoveUser {
    payload: User;
    static readonly type = "[User] Remove";
    constructor(payload: User);
}
//# sourceMappingURL=user.action.d.ts.map
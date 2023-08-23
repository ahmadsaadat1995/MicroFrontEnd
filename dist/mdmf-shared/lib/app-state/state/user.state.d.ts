import { StateContext } from '@ngxs/store';
import { User } from '../models/User';
import { AddUser } from '../actions/user.action';
import * as i0 from "@angular/core";
export declare class UserStateModel {
    users: User[];
}
/**
 * The UserState
 */
export declare class UserState {
    /**
     * Selector to get users from the application state
     * @param state: the application state
     */
    static getUsers(state: UserStateModel): User[];
    /**
     * Add an user to the application state
     *
     * @param param0: state context
     * @param param1: playload of AddUser action
     */
    add({ getState, patchState, setState }: StateContext<UserStateModel>, { payload }: AddUser): void;
    /**
     * Remove an user from the application state
     *
     * @param param0: state context
     * @param param1: playload of AddUser action
     */
    remove({ getState, setState }: StateContext<UserStateModel>, { payload }: AddUser): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserState>;
}
//# sourceMappingURL=user.state.d.ts.map
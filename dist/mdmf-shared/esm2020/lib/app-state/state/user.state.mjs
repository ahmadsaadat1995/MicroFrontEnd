import { __decorate } from "tslib";
import { State, Action, Selector } from '@ngxs/store';
import { AddUser, RemoveUser } from '../actions/user.action';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class UserStateModel {
}
/**
 * The UserState
 */
let UserState = class UserState {
    /**
     * Selector to get users from the application state
     * @param state: the application state
     */
    static getUsers(state) {
        return state.users;
    }
    /**
     * Add an user to the application state
     *
     * @param param0: state context
     * @param param1: playload of AddUser action
     */
    add({ getState, patchState, setState }, { payload }) {
        const state = getState();
        if (state && state.users) {
            patchState({
                users: [...state.users, payload],
            });
        }
        else {
            setState({
                users: [payload],
            });
        }
    }
    /**
     * Remove an user from the application state
     *
     * @param param0: state context
     * @param param1: playload of AddUser action
     */
    remove({ getState, setState }, { payload }) {
        const state = getState();
        if (state && state.users) {
            setState({
                users: state.users.filter(u => !(u.email === payload.email && u.name === payload.name)),
            });
        }
    }
};
UserState.ɵfac = function UserState_Factory(t) { return new (t || UserState)(); };
UserState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UserState, factory: UserState.ɵfac });
__decorate([
    Action(AddUser)
], UserState.prototype, "add", null);
__decorate([
    Action(RemoveUser)
], UserState.prototype, "remove", null);
__decorate([
    Selector()
], UserState, "getUsers", null);
UserState = __decorate([
    State({
        name: 'users',
        defaults: {
            users: [],
        },
    })
], UserState);
export { UserState };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserState, [{
        type: Injectable
    }], null, { add: [], remove: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21kbWYtc2hhcmVkL3NyYy9saWIvYXBwLXN0YXRlL3N0YXRlL3VzZXIuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFnQixRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUFNLE9BQU8sY0FBYztDQUUxQjtBQUVEOztHQUVHO0FBUUksSUFBTSxTQUFTLEdBQWYsTUFBTSxTQUFTO0lBQ3BCOzs7T0FHRztJQUVJLEFBQVAsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFxQjtRQUNuQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7OztPQUtHO0lBRUgsR0FBRyxDQUNELEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWdDLEVBQ2hFLEVBQUUsT0FBTyxFQUFXO1FBRXBCLE1BQU0sS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDeEIsVUFBVSxDQUFDO2dCQUNULEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7YUFDakMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLFFBQVEsQ0FBQztnQkFDUCxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUM7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFFSCxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFnQyxFQUFFLEVBQUUsT0FBTyxFQUFXO1FBQy9FLE1BQU0sS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDeEIsUUFBUSxDQUFDO2dCQUNQLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEYsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztrRUEvQ1UsU0FBUzsrREFBVCxTQUFTLFdBQVQsU0FBUztBQWlCcEI7SUFEQyxNQUFNLENBQUMsT0FBTyxDQUFDO29DQWVmO0FBU0Q7SUFEQyxNQUFNLENBQUMsVUFBVSxDQUFDO3VDQVFsQjtBQXpDTTtJQUROLFFBQVEsRUFBRTsrQkFHVjtBQVJVLFNBQVM7SUFQckIsS0FBSyxDQUFpQjtRQUNyQixJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1NBQ1Y7S0FDRixDQUFDO0dBRVcsU0FBUyxDQWdEckI7U0FoRFksU0FBUzt1RkFBVCxTQUFTO2NBRHJCLFVBQVU7Z0JBa0JULEdBQUcsTUF1QkgsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlLCBBY3Rpb24sIFN0YXRlQ29udGV4dCwgU2VsZWN0b3IgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvVXNlcic7XHJcbmltcG9ydCB7IEFkZFVzZXIsIFJlbW92ZVVzZXIgfSBmcm9tICcuLi9hY3Rpb25zL3VzZXIuYWN0aW9uJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJTdGF0ZU1vZGVsIHtcclxuICB1c2VyczogVXNlcltdO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIFVzZXJTdGF0ZVxyXG4gKi9cclxuQFN0YXRlPFVzZXJTdGF0ZU1vZGVsPih7XHJcbiAgbmFtZTogJ3VzZXJzJyxcclxuICBkZWZhdWx0czoge1xyXG4gICAgdXNlcnM6IFtdLFxyXG4gIH0sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTdGF0ZSB7XHJcbiAgLyoqXHJcbiAgICogU2VsZWN0b3IgdG8gZ2V0IHVzZXJzIGZyb20gdGhlIGFwcGxpY2F0aW9uIHN0YXRlXHJcbiAgICogQHBhcmFtIHN0YXRlOiB0aGUgYXBwbGljYXRpb24gc3RhdGVcclxuICAgKi9cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRVc2VycyhzdGF0ZTogVXNlclN0YXRlTW9kZWwpOiBVc2VyW10ge1xyXG4gICAgcmV0dXJuIHN0YXRlLnVzZXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGFuIHVzZXIgdG8gdGhlIGFwcGxpY2F0aW9uIHN0YXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcGFyYW0wOiBzdGF0ZSBjb250ZXh0XHJcbiAgICogQHBhcmFtIHBhcmFtMTogcGxheWxvYWQgb2YgQWRkVXNlciBhY3Rpb25cclxuICAgKi9cclxuICBAQWN0aW9uKEFkZFVzZXIpXHJcbiAgYWRkKFxyXG4gICAgeyBnZXRTdGF0ZSwgcGF0Y2hTdGF0ZSwgc2V0U3RhdGUgfTogU3RhdGVDb250ZXh0PFVzZXJTdGF0ZU1vZGVsPixcclxuICAgIHsgcGF5bG9hZCB9OiBBZGRVc2VyLFxyXG4gICk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgaWYgKHN0YXRlICYmIHN0YXRlLnVzZXJzKSB7XHJcbiAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgIHVzZXJzOiBbLi4uc3RhdGUudXNlcnMsIHBheWxvYWRdLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICB1c2VyczogW3BheWxvYWRdLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhbiB1c2VyIGZyb20gdGhlIGFwcGxpY2F0aW9uIHN0YXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcGFyYW0wOiBzdGF0ZSBjb250ZXh0XHJcbiAgICogQHBhcmFtIHBhcmFtMTogcGxheWxvYWQgb2YgQWRkVXNlciBhY3Rpb25cclxuICAgKi9cclxuICBAQWN0aW9uKFJlbW92ZVVzZXIpXHJcbiAgcmVtb3ZlKHsgZ2V0U3RhdGUsIHNldFN0YXRlIH06IFN0YXRlQ29udGV4dDxVc2VyU3RhdGVNb2RlbD4sIHsgcGF5bG9hZCB9OiBBZGRVc2VyKTogdm9pZCB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICBpZiAoc3RhdGUgJiYgc3RhdGUudXNlcnMpIHtcclxuICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgIHVzZXJzOiBzdGF0ZS51c2Vycy5maWx0ZXIodSA9PiAhKHUuZW1haWwgPT09IHBheWxvYWQuZW1haWwgJiYgdS5uYW1lID09PSBwYXlsb2FkLm5hbWUpKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
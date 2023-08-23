import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __decorate } from 'tslib';
import { Action, Selector, State } from '@ngxs/store';

class MdmfSharedService {
    constructor() { }
}
MdmfSharedService.ɵfac = function MdmfSharedService_Factory(t) { return new (t || MdmfSharedService)(); };
MdmfSharedService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MdmfSharedService, factory: MdmfSharedService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdmfSharedService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], function () { return []; }, null);
})();

class MdmfSharedComponent {
    constructor() { }
    ngOnInit() { }
}
MdmfSharedComponent.ɵfac = function MdmfSharedComponent_Factory(t) { return new (t || MdmfSharedComponent)(); };
MdmfSharedComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MdmfSharedComponent, selectors: [["lib-mdmf-shared"]], decls: 4, vars: 0, template: function MdmfSharedComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "h2");
            i0.ɵɵtext(1, "Component from shared module");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3, " mdmf-shared works!\n");
            i0.ɵɵelementEnd();
        }
    }, styles: ["h2[_ngcontent-%COMP%]{color:#5f9ea0;background-color:#ff0}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdmfSharedComponent, [{
            type: Component,
            args: [{ selector: 'lib-mdmf-shared', template: "<h2>Component from shared module</h2>\r\n<p>\r\n    mdmf-shared works!\r\n</p>\r\n    \r\n    \r\n", styles: ["h2{color:#5f9ea0;background-color:#ff0}\n"] }]
        }], function () { return []; }, null);
})();

class MdmfSharedModule {
}
MdmfSharedModule.ɵfac = function MdmfSharedModule_Factory(t) { return new (t || MdmfSharedModule)(); };
MdmfSharedModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MdmfSharedModule });
MdmfSharedModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdmfSharedModule, [{
            type: NgModule,
            args: [{
                    // declarations: [MdmfSharedComponent, ListUserComponent],
                    declarations: [MdmfSharedComponent],
                    imports: [CommonModule],
                    // exports: [MdmfSharedComponent, ListUserComponent]
                    exports: [MdmfSharedComponent],
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MdmfSharedModule, { declarations: [MdmfSharedComponent], imports: [CommonModule], exports: [MdmfSharedComponent] }); })();

/**
 * Action to add an user
 */
class AddUser {
    constructor(payload) {
        this.payload = payload;
    }
}
AddUser.type = '[User] Add';
/**
 * Action to remove an user
 */
class RemoveUser {
    constructor(payload) {
        this.payload = payload;
    }
}
RemoveUser.type = '[User] Remove';

class UserStateModel {
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
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserState, [{
            type: Injectable
        }], null, { add: [], remove: [] });
})();

/*
 * Public API Surface of mdmf-shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AddUser, MdmfSharedComponent, MdmfSharedModule, MdmfSharedService, RemoveUser, UserState, UserStateModel };
//# sourceMappingURL=mdmf-shared.mjs.map
//# sourceMappingURL=mdmf-shared.mjs.map

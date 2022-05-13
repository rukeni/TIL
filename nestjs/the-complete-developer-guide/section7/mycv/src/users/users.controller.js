"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UsersController = void 0;
var common_1 = require("@nestjs/common");
var UsersController = /** @class */ (function () {
    function UsersController(usersService) {
        this.usersService = usersService;
    }
    UsersController.prototype.createUser = function (body) {
        this.usersService.create(body.email, body.password);
    };
    UsersController.prototype.findUser = function (id) {
        return this.usersService.findOne(parseInt(id));
    };
    UsersController.prototype.findAllUsers = function (email) {
        return this.usersService.find(email);
    };
    __decorate([
        (0, common_1.Post)('/signup'),
        __param(0, (0, common_1.Body)())
    ], UsersController.prototype, "createUser");
    __decorate([
        (0, common_1.Get)('/:id'),
        __param(0, (0, common_1.Param)('id'))
    ], UsersController.prototype, "findUser");
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)('email'))
    ], UsersController.prototype, "findAllUsers");
    UsersController = __decorate([
        (0, common_1.Controller)('auth')
    ], UsersController);
    return UsersController;
}());
exports.UsersController = UsersController;

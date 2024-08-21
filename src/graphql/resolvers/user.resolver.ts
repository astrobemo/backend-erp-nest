import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from 'src/modules/user/user.service';
import { UserType } from '../types/user.type';

@Resolver(of => UserType)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [UserType])
    async users() {
        return this.userService.findAll();
    }

    /* @Mutation(() => UserType)
    async createUser(
        @Args('name') name: string,
        @Args('email') email: string,
        @Args('password') password: string
    ) {
        return this.userService.create(name, email, password);
    } */
}
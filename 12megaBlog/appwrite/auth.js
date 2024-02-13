import conf from '../conf/conf'

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }
// SIGNUP FUNCTIONALITY 
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call another method
                return this.logIn({email, password});
            }else{
                return userAccount
            } 

        } catch (error) {
            throw error;
        }
    }
// LOGIN FUNCTIONALITY 
    async logIn({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }

        return null;
    }

// LOGOUT FUNCTIONALITY 
    async logOut(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }

    }
}
const authService = new AuthService();
export default authService;

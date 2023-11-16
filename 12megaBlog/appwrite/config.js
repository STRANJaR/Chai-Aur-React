// import { Service } from "appwrite/types/service";
import conf from "../conf/conf";
import { Client , ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client                                         
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    };

// CREATE POST 
    async createPost({title, slug, content, feturedImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    feturedImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error;
        }
    }

// UPDATE POST 
    async updatePost(slug, {title,content, feturedImage, status }){
        try {
             return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    feturedImage,
                    status
                }
             )
        } catch (error) {
            throw error;
            
        }


    
    }
    
// DELETE POST 
    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;

        } catch (error) {
            throw error;
            return false
        }
    }


    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;

        } catch (error) {
            throw error
            return false
        }
    }


    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            throw error;
            return false
        }
    }

    // File Upload Service  
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file 
            )
        } catch (error) {
            throw error;
            return false
        }

    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
              conf.appwriteBucketId,
              fileId    
            )
            return true

        } catch (error) {
            throw error
            return false 
        }
    }

     previewFile(fileId){
         try {
            return this.bucket.getFilePreview(
                conf.appwriteUrl,
                fileId
            )
            return true

         } catch (error) {
            throw error;
            return false
         }
    }
}

const service = new Service()
export default service
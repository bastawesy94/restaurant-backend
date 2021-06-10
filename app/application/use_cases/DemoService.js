'use strict';

module.exports = class{
    constructor({repoInstance}){
        this.repo = repoInstance;
    }
    getAll(){
         return this.repo.getAllMobileUsers()
    }
}
'use strict';

module.exports = async(req,res , {demoInstance})=>{
    // constructor(demoInstance){
    //     this.demo = demoInstance
    //     this.getAll = this.getAll.bind(this);
    // }
        return this.demoInstance.getAll().then((result)=>{
            res.send(result)
        })
}
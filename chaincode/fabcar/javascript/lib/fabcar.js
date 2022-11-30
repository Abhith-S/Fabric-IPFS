/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {

    //3 function
    //initLedger
    //writeData
    //readData

    async initLedger(ctx){
        await ctx.stub.putState("test", "hello world")
        return "success"
    }

    async writeData(ctx, key, value){
        await ctx.stub.putState(key,value)
        return value;
    }

    async readData(ctx, key){
        var response = await ctx.stub.getState(key)
        return response.toString()
    }
    
}

module.exports = FabCar;

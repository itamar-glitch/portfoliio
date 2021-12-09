class userdata {
    constructor(query, queryString, tour) {
        this.queryString = queryString
        this.tour = tour
        this.resume = null
        // query=this.tour.find()
    }
    findresume = async (res, req, options) => {
        resume = await this.tour.find(options)
        this.resume = JSON.parse(resume)
    }
    // filter() {
    //     const queryObj = { ...this.queryString }
    //     const excludedFields = ['page', 'sort', 'limit', 'fields'];
    //     //==========================================================================================
    //     // excludedFields.forEach(el => delete queryObj[el])
    //     queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    //     let queryStr = JSON.stringify(queryObj);
    //     this.query = this.query.find(JSON.parse(queryStr))
    //     //==========================================================================================
    //     excludedFields.forEach(el => delete queryObj[el])




    //     return this
    // }

}
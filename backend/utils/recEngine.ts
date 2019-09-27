/* tslint:disable */
declare var require: any;
const raccoon = require('raccoon');

// SECTION Global Configuration
raccoon.config.nearestNeighbors = 5; // number of neighbors you want to compare a user against
raccoon.config.className = 'project'; // prefix for your items (used for redis)
raccoon.config.numOfRecsStore = 30; // number of recommendations to store per user

/**
 * Like a project
 * @param {string} userId
 * @param {string} projectId
 */
export const likeProject = async (userId, projectId) => {
    await raccoon.liked(userId, projectId);
    console.log(`${userId} likes project ${projectId}`);
};

/**
 * Unlike a project
 * @param {string} userId
 * @param {string} projectId
 */
export const unlikeProject = async (userId, projectId) => {
    await raccoon.unliked(userId, projectId);
    console.log(`${userId} likes project ${projectId}`);
};

/**
 * returns a ranked sorted array of projectIds which represent the top recommendations for the userId
 * @param {string} userId
 * @param {int} numberOfRecs - number + 1 of recommended projects you want to get
 */
export const getRecommendation = async (userId, numberOfRecs = 10) => {
    const res = await raccoon.recommendFor(userId, numberOfRecs);
    return res;
};

/**
 * returns an array of the 'similarityZSet' ranked sorted set for the user which
   represents their ranked similarity to all other users given the
   Jaccard Coefficient. the value is between -1 and 1. -1 means that the
   user is the exact opposite, 1 means they're exactly the same.
   ex. results = ['garyId', 'andrewId', 'jakeId']
 * @param {string} userId
 */
export const getSimilarUsers = async userId => {
    const res = await raccoon.mostSimilarUsers(userId);
    return res;
};
